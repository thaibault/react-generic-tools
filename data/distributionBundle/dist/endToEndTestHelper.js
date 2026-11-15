if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import { expect as __WEBPACK_EXTERNAL_MODULE__playwright_test_e576f637_expect__ } from "@playwright/test";

;// external "@playwright/test"

;// ./src/endToEndTestHelper.ts
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module endToEndTestHelper *//* !
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
function _regenerator(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,e,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.toStringTag||"@@toStringTag";function i(o,n,a,i){var u=n&&n.prototype instanceof Generator?n:Generator,f=Object.create(u.prototype);return _regeneratorDefine2(f,"_invoke",function(t,o,n){var a,i,u,f=0,p=n||[],y=!1,G={p:0,n:0,v:r,a:l,f:l.bind(r,4),d:function d(t,e){return a=t,i=0,u=r,G.n=e,c}};function l(t,o){for(i=t,u=o,e=0;!y&&f&&!n&&e<p.length;e++){var n,a=p[e],l=G.p,F=a[2];t>3?(n=F===o)&&(u=a[(i=a[4])?5:(i=3,3)],a[4]=a[5]=r):a[0]<=l&&((n=t<2&&l<a[1])?(i=0,G.v=o,G.n=a[1]):l<F&&(n=t<3||a[0]>o||o>F)&&(a[4]=t,a[5]=o,G.n=F,i=0))}if(n||t>1)return c;throw y=!0,o}return function(n,p,F){if(f>1)throw TypeError("Generator is already running");for(y&&1===p&&l(p,F),i=p,u=F;(e=i<2?r:u)||!y;){a||(i?i<3?(i>1&&(G.n=-1),l(i,u)):G.n=u:G.v=u);try{if(f=2,a){if(i||(n="next"),e=a[n]){if(!(e=e.call(a,u)))throw TypeError("iterator result is not an object");if(!e.done)return e;u=e.value,i<2&&(i=0)}else 1===i&&(e=a.return)&&e.call(a),i<2&&(u=TypeError("The iterator does not provide a '"+n+"' method"),i=1);a=r}else if((e=(y=G.n<0)?u:t.call(o,G))!==c)break}catch(t){a=r,i=1,u=t}finally{f=1}}return{value:e,done:y}}}(o,a,i),!0),f}var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(_regeneratorDefine2(e={},n,function(){return this}),e),f=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(u);function p(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,_regeneratorDefine2(r,a,"GeneratorFunction")),r.prototype=Object.create(f),r}return GeneratorFunction.prototype=GeneratorFunctionPrototype,_regeneratorDefine2(f,"constructor",GeneratorFunctionPrototype),_regeneratorDefine2(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName="GeneratorFunction",_regeneratorDefine2(GeneratorFunctionPrototype,a,"GeneratorFunction"),_regeneratorDefine2(f),_regeneratorDefine2(f,a,"Generator"),_regeneratorDefine2(f,n,function(){return this}),_regeneratorDefine2(f,"toString",function(){return"[object Generator]"}),(_regenerator=function _regenerator(){return{w:i,m:p}})()}function _regeneratorDefine2(e,r,n,t){var i=Object.defineProperty;try{i({},"",{})}catch(e){i=0}_regeneratorDefine2=function _regeneratorDefine(e,r,n,t){function o(r,n){_regeneratorDefine2(e,r,function(e){return this._invoke(r,n,e)})}r?i?i(e,r,{value:n,enumerable:!t,configurable:!t,writable:!t}):e[r]=n:(o("next",0),o("throw",1),o("return",2))},_regeneratorDefine2(e,r,n,t)}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)})}};// endregion
var isSameLocator=/*#__PURE__*/function(){var _isSameLocator=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(firstLocator,secondLocator){var firstHandle,secondHandle;return _regenerator().w(function(_context){while(1)switch(_context.n){case 0:_context.n=1;return firstLocator.elementHandle();case 1:firstHandle=_context.v;_context.n=2;return secondLocator.elementHandle();case 2:secondHandle=_context.v;return _context.a(2,firstLocator.page().evaluate(function(compare){if(compare.left===compare.right)return true;return compare.left.isEqualNode(compare.right)},{left:firstHandle,right:secondHandle}))}},_callee)}));function isSameLocator(_x,_x2){return _isSameLocator.apply(this,arguments)}return isSameLocator}();var waitForFinishedLoading=/*#__PURE__*/function(){var _waitForFinishedLoading=_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(page,loadingSpinner){var _t;return _regenerator().w(function(_context2){while(1)switch(_context2.n){case 0:_context2.n=1;return page.waitForLoadState("networkidle");case 1:_t=loadingSpinner;if(!_t){_context2.n=3;break}_context2.n=2;return loadingSpinner.isVisible();case 2:_t=_context2.v;case 3:if(!_t){_context2.n=4;break}_context2.n=4;return __WEBPACK_EXTERNAL_MODULE__playwright_test_e576f637_expect__(loadingSpinner).not.toBeAttached();case 4:return _context2.a(2)}},_callee2)}));function waitForFinishedLoading(_x3,_x4){return _waitForFinishedLoading.apply(this,arguments)}return waitForFinishedLoading}();var formatEndUserDate=function formatEndUserDate(date){return(/*
        NOTE: Playwright does not work with the local date time string
        representation like it is visible in browser:

        date.toLocaleDateString()
     */"".concat(String(date.getFullYear()),"-")+"".concat(String(date.getMonth()+1).padStart(2,"0"),"-")+String(date.getDate()).padStart(2,"0"))};var formatEndUserTime=function formatEndUserTime(date){return(/*
        NOTE: Playwright does not work with the local date time string
        representation like it is visible in browser:

        date.toLocaleTimeString()
    */"".concat(String(date.getHours()).padStart(2,"0"),":")+String(date.getMinutes()).padStart(2,"0"))};var forwardLogging=function forwardLogging(page){page.on("console",function(message){var type=message.type().replace("warning","warn").replace("verbose","debug");if(typeof console[type]==="function")console[type](message.text());else console.error("Could not forward message of type \"".concat(type,"\":"),message.text())})};
export { formatEndUserDate, formatEndUserTime, forwardLogging, isSameLocator, waitForFinishedLoading };
