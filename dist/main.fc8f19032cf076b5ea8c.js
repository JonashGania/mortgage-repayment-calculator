/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family:
    "Plus Jakarta Sans",
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
}
:root {
  --lime: hsl(61, 70%, 52%);
  --Red: hsl(4, 69%, 50%);
  --White: hsl(0, 0%, 100%);
  --Slate100: hsl(203, 87%, 94%);
  --Slate300: hsl(203, 41%, 72%);
  --Slate500: hsl(200, 26%, 54%);
  --Slate700: hsl(200, 24%, 40%);
  --Slate900: hsl(202, 55%, 16%);
}
body {
  min-height: 100vh;
  width: 100%;
  background-color: var(--Slate100);
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.container {
  background-color: var(--White);
  max-width: 950px;
  width: 100%;
  min-height: 500px;
  box-shadow: 0px 5px 10px 3px #d5ecfa;
  border-radius: 20px;
  display: flex;
}
.calculator-container,
.results-container {
  width: 50%;
  padding: 2rem 2rem;
}

.results-container {
  background-color: var(--Slate900);
  border-radius: 0px 20px 20px 15%;
}
.calculator-container-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.calculator-container-heading h2 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--Slate900);
}
.clear-all {
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--Slate700);
  font-size: 0.9rem;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}
form {
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
.amount-wrapper,
.mortgage-term-wrapper,
.interest-rate-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.input-wrapper {
  width: 100%;
  border: 1px solid var(--Slate700);
  display: flex;
  border-radius: 5px;
}
label,
.mortgage-type-wrapper h3 {
  color: var(--Slate700);
  font-size: 0.9rem;
  font-weight: 400;
}
input[type="text"] {
  border: none;
  outline: none;
  padding: 0.7rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--Slate900);
  width: 100%;
  background-color: transparent;
}
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #f0f0f0;
  border: 1px solid var(--Slate700);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
}
input[type="radio"]:checked {
  background-color: white;
  border-color: var(--lime);
}
input[type="radio"]:checked::after {
  content: "";
  display: block;
  width: 9px;
  height: 9px;
  background-color: var(--lime);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
}
.input-sign {
  padding: 0.7rem;
  font-weight: 600;
  background-color: var(--Slate100);
  border-radius: 3px 0px 0px 3px;
}
.term-sign,
.rate-sign {
  border-radius: 0px 3px 3px 0px;
}
.term-interest-wrapper {
  display: flex;
  gap: 1rem;
}
.mortgage-term-wrapper,
.interest-rate-wrapper {
  width: 50%;
}
.mortgage-type-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.repayment-wrapper,
.interest-only-wrapper {
  width: 100%;
  border: 1px solid var(--Slate700);
  display: flex;
  border-radius: 5px;
  padding: 0.7rem;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.repayment-wrapper:hover,
.interest-only-wrapper:hover {
  border: 1px solid rgba(215, 218, 47, 0.7);
}
.repayment-span,
.interest-only-span {
  font-weight: 700;
  color: var(--Slate900);
}
.calculate-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 0.5rem;
  max-width: 300px;
  width: 100%;
  border-radius: 30px;
  background-color: var(--lime);
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
}
.calculate-btn:hover {
  background-color: rgba(215, 218, 47, 0.7);
}
.calculate-btn span {
  font-weight: 700;
  color: var(--Slate900);
}
.empty-results-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
}
.empty-results-container h3 {
  color: var(--White);
  text-align: center;
  padding-top: 1rem;
}
.empty-results-container p {
  color: var(--Slate300);
  padding-top: 1rem;
  font-weight: 300;
  font-size: 0.9rem;
  text-align: center;
}
.results-container-wrapper h2 {
  color: var(--Slate100);
  font-weight: 500;
  font-size: 1.2rem;
  padding-bottom: 1rem;
}
.results-container-wrapper p {
  color: var(--Slate300);
  font-weight: 300;
  font-size: 0.9rem;
  padding-bottom: 2.5rem;
}
.result-card-container {
  width: 100%;
  background-color: #0d212c;
  border-radius: 10px;
  padding: 1.5rem;
  border-top: 3px solid var(--lime);
}
.monthly-repayment-results {
  border-bottom: 1px solid var(--Slate700);
}
.total-repayment-results {
  padding-top: 1.5rem;
}
.monthly-repayment-results span {
  color: var(--Slate300);
  font-weight: 300;
  font-size: 0.9rem;
}
.total-repayment-results span {
  color: var(--Slate300);
  font-weight: 300;
  font-size: 0.9rem;
}
.monthly-repayments {
  color: var(--lime);
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  font-size: 3rem;
}
.total-repayments {
  color: var(--White);
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  font-size: 1.3rem;
}
.term-error,
.amount-error,
.rate-error,
.morg-type-error {
  font-size: 0.8rem;
  color: var(--Red);
  font-weight: 500;
}

@media (max-width: 700px) {
  .container {
    flex-wrap: wrap;
  }
  .calculator-container,
  .results-container {
    width: 100%;
  }
  .results-container {
    border-radius: 0px;
  }
}

@media (max-width: 500px) {
  .calculator-container,
  .results-container {
    padding: 1rem 1rem;
  }
  .calculator-container-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.3rem;
  }
  .term-interest-wrapper {
    flex-wrap: wrap;
  }
  .mortgage-term-wrapper,
  .interest-rate-wrapper {
    width: 100%;
  }
  form {
    gap: 1rem;
    padding-top: 1.5rem;
  }
  .calculate-btn {
    max-width: 100%;
    width: 100%;
    margin-top: 0.5rem;
  }
  .monthly-repayments {
    font-size: 2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB;;;;;;;;;;;;cAYY;AACd;AACA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,yBAAyB;EACzB,8BAA8B;EAC9B,8BAA8B;EAC9B,8BAA8B;EAC9B,8BAA8B;EAC9B,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,oCAAoC;EACpC,mBAAmB;EACnB,aAAa;AACf;AACA;;EAEE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;AACxB;AACA;EACE,6BAA6B;EAC7B,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;EACjB,0BAA0B;EAC1B,0BAA0B;EAC1B,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;AACA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,WAAW;EACX,iCAAiC;EACjC,aAAa;EACb,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;EACX,6BAA6B;AAC/B;AACA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;EACrB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,iCAAiC;EACjC,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,uBAAuB;EACvB,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,cAAc;EACd,UAAU;EACV,WAAW;EACX,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iCAAiC;EACjC,8BAA8B;AAChC;AACA;;EAEE,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;;EAEE,UAAU;AACZ;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;AACA;;EAEE,WAAW;EACX,iCAAiC;EACjC,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,yBAAyB;AAC3B;AACA;;EAEE,yCAAyC;AAC3C;AACA;;EAEE,gBAAgB;EAChB,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,sBAAsB;EACtB,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,gBAAgB;EAChB,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;EACf,iCAAiC;AACnC;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;AACnB;AACA;;;;EAIE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE;IACE,eAAe;EACjB;EACA;;IAEE,WAAW;EACb;EACA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;;IAEE,kBAAkB;EACpB;EACA;IACE,uBAAuB;IACvB,sBAAsB;IACtB,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;;IAEE,WAAW;EACb;EACA;IACE,SAAS;IACT,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,WAAW;IACX,kBAAkB;EACpB;EACA;IACE,eAAe;EACjB;AACF","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family:\r\n    \"Plus Jakarta Sans\",\r\n    system-ui,\r\n    -apple-system,\r\n    BlinkMacSystemFont,\r\n    \"Segoe UI\",\r\n    Roboto,\r\n    Oxygen,\r\n    Ubuntu,\r\n    Cantarell,\r\n    \"Open Sans\",\r\n    \"Helvetica Neue\",\r\n    sans-serif;\r\n}\r\n:root {\r\n  --lime: hsl(61, 70%, 52%);\r\n  --Red: hsl(4, 69%, 50%);\r\n  --White: hsl(0, 0%, 100%);\r\n  --Slate100: hsl(203, 87%, 94%);\r\n  --Slate300: hsl(203, 41%, 72%);\r\n  --Slate500: hsl(200, 26%, 54%);\r\n  --Slate700: hsl(200, 24%, 40%);\r\n  --Slate900: hsl(202, 55%, 16%);\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  background-color: var(--Slate100);\r\n}\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n}\r\n.container {\r\n  background-color: var(--White);\r\n  max-width: 950px;\r\n  width: 100%;\r\n  min-height: 500px;\r\n  box-shadow: 0px 5px 10px 3px #d5ecfa;\r\n  border-radius: 20px;\r\n  display: flex;\r\n}\r\n.calculator-container,\r\n.results-container {\r\n  width: 50%;\r\n  padding: 2rem 2rem;\r\n}\r\n\r\n.results-container {\r\n  background-color: var(--Slate900);\r\n  border-radius: 0px 20px 20px 15%;\r\n}\r\n.calculator-container-heading {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.calculator-container-heading h2 {\r\n  font-size: 1.3rem;\r\n  font-weight: 700;\r\n  color: var(--Slate900);\r\n}\r\n.clear-all {\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n  color: var(--Slate700);\r\n  font-size: 0.9rem;\r\n  text-decoration: underline;\r\n  text-underline-offset: 3px;\r\n  cursor: pointer;\r\n}\r\nform {\r\n  padding-top: 3rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.6rem;\r\n}\r\n.amount-wrapper,\r\n.mortgage-term-wrapper,\r\n.interest-rate-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.8rem;\r\n}\r\n.input-wrapper {\r\n  width: 100%;\r\n  border: 1px solid var(--Slate700);\r\n  display: flex;\r\n  border-radius: 5px;\r\n}\r\nlabel,\r\n.mortgage-type-wrapper h3 {\r\n  color: var(--Slate700);\r\n  font-size: 0.9rem;\r\n  font-weight: 400;\r\n}\r\ninput[type=\"text\"] {\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.7rem;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  color: var(--Slate900);\r\n  width: 100%;\r\n  background-color: transparent;\r\n}\r\ninput[type=\"radio\"] {\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background-color: #f0f0f0;\r\n  border: 1px solid var(--Slate700);\r\n  border-radius: 50%;\r\n  position: relative;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n}\r\ninput[type=\"radio\"]:checked {\r\n  background-color: white;\r\n  border-color: var(--lime);\r\n}\r\ninput[type=\"radio\"]:checked::after {\r\n  content: \"\";\r\n  display: block;\r\n  width: 9px;\r\n  height: 9px;\r\n  background-color: var(--lime);\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n}\r\n.input-sign {\r\n  padding: 0.7rem;\r\n  font-weight: 600;\r\n  background-color: var(--Slate100);\r\n  border-radius: 3px 0px 0px 3px;\r\n}\r\n.term-sign,\r\n.rate-sign {\r\n  border-radius: 0px 3px 3px 0px;\r\n}\r\n.term-interest-wrapper {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n.mortgage-term-wrapper,\r\n.interest-rate-wrapper {\r\n  width: 50%;\r\n}\r\n.mortgage-type-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n.repayment-wrapper,\r\n.interest-only-wrapper {\r\n  width: 100%;\r\n  border: 1px solid var(--Slate700);\r\n  display: flex;\r\n  border-radius: 5px;\r\n  padding: 0.7rem;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n}\r\n.repayment-wrapper:hover,\r\n.interest-only-wrapper:hover {\r\n  border: 1px solid rgba(215, 218, 47, 0.7);\r\n}\r\n.repayment-span,\r\n.interest-only-span {\r\n  font-weight: 700;\r\n  color: var(--Slate900);\r\n}\r\n.calculate-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  padding: 0.7rem 0.5rem;\r\n  max-width: 300px;\r\n  width: 100%;\r\n  border-radius: 30px;\r\n  background-color: var(--lime);\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  margin-top: 1rem;\r\n  transition: all 0.3s ease;\r\n}\r\n.calculate-btn:hover {\r\n  background-color: rgba(215, 218, 47, 0.7);\r\n}\r\n.calculate-btn span {\r\n  font-weight: 700;\r\n  color: var(--Slate900);\r\n}\r\n.empty-results-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  flex-direction: column;\r\n}\r\n.empty-results-container h3 {\r\n  color: var(--White);\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n}\r\n.empty-results-container p {\r\n  color: var(--Slate300);\r\n  padding-top: 1rem;\r\n  font-weight: 300;\r\n  font-size: 0.9rem;\r\n  text-align: center;\r\n}\r\n.results-container-wrapper h2 {\r\n  color: var(--Slate100);\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  padding-bottom: 1rem;\r\n}\r\n.results-container-wrapper p {\r\n  color: var(--Slate300);\r\n  font-weight: 300;\r\n  font-size: 0.9rem;\r\n  padding-bottom: 2.5rem;\r\n}\r\n.result-card-container {\r\n  width: 100%;\r\n  background-color: #0d212c;\r\n  border-radius: 10px;\r\n  padding: 1.5rem;\r\n  border-top: 3px solid var(--lime);\r\n}\r\n.monthly-repayment-results {\r\n  border-bottom: 1px solid var(--Slate700);\r\n}\r\n.total-repayment-results {\r\n  padding-top: 1.5rem;\r\n}\r\n.monthly-repayment-results span {\r\n  color: var(--Slate300);\r\n  font-weight: 300;\r\n  font-size: 0.9rem;\r\n}\r\n.total-repayment-results span {\r\n  color: var(--Slate300);\r\n  font-weight: 300;\r\n  font-size: 0.9rem;\r\n}\r\n.monthly-repayments {\r\n  color: var(--lime);\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 1.5rem;\r\n  font-size: 3rem;\r\n}\r\n.total-repayments {\r\n  color: var(--White);\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 1rem;\r\n  font-size: 1.3rem;\r\n}\r\n.term-error,\r\n.amount-error,\r\n.rate-error,\r\n.morg-type-error {\r\n  font-size: 0.8rem;\r\n  color: var(--Red);\r\n  font-weight: 500;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .container {\r\n    flex-wrap: wrap;\r\n  }\r\n  .calculator-container,\r\n  .results-container {\r\n    width: 100%;\r\n  }\r\n  .results-container {\r\n    border-radius: 0px;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .calculator-container,\r\n  .results-container {\r\n    padding: 1rem 1rem;\r\n  }\r\n  .calculator-container-heading {\r\n    align-items: flex-start;\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n  }\r\n  .term-interest-wrapper {\r\n    flex-wrap: wrap;\r\n  }\r\n  .mortgage-term-wrapper,\r\n  .interest-rate-wrapper {\r\n    width: 100%;\r\n  }\r\n  form {\r\n    gap: 1rem;\r\n    padding-top: 1.5rem;\r\n  }\r\n  .calculate-btn {\r\n    max-width: 100%;\r\n    width: 100%;\r\n    margin-top: 0.5rem;\r\n  }\r\n  .monthly-repayments {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/displayResults.js":
/*!******************************************!*\
  !*** ./src/components/displayResults.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resultsCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resultsCard */ "./src/components/resultsCard.js");


const displayResults = (monthlyRepay, totalRepay) => {
  const resultsContainer = document.querySelector(".results-container");
  const resultsWrapper = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const resultCard = (0,_resultsCard__WEBPACK_IMPORTED_MODULE_0__["default"])(monthlyRepay, totalRepay);

  resultsContainer.innerHTML = "";
  resultsWrapper.classList.add("results-container-wrapper");

  h2.textContent = "Your Results";
  p.textContent =
    'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.';

  resultsWrapper.appendChild(h2);
  resultsWrapper.appendChild(p);
  resultsWrapper.appendChild(resultCard);
  resultsContainer.appendChild(resultsWrapper);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayResults);


/***/ }),

/***/ "./src/components/eventHandlers.js":
/*!*****************************************!*\
  !*** ./src/components/eventHandlers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventHandlers: () => (/* binding */ eventHandlers)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");
/* harmony import */ var _validationUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validationUI */ "./src/components/validationUI.js");



const eventHandlers = () => {
  const repaymentWrapper = document.querySelector(".repayment-wrapper");
  const interestOnlyWrapper = document.querySelector(".interest-only-wrapper");
  const mortgageAmountInput = document.getElementById("mortgage-amount");
  const mortgageTermInput = document.getElementById("mortgage-term");
  const interestRateInput = document.getElementById("interest-rate");
  const repaymentRadio = document.getElementById("repayment");
  const interestRadio = document.getElementById("interest-only");
  const clearAllBtn = document.querySelector(".clear-all");

  clearAllBtn.addEventListener("click", () => {
    document.querySelector(".mortgage-form").reset();
    repaymentWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    repaymentWrapper.style.backgroundColor = "transparent";
    interestOnlyWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    interestOnlyWrapper.style.backgroundColor = "transparent";
  });

  repaymentWrapper.addEventListener("click", () => {
    repaymentRadio.checked = true;
    if (repaymentRadio.checked) {
      repaymentWrapper.style.borderColor = "hsl(61, 70%, 52%)";
      repaymentWrapper.style.backgroundColor = "rgba(215, 218, 47, 0.2)";
      interestOnlyWrapper.style.borderColor = "hsl(200, 24%, 40%)";
      interestOnlyWrapper.style.backgroundColor = "transparent";
      document.querySelector(".morg-type-error").textContent = "";
    }
  });
  interestOnlyWrapper.addEventListener("click", () => {
    interestRadio.checked = true;
    if (interestRadio.checked) {
      interestOnlyWrapper.style.borderColor = "hsl(61, 70%, 52%)";
      interestOnlyWrapper.style.backgroundColor = "rgba(215, 218, 47, 0.2)";
      repaymentWrapper.style.borderColor = "hsl(200, 24%, 40%)";
      repaymentWrapper.style.backgroundColor = "transparent";
      document.querySelector(".morg-type-error").textContent = "";
    }
  });

  mortgageAmountInput.addEventListener("focus", () => {
    document.querySelector(".amount-input-wrapper").style.borderColor =
      "hsl(61, 70%, 52%)";
    document.querySelector(".amount-input-sign").style.backgroundColor =
      "hsl(61, 70%, 52%)";
    document.querySelector(".amount-input-sign").style.color =
      "hsl(202, 55%, 16%)";
  });

  mortgageAmountInput.addEventListener("blur", () => {
    document.querySelector(".amount-input-wrapper").style.borderColor =
      "hsl(200, 24%, 40%)";
    document.querySelector(".amount-input-sign").style.backgroundColor =
      "hsl(203, 87%, 94%)";
  });

  mortgageAmountInput.addEventListener("input", (event) => {
    event.target.value = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addCommaToNumbers)(event.target.value);
    const amountWrapper = document.querySelector(".amount-input-wrapper");
    const amountError = document.querySelector(".amount-error");
    const amountSign = document.querySelector(".amount-input-sign");
    amountError.textContent = "";
    amountWrapper.style.borderColor = "hsl(61, 70%, 52%)";
    amountSign.style.backgroundColor = "hsl(61, 70%, 52%)";
  });

  mortgageTermInput.addEventListener("input", () => {
    const termWrapper = document.querySelector(".term-input-wrapper");
    const termError = document.querySelector(".term-error");
    const termSign = document.querySelector(".term-sign");
    (0,_validationUI__WEBPACK_IMPORTED_MODULE_1__.validateInput)(mortgageTermInput, termError, termWrapper, termSign);
  });
  interestRateInput.addEventListener("input", () => {
    const rateWrapper = document.querySelector(".rate-input-wrapper");
    const rateError = document.querySelector(".rate-error");
    const rateSign = document.querySelector(".rate-sign");
    (0,_validationUI__WEBPACK_IMPORTED_MODULE_1__.validateInput)(mortgageTermInput, rateError, rateWrapper, rateSign);
  });
};




/***/ }),

/***/ "./src/components/formSubmission.js":
/*!******************************************!*\
  !*** ./src/components/formSubmission.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");
/* harmony import */ var _validationUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validationUI */ "./src/components/validationUI.js");
/* harmony import */ var _displayResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayResults */ "./src/components/displayResults.js");




const formSubmission = () => {
  const calculateForm = document.querySelector(".mortgage-form");

  calculateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const mortgageTerm = document.getElementById("mortgage-term").value.trim();
    const interestRate = document.getElementById("interest-rate").value.trim();
    let morgageAmount = document.getElementById("mortgage-amount").value.trim();
    morgageAmount = morgageAmount.replace(/,/g, "");
    const selectedRadio = document.querySelector(
      "input[type='radio'][name='mortgage-type']:checked",
    );
    const mortgageType = selectedRadio ? selectedRadio.value : null;

    (0,_validationUI__WEBPACK_IMPORTED_MODULE_1__.validateForm)(morgageAmount, mortgageTerm, interestRate, mortgageType);

    if (mortgageType === "repayment") {
      const monthlyPayment = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.calculateMonthlyRepayment)(
        morgageAmount,
        mortgageTerm,
        interestRate,
      );
      const totalPayment = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.calculateTotalRepayment)(
        monthlyPayment,
        mortgageTerm,
      );

      (0,_displayResults__WEBPACK_IMPORTED_MODULE_2__["default"])(monthlyPayment, totalPayment);
      console.log(monthlyPayment);
      console.log(totalPayment);
    } else if (mortgageType === "interest-only") {
      const monthlyInterestPayment = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.calculateMonthlyInterest)(
        morgageAmount,
        interestRate,
      );
      const totalInterestPayment = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.calculateTotalInterest)(
        monthlyInterestPayment,
        mortgageTerm,
      );
      (0,_displayResults__WEBPACK_IMPORTED_MODULE_2__["default"])(monthlyInterestPayment, totalInterestPayment);
      console.log(monthlyInterestPayment);
      console.log(totalInterestPayment);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formSubmission);


/***/ }),

/***/ "./src/components/resultsCard.js":
/*!***************************************!*\
  !*** ./src/components/resultsCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");


const resultsCard = (monthlyRepayment, totalRepayment) => {
  monthlyRepayment = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addCommaToNumbers)(monthlyRepayment);
  totalRepayment = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addCommaToNumbers)(totalRepayment);

  const resultCardContainer = document.createElement("div");
  resultCardContainer.classList.add("result-card-container");
  resultCardContainer.innerHTML = `
        <div class="monthly-repayment-results">
            <span>Your monthly repayments</span>
            <h1 class="monthly-repayments">£${monthlyRepayment}</h1>
        </div>
        <div class="total-repayment-results">
            <span>Total you'll repay over the term</span>
            <h3 class="total-repayments">£${totalRepayment}</h3>
        </div>
  `;

  return resultCardContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resultsCard);


/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCommaToNumbers: () => (/* binding */ addCommaToNumbers),
/* harmony export */   calculateMonthlyInterest: () => (/* binding */ calculateMonthlyInterest),
/* harmony export */   calculateMonthlyRepayment: () => (/* binding */ calculateMonthlyRepayment),
/* harmony export */   calculateTotalInterest: () => (/* binding */ calculateTotalInterest),
/* harmony export */   calculateTotalRepayment: () => (/* binding */ calculateTotalRepayment)
/* harmony export */ });
const calculateMonthlyRepayment = (amountBorrowed, years, annualRate) => {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;

  const monthlyRepayment =
    (amountBorrowed * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  return monthlyRepayment.toFixed(2);
};

const calculateTotalRepayment = (monthlyPayment, years) => {
  const totalMonths = years * 12;

  return (monthlyPayment * totalMonths).toFixed(2);
};

const calculateMonthlyInterest = (amountBorrowed, annualRate) => {
  const monthlyRate = annualRate / 100 / 12;

  return (amountBorrowed * monthlyRate).toFixed(2);
};

const calculateTotalInterest = (monthlyInterest, years) => {
  const totalMonths = years * 12;
  return (monthlyInterest * totalMonths).toFixed(2);
};

const addCommaToNumbers = (value) => {
  let resultValue = value.replace(/[^0-9.]/g, "");
  let parts = resultValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};




/***/ }),

/***/ "./src/components/validationUI.js":
/*!****************************************!*\
  !*** ./src/components/validationUI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateForm: () => (/* binding */ validateForm),
/* harmony export */   validateInput: () => (/* binding */ validateInput)
/* harmony export */ });
const validateForm = (morgageAmount, mortgageTerm, interestRate, morgType) => {
  const amountWrapper = document.querySelector(".amount-input-wrapper");
  const termWrapper = document.querySelector(".term-input-wrapper");
  const rateWrapper = document.querySelector(".rate-input-wrapper");
  const amountError = document.querySelector(".amount-error");
  const termError = document.querySelector(".term-error");
  const rateError = document.querySelector(".rate-error");
  const morgTypeError = document.querySelector(".morg-type-error");
  const amountSign = document.querySelector(".amount-input-sign");
  const termSign = document.querySelector(".term-sign");
  const rateSign = document.querySelector(".rate-sign");
  if (morgageAmount === "") {
    amountError.textContent = "This field is required";
    amountWrapper.style.borderColor = "hsl(4, 69%, 50%)";
    amountSign.style.backgroundColor = "hsl(4, 69%, 50%)";
    amountSign.style.color = "#ffffff";
  } else {
    amountError.textContent = "";
    amountWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    amountSign.style.backgroundColor = "hsl(203, 87%, 94%)";
    amountSign.style.color = "hsl(202, 55%, 16%)";
  }

  if (mortgageTerm === "") {
    termError.textContent = "This field is required";
    termWrapper.style.borderColor = "hsl(4, 69%, 50%)";
    termSign.style.backgroundColor = "hsl(4, 69%, 50%)";
    termSign.style.color = "#ffffff";
  } else {
    termError.textContent = "";
    termWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    termSign.style.backgroundColor = "hsl(203, 87%, 94%)";
    termSign.style.color = "hsl(202, 55%, 16%)";
  }

  if (interestRate === "") {
    rateError.textContent = "This field is required";
    rateWrapper.style.borderColor = "hsl(4, 69%, 50%)";
    rateSign.style.backgroundColor = "hsl(4, 69%, 50%)";
    rateSign.style.color = "#ffffff";
  } else {
    rateError.textContent = "";
    rateWrapper.style.borderColor = "hsl(200, 24%, 40%)";
    rateSign.style.backgroundColor = "hsl(203, 87%, 94%)";
    rateSign.style.color = "hsl(202, 55%, 16%)";
  }

  if (!morgType) {
    morgTypeError.textContent = "This field is required";
  } else {
    morgTypeError.textContent = "";
  }
};

const validateInput = (
  inputElement,
  errorSpan,
  wrapperElement,
  signElement,
) => {
  if (inputElement.checkValidity()) {
    errorSpan.textContent = "";
    wrapperElement.style.borderColor = "hsl(200, 24%, 40%)";
    signElement.style.backgroundColor = "hsl(203, 87%, 94%)";
    signElement.style.color = "hsl(202, 55%, 16%)";
  }
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _components_eventHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/eventHandlers */ "./src/components/eventHandlers.js");
/* harmony import */ var _components_formSubmission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/formSubmission */ "./src/components/formSubmission.js");




const initialLoad = () => {
  (0,_components_eventHandlers__WEBPACK_IMPORTED_MODULE_1__.eventHandlers)();
  (0,_components_formSubmission__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

window.onload = initialLoad();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYzhmMTkwMzJjZjA3NmI1ZWE4Yy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUZBQXlGLFVBQVUsVUFBVSxZQUFZLGlCQUFpQixLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxPQUFPLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0s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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUM7Ozs7Ozs7VUNwRXZDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUMrQjtBQUNGOztBQUV6RDtBQUNBLEVBQUUsd0VBQWE7QUFDZixFQUFFLHNFQUFjO0FBQ2hCOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9ydGdhZ2UtcmVwYXltZW50LWNhbGN1bGF0b3IvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tb3J0Z2FnZS1yZXBheW1lbnQtY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbW9ydGdhZ2UtcmVwYXltZW50LWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tb3J0Z2FnZS1yZXBheW1lbnQtY2FsY3VsYXRvci8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vbW9ydGdhZ2UtcmVwYXltZW50LWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbW9ydGdhZ2UtcmVwYXltZW50LWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21vcnRnYWdlLXJlcGF5bWVudC1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21vcnRnYWdlLXJlcGF5bWVudC1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21vcnRnYWdlLXJlcGF5bWVudC1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbW9ydGdhZ2UtcmVwYXltZW50LWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tb3J0Z2FnZS1yZXBheW1lbnQtY2FsY3VsYXRvci8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXlSZXN1bHRzLmpzIiwid2VicGFjazovL21vcnRnYWdlLXJlcGF5bWVudC1jYWxjdWxhdG9yLy4vc3JjL2NvbXBvbmVudHMvZXZlbnRIYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9tb3J0Z2FnZS1yZXBheW1lbnQtY2FsY3VsYXRvci8uL3NyYy9jb21wb25lbnRzL2Zvcm1TdWJtaXNzaW9uLmpzIiwid2VicGFjazovL21vcnRnYWdlLXJlcGF5bWVudC1jYWxjdWxhdG9yLy4vc3JjL2NvbXBvbmVudHMvcmVzdWx0c0NhcmQuanMiLCJ3ZWJwYWNrOi8vbW9ydGdhZ2UtcmVwYXltZW50LWNhbGN1bGF0b3IvLi9zcmMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly9tb3J0Z2FnZS1yZXBheW1lbnQtY2FsY3VsYXRvci8uL3NyYy9jb21wb25lbnRzL3ZhbGlkYXRpb25VSS5qcyIsIndlYnBhY2s6Ly9tb3J0Z2FnZS1yZXBheW1lbnQtY2FsY3VsYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb3J0Z2FnZS1yZXBheW1lbnQtY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tb3J0Z2FnZS1yZXBheW1lbnQtY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbW9ydGdhZ2UtcmVwYXltZW50LWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tb3J0Z2FnZS1yZXBheW1lbnQtY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vcnRnYWdlLXJlcGF5bWVudC1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tb3J0Z2FnZS1yZXBheW1lbnQtY2FsY3VsYXRvci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcclxuKjo6YWZ0ZXIsXHJcbio6OmJlZm9yZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTpcclxuICAgIFwiUGx1cyBKYWthcnRhIFNhbnNcIixcclxuICAgIHN5c3RlbS11aSxcclxuICAgIC1hcHBsZS1zeXN0ZW0sXHJcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXHJcbiAgICBcIlNlZ29lIFVJXCIsXHJcbiAgICBSb2JvdG8sXHJcbiAgICBPeHlnZW4sXHJcbiAgICBVYnVudHUsXHJcbiAgICBDYW50YXJlbGwsXHJcbiAgICBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxyXG4gICAgc2Fucy1zZXJpZjtcclxufVxyXG46cm9vdCB7XHJcbiAgLS1saW1lOiBoc2woNjEsIDcwJSwgNTIlKTtcclxuICAtLVJlZDogaHNsKDQsIDY5JSwgNTAlKTtcclxuICAtLVdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4gIC0tU2xhdGUxMDA6IGhzbCgyMDMsIDg3JSwgOTQlKTtcclxuICAtLVNsYXRlMzAwOiBoc2woMjAzLCA0MSUsIDcyJSk7XHJcbiAgLS1TbGF0ZTUwMDogaHNsKDIwMCwgMjYlLCA1NCUpO1xyXG4gIC0tU2xhdGU3MDA6IGhzbCgyMDAsIDI0JSwgNDAlKTtcclxuICAtLVNsYXRlOTAwOiBoc2woMjAyLCA1NSUsIDE2JSk7XHJcbn1cclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU2xhdGUxMDApO1xyXG59XHJcbm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XHJcbiAgbWF4LXdpZHRoOiA5NTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggM3B4ICNkNWVjZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jYWxjdWxhdG9yLWNvbnRhaW5lcixcclxuLnJlc3VsdHMtY29udGFpbmVyIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxufVxyXG5cclxuLnJlc3VsdHMtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TbGF0ZTkwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAxNSU7XHJcbn1cclxuLmNhbGN1bGF0b3ItY29udGFpbmVyLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNhbGN1bGF0b3ItY29udGFpbmVyLWhlYWRpbmcgaDIge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLVNsYXRlOTAwKTtcclxufVxyXG4uY2xlYXItYWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tU2xhdGU3MDApO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5mb3JtIHtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxLjZyZW07XHJcbn1cclxuLmFtb3VudC13cmFwcGVyLFxyXG4ubW9ydGdhZ2UtdGVybS13cmFwcGVyLFxyXG4uaW50ZXJlc3QtcmF0ZS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjhyZW07XHJcbn1cclxuLmlucHV0LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLVNsYXRlNzAwKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5sYWJlbCxcclxuLm1vcnRnYWdlLXR5cGUtd3JhcHBlciBoMyB7XHJcbiAgY29sb3I6IHZhcigtLVNsYXRlNzAwKTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLVNsYXRlOTAwKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tU2xhdGU3MDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGltZSk7XHJcbn1cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA5cHg7XHJcbiAgaGVpZ2h0OiA5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGltZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJweDtcclxuICBsZWZ0OiAycHg7XHJcbn1cclxuLmlucHV0LXNpZ24ge1xyXG4gIHBhZGRpbmc6IDAuN3JlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVNsYXRlMTAwKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHggMHB4IDBweCAzcHg7XHJcbn1cclxuLnRlcm0tc2lnbixcclxuLnJhdGUtc2lnbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDNweCAzcHggMHB4O1xyXG59XHJcbi50ZXJtLWludGVyZXN0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcbi5tb3J0Z2FnZS10ZXJtLXdyYXBwZXIsXHJcbi5pbnRlcmVzdC1yYXRlLXdyYXBwZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLm1vcnRnYWdlLXR5cGUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcbi5yZXBheW1lbnQtd3JhcHBlcixcclxuLmludGVyZXN0LW9ubHktd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tU2xhdGU3MDApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuN3JlbTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5yZXBheW1lbnQtd3JhcHBlcjpob3ZlcixcclxuLmludGVyZXN0LW9ubHktd3JhcHBlcjpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTUsIDIxOCwgNDcsIDAuNyk7XHJcbn1cclxuLnJlcGF5bWVudC1zcGFuLFxyXG4uaW50ZXJlc3Qtb25seS1zcGFuIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1TbGF0ZTkwMCk7XHJcbn1cclxuLmNhbGN1bGF0ZS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwLjdyZW0gMC41cmVtO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5jYWxjdWxhdGUtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNSwgMjE4LCA0NywgMC43KTtcclxufVxyXG4uY2FsY3VsYXRlLWJ0biBzcGFuIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1TbGF0ZTkwMCk7XHJcbn1cclxuLmVtcHR5LXJlc3VsdHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmVtcHR5LXJlc3VsdHMtY29udGFpbmVyIGgzIHtcclxuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG4uZW1wdHktcmVzdWx0cy1jb250YWluZXIgcCB7XHJcbiAgY29sb3I6IHZhcigtLVNsYXRlMzAwKTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucmVzdWx0cy1jb250YWluZXItd3JhcHBlciBoMiB7XHJcbiAgY29sb3I6IHZhcigtLVNsYXRlMTAwKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcbi5yZXN1bHRzLWNvbnRhaW5lci13cmFwcGVyIHAge1xyXG4gIGNvbG9yOiB2YXIoLS1TbGF0ZTMwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG59XHJcbi5yZXN1bHQtY2FyZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDIxMmM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWxpbWUpO1xyXG59XHJcbi5tb250aGx5LXJlcGF5bWVudC1yZXN1bHRzIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tU2xhdGU3MDApO1xyXG59XHJcbi50b3RhbC1yZXBheW1lbnQtcmVzdWx0cyB7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxufVxyXG4ubW9udGhseS1yZXBheW1lbnQtcmVzdWx0cyBzcGFuIHtcclxuICBjb2xvcjogdmFyKC0tU2xhdGUzMDApO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLnRvdGFsLXJlcGF5bWVudC1yZXN1bHRzIHNwYW4ge1xyXG4gIGNvbG9yOiB2YXIoLS1TbGF0ZTMwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4ubW9udGhseS1yZXBheW1lbnRzIHtcclxuICBjb2xvcjogdmFyKC0tbGltZSk7XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG4udG90YWwtcmVwYXltZW50cyB7XHJcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcbi50ZXJtLWVycm9yLFxyXG4uYW1vdW50LWVycm9yLFxyXG4ucmF0ZS1lcnJvcixcclxuLm1vcmctdHlwZS1lcnJvciB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6IHZhcigtLVJlZCk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIC5jYWxjdWxhdG9yLWNvbnRhaW5lcixcclxuICAucmVzdWx0cy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5yZXN1bHRzLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuY2FsY3VsYXRvci1jb250YWluZXIsXHJcbiAgLnJlc3VsdHMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICB9XHJcbiAgLmNhbGN1bGF0b3ItY29udGFpbmVyLWhlYWRpbmcge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjNyZW07XHJcbiAgfVxyXG4gIC50ZXJtLWludGVyZXN0LXdyYXBwZXIge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICAubW9ydGdhZ2UtdGVybS13cmFwcGVyLFxyXG4gIC5pbnRlcmVzdC1yYXRlLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGZvcm0ge1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICB9XHJcbiAgLmNhbGN1bGF0ZS1idG4ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgfVxyXG4gIC5tb250aGx5LXJlcGF5bWVudHMge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0Qjs7Ozs7Ozs7Ozs7O2NBWVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsOEJBQThCO0FBQ2hDO0FBQ0E7O0VBRUUsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7O0VBRUUsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBOztFQUVFLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUseUNBQXlDO0FBQzNDO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUNBOzs7O0VBSUUsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBOztJQUVFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsU0FBUztJQUNULG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OlxcclxcbiAgICBcXFwiUGx1cyBKYWthcnRhIFNhbnNcXFwiLFxcclxcbiAgICBzeXN0ZW0tdWksXFxyXFxuICAgIC1hcHBsZS1zeXN0ZW0sXFxyXFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcXHJcXG4gICAgXFxcIlNlZ29lIFVJXFxcIixcXHJcXG4gICAgUm9ib3RvLFxcclxcbiAgICBPeHlnZW4sXFxyXFxuICAgIFVidW50dSxcXHJcXG4gICAgQ2FudGFyZWxsLFxcclxcbiAgICBcXFwiT3BlbiBTYW5zXFxcIixcXHJcXG4gICAgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1saW1lOiBoc2woNjEsIDcwJSwgNTIlKTtcXHJcXG4gIC0tUmVkOiBoc2woNCwgNjklLCA1MCUpO1xcclxcbiAgLS1XaGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4gIC0tU2xhdGUxMDA6IGhzbCgyMDMsIDg3JSwgOTQlKTtcXHJcXG4gIC0tU2xhdGUzMDA6IGhzbCgyMDMsIDQxJSwgNzIlKTtcXHJcXG4gIC0tU2xhdGU1MDA6IGhzbCgyMDAsIDI2JSwgNTQlKTtcXHJcXG4gIC0tU2xhdGU3MDA6IGhzbCgyMDAsIDI0JSwgNDAlKTtcXHJcXG4gIC0tU2xhdGU5MDA6IGhzbCgyMDIsIDU1JSwgMTYlKTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU2xhdGUxMDApO1xcclxcbn1cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxyXFxuICBtYXgtd2lkdGg6IDk1MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAzcHggI2Q1ZWNmYTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvci1jb250YWluZXIsXFxyXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBwYWRkaW5nOiAycmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TbGF0ZTkwMCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDE1JTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3ItY29udGFpbmVyLWhlYWRpbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yLWNvbnRhaW5lci1oZWFkaW5nIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1TbGF0ZTkwMCk7XFxyXFxufVxcclxcbi5jbGVhci1hbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLVNsYXRlNzAwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuZm9ybSB7XFxyXFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxLjZyZW07XFxyXFxufVxcclxcbi5hbW91bnQtd3JhcHBlcixcXHJcXG4ubW9ydGdhZ2UtdGVybS13cmFwcGVyLFxcclxcbi5pbnRlcmVzdC1yYXRlLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG59XFxyXFxuLmlucHV0LXdyYXBwZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1TbGF0ZTcwMCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5sYWJlbCxcXHJcXG4ubW9ydGdhZ2UtdHlwZS13cmFwcGVyIGgzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1TbGF0ZTcwMCk7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogMC43cmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1TbGF0ZTkwMCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1TbGF0ZTcwMCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWxpbWUpO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogOXB4O1xcclxcbiAgaGVpZ2h0OiA5cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMnB4O1xcclxcbiAgbGVmdDogMnB4O1xcclxcbn1cXHJcXG4uaW5wdXQtc2lnbiB7XFxyXFxuICBwYWRkaW5nOiAwLjdyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU2xhdGUxMDApO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4IDBweCAwcHggM3B4O1xcclxcbn1cXHJcXG4udGVybS1zaWduLFxcclxcbi5yYXRlLXNpZ24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDNweCAzcHggMHB4O1xcclxcbn1cXHJcXG4udGVybS1pbnRlcmVzdC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5tb3J0Z2FnZS10ZXJtLXdyYXBwZXIsXFxyXFxuLmludGVyZXN0LXJhdGUtd3JhcHBlciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG4ubW9ydGdhZ2UtdHlwZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcbi5yZXBheW1lbnQtd3JhcHBlcixcXHJcXG4uaW50ZXJlc3Qtb25seS13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tU2xhdGU3MDApO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcbi5yZXBheW1lbnQtd3JhcHBlcjpob3ZlcixcXHJcXG4uaW50ZXJlc3Qtb25seS13cmFwcGVyOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjE1LCAyMTgsIDQ3LCAwLjcpO1xcclxcbn1cXHJcXG4ucmVwYXltZW50LXNwYW4sXFxyXFxuLmludGVyZXN0LW9ubHktc3BhbiB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IHZhcigtLVNsYXRlOTAwKTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0ZS1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMC43cmVtIDAuNXJlbTtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW1lKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuLmNhbGN1bGF0ZS1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTUsIDIxOCwgNDcsIDAuNyk7XFxyXFxufVxcclxcbi5jYWxjdWxhdGUtYnRuIHNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1TbGF0ZTkwMCk7XFxyXFxufVxcclxcbi5lbXB0eS1yZXN1bHRzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmVtcHR5LXJlc3VsdHMtY29udGFpbmVyIGgzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuLmVtcHR5LXJlc3VsdHMtY29udGFpbmVyIHAge1xcclxcbiAgY29sb3I6IHZhcigtLVNsYXRlMzAwKTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ucmVzdWx0cy1jb250YWluZXItd3JhcHBlciBoMiB7XFxyXFxuICBjb2xvcjogdmFyKC0tU2xhdGUxMDApO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcbi5yZXN1bHRzLWNvbnRhaW5lci13cmFwcGVyIHAge1xcclxcbiAgY29sb3I6IHZhcigtLVNsYXRlMzAwKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxyXFxufVxcclxcbi5yZXN1bHQtY2FyZC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQyMTJjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1saW1lKTtcXHJcXG59XFxyXFxuLm1vbnRobHktcmVwYXltZW50LXJlc3VsdHMge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLVNsYXRlNzAwKTtcXHJcXG59XFxyXFxuLnRvdGFsLXJlcGF5bWVudC1yZXN1bHRzIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxufVxcclxcbi5tb250aGx5LXJlcGF5bWVudC1yZXN1bHRzIHNwYW4ge1xcclxcbiAgY29sb3I6IHZhcigtLVNsYXRlMzAwKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuLnRvdGFsLXJlcGF5bWVudC1yZXN1bHRzIHNwYW4ge1xcclxcbiAgY29sb3I6IHZhcigtLVNsYXRlMzAwKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuLm1vbnRobHktcmVwYXltZW50cyB7XFxyXFxuICBjb2xvcjogdmFyKC0tbGltZSk7XFxyXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuLnRvdGFsLXJlcGF5bWVudHMge1xcclxcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG4udGVybS1lcnJvcixcXHJcXG4uYW1vdW50LWVycm9yLFxcclxcbi5yYXRlLWVycm9yLFxcclxcbi5tb3JnLXR5cGUtZXJyb3Ige1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tUmVkKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG4gIC5jYWxjdWxhdG9yLWNvbnRhaW5lcixcXHJcXG4gIC5yZXN1bHRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLnJlc3VsdHMtY29udGFpbmVyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIC5jYWxjdWxhdG9yLWNvbnRhaW5lcixcXHJcXG4gIC5yZXN1bHRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG4gIH1cXHJcXG4gIC5jYWxjdWxhdG9yLWNvbnRhaW5lci1oZWFkaW5nIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4zcmVtO1xcclxcbiAgfVxcclxcbiAgLnRlcm0taW50ZXJlc3Qtd3JhcHBlciB7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG4gIC5tb3J0Z2FnZS10ZXJtLXdyYXBwZXIsXFxyXFxuICAuaW50ZXJlc3QtcmF0ZS13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBmb3JtIHtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgLmNhbGN1bGF0ZS1idG4ge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuICAubW9udGhseS1yZXBheW1lbnRzIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByZXN1bHRzQ2FyZCBmcm9tIFwiLi9yZXN1bHRzQ2FyZFwiO1xuXG5jb25zdCBkaXNwbGF5UmVzdWx0cyA9IChtb250aGx5UmVwYXksIHRvdGFsUmVwYXkpID0+IHtcbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0cy1jb250YWluZXJcIik7XG4gIGNvbnN0IHJlc3VsdHNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcmVzdWx0Q2FyZCA9IHJlc3VsdHNDYXJkKG1vbnRobHlSZXBheSwgdG90YWxSZXBheSk7XG5cbiAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICByZXN1bHRzV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicmVzdWx0cy1jb250YWluZXItd3JhcHBlclwiKTtcblxuICBoMi50ZXh0Q29udGVudCA9IFwiWW91ciBSZXN1bHRzXCI7XG4gIHAudGV4dENvbnRlbnQgPVxuICAgICdZb3VyIHJlc3VsdHMgYXJlIHNob3duIGJlbG93IGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiB5b3UgcHJvdmlkZWQuIFRvIGFkanVzdCB0aGUgcmVzdWx0cywgZWRpdCB0aGUgZm9ybSBhbmQgY2xpY2sgXCJjYWxjdWxhdGUgcmVwYXltZW50c1wiIGFnYWluLic7XG5cbiAgcmVzdWx0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICByZXN1bHRzV3JhcHBlci5hcHBlbmRDaGlsZChwKTtcbiAgcmVzdWx0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocmVzdWx0Q2FyZCk7XG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0c1dyYXBwZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVJlc3VsdHM7XG4iLCJpbXBvcnQgeyBhZGRDb21tYVRvTnVtYmVycyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUlucHV0IH0gZnJvbSBcIi4vdmFsaWRhdGlvblVJXCI7XG5cbmNvbnN0IGV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlcGF5bWVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlcGF5bWVudC13cmFwcGVyXCIpO1xuICBjb25zdCBpbnRlcmVzdE9ubHlXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRlcmVzdC1vbmx5LXdyYXBwZXJcIik7XG4gIGNvbnN0IG1vcnRnYWdlQW1vdW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLWFtb3VudFwiKTtcbiAgY29uc3QgbW9ydGdhZ2VUZXJtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLXRlcm1cIik7XG4gIGNvbnN0IGludGVyZXN0UmF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmVzdC1yYXRlXCIpO1xuICBjb25zdCByZXBheW1lbnRSYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVwYXltZW50XCIpO1xuICBjb25zdCBpbnRlcmVzdFJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlcmVzdC1vbmx5XCIpO1xuICBjb25zdCBjbGVhckFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXItYWxsXCIpO1xuXG4gIGNsZWFyQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3J0Z2FnZS1mb3JtXCIpLnJlc2V0KCk7XG4gICAgcmVwYXltZW50V3JhcHBlci5zdHlsZS5ib3JkZXJDb2xvciA9IFwiaHNsKDIwMCwgMjQlLCA0MCUpXCI7XG4gICAgcmVwYXltZW50V3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgaW50ZXJlc3RPbmx5V3JhcHBlci5zdHlsZS5ib3JkZXJDb2xvciA9IFwiaHNsKDIwMCwgMjQlLCA0MCUpXCI7XG4gICAgaW50ZXJlc3RPbmx5V3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gIH0pO1xuXG4gIHJlcGF5bWVudFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXBheW1lbnRSYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICBpZiAocmVwYXltZW50UmFkaW8uY2hlY2tlZCkge1xuICAgICAgcmVwYXltZW50V3JhcHBlci5zdHlsZS5ib3JkZXJDb2xvciA9IFwiaHNsKDYxLCA3MCUsIDUyJSlcIjtcbiAgICAgIHJlcGF5bWVudFdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDIxNSwgMjE4LCA0NywgMC4yKVwiO1xuICAgICAgaW50ZXJlc3RPbmx5V3JhcHBlci5zdHlsZS5ib3JkZXJDb2xvciA9IFwiaHNsKDIwMCwgMjQlLCA0MCUpXCI7XG4gICAgICBpbnRlcmVzdE9ubHlXcmFwcGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9yZy10eXBlLWVycm9yXCIpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG4gIH0pO1xuICBpbnRlcmVzdE9ubHlXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW50ZXJlc3RSYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICBpZiAoaW50ZXJlc3RSYWRpby5jaGVja2VkKSB7XG4gICAgICBpbnRlcmVzdE9ubHlXcmFwcGVyLnN0eWxlLmJvcmRlckNvbG9yID0gXCJoc2woNjEsIDcwJSwgNTIlKVwiO1xuICAgICAgaW50ZXJlc3RPbmx5V3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjE1LCAyMTgsIDQ3LCAwLjIpXCI7XG4gICAgICByZXBheW1lbnRXcmFwcGVyLnN0eWxlLmJvcmRlckNvbG9yID0gXCJoc2woMjAwLCAyNCUsIDQwJSlcIjtcbiAgICAgIHJlcGF5bWVudFdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3JnLXR5cGUtZXJyb3JcIikudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH1cbiAgfSk7XG5cbiAgbW9ydGdhZ2VBbW91bnRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW1vdW50LWlucHV0LXdyYXBwZXJcIikuc3R5bGUuYm9yZGVyQ29sb3IgPVxuICAgICAgXCJoc2woNjEsIDcwJSwgNTIlKVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW1vdW50LWlucHV0LXNpZ25cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgIFwiaHNsKDYxLCA3MCUsIDUyJSlcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFtb3VudC1pbnB1dC1zaWduXCIpLnN0eWxlLmNvbG9yID1cbiAgICAgIFwiaHNsKDIwMiwgNTUlLCAxNiUpXCI7XG4gIH0pO1xuXG4gIG1vcnRnYWdlQW1vdW50SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW1vdW50LWlucHV0LXdyYXBwZXJcIikuc3R5bGUuYm9yZGVyQ29sb3IgPVxuICAgICAgXCJoc2woMjAwLCAyNCUsIDQwJSlcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFtb3VudC1pbnB1dC1zaWduXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICBcImhzbCgyMDMsIDg3JSwgOTQlKVwiO1xuICB9KTtcblxuICBtb3J0Z2FnZUFtb3VudElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBhZGRDb21tYVRvTnVtYmVycyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IGFtb3VudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFtb3VudC1pbnB1dC13cmFwcGVyXCIpO1xuICAgIGNvbnN0IGFtb3VudEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbW91bnQtZXJyb3JcIik7XG4gICAgY29uc3QgYW1vdW50U2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW1vdW50LWlucHV0LXNpZ25cIik7XG4gICAgYW1vdW50RXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGFtb3VudFdyYXBwZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImhzbCg2MSwgNzAlLCA1MiUpXCI7XG4gICAgYW1vdW50U2lnbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbCg2MSwgNzAlLCA1MiUpXCI7XG4gIH0pO1xuXG4gIG1vcnRnYWdlVGVybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgY29uc3QgdGVybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlcm0taW5wdXQtd3JhcHBlclwiKTtcbiAgICBjb25zdCB0ZXJtRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlcm0tZXJyb3JcIik7XG4gICAgY29uc3QgdGVybVNpZ24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlcm0tc2lnblwiKTtcbiAgICB2YWxpZGF0ZUlucHV0KG1vcnRnYWdlVGVybUlucHV0LCB0ZXJtRXJyb3IsIHRlcm1XcmFwcGVyLCB0ZXJtU2lnbik7XG4gIH0pO1xuICBpbnRlcmVzdFJhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHJhdGVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYXRlLWlucHV0LXdyYXBwZXJcIik7XG4gICAgY29uc3QgcmF0ZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYXRlLWVycm9yXCIpO1xuICAgIGNvbnN0IHJhdGVTaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYXRlLXNpZ25cIik7XG4gICAgdmFsaWRhdGVJbnB1dChtb3J0Z2FnZVRlcm1JbnB1dCwgcmF0ZUVycm9yLCByYXRlV3JhcHBlciwgcmF0ZVNpZ24pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGV2ZW50SGFuZGxlcnMgfTtcbiIsImltcG9ydCB7XG4gIGNhbGN1bGF0ZU1vbnRobHlSZXBheW1lbnQsXG4gIGNhbGN1bGF0ZVRvdGFsUmVwYXltZW50LFxuICBjYWxjdWxhdGVNb250aGx5SW50ZXJlc3QsXG4gIGNhbGN1bGF0ZVRvdGFsSW50ZXJlc3QsXG59IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm0gfSBmcm9tIFwiLi92YWxpZGF0aW9uVUlcIjtcbmltcG9ydCBkaXNwbGF5UmVzdWx0cyBmcm9tIFwiLi9kaXNwbGF5UmVzdWx0c1wiO1xuXG5jb25zdCBmb3JtU3VibWlzc2lvbiA9ICgpID0+IHtcbiAgY29uc3QgY2FsY3VsYXRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9ydGdhZ2UtZm9ybVwiKTtcblxuICBjYWxjdWxhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtb3J0Z2FnZVRlcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLXRlcm1cIikudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IGludGVyZXN0UmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZXJlc3QtcmF0ZVwiKS52YWx1ZS50cmltKCk7XG4gICAgbGV0IG1vcmdhZ2VBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcnRnYWdlLWFtb3VudFwiKS52YWx1ZS50cmltKCk7XG4gICAgbW9yZ2FnZUFtb3VudCA9IG1vcmdhZ2VBbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKTtcbiAgICBjb25zdCBzZWxlY3RlZFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiaW5wdXRbdHlwZT0ncmFkaW8nXVtuYW1lPSdtb3J0Z2FnZS10eXBlJ106Y2hlY2tlZFwiLFxuICAgICk7XG4gICAgY29uc3QgbW9ydGdhZ2VUeXBlID0gc2VsZWN0ZWRSYWRpbyA/IHNlbGVjdGVkUmFkaW8udmFsdWUgOiBudWxsO1xuXG4gICAgdmFsaWRhdGVGb3JtKG1vcmdhZ2VBbW91bnQsIG1vcnRnYWdlVGVybSwgaW50ZXJlc3RSYXRlLCBtb3J0Z2FnZVR5cGUpO1xuXG4gICAgaWYgKG1vcnRnYWdlVHlwZSA9PT0gXCJyZXBheW1lbnRcIikge1xuICAgICAgY29uc3QgbW9udGhseVBheW1lbnQgPSBjYWxjdWxhdGVNb250aGx5UmVwYXltZW50KFxuICAgICAgICBtb3JnYWdlQW1vdW50LFxuICAgICAgICBtb3J0Z2FnZVRlcm0sXG4gICAgICAgIGludGVyZXN0UmF0ZSxcbiAgICAgICk7XG4gICAgICBjb25zdCB0b3RhbFBheW1lbnQgPSBjYWxjdWxhdGVUb3RhbFJlcGF5bWVudChcbiAgICAgICAgbW9udGhseVBheW1lbnQsXG4gICAgICAgIG1vcnRnYWdlVGVybSxcbiAgICAgICk7XG5cbiAgICAgIGRpc3BsYXlSZXN1bHRzKG1vbnRobHlQYXltZW50LCB0b3RhbFBheW1lbnQpO1xuICAgICAgY29uc29sZS5sb2cobW9udGhseVBheW1lbnQpO1xuICAgICAgY29uc29sZS5sb2codG90YWxQYXltZW50KTtcbiAgICB9IGVsc2UgaWYgKG1vcnRnYWdlVHlwZSA9PT0gXCJpbnRlcmVzdC1vbmx5XCIpIHtcbiAgICAgIGNvbnN0IG1vbnRobHlJbnRlcmVzdFBheW1lbnQgPSBjYWxjdWxhdGVNb250aGx5SW50ZXJlc3QoXG4gICAgICAgIG1vcmdhZ2VBbW91bnQsXG4gICAgICAgIGludGVyZXN0UmF0ZSxcbiAgICAgICk7XG4gICAgICBjb25zdCB0b3RhbEludGVyZXN0UGF5bWVudCA9IGNhbGN1bGF0ZVRvdGFsSW50ZXJlc3QoXG4gICAgICAgIG1vbnRobHlJbnRlcmVzdFBheW1lbnQsXG4gICAgICAgIG1vcnRnYWdlVGVybSxcbiAgICAgICk7XG4gICAgICBkaXNwbGF5UmVzdWx0cyhtb250aGx5SW50ZXJlc3RQYXltZW50LCB0b3RhbEludGVyZXN0UGF5bWVudCk7XG4gICAgICBjb25zb2xlLmxvZyhtb250aGx5SW50ZXJlc3RQYXltZW50KTtcbiAgICAgIGNvbnNvbGUubG9nKHRvdGFsSW50ZXJlc3RQYXltZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybVN1Ym1pc3Npb247XG4iLCJpbXBvcnQgeyBhZGRDb21tYVRvTnVtYmVycyB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IHJlc3VsdHNDYXJkID0gKG1vbnRobHlSZXBheW1lbnQsIHRvdGFsUmVwYXltZW50KSA9PiB7XG4gIG1vbnRobHlSZXBheW1lbnQgPSBhZGRDb21tYVRvTnVtYmVycyhtb250aGx5UmVwYXltZW50KTtcbiAgdG90YWxSZXBheW1lbnQgPSBhZGRDb21tYVRvTnVtYmVycyh0b3RhbFJlcGF5bWVudCk7XG5cbiAgY29uc3QgcmVzdWx0Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlc3VsdENhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJlc3VsdC1jYXJkLWNvbnRhaW5lclwiKTtcbiAgcmVzdWx0Q2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb250aGx5LXJlcGF5bWVudC1yZXN1bHRzXCI+XG4gICAgICAgICAgICA8c3Bhbj5Zb3VyIG1vbnRobHkgcmVwYXltZW50czwvc3Bhbj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1vbnRobHktcmVwYXltZW50c1wiPsKjJHttb250aGx5UmVwYXltZW50fTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtcmVwYXltZW50LXJlc3VsdHNcIj5cbiAgICAgICAgICAgIDxzcGFuPlRvdGFsIHlvdSdsbCByZXBheSBvdmVyIHRoZSB0ZXJtPC9zcGFuPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwidG90YWwtcmVwYXltZW50c1wiPsKjJHt0b3RhbFJlcGF5bWVudH08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgYDtcblxuICByZXR1cm4gcmVzdWx0Q2FyZENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3VsdHNDYXJkO1xuIiwiY29uc3QgY2FsY3VsYXRlTW9udGhseVJlcGF5bWVudCA9IChhbW91bnRCb3Jyb3dlZCwgeWVhcnMsIGFubnVhbFJhdGUpID0+IHtcbiAgY29uc3QgbW9udGhseVJhdGUgPSBhbm51YWxSYXRlIC8gMTAwIC8gMTI7XG4gIGNvbnN0IHRvdGFsTW9udGhzID0geWVhcnMgKiAxMjtcblxuICBjb25zdCBtb250aGx5UmVwYXltZW50ID1cbiAgICAoYW1vdW50Qm9ycm93ZWQgKiAobW9udGhseVJhdGUgKiBNYXRoLnBvdygxICsgbW9udGhseVJhdGUsIHRvdGFsTW9udGhzKSkpIC9cbiAgICAoTWF0aC5wb3coMSArIG1vbnRobHlSYXRlLCB0b3RhbE1vbnRocykgLSAxKTtcblxuICByZXR1cm4gbW9udGhseVJlcGF5bWVudC50b0ZpeGVkKDIpO1xufTtcblxuY29uc3QgY2FsY3VsYXRlVG90YWxSZXBheW1lbnQgPSAobW9udGhseVBheW1lbnQsIHllYXJzKSA9PiB7XG4gIGNvbnN0IHRvdGFsTW9udGhzID0geWVhcnMgKiAxMjtcblxuICByZXR1cm4gKG1vbnRobHlQYXltZW50ICogdG90YWxNb250aHMpLnRvRml4ZWQoMik7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVNb250aGx5SW50ZXJlc3QgPSAoYW1vdW50Qm9ycm93ZWQsIGFubnVhbFJhdGUpID0+IHtcbiAgY29uc3QgbW9udGhseVJhdGUgPSBhbm51YWxSYXRlIC8gMTAwIC8gMTI7XG5cbiAgcmV0dXJuIChhbW91bnRCb3Jyb3dlZCAqIG1vbnRobHlSYXRlKS50b0ZpeGVkKDIpO1xufTtcblxuY29uc3QgY2FsY3VsYXRlVG90YWxJbnRlcmVzdCA9IChtb250aGx5SW50ZXJlc3QsIHllYXJzKSA9PiB7XG4gIGNvbnN0IHRvdGFsTW9udGhzID0geWVhcnMgKiAxMjtcbiAgcmV0dXJuIChtb250aGx5SW50ZXJlc3QgKiB0b3RhbE1vbnRocykudG9GaXhlZCgyKTtcbn07XG5cbmNvbnN0IGFkZENvbW1hVG9OdW1iZXJzID0gKHZhbHVlKSA9PiB7XG4gIGxldCByZXN1bHRWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teMC05Ll0vZywgXCJcIik7XG4gIGxldCBwYXJ0cyA9IHJlc3VsdFZhbHVlLnNwbGl0KFwiLlwiKTtcbiAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gIHJldHVybiBwYXJ0cy5qb2luKFwiLlwiKTtcbn07XG5cbmV4cG9ydCB7XG4gIGNhbGN1bGF0ZU1vbnRobHlSZXBheW1lbnQsXG4gIGNhbGN1bGF0ZVRvdGFsUmVwYXltZW50LFxuICBjYWxjdWxhdGVNb250aGx5SW50ZXJlc3QsXG4gIGNhbGN1bGF0ZVRvdGFsSW50ZXJlc3QsXG4gIGFkZENvbW1hVG9OdW1iZXJzLFxufTtcbiIsImNvbnN0IHZhbGlkYXRlRm9ybSA9IChtb3JnYWdlQW1vdW50LCBtb3J0Z2FnZVRlcm0sIGludGVyZXN0UmF0ZSwgbW9yZ1R5cGUpID0+IHtcbiAgY29uc3QgYW1vdW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW1vdW50LWlucHV0LXdyYXBwZXJcIik7XG4gIGNvbnN0IHRlcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXJtLWlucHV0LXdyYXBwZXJcIik7XG4gIGNvbnN0IHJhdGVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYXRlLWlucHV0LXdyYXBwZXJcIik7XG4gIGNvbnN0IGFtb3VudEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbW91bnQtZXJyb3JcIik7XG4gIGNvbnN0IHRlcm1FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVybS1lcnJvclwiKTtcbiAgY29uc3QgcmF0ZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYXRlLWVycm9yXCIpO1xuICBjb25zdCBtb3JnVHlwZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3JnLXR5cGUtZXJyb3JcIik7XG4gIGNvbnN0IGFtb3VudFNpZ24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFtb3VudC1pbnB1dC1zaWduXCIpO1xuICBjb25zdCB0ZXJtU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVybS1zaWduXCIpO1xuICBjb25zdCByYXRlU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmF0ZS1zaWduXCIpO1xuICBpZiAobW9yZ2FnZUFtb3VudCA9PT0gXCJcIikge1xuICAgIGFtb3VudEVycm9yLnRleHRDb250ZW50ID0gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCI7XG4gICAgYW1vdW50V3JhcHBlci5zdHlsZS5ib3JkZXJDb2xvciA9IFwiaHNsKDQsIDY5JSwgNTAlKVwiO1xuICAgIGFtb3VudFNpZ24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJoc2woNCwgNjklLCA1MCUpXCI7XG4gICAgYW1vdW50U2lnbi5zdHlsZS5jb2xvciA9IFwiI2ZmZmZmZlwiO1xuICB9IGVsc2Uge1xuICAgIGFtb3VudEVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBhbW91bnRXcmFwcGVyLnN0eWxlLmJvcmRlckNvbG9yID0gXCJoc2woMjAwLCAyNCUsIDQwJSlcIjtcbiAgICBhbW91bnRTaWduLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDIwMywgODclLCA5NCUpXCI7XG4gICAgYW1vdW50U2lnbi5zdHlsZS5jb2xvciA9IFwiaHNsKDIwMiwgNTUlLCAxNiUpXCI7XG4gIH1cblxuICBpZiAobW9ydGdhZ2VUZXJtID09PSBcIlwiKSB7XG4gICAgdGVybUVycm9yLnRleHRDb250ZW50ID0gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCI7XG4gICAgdGVybVdyYXBwZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImhzbCg0LCA2OSUsIDUwJSlcIjtcbiAgICB0ZXJtU2lnbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbCg0LCA2OSUsIDUwJSlcIjtcbiAgICB0ZXJtU2lnbi5zdHlsZS5jb2xvciA9IFwiI2ZmZmZmZlwiO1xuICB9IGVsc2Uge1xuICAgIHRlcm1FcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdGVybVdyYXBwZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImhzbCgyMDAsIDI0JSwgNDAlKVwiO1xuICAgIHRlcm1TaWduLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDIwMywgODclLCA5NCUpXCI7XG4gICAgdGVybVNpZ24uc3R5bGUuY29sb3IgPSBcImhzbCgyMDIsIDU1JSwgMTYlKVwiO1xuICB9XG5cbiAgaWYgKGludGVyZXN0UmF0ZSA9PT0gXCJcIikge1xuICAgIHJhdGVFcnJvci50ZXh0Q29udGVudCA9IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiO1xuICAgIHJhdGVXcmFwcGVyLnN0eWxlLmJvcmRlckNvbG9yID0gXCJoc2woNCwgNjklLCA1MCUpXCI7XG4gICAgcmF0ZVNpZ24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJoc2woNCwgNjklLCA1MCUpXCI7XG4gICAgcmF0ZVNpZ24uc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgfSBlbHNlIHtcbiAgICByYXRlRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHJhdGVXcmFwcGVyLnN0eWxlLmJvcmRlckNvbG9yID0gXCJoc2woMjAwLCAyNCUsIDQwJSlcIjtcbiAgICByYXRlU2lnbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbCgyMDMsIDg3JSwgOTQlKVwiO1xuICAgIHJhdGVTaWduLnN0eWxlLmNvbG9yID0gXCJoc2woMjAyLCA1NSUsIDE2JSlcIjtcbiAgfVxuXG4gIGlmICghbW9yZ1R5cGUpIHtcbiAgICBtb3JnVHlwZUVycm9yLnRleHRDb250ZW50ID0gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCI7XG4gIH0gZWxzZSB7XG4gICAgbW9yZ1R5cGVFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cbn07XG5cbmNvbnN0IHZhbGlkYXRlSW5wdXQgPSAoXG4gIGlucHV0RWxlbWVudCxcbiAgZXJyb3JTcGFuLFxuICB3cmFwcGVyRWxlbWVudCxcbiAgc2lnbkVsZW1lbnQsXG4pID0+IHtcbiAgaWYgKGlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHdyYXBwZXJFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gXCJoc2woMjAwLCAyNCUsIDQwJSlcIjtcbiAgICBzaWduRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbCgyMDMsIDg3JSwgOTQlKVwiO1xuICAgIHNpZ25FbGVtZW50LnN0eWxlLmNvbG9yID0gXCJoc2woMjAyLCA1NSUsIDE2JSlcIjtcbiAgfVxufTtcblxuZXhwb3J0IHsgdmFsaWRhdGVGb3JtLCB2YWxpZGF0ZUlucHV0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGV2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi9jb21wb25lbnRzL2V2ZW50SGFuZGxlcnNcIjtcbmltcG9ydCBmb3JtU3VibWlzc2lvbiBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm1TdWJtaXNzaW9uXCI7XG5cbmNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xuICBldmVudEhhbmRsZXJzKCk7XG4gIGZvcm1TdWJtaXNzaW9uKCk7XG59O1xuXG53aW5kb3cub25sb2FkID0gaW5pdGlhbExvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==