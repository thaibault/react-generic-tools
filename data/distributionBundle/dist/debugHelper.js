if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import "core-js/modules/es.set.difference.v2.js";
import "core-js/modules/es.set.intersection.v2.js";
import "core-js/modules/es.set.is-disjoint-from.v2.js";
import "core-js/modules/es.set.is-subset-of.v2.js";
import "core-js/modules/es.set.is-superset-of.v2.js";
import "core-js/modules/es.set.symmetric-difference.v2.js";
import "core-js/modules/es.set.union.v2.js";
import { Logger as __WEBPACK_EXTERNAL_MODULE_clientnode_Logger__, limit as __WEBPACK_EXTERNAL_MODULE_clientnode_limit__, represent as __WEBPACK_EXTERNAL_MODULE_clientnode_represent__ } from "clientnode";
import { useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__ } from "react";

;// external "core-js/modules/es.set.difference.v2.js"

;// external "core-js/modules/es.set.intersection.v2.js"

;// external "core-js/modules/es.set.is-disjoint-from.v2.js"

;// external "core-js/modules/es.set.is-subset-of.v2.js"

;// external "core-js/modules/es.set.is-superset-of.v2.js"

;// external "core-js/modules/es.set.symmetric-difference.v2.js"

;// external "core-js/modules/es.set.union.v2.js"

;// external "clientnode"

;// external "react"

;// ./src/debugHelper.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module debugHelper *//* !
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
function _createForOfIteratorHelper(e,t){var _n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_n){if(Array.isArray(e)||(_n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){_n&&(e=_n);var o=0,F=function F(){};return{s:F,n:function n(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u,i=!0;return{s:function s(){_n=_n.call(e)},n:function n(){i=!0;var r=_n.next();return r.done?{done:!0}:{value:r.value,done:i=!1}},e:function e(r){a=!0,u=r},f:function f(){try{i||null==_n.return||_n.return()}finally{if(a)throw u}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)};// endregion
var log=new __WEBPACK_EXTERNAL_MODULE_clientnode_Logger__({name:"react-generic-tools.debug-helper",level:"debug"});var _getChanges=function getChanges(oldValue,newValue,path,recursiveLimit){if(path===void 0){path=[]}if(recursiveLimit===void 0){recursiveLimit=10}if(Object.is(oldValue,newValue))return[];if(oldValue!==null&&_typeof(oldValue)==="object"&&!Array.isArray(oldValue)&&!(typeof Blob!=="undefined"&&oldValue instanceof Blob)&&newValue!==null&&_typeof(newValue)==="object"&&!Array.isArray(newValue)&&!(typeof Blob!=="undefined"&&newValue instanceof Blob)){if(recursiveLimit===0)return[{oldValue:oldValue,newValue:newValue,path:path.concat("__RECURSIVE_LIMIT_REACHED__")}];var changes=[];// NOTE: Respect removed keys as well.
var _iterator=_createForOfIteratorHelper(new Set(Object.keys(oldValue).concat(Object.keys(newValue)))),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var name=_step.value;changes=changes.concat(_getChanges(oldValue[name],newValue[name],path.concat(name),recursiveLimit-1))}}catch(err){_iterator.e(err)}finally{_iterator.f()}return changes}return[{oldValue:oldValue,newValue:newValue,path:path}]};var useOldValue=function useOldValue(value){var reference=__WEBPACK_EXTERNAL_MODULE_react_useRef__(undefined);__WEBPACK_EXTERNAL_MODULE_react_useEffect__(function(){reference.current=value},[value]);return reference.current};var useLogChanges=function useLogChanges(value,description,recursiveLimit){if(description===void 0){description=[]}if(recursiveLimit===void 0){recursiveLimit=10}var oldValue=useOldValue(value);var changes=_getChanges(oldValue,value,[].concat(description),recursiveLimit);var _iterator2=_createForOfIteratorHelper(changes),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _step2$value=_step2.value,path=_step2$value.path,_oldValue=_step2$value.oldValue,newValue=_step2$value.newValue;var locator=path.length>0?" in \"".concat(path.join("."),"\""):"";void log.debug("Change found".concat(locator,"; old value:"),"\"".concat(__WEBPACK_EXTERNAL_MODULE_clientnode_limit__(__WEBPACK_EXTERNAL_MODULE_clientnode_represent__(_oldValue)),"\"; new value:"),"\"".concat(__WEBPACK_EXTERNAL_MODULE_clientnode_limit__(__WEBPACK_EXTERNAL_MODULE_clientnode_represent__(newValue)),"\""))}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}};
export { _getChanges as getChanges, log, useLogChanges, useOldValue };
