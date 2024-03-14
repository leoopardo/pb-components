import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { promises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

registerTransforms(StyleDictionary, {
  /* options here if needed */
});

async function run() {
  const $themes = JSON.parse(await promises.readFile('./tokens/$themes.json', 'utf-8'));
  const configs = [];

  // Função para gerar caminho completo dos arquivos de entrada
  function getSourceFilePath(category, tokenset, filename) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    return path.join(__dirname, 'tokens', category, tokenset, `${filename}.json`);
  }

  // Função para filtrar arquivos de configuração disponíveis para um tema
  function filterAvailableConfigs(category, tokensets) {
    return tokensets
      .filter(tokenset => {
        const filePath = getSourceFilePath(category, tokenset, 'config');
        return promises.access(filePath)
          .then(() => true)
          .catch(() => false);
      });
  }

  // Montar configurações para cada tema
  $themes.forEach(theme => {
    const themeConfigs = Object.entries(theme.selectedTokenSets)
      .flatMap(([category, tokensets]) => {
        const availableConfigs = filterAvailableConfigs(category, Object.keys(tokensets));
        return availableConfigs.map(tokenset => ({
          source: [getSourceFilePath(category, tokenset, 'config')],
          platforms: {
            css: {
              transformGroup: 'tokens-studio',
              files: [
                {
                  destination: `vars-${theme.name}-${category}-${tokenset}.css`,
                  format: 'css/variables',
                },
              ],
            },
          },
        }));
      });
    configs.push(...themeConfigs);
  });
  // Executar a construção para todas as configurações
  configs.forEach(cfg => {
    const sd = StyleDictionary.extend(cfg);
    sd.cleanAllPlatforms(); // Opcionalmente, limpar os arquivos antes da construção
    sd.buildAllPlatforms();
  });
}

run();
