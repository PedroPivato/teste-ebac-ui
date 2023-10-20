const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'iqmeyn',
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/'
  },
  // Outras configurações do Cypress
  video: false, // Isso habilitará a gravação de vídeos
})
