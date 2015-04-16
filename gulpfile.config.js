'use strict';
var GulpConfig = (function() {
  function GulpConfig() {
    //Got tired of scrolling through all the comments so removed them
    //Don't hurt me AC :-)
    this.source = './src/';
    this.sourceApp = this.source + 'ts';

    this.tsOutputPath = this.source + '/js1';
    this.allJavaScript = [this.source + '/js1/**/*.js'];
    this.allTypeScript = this.sourceApp + '/**/*.ts';

    this.typings = './tools/typings/';
    this.libraryTypeScriptDefinitions = './tools/typings/**/*.ts';
    this.appTypeScriptReferences = this.typings + 'typescriptApp.d.ts';
  }
  return GulpConfig;
})();
module.exports = GulpConfig;