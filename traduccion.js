import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor'

export const traducir = function traducir (key) {
  return key
}

if (Meteor.isClient) {
  Template.registerHelper('_', traducir)
}
