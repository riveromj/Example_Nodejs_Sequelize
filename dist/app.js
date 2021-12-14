"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _projects = _interopRequireDefault(require("./routes/projects"));

var _tasks = _interopRequireDefault(require("./routes/tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import Routes
var app = (0, _express["default"])(); //configurar el servidor  middleware

app.use((0, _morgan["default"])('dev')); //mostrat por consola

app.use(_express["default"].json()); //entender formato json
//Routes siempre van debajo de los middleware

app.use('/api/projects', _projects["default"]);
app.use('/api/tasks', _tasks["default"]);
var _default = app;
exports["default"] = _default;