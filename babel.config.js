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
        '@infra': './src/infra',
        '@config': './src/config',
        '@providers': './src/providers',
        '@entities': './src/domain/entities',
        '@useCases': './src/domain/useCases',
        '@repositories': './src/domain/repositories',
        '@interfaces': './src/domain/interfaces',
        '@routers': './src/presentation/routers'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
