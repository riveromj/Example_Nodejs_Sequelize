"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Projects = _interopRequireDefault(require("./Projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Task = _database.sequelize.define('tasks', {
  id: {
    type: _sequelize["default"].INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  done: {
    type: _sequelize["default"].BOOLEAN
  },
  projectId: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
}); //relaciones
//un proyecto tiene muchas tareas


_Projects["default"].hasMany(Task, {
  foreingKey: 'projectId',
  sourceKey: 'id'
}); //muchas tareas pero pertecen a un solo proyecto


Task.belongsTo(_Projects["default"], {
  foreingKey: 'projectId',
  sourceKey: 'id'
});
var _default = Task;
exports["default"] = _default;