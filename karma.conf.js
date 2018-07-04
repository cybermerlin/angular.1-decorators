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
      'src/**/*.ts',
      'test/**/*.ts'
    ],

    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'src/**/*.ts': ['karma-typescript'],
      '**/*.ts': 'karma-typescript'
    },

    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'karma-typescript', 'spec'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly']
    },

    // port: 9876,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['PhantomJS'],
    browsers: [/*'Chrome', */'MyChromeHeadless'],

    customLaunchers: {
      MyChromeHeadless: {
        base: 'ChromeHeadless',
        flags: [
          '--disable-gpu',
          '--disable-translate',
          '--disable-extensions',
          // '--no-sandbox',
          '--remote-debugging-port=9223'
        ]
      }
    },

    plugins: [
      // 'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-*'
      // '@angular/cli/plugins/karma' // for angular.6
      /*,
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
    },

    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    }
  });
};
