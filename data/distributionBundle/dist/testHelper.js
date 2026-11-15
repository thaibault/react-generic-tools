if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import "core-js/modules/es.array.push.js";
import "core-js/modules/es.iterator.constructor.js";
import "core-js/modules/es.iterator.filter.js";
import "core-js/modules/es.iterator.for-each.js";
import "@jest/globals";
import { globalContext as __WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__ } from "clientnode";
import { act as __WEBPACK_EXTERNAL_MODULE_react_act__, createElement as __WEBPACK_EXTERNAL_MODULE_react_createElement__ } from "react";
import { flushSync as __WEBPACK_EXTERNAL_MODULE_react_dom_c0b5c364_flushSync__ } from "react-dom";
import { createRoot as __WEBPACK_EXTERNAL_MODULE_react_dom_client_82ef521c_createRoot__ } from "react-dom/client";

;// external "core-js/modules/es.array.push.js"

;// external "core-js/modules/es.iterator.constructor.js"

;// external "core-js/modules/es.iterator.filter.js"

;// external "core-js/modules/es.iterator.for-each.js"

;// external "@jest/globals"

;// external "clientnode"

;// external "react"

;// external "react-dom"

;// external "react-dom/client"

;// ./src/testHelper.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module testHelper *//* !
    region header
    [Project page](https://tsickert.com/react-material-input)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(r){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){for(var t,o=[],a=e.call(r);!(t=a.next()).done;)o.push(t.value);return o}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};__WEBPACK_EXTERNAL_MODULE_clientnode_globalContext__.IS_REACT_ACT_ENVIRONMENT=true;var prepareTestEnvironment=function prepareTestEnvironment(currentBeforeEach,currentAfterEach){var root=null;var result={container:null,render:function render(component,flush){var _result$container;if(flush===void 0){flush=true}__WEBPACK_EXTERNAL_MODULE_react_act__(function(){if(root){if(flush)__WEBPACK_EXTERNAL_MODULE_react_dom_c0b5c364_flushSync__(function(){if(root)root.render(component)});else root.render(component);}else console.error("You call \"render\" outside a testing context.")});return(_result$container=result.container)!==null&&_result$container!==void 0&&_result$container.childNodes.length?result.container.childNodes[0]:result.container},runHook:function runHook(hook,/*
                eslint-disable @typescript-eslint/no-useless-default-assignment
            */givenOptions/*
                eslint-enable @typescript-eslint/no-useless-default-assignment
            */){if(givenOptions===void 0){givenOptions={}}var options=_objectSpread({flush:true,parameters:[],wrapper:null},givenOptions);var hookResult={};var TestComponent=function TestComponent(_ref){var parameters=_ref.parameters;hookResult.value=hook.apply(void 0,_toConsumableArray(parameters));return null};var render=function render(){for(var _len=arguments.length,parameters=new Array(_len),_key=0;_key<_len;_key++){parameters[_key]=arguments[_key]}var componentElement=__WEBPACK_EXTERNAL_MODULE_react_createElement__(TestComponent,{parameters:parameters});if(options.wrapper)componentElement=__WEBPACK_EXTERNAL_MODULE_react_createElement__(options.wrapper.component,_objectSpread(_objectSpread({},options.wrapper.properties||{}),{},{children:componentElement}));__WEBPACK_EXTERNAL_MODULE_react_act__(function(){if(root){if(options.flush)__WEBPACK_EXTERNAL_MODULE_react_dom_c0b5c364_flushSync__(function(){if(root)root.render(componentElement)});else root.render(componentElement);}else console.error("You call \"render\" outside a testing context.")})};render.apply(void 0,_toConsumableArray(options.parameters));return{result:hookResult,render:render}}};currentBeforeEach(function(){result.container=document.createElement("div");result.container.setAttribute("class","test-wrapper");document.body.appendChild(result.container);if(!root)__WEBPACK_EXTERNAL_MODULE_react_act__(function(){root=__WEBPACK_EXTERNAL_MODULE_react_dom_client_82ef521c_createRoot__(result.container)})});currentAfterEach(function(){var _result$container2;if(root)__WEBPACK_EXTERNAL_MODULE_react_act__(function(){if(root)root.unmount();root=null});(_result$container2=result.container)===null||_result$container2===void 0||_result$container2.remove();result.container=null});return result};/* harmony default export */ var testHelper = (prepareTestEnvironment);
export { testHelper as default, prepareTestEnvironment };
