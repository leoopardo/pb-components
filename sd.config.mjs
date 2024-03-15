import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary);

function getStyleDictionaryConfig(theme) {
  return {
    source: [
      'tokens/brand/typography.json',
      'tokens/brand/color/scheme.json',
      'tokens/color/default/config.json',
      'tokens/color/default/config.json',
      'tokens/global/primitive.json',
      'tokens/global/semantic.json',
      `tokens/brand/color/theme/${theme}.json`,
      'tokens/components/*.json',
    ],
    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        buildPath: `styles/`,
        files: [
          {
            destination: `${theme}.css`,
            format: 'css/variables',
          },
        ],
      },
      json: {
        transformGroup: 'tokens-studio',
        buildPath: `styles/json/`,
        files: [
          {
            destination: `${theme}.json`,
            format: 'json/nested',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['light', 'dark'].forEach(function(theme) {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${theme}]`);

  const sd = StyleDictionary.extend(getStyleDictionaryConfig(theme));

  sd.buildAllPlatforms();

  console.log('\nEnd processing');
  console.log(`\nProcessing: [${theme}]`);
});

console.log('\n==============================================');
console.log('\nBuild completed!');
