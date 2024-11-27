module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/contexts': './src/contexts',
          '@/hooks': './src/hooks',
          '@/libs': './src/libs',
          '@/models': './src/models',
          '@/routes': './src/routes',
          '@/screens': './src/screens',
          '@/services': './src/services',
          '@/store': './src/store',
          '@/theme': './src/theme',
          '@/utils': './src/utils',
        },
      },
    ],
  ],
};
