module.exports = {
  levels: [
    {
      layer: 'common',
      path: 'src/Components/common'
    },
    {
      layer: 'desktop',
      path: 'src/Components/desktop'
    },
    {
      layer: 'touch',
      path: 'src/Components/touch'
    }
  ].map(level => Object.assign({
    schemeOptions: 'react',
    naming: 'react',
    scheme: 'nested' }, level)
  ),
  // remove sets to build one universal bundle for index.html
  sets: {
    desktop: 'common desktop',
    touch: 'common touch'
  },
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: {
            'src/Components/common': { default: true }
          },
          techs: ['tsx', 'css'],
          templates: {
            tsx: '.bem/templates/tsx.js'
          }
        }
      }
    }
  }
}
