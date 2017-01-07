test('multiple sizes', () => {
  const multi = require('../../lib/index?sizes[]=500&sizes[]=2000!../cat-1000.jpg');
  expect(multi).toMatchSnapshot();
  expect(multi.toString()).toBe(multi.src);
});

test('single size', () => {
  const single = require('../../lib/index?size=500!../cat-1000.jpg');
  expect(single).toMatchSnapshot();
});

test('with size defined in webpack.config.js', () => {
  const multi = require('../../lib/index!../cat-1000.jpg');
  expect(multi).toMatchSnapshot();
});

test('output should be relative to context', () => {
  const multi = require('../../lib/index?name=[path][hash]-[width].&context=./!../cat-1000.jpg');
  expect(multi).toMatchSnapshot();
});

test('with placeholder image', () => {
  const output = require('../../lib/index?placeholder=true!../cat-1000.jpg');
  expect(output).toMatchSnapshot();
});

test('output first resized image height & width', () => {
  const output = require('../../lib/index?size=500!../cat-1000.jpg');
  expect(output).toMatchSnapshot();
});

test('png', () => {
  const output = require('../../lib/index!../cat-transparent.png');
  expect(output).toMatchSnapshot();
});

test('png to jpeg with background color', () => {
  const output = require('../../lib/index?background=#FF0000&ext=jpg!../cat-transparent.png');
  expect(output).toMatchSnapshot();
});
