"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = createTask;
exports.deleteTask = deleteTask;
exports.getOneTask = getOneTask;
exports.getTask = getTask;
exports.getTasksByProject = getTasksByProject;
exports.updateTasks = updateTasks;

var _Projects = _interopRequireDefault(require("../models/Projects"));

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createTask(_x, _x2) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, done, projectId, newTask;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectId = _req$body.projectId;
            _context.prev = 1;
            _context.next = 4;
            return _Tasks["default"].create({
              name: name,
              done: done,
              projectId: projectId
            }, {
              fields: ['name', 'done', 'projectId'] ///datos que necesito pasar para crear una tarea

            });

          case 4:
            newTask = _context.sent;

            if (newTask) {
              res.json({
                message: 'New task created',
                data: newTask
              });
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createTask.apply(this, arguments);
}

function getTask(_x3, _x4) {
  return _getTask.apply(this, arguments);
}

function _getTask() {
  _getTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Tasks["default"].findAll({
              attributes: ['id', 'projectId', 'name', 'done'],
              order: [['id', 'DESC']]
            });

          case 3:
            tasks = _context2.sent;

            if (tasks) {
              res.json({
                data: tasks
              });
            }

            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getTask.apply(this, arguments);
}

function getOneTask(_x5, _x6) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Tasks["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            task = _context3.sent;

            if (task) {
              res.json(task);
            }

            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getOneTask.apply(this, arguments);
}

function deleteTask(_x7, _x8) {
  return _deleteTask.apply(this, arguments);
}

function _deleteTask() {
  _deleteTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Tasks["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            task = _context4.sent;

            if (task != 0) {
              res.json({
                message: 'tasks delete'
              });
            }

            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteTask.apply(this, arguments);
}

function updateTasks(_x9, _x10) {
  return _updateTasks.apply(this, arguments);
}

function _updateTasks() {
  _updateTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, projectId, name, done, task, uptateTask;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, projectId = _req$body2.projectId, name = _req$body2.name, done = _req$body2.done;
            _context5.prev = 2;
            _context5.next = 5;
            return _Tasks["default"].findOne({
              attributes: ['name', 'projectId', 'done', 'id'],
              where: {
                id: id
              }
            });

          case 5:
            task = _context5.sent;
            _context5.next = 8;
            return _Tasks["default"].update({
              projectId: projectId,
              name: name,
              done: done
            }, {
              where: {
                id: id
              }
            });

          case 8:
            uptateTask = _context5.sent;
            res.json(uptateTask);
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 12]]);
  }));
  return _updateTasks.apply(this, arguments);
}

function getTasksByProject(_x11, _x12) {
  return _getTasksByProject.apply(this, arguments);
}

function _getTasksByProject() {
  _getTasksByProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var projectId, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projectId = req.params.projectId;
            _context6.prev = 1;
            _context6.next = 4;
            return _Tasks["default"].findAll({
              attributes: ['name'],
              //los atributo que quiero enviar
              where: {
                projectId: projectId
              }
            });

          case 4:
            tasks = _context6.sent;
            res.json({
              data: tasks
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _getTasksByProject.apply(this, arguments);
}