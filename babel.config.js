module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@entities': './src/domain/entities',
        '@providers': './src/providers',
        '@repositories': './src/domain/interfaces/repositories',
        '@useCases': './src/useCases',
        '@config': './src/config',
        '@dto': './src/domain/interfaces/useCases',
        '@implementations': './src/domain/repositories',
        '@routers': './src/presentation/routers'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
