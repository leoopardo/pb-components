import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

// Registro de transformadores personalizados para converter tamanhos em pixels
registerTransforms(StyleDictionary);

StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  transitive: true,
  matcher: function (prop) {
    return (
      ['spacing', 'size'].includes(prop.type) && !`${prop.value}`.includes('px')
    );
  },
  transformer: function (prop) {
    console.log(`${prop.value}`.split(' '));
    return `${prop.value}`.split(' ').join('px ') + 'px';
  },
});


function getStyleDictionaryConfig(theme) {
  return {
    source: [
      'tokens/global/primitive.json',
      'tokens/global/semantic.json',
      'tokens/config/paybrokers.json',
      'tokens/config/test.json',
      'tokens/brand/typography.json',
      'tokens/brand/color/scheme.json',
      `tokens/brand/color/theme/${theme}.json`,
      'tokens/components/*.json',
    ],

    platforms: {
      json: {
        transforms: [
          'ts/resolveMath',
          'size/px',
          'ts/color/modifiers',
          'ts/border/css/shorthand',
          'ts/shadow/css/shorthand',
        ],
        transformGroup: 'tokens-studio',
        buildPath: `src/styles/json/`,
        files: [
          {
            destination: `${theme}.json`,
            format: 'json/nested',
          },
        ],
      },
    },
  };
}

console.log('Build started...');

// PROCESSAMENTO DOS TOKENS DE DESIGN PARA AS DIFERENTES MARCAS E PLATAFORMAS
['light', 'dark'].forEach(function (theme) {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${theme}]`);

  const sd = StyleDictionary.extend(getStyleDictionaryConfig(theme));

  sd.buildAllPlatforms();

  console.log('\nEnd processing');
  console.log(`\nProcessing: [${theme}]`);
});

console.log('\n==============================================');
console.log('\nBuild completed!');
