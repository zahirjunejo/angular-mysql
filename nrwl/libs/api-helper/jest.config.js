module.exports = {
  name: 'api-helper',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/api-helper',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
