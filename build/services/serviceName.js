"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameService = void 0;

var _repository = require("respositories/repository");

class NameService {
  static getName() {
    return _repository.NameRepository.getTableName("name");
  }

}

exports.NameService = NameService;