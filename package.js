Package.describe({
  name: 'harrison:papa-parse',
  summary: 'A powerful, in-browser CSV parser for big boys and girls',
  git: 'https://github.com/harrisonhunter/papa-parse-meteor.git',
  version: '1.1.3'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@2.0");
  api.use("jquery");
  api.addFiles('papa-parse.js', 'client');
  api.addFiles('baby-parse.js', 'server');
  api.export('Papa', ['server', 'client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('harrison:papa-parse');
  api.addFiles('papa-parse-tests.js', 'client');
  api.addFiles('baby-parse-tests.js', 'server');
  api.export('Papa',  ['server', 'client']);
});
