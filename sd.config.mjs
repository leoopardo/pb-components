import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary);

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
      // css: {
      //   transformGroup: 'tokens-studio',
      //   buildPath: `src/styles/`,
      //   files: [
      //     {
      //       destination: `${theme}.css`,
      //       format: 'css/variables',
      //     },
      //   ],
      // },
      json: {
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
