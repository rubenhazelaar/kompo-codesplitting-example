webpackJsonp([0],{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kompo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kompo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_kompo__);

const { construct, getRouter, react } = __WEBPACK_IMPORTED_MODULE_0_kompo___default.a;
const { swap } = __WEBPACK_IMPORTED_MODULE_0_kompo__["router"];

/* harmony default export */ __webpack_exports__["default"] = construct('div', function ({ heading }) {
    this.setAttribute('data-type', 'Branch');

    // Create Elements
    const h2 = document.createElement('h2');
    h2.textContent = heading;

    // Append children
    this.appendChild(h2);

    const r = getRouter(this);
    react(this, () => {
        console.log("LEVEL TWO SWAP");
        swap(this, r);
    });
}, {
    heading: 'Branch construct'
});

/***/ })

});