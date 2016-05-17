var appRoot = 'src/';
var outputRoot = 'wwwroot/dist/';
var webRoot = 'wwwroot/';
var exportSrvRoot = 'wwwroot/export/';
var nodeModules = 'node_modules/'

module.exports = {
  root: appRoot,
  source: [
      appRoot + '**/!(*.test).js',
      '!' + appRoot + 'form/viewer{,/**}',
      //appRoot + '!form/{viewer,viewer/**}',
      //appRoot + '!form/viewer/**/*.js',
  ],
  formViewer: [
      appRoot + 'form/viewer/**/*.js'
  ],
  atalasoft: [
    'Atalasoft/**/*.js'
  ],
  html: appRoot + '**/*.html',
  svg: appRoot + '**/*.svg',
  css: appRoot + '**/*.css',
  sass: [
        appRoot + '**/*.scss',
        'scss/**/*.scss',
        'wwwroot/Atalasoft/**/*.scss'
  ],
  style: 'styles/**/*.css',
  output: outputRoot,
  webRoot: webRoot,
  nodeModules: nodeModules,
  exportSrv: exportSrvRoot,
  docs: './docs',
};
