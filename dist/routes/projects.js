"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var router = (0, _express.Router)(); // ****** /api/project     ****////

router.post('/', _project.createProject);
router.get('/', _project.getProject);
router.get('/:id', _project.getOneProject);
router["delete"]('/:id', _project.deleteProject);
router.put('/:id', _project.updateProject);
var _default = router;
exports["default"] = _default;