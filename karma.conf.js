// Karma configuration
// Generated on Sun Nov 29 2015 18:36:39 GMT+1100 (AUS Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
		'src/main/webapp/js/angular.js',
        'src/main/webapp/js/ui-bootstrap-tpls-2.3.1.min.js',
		'src/main/webapp/js/jquery*.js',
		'src/main/webapp/js/bootstrap.js',
		'src/test/js/angular-mocks.js',
		'src/main/webapp/js/abbot.js',
		'src/main/webapp/js/dialog.js',
		'src/main/webapp/js/listcontroller.js',
		'src/main/webapp/js/racecontroller.js',
		'src/main/webapp/js/utils.js',
		'src/test/js/listcontrollertest.js',
		'src/test/js/dialogtest.js',
		'src/test/js/racecontrollertest.js',
		'src/test/js/utilstest.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
