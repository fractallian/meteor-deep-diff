Package.describe({
  summary: 'deep-diff repackaged for meteor'
});

Package.on_use(function (api, where) {
  api.use(['underscore'], ['client', 'server']);
  api.add_files(['lib/diff/index.js', 'deep-diff.js'], ['client', 'server']);

  if (typeof api.export !== 'undefined') {
    // api.export('Model', ['client', 'server']);
    api.export('DeepDiff', ['client', 'server']);
  }
});

Package.on_test(function (api) {
  api.use(['graviton', 'tinytest', 'test-helpers']);

  api.add_files('lib/diff/test/tests.js', ['client', 'server']);
});


