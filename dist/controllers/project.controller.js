"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProject = createProject;
exports.deleteProject = deleteProject;
exports.getOneProject = getOneProject;
exports.getProject = getProject;
exports.updateProject = updateProject;

var _Projects = _interopRequireDefault(require("../models/Projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProject(_x, _x2) {
  return _getProject.apply(this, arguments);
}

function _getProject() {
  _getProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Projects["default"].findAll();

          case 3:
            projects = _context.sent;
            res.json({
              data: projects
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(400).json({
              message: "not found"
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getProject.apply(this, arguments);
}

function getOneProject(_x3, _x4) {
  return _getOneProject.apply(this, arguments);
}

function _getOneProject() {
  _getOneProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, project;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Projects["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            project = _context2.sent;

            if (project != null) {
              res.json(project);
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(400).json({
              message: "not found"
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getOneProject.apply(this, arguments);
}

function createProject(_x5, _x6) {
  return _createProject.apply(this, arguments);
}

function _createProject() {
  _createProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, prioriry, description, deliverydate, newProject;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //lo que recibo en el body de la peticion
            _req$body = req.body, name = _req$body.name, prioriry = _req$body.prioriry, description = _req$body.description, deliverydate = _req$body.deliverydate;
            console.log(req.body);
            _context3.prev = 2;
            _context3.next = 5;
            return _Projects["default"].create({
              name: name,
              prioriry: prioriry,
              description: description,
              deliverydate: deliverydate
            });

          case 5:
            newProject = _context3.sent;

            if (!newProject) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Project created successfully',
              data: newProject
            }));

          case 8:
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));
  return _createProject.apply(this, arguments);
}

function deleteProject(_x7, _x8) {
  return _deleteProject.apply(this, arguments);
}

function _deleteProject() {
  _deleteProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Projects["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;

            if (deleteRowCount != 0) {
              res.json({
                message: 'Project delete successfully',
                count: deleteRowCount
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
  return _deleteProject.apply(this, arguments);
}

function updateProject(_x9, _x10) {
  return _updateProject.apply(this, arguments);
}

function _updateProject() {
  _updateProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, prioriry, description, deliverydate, projects;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, prioriry = _req$body2.prioriry, description = _req$body2.description, deliverydate = _req$body2.deliverydate;
            _context6.prev = 2;
            _context6.next = 5;
            return _Projects["default"].findAll({
              attributes: ['id', 'name', 'prioriry', 'description', 'deliverydate'],
              where: {
                id: id
              }
            });

          case 5:
            projects = _context6.sent;

            if (projects.length > 0) {
              console.log('existe');
              projects.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(project) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return project.update({
                            name: name,
                            prioriry: prioriry,
                            description: description,
                            deliverydate: deliverydate
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Project update succesfully',
              data: projects
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _updateProject.apply(this, arguments);
}