'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var App = new Schema({
  isHttps: Boolean,
  domain: {
    type: String,
    required: true
  },
  path: {
    type: String
  },
  favicon: {
    type: String
  },
  title: {
    type: String
  }
});
App.index({
  isHttps: 1,
  domain: 1,
  path: 1
}, {
  unique: true
});
var model = _mongoose2.default.model('app', App);

exports.default = model;