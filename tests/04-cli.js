const test = require('tape');
const fs = require('fs');

const originalEnvVar = process.env.toast;

if (fs.existsSync('.env')) {
  fs.copyFileSync('.env', '.env.BAK');
}

test('CLI usage', function (t) {
  process.env.toast = undefined;
  fs.writeFileSync('.env', 'toast=kaya');

  require('../lib').config;

  t.equal(process.env.toast, 'kaya', 'Requiring nvar/config sets process.env.');

  t.end();
});

test.onFinish(function () {
  process.env.toast = originalEnvVar;

  if (fs.existsSync('.env.BAK')) {
    fs.renameSync('.env.BAK', '.env');
  }
});