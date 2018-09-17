/* global Package */

Package.describe({
  name: 'hacknlove:traduccion',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Traducción de textos estáticos y dinámicos',
  // URL to the Git repository containing the source code for this package.
  git: 'git@hacknlove.github.com:hacknlove/meteor-traduccion.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.7.0.5')
  api.use('ecmascript')
  api.use('templating@1.0.0', 'client')
  api.mainModule('traduccion.js')
})
