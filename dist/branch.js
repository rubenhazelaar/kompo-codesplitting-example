webpackJsonp([0],{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kompo = __webpack_require__(1);

var _kompo2 = _interopRequireDefault(_kompo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var construct = _kompo2.default.construct,
    getRouter = _kompo2.default.getRouter,
    react = _kompo2.default.react;
var swap = _kompo.router.swap;
exports.default = construct('div', function (_ref) {
    var _this = this;

    var heading = _ref.heading;

    this.setAttribute('data-type', 'Branch');

    // Create Elements
    var h2 = document.createElement('h2');
    h2.textContent = heading;

    // Append children
    this.appendChild(h2);

    var r = getRouter(this);
    react(this, function () {
        console.log("LEVEL TWO SWAP");
        swap(_this, r);
    });
}, {
    heading: 'Branch construct'
});

/***/ })

});