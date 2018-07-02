module.exports = function(config) {
  config.set({
    basePath: '',

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine',
      'karma-typescript'
    ],

    // files: [
    //   'node_modules/angular/angular.js',
    //   'node_modules/angular-mocks/angular-mocks.js',
    //   'build/compiled/src/**/*.js',
    //   'build/compiled/test/**/*.js'
    // ],
    files: [
      {pattern: 'src/**/*.ts'},
      {pattern: 'test/**/*.ts'}
    ],


    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: {},
    preprocessors: {
      // 'src/**/*.ts': ['karma-typescript'],
      'test/*.ts': ['karma-typescript']
    },


    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'karma-typescript'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly']/*,
      fixWebpackSourcePaths: true*/
    },

    // port: 9876,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-*'/*,
        'karma-mocha-reporter'*/
    ],

    // customLaunchers: {
    //   android: {
    //     base: 'NS',
    //     platform: 'android'
    //   },
    //   ios: {
    //     base: 'NS',
    //     platform: 'ios'
    //   },
    //   ios_simulator: {
    //     base: 'NS',
    //     platform: 'ios',
    //     arguments: ['--emulator']
    //   }
    // },

    singleRun: true,
    concurrency: Infinity,
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    }
  });
};
