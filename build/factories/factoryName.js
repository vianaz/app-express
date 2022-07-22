"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameFactory = void 0;

var _database = _interopRequireDefault(require("../db/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NameFactory {
  constructor(table) {
    this.query = _database.default[table];
  }

}

exports.NameFactory = NameFactory;