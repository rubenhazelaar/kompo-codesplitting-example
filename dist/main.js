/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();

/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;

/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"branch"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};

/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;

/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = construct;
exports.constructClass = constructClass;
exports.render = render;
exports.update = update;
exports.kompo = kompo;
exports.setState = setState;
exports.getState = getState;
exports.mount = mount;
exports.unmount = unmount;
exports.unmountAll = unmountAll;
exports.mountIndex = mountIndex;
exports.react = react;
exports.slot = slot;
exports.hasSlot = hasSlot;
exports.getRouter = getRouter;
exports.compose = compose;
exports.append = append;
exports.getProps = getProps;
exports.getMethods = getMethods;
exports.children = children;
exports.appendChildren = appendChildren;

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _hasProxy = __webpack_require__(3);

var _hasProxy2 = _interopRequireDefault(_hasProxy);

var _isObject = __webpack_require__(4);

var _isObject2 = _interopRequireDefault(_isObject);

var _observe = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adds construct function to Element prototype
 */
Object.defineProperty(Element.prototype, 'construct', {
    writable: true,
    value: function value() {
        throw new Error('Must override the construct method');
    }
});

/**
 * Creates a compnent from an Element
 *
 * @param tag
 * @param constructFn
 * @param defaultProps
 * @returns {function()}
 */
function construct(tag, constructFn) {
    var defaultProps = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    return function () {
        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var c = kompo(document.createElement(tag));
        c.kompo.props = (0, _merge2.default)(_extends({}, defaultProps), props);
        c.construct = constructFn;
        return c;
    };
}

function constructClass(tag, constructClass) {
    var defaultProps = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var methods = getMethods(constructClass.prototype);
    return function () {
        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var c = kompo(document.createElement(tag));
        c.kompo.props = (0, _merge2.default)(_extends({}, defaultProps), props);
        (0, _merge2.default)(c, methods);
        return c;
    };
}

/**
 * Renders given component
 *
 * @param Element
 */
function render(Element) {
    var kompo = Element.kompo;
    if (kompo.initial) {
        Element.construct(kompo.props);
        kompo.initial = false;
    } else {
        update(Element);
    }
}

function update(Element) {
    var kompo = Element.kompo,
        mounts = kompo.mounts,
        selector = kompo.selector,
        state = selector ? selector(Element.__kompo__.state) : Element.__kompo__.state,
        isRoot = Element === Element.__kompo__.root;

    // State is false, do not run statefulls
    if (state) {
        // If is object and flagged dirty or not at all than do not update
        var checkIfDirty = _hasProxy2.default ? (0, _isObject2.default)(state) || Array.isArray(state) : (0, _isObject2.default)(state) && !Array.isArray(state);

        if (!(checkIfDirty && state.hasOwnProperty('__kompo_dirty__') && state.__kompo_dirty__.length === 0)) {
            var statefulls = kompo.statefulls;
            for (var i = 0, l = statefulls.length; i < l; ++i) {
                statefulls[i](state, Element);
            }
        }
    }

    for (var _i = 0, _l = mounts.length; _i < _l; ++_i) {
        render(mounts[_i]);
    }

    if (isRoot) {
        (0, _observe.markClean)(state);
    }
}

function kompo(Element) {
    Element.kompo = {
        initial: true,
        props: {},
        defaultProps: {},
        mounts: [],
        statefulls: [],
        slots: {},
        routed: undefined,
        selector: undefined,
        state: undefined,
        unmount: undefined,
        children: undefined
    };

    return Element;
}

function setState(Element, selector) {
    var kompo = Element.kompo;
    kompo.state = selector(Element.__kompo__.state);
    kompo.selector = selector;
}

function getState(Element) {
    var selector = Element.kompo.selector;
    return selector ? selector(Element.__kompo__.state) : Element.__kompo__.state;
}

function mount(parent, child, selector, sel) {
    var el = void 0;
    if (arguments.length >= 3 && (Array.isArray(selector) || selector instanceof Element)) {
        el = child;
        child = selector;
        selector: selector = sel;
    } else {
        el = parent;
    }

    if (Array.isArray(child)) {
        _mountAll(parent, el, child, selector);
    } else {
        _mount(parent, el, child, selector);
    }
}

function _mount(parent, Element, child, selector) {
    if (selector) {
        setState(child, selector);
    }

    render(child);

    Element.appendChild(child);

    // Protection if same element is appended multiple times
    var mounts = parent.kompo.mounts;
    if (mounts.indexOf(child) === -1) {
        child.kompo.unmount = function (Element) {
            mounts.splice(mounts.indexOf(Element), 1);
        };
        mounts.push(child);
    }
}

function _mountAll(parent, Element, children, selector) {
    var frag = document.createDocumentFragment();

    // Mount all children ...
    for (var i = 0, l = children.length; i < l; ++i) {
        _mount(parent, frag, children[i], selector ? selector(i) : undefined);
    }

    // ... append to DOM in one go
    Element.appendChild(frag);
}

function unmount(Element) {
    var unm = Element.kompo.unmount;
    if (unm) {
        unm(Element);
    }
}

function unmountAll(Element) {
    Element.kompo.mounts = [];
}

function mountIndex(parent, child) {
    return parent.kompo.mounts.indexOf(child);
}

function react(Element, statefull) {
    var kompo = Element.kompo,
        selector = kompo.selector;

    kompo.statefulls.push(statefull);
    statefull(selector ? selector(Element.__kompo__.state) : Element.__kompo__.state, Element);
}

/**
 * Mimics the slot functionality of
 * Web Components
 *
 * Slots are named, their name & location is
 * predefined in the component.
 *
 * @param Element
 * @param name
 * @param cb
 */
function slot(Element, name, cb) {
    if (arguments.length === 2) {
        Element.kompo.slots[name](Element);
    } else {
        Element.kompo.slots[name] = cb;
    }
}

/**
 * Checks whether a slot with the given name exists
 *
 * @param Element
 * @param name
 * @returns {boolean}
 */
function hasSlot(Element, name) {
    return Element.kompo.slots[name] ? true : false;
}

/**
 * Gets the router from an Element. The router is
 * add globally to the Element prototype
 *
 * @param Element
 * @returns {router}
 */
function getRouter(Element) {
    return Element.__kompo__.router;
}

/**
 * Adds properties to an existing component,
 * making it possible to compose a component with
 * different behavior.
 *
 * @param constructComponent
 * @param composeProps
 * @returns {function()}
 */
function compose(constructComponent, composeProps) {
    return function () {
        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return constructComponent((0, _merge2.default)(composeProps, props));
    };
}

function append(parent, child) {
    render(child);
    parent.appendChild(child);
}

function getProps(Element) {
    return Element.kompo.props;
}

function getMethods(clss) {
    var props = [],
        methods = {};

    var obj = clss;

    do {
        var ps = Object.getOwnPropertyNames(obj);

        var fps = [];
        for (var i = 0, l = ps.length; i < l; ++i) {
            var p = ps[i];
            if (typeof obj[p] === 'function' //only the methods
            && p != 'constructor' //not the constructor
            && (i == 0 || p !== ps[i - 1]) //not overriding in this prototype
            && props.indexOf(p) === -1 //not overridden in a child
            ) {
                    fps.push(p);
                    methods[p] = clss[p];
                }
        }

        props.push.apply(props, fps);
    } while ((obj = Object.getPrototypeOf(obj)) && //walk-up the prototype chain
    Object.getPrototypeOf(obj) //not the the Object prototype methods (hasOwnProperty, etc...)
    );

    return methods;
}

function children(Element, children) {
    Element.kompo.children = children;
    return Element;
}

function appendChildren(Element, useFragment) {
    var children = Element.kompo.children,
        parent = useFragment ? document.createDocumentFragment() : Element;

    for (var i = 0, l = children.length; i < l; ++i) {
        var child = children[i];
        if (child.hasOwnProperty('kompo')) {
            render(child);
        }
        parent.appendChild(child);
    }

    if (useFragment) {
        Element.appendChild(parent);
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.util = exports.state = exports.router = undefined;

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(9);

var _router2 = _interopRequireDefault(_router);

var _app = __webpack_require__(10);

var _app2 = _interopRequireDefault(_app);

var _dispatch = __webpack_require__(11);

var _dispatch2 = _interopRequireDefault(_dispatch);

var _observe = __webpack_require__(2);

var _observe2 = _interopRequireDefault(_observe);

var _hasProxy = __webpack_require__(3);

var _hasProxy2 = _interopRequireDefault(_hasProxy);

var _isObject = __webpack_require__(4);

var _isObject2 = _interopRequireDefault(_isObject);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _isFunction = __webpack_require__(7);

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = {
    construct: _router2.default,
    route: _router.route,
    indexRoute: _router.indexRoute,
    swap: _router.swap
};

var state = {
    app: _app2.default,
    dispatch: _dispatch2.default,
    observe: _observe2.default,
    inheritObserved: _observe.inheritObserved,
    markClean: _observe.markClean,
    markDirty: _observe.markDirty
};

var util = {
    hasProxy: _hasProxy2.default,
    isObject: _isObject2.default,
    merge: _merge2.default,
    isFunction: _isFunction2.default
};

exports.default = {
    construct: _component2.default,
    render: _component.render,
    update: _component.update,
    kompo: _component.kompo,
    setState: _component.setState,
    mount: _component.mount,
    react: _component.react,
    slot: _component.slot,
    getRouter: _component.getRouter,
    unmount: _component.unmount,
    unmountAll: _component.unmountAll,
    mountIndex: _component.mountIndex,
    getState: _component.getState,
    compose: _component.compose,
    append: _component.append,
    getProps: _component.getProps,
    constructClass: _component.constructClass,
    children: _component.children,
    appendChildren: _component.appendChildren
};
exports.router = router;
exports.state = state;
exports.util = util;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = observe;
exports.inheritObserved = inheritObserved;
exports.markClean = markClean;
exports.markDirty = markDirty;

var _hasProxy = __webpack_require__(3);

var _hasProxy2 = _interopRequireDefault(_hasProxy);

var _isObject = __webpack_require__(4);

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reservedKeys = ['length', '__kompo_dirty__'];

function observe(obj) {
    var isObj = (0, _isObject2.default)(obj),
        isArray = Array.isArray(obj);

    if (!isObj && !isArray) return obj;

    Object.defineProperty(obj, '__kompo_dirty__', {
        writable: true,
        value: []
    });

    if (!_hasProxy2.default) {
        obj = observeObjectFallback(obj);
    } else {
        var keys = Object.keys(obj);
        for (var i = 0, l = keys.length; i < l; ++i) {
            var key = keys[i];
            if (reservedKeys.indexOf(key) === -1) {
                obj[key] = observe(obj[key]);
            }
        }

        if (isArray) {
            obj = new Proxy(obj, {
                apply: function apply(target, thisArg, argumentList) {
                    target.__kompo_dirty__.push(true);
                    return thisArg[target].apply(this, argumentList);
                },
                deleteProperty: function deleteProperty(target) {
                    target.__kompo_dirty__.push(true);
                    return true;
                },
                set: function set(target, prop, val) {
                    if (prop !== '__kompo_dirty__' && val != target[prop] && target.__kompo_dirty__.indexOf(prop) === -1) {
                        target.__kompo_dirty__.push(prop);
                    }

                    target[prop] = observe(val);
                    return true;
                }
            });
        } else {
            obj = new Proxy(obj, {
                get: function get(target, prop) {
                    return target[prop];
                },
                set: function set(target, prop, val) {
                    if (prop !== '__kompo_dirty__' && val != target[prop] && target.__kompo_dirty__.indexOf(prop) === -1) {
                        target.__kompo_dirty__.push(prop);
                    }

                    target[prop] = observe(val);
                    return true;
                }
            });
        }
    }

    return obj;
}

function observeObjectFallback(obj) {
    var keys = Object.keys(obj);

    var _loop = function _loop(i, l) {
        var key = keys[i],
            newKey = '__' + key,
            v = obj[key];

        Object.defineProperty(obj, newKey, {
            writable: true,
            value: v
        });

        Object.defineProperty(obj, key, {
            get: function get() {
                return this[newKey];
            },
            set: function set(val) {
                if ((0, _isObject2.default)(val)) {
                    observe(val);
                }

                if (val != this[key] && obj.__kompo_dirty__.indexOf(key) === -1) {
                    obj.__kompo_dirty__.push(key);
                }
                this[newKey] = val;
            }
        });

        obj[key] = v;
    };

    for (var i = 0, l = keys.length; i < l; ++i) {
        _loop(i, l);
    }

    return obj;
}

function inheritObserved(obj) {
    var ignored = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    Object.defineProperty(obj, '__kompo_dirty__', {
        writable: true,
        value: []
    });

    var keys = Object.keys(obj);

    for (var i = 0, l = keys.length; i < l; ++i) {
        var _key = keys[i],
            value = obj[_key];

        if (ignored.indexOf(_key) > -1) continue;

        if (typeof value === 'undefined') return;

        if (value && value.hasOwnProperty('__kompo_dirty__') && value.__kompo_dirty__.length > 0) {
            obj.__kompo_dirty__.push(true);
        }
    }

    return obj;
}

function markClean(obj) {
    var isObj = (0, _isObject2.default)(obj),
        isArray = Array.isArray(obj);

    if (!isObj && !isArray) return obj;

    obj.__kompo_dirty__ = [];

    if (isArray) {
        for (var i = 0, l = obj.length; i < l; ++i) {
            markClean(obj[i]);
        }
    } else {
        var keys = Object.keys(obj);
        for (var _i = 0, _l = keys.length; _i < _l; ++_i) {
            markClean(obj[keys[_i]]);
        }
    }
}

function markDirty(obj) {
    obj.__kompo_dirty__.push(true);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'Proxy' in window;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isObject;

/**
 * Checks if `value` is the language type of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * **Note:** See the [ES5 spec](https://es5.github.io/#x8) for more details.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'function' || value && type == 'object' || false;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = merge;

/**
 * Merges given objects
 *
 * @param {...Object} objs - Any given amount of objects
 * @returns {Object}
 */
function merge() {
    var object = Array.prototype.shift.call(arguments);
    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        for (var j in obj) {
            object[j] = obj[j];
        }
    }

    return object;
}

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunction;

/**
 * Checks if given variable is a function
 *
 * @param {*} functionToCheck
 * @returns {boolean}
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/***/ }),
/* 8 */
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
exports.default = construct('div', function (_ref) {
    var heading = _ref.heading,
        paramIndex = _ref.paramIndex;

    this.setAttribute('data-type', 'Leaf');

    // Create Elements
    var h2 = document.createElement('h2'),
        span = document.createElement('span');

    h2.textContent = heading;

    // Append children
    this.appendChild(h2);
    this.appendChild(span);

    var r = getRouter(this);

    // Show parameter if it is set
    react(this, function () {
        var params = r.getParams();
        if (params.length > 0) {
            span.textContent = 'Param at index ' + paramIndex + ' = ' + params[paramIndex];
        }
    });
}, {
    heading: 'Leaf construct',
    paramIndex: 0
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = construct;
exports.route = route;
exports.indexRoute = indexRoute;
exports.swap = swap;

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _component = __webpack_require__(0);

var _isFunction = __webpack_require__(7);

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function construct(props) {
    props = (0, _merge2.default)({
        base: '/',
        url: '/',
        notFoundCallback: function notFoundCallback(url) {
            throw new Error('No matching route found for url: ' + url + '. Provide a notFoundCallback callback option or correct the url or route.');
        }
    }, props);

    var base = void 0,
        url = void 0,
        index = 0,
        params = [];

    var rawRoutes = {},
        routes = {};

    setBase(props.base);
    setUrl(props.url);
    parseRoute(props.routes);

    function setBase(b) {
        if (b[0] !== '/') {
            base = '/' + b;
            return;
        }

        if (b.slice(-1) === '/') {
            base = b.slice(0, -1);
        }
    }

    function setUrl(u) {
        url = u[0] === '/' ? u : '/' + u;
    }

    function isUrl(u) {
        u = u[0] === '/' ? u : '/' + u;
        return url === u;
    }

    function parseRoute(Route) {
        buildPath(Route);

        var rawKeys = Object.keys(rawRoutes);
        for (var i = 0, l = rawKeys.length; i < l; i++) {
            var k = rawKeys[i],

            // TODO: Could this be improved?
            nk = k.replace(/(:([\w-]+))/g, '([\\w-]+)').replace(/\//g, '\\/');
            routes[nk] = rawRoutes[k];
        }
    }

    function buildPath(route) {
        var ancestors = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
        var level = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

        var children = route.children;
        var routeComponent = route.component;

        if (routeComponent instanceof Element) {
            routeComponent.kompo.level = level;
        } else if (routeComponent instanceof Promise || (0, _isFunction2.default)(routeComponent)) {
            // Set a level to the promise
            routeComponent.kompo = { level: level };
        }

        if (!children) return;

        var basePath = route.path,
            isRoot = ancestors.length === 0;

        for (var i = 0, l = children.length; i < l; i++) {
            var childRoute = children[i],
                componentPath = !isRoot ? ancestors.concat(childRoute.component) : ancestors.concat(routeComponent, childRoute.component);
            var _path = void 0;

            if (childRoute.path[0] === '/') {
                _path = childRoute.path;
            } else if (isRoot) {
                _path = basePath + childRoute.path;
            } else if (childRoute.path === '') {
                _path = basePath;
            } else {
                _path = basePath + '/' + childRoute.path;
            }

            childRoute.path = _path;
            rawRoutes[_path] = componentPath;
            buildPath(childRoute, componentPath, level + 1);
        }
    }

    function match(url, against) {
        var keys = Object.keys(against);
        for (var i = 0, l = keys.length; i < l; i++) {
            var regexstr = keys[i],
                _match = url.match(new RegExp('^' + regexstr + '$'));
            if (_match !== null) {
                _match.shift();
                params = _match;
                return against[regexstr];
            }
        }

        if (props.notFoundCallback) {
            props.notFoundCallback(url);
        }

        return []; // Return empty array to keep it all running
    }

    return {
        getParams: function getParams() {
            return params;
        },
        isUrl: isUrl,
        getUrl: function getUrl() {
            return url;
        },
        setTo: function setTo(u) {
            u = u.replace(base, '');
            if (isUrl(u)) return false;

            setUrl(u);
            return true;
        },
        goTo: function goTo(u) {
            var title = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
            var data = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            if (isUrl(u)) return false;

            setUrl(u);

            history.pushState(data, title, base + url);
            return true;
        },
        get: function get(parent, depth) {
            if (parent instanceof Element) {
                index = parent.kompo.level + 1;
            }

            var m = match(url, routes);

            if (depth) {
                if (depth < 0) return m.slice(index - depth, index + 1);
                return m.slice(index, index + depth);
            } else {
                return m[index];
            }
        }
    };
}
function route(path, component, children) {
    return {
        path: path, component: component, children: children
    };
}

function indexRoute(component) {
    return route('', component);
}

function swap(component, router, element) {
    var c = router.get(component),
        fn = void 0;

    if (c) {
        if ((0, _isFunction2.default)(c)) {
            {
                fn = c;
                c = _toPromise(c);
            }
        }

        if (c instanceof Element) {
            _swap(component, c, element);
        } else if (c instanceof Promise) {
            if (c.kompo.resolved) {
                _swap(component, c.kompo.resolved, element);
            } else {
                c.then(function (rc) {
                    rc.kompo.level = c.kompo.level;
                    _swap(component, rc, element, true);
                    c.kompo.resolved = rc;
                    if (fn) fn.kompo.resolved = rc;
                }).catch(function () {
                    console.error("Cannot dynamically load module for route");
                });
            }
        }
    }
}

function _toPromise(fn) {
    var pr = fn();

    // Transfer kompo object including level to the promise
    pr.kompo = fn.kompo;

    return pr;
}

function _swap(parent, routedComponent, element) {
    var renderWithRouted = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

    var routed = parent.kompo.routed,
        el = element ? element : parent;

    if (routed) {
        if (renderWithRouted) (0, _component.render)(routedComponent);
        el.replaceChild(routedComponent, routed);
        parent.kompo.mounts.splice(parent.kompo.mounts.indexOf(routed, 1));
    } else {
        (0, _component.render)(routedComponent);
        el.appendChild(routedComponent);
    }

    if (parent.kompo.mounts.indexOf(routedComponent) == -1) {
        parent.kompo.mounts.push(routedComponent);
    }

    parent.kompo.routed = routedComponent;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = app;

var _observe = __webpack_require__(2);

var _observe2 = _interopRequireDefault(_observe);

var _component = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(root, state, router) {
    state = (0, _observe2.default)(state);

    // Make available for all Elements
    Object.defineProperty(Element.prototype, '__kompo__', {
        value: {
            root: root,
            state: state,
            router: router
        }
    });

    return {
        start: function start(selector) {
            if (selector) {
                (0, _component.setState)(root, selector);
            }
            (0, _component.render)(root);
            return root;
        }
    };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = dispatch;

var _component = __webpack_require__(0);

function dispatch(Element, cb, noRender) {
    if (!cb) return;

    var kompo = Element.kompo,
        state = kompo.selector ? kompo.selector(Element.__kompo__.state) : Element.__kompo__.state;

    if (!state) return;

    cb(state);
    if (!noRender) (0, _component.render)(Element.__kompo__.root);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _kompo = __webpack_require__(1);

var _kompo2 = _interopRequireDefault(_kompo);

var _leaf = __webpack_require__(8);

var _leaf2 = _interopRequireDefault(_leaf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var construct = _kompo2.default.construct,
    react = _kompo2.default.react,
    getRouter = _kompo2.default.getRouter,
    dispatch = _kompo.state.dispatch,
    app = _kompo.state.app;

// Router classes and components
// Component and content creation classes and functions

var route = _kompo.router.route,
    indexRoute = _kompo.router.indexRoute,
    swap = _kompo.router.swap;

// Example components with self-explanatory name

// Create root construct for navigation
var root = construct('div', function () {
    var _this = this;

    var h1 = document.createElement('h1'),
        nav = document.createElement('nav'),
        links = ['', 'simple', 'param/123', 'branch', 'branch/leaf', 'branch/branch', 'branch/branch/leaf', 'rooted_nested', 'nonexisting'],
        r = getRouter(this);

    h1.textContent = 'Router example';

    var _loop = function _loop(i, l) {
        var a = document.createElement('a');
        a.addEventListener('click', function () {
            r.goTo(links[i]);

            // Dispatch change to state
            dispatch(_this, function (state) {
                state.url = links[i];
            });
        });
        a.setAttribute('href', 'javascript:void(0);');
        a.textContent = links[i];
        nav.appendChild(a);
    };

    for (var i = 0, l = links.length; i < l; ++i) {
        _loop(i, l);
    }

    this.appendChild(h1);
    this.appendChild(nav);

    // On update swap the new
    // routed construct
    react(this, function () {
        console.log("LEVEL ONE SWAP ");
        swap(_this, r);
    });
});

// Create route structure
var routes = route('/', root(), [
// Each route array needs a IndexRoute
indexRoute((0, _leaf2.default)({
    heading: 'Index construct'
})), route('simple', (0, _leaf2.default)({
    heading: 'Simple construct'
})), route('param/:param', (0, _leaf2.default)({
    heading: 'Route with a param, shown in Component'
})), route('branch', //branch()
// To dynamically load a component
// IMPORTANT: does not work as intended with the setup in examples.webpack.js
function () {
    return __webpack_require__.e/* require.ensure */(0).then((function (require) {
        return __webpack_require__(6).default({ heading: "Dynamically imported" });
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}, [indexRoute((0, _leaf2.default)({
    heading: 'Nested index construct',
    input: true
})), route('leaf', (0, _leaf2.default)({
    heading: 'Nested simple construct'
})), route('branch', //branch()
// To dynamically load a component
// IMPORTANT: does not work as intended with the setup in examples.webpack.js
function () {
    return __webpack_require__.e/* require.ensure */(0).then((function (require) {
        return __webpack_require__(6).default({ heading: "Nested dynamically imported" });
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}, [indexRoute((0, _leaf2.default)({
    heading: 'Double nested index construct',
    input: true
})), route('leaf', (0, _leaf2.default)({
    heading: 'Double nested simple construct'
}))])
// Url is very simple, although it is a nested construct
, route('/rooted_nested', (0, _leaf2.default)({
    heading: 'Rooted nested construct'
}))])]);

// An empty state for this example.
// A state is needed because it contains the router
var st = { url: '/' };

// Create router and set a not found Callback
var r = _kompo.router.construct({
    routes: routes,
    notFoundCallback: function notFoundCallback(url) {
        alert('Url: ' + url + ' not found');
        // Always throw an error to interrupt the update cycle
        throw new Error('Url: ' + url + ' not found');
    }
});

// Get the root construct from the router
var ro = r.get();

// Append to body
document.body.appendChild(ro);

// Set the state (including the router) to the root construct
app(ro, st, r).start();

// Listen to popstate event to make sure the page render when the
// user goes through it's history
window.addEventListener('popstate', function () {
    // Just update the whole tree from the root up.
    if (r.setTo(window.location.pathname)) {
        dispatch(ro, function (state) {
            state.url = r.getUrl();
        });
    }
});

/***/ })
/******/ ]);