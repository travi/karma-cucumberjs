var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initKarmaCucumber = function(files) {
    if (!window.__karma__.loaded) {
        window.__karma__.loaded = function () {};
    }
    
  files.unshift(createPattern(__dirname + '/adapter.js'));
};

initKarmaCucumber.$inject = ['config.files'];

module.exports = {
  'framework:cucumberjs': ['factory', initKarmaCucumber]
};
