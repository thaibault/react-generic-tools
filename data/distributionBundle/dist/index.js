if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import "core-js/modules/es.array.push.js";
import "core-js/modules/es.iterator.constructor.js";
import "core-js/modules/es.iterator.filter.js";
import "core-js/modules/es.iterator.for-each.js";
import "core-js/modules/es.iterator.map.js";
import { paginate as __WEBPACK_EXTERNAL_MODULE_clientnode_paginate__ } from "clientnode";
import { useMemo as __WEBPACK_EXTERNAL_MODULE_react_useMemo__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";
import { Fragment as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_Fragment__, jsx as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__ } from "react/jsx-runtime";

;// external "core-js/modules/es.array.push.js"

;// external "core-js/modules/es.iterator.constructor.js"

;// external "core-js/modules/es.iterator.filter.js"

;// external "core-js/modules/es.iterator.for-each.js"

;// external "core-js/modules/es.iterator.map.js"

;// external "clientnode"

;// external "react"

;// external "react/jsx-runtime"

;// ./src/index.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Generic *//* !
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
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["boundaryCount","className","disabled","hideNextButton","hidePrevButton","page","pageSize","render","showFirstButton","showLastButton","siblingCount","total"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};function _objectWithoutProperties(t,r){if(null==t)return{};var o,n,i=_objectWithoutPropertiesLoose(t,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],-1===r.indexOf(o)&&{}.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}function _slicedToArray(e,i){return _iterableToArrayLimit(e,i)||_unsupportedIterableToArray(e,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _iterableToArrayLimit(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(Array.isArray(r)&&(null==e||e===("undefined"!=typeof Symbol&&[][Symbol.iterator])||e===[]["@@iterator"]))return r;if(null!=e){var l,n,i,a,u=[],o=!0,f=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;o=!1}else for(;!(o=(l=i.call(e)).done)&&(u.push(l.value),u.length!==t);o=!0);}catch(r){f=!0,n=r}finally{try{if(!o&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(f)throw n}}return u}};// endregion
// region hooks
/**
 * Custom hook to memorize any values with a default empty array. Useful if
 * using previous constant complex object within a render function.
 * @param value - Value to memorize.
 * @param dependencies - Optional dependencies when to update given value.
 * @returns Given cached value.
 */function useMemorizedValue(value){for(var _len=arguments.length,dependencies=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){dependencies[_key-1]=arguments[_key]}return __WEBPACK_EXTERNAL_MODULE_react_useMemo__(function(){return value},dependencies)}/**
 * Use state wrapper to deal with references. It only sets a new state if the
 * given reference isn't null.
 * @param initialValue - To set state to.
 * @returns Whatever "useState" would return.
 */var useReferenceState=function useReferenceState(initialValue){var _useState=__WEBPACK_EXTERNAL_MODULE_react_useState__(initialValue),_useState2=_slicedToArray(_useState,2),value=_useState2[0],setValue=_useState2[1];return[value,useMemorizedValue(function(reference){if(reference!==null)setValue(reference)})]};// endregion
// region components
var Pagination=function Pagination(_ref){var _ref$boundaryCount=_ref.boundaryCount,boundaryCount=_ref$boundaryCount===void 0?1:_ref$boundaryCount,_ref$className=_ref.className,className=_ref$className===void 0?"pagination":_ref$className,_ref$disabled=_ref.disabled,disabled=_ref$disabled===void 0?false:_ref$disabled,_ref$hideNextButton=_ref.hideNextButton,hideNextButton=_ref$hideNextButton===void 0?false:_ref$hideNextButton,_ref$hidePrevButton=_ref.hidePrevButton,hidePrevButton=_ref$hidePrevButton===void 0?false:_ref$hidePrevButton,_ref$page=_ref.page,page=_ref$page===void 0?1:_ref$page,_ref$pageSize=_ref.pageSize,pageSize=_ref$pageSize===void 0?5:_ref$pageSize,_ref$render=_ref.render,render=_ref$render===void 0?function(_ref2){var page=_ref2.page,type=_ref2.type;return type==="page"?String(page):type}:_ref$render,_ref$showFirstButton=_ref.showFirstButton,showFirstButton=_ref$showFirstButton===void 0?false:_ref$showFirstButton,_ref$showLastButton=_ref.showLastButton,showLastButton=_ref$showLastButton===void 0?false:_ref$showLastButton,_ref$siblingCount=_ref.siblingCount,siblingCount=_ref$siblingCount===void 0?1:_ref$siblingCount,_ref$total=_ref.total,total=_ref$total===void 0?100:_ref$total,additionalProperties=_objectWithoutProperties(_ref,_excluded);return total>(pageSize!==null&&pageSize!==void 0?pageSize:1)?/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__("div",{className:className,children:/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__("ul",_objectSpread(_objectSpread({},additionalProperties),{},{children:__WEBPACK_EXTERNAL_MODULE_clientnode_paginate__({boundaryCount:boundaryCount,disabled:disabled,hideNextButton:hideNextButton,hidePrevButton:hidePrevButton,page:page,pageSize:pageSize,showFirstButton:showFirstButton,showLastButton:showLastButton,siblingCount:siblingCount,total:total}).map(function(item){return/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__("li",{children:render(item)},item.type+(typeof item.page==="number"?"-".concat(String(item.page)):""))})}))}):/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__(__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_Fragment__,{})};// endregion
export { Pagination, useMemorizedValue, useReferenceState };
