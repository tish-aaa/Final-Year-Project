const path = require('path');

module.exports = {
  resolver: {
    sourceExts: ['js', 'jsx'],  // Include your specific extensions
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders: [path.resolve(__dirname, 'node_modules')],
};
