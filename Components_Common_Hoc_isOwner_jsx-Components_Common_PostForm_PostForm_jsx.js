/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Components_Common_Hoc_isOwner_jsx-Components_Common_PostForm_PostForm_jsx"],{

/***/ "./Components/Common/AdditionalBtns/AdditionalBtns.jsx":
/*!*************************************************************!*\
  !*** ./Components/Common/AdditionalBtns/AdditionalBtns.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ \"../node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/SoundOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/CameraOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/PlayCircleOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/FileTextOutlined.js\");\n/* harmony import */ var _AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdditionalBtns.module.scss */ \"./Components/Common/AdditionalBtns/AdditionalBtns.module.scss\");\n\n\n\n\n\n\nvar AdditionalBtns = function AdditionalBtns() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: _AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_2__.default.additionalBtns\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    shape: \"circle\",\n    className: _AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_2__.default.additionalBtn,\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.default, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    shape: \"circle\",\n    className: _AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_2__.default.additionalBtn,\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.default, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    shape: \"circle\",\n    className: _AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_2__.default.additionalBtn,\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.default, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    shape: \"circle\",\n    className: _AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_2__.default.additionalBtn,\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.default, null)\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdditionalBtns);\n\n//# sourceURL=webpack:///./Components/Common/AdditionalBtns/AdditionalBtns.jsx?");

/***/ }),

/***/ "./Components/Common/Hoc/isOwner.jsx":
/*!*******************************************!*\
  !*** ./Components/Common/Hoc/isOwner.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"../node_modules/@babel/runtime/helpers/extends/_index.mjs\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"../node_modules/@babel/runtime/helpers/objectWithoutProperties/_index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Redux_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Redux/auth/auth-selectors */ \"./Redux/auth/auth-selectors.js\");\n\n\n\n\n\n\n\nvar isOwnerPage = function isOwnerPage(Component) {\n  return function (_ref) {\n    var id = _ref.id,\n        rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, [\"id\"]);\n\n    var userId;\n\n    if (!id) {\n      userId = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useParams)().userId;\n    } else {\n      userId = id.toString();\n    }\n\n    var authId = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n      return (0,_Redux_auth_auth_selectors__WEBPACK_IMPORTED_MODULE_4__.getAutorizedUserId)(state);\n    }).toString();\n    var isOwner = !userId || userId === authId;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n      isOwner: isOwner\n    }, rest));\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isOwnerPage);\n\n//# sourceURL=webpack:///./Components/Common/Hoc/isOwner.jsx?");

/***/ }),

/***/ "./Components/Common/PhotoAvatar/PhotoAvatar.jsx":
/*!*******************************************************!*\
  !*** ./Components/Common/PhotoAvatar/PhotoAvatar.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar/style */ \"../node_modules/antd/lib/avatar/style/index.js\");\n/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/avatar */ \"../node_modules/antd/lib/avatar/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _assets_images_user_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../assets/images/user.png */ \"./assets/images/user.png\");\n\n\n\n\n\nvar PhotoAvatar = function PhotoAvatar(_ref) {\n  var photo = _ref.photo;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__.default, {\n    src: photo || _assets_images_user_png__WEBPACK_IMPORTED_MODULE_2__\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoAvatar);\n\n//# sourceURL=webpack:///./Components/Common/PhotoAvatar/PhotoAvatar.jsx?");

/***/ }),

/***/ "./Components/Common/PostForm/PostForm.jsx":
/*!*************************************************!*\
  !*** ./Components/Common/PostForm/PostForm.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ \"../node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/button */ \"../node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form/style */ \"../node_modules/antd/lib/form/style/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/form */ \"../node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ \"../node_modules/antd/lib/input/style/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ \"../node_modules/antd/lib/input/index.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../node_modules/@babel/runtime/helpers/slicedToArray/_index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _AdditionalBtns_AdditionalBtns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AdditionalBtns/AdditionalBtns */ \"./Components/Common/AdditionalBtns/AdditionalBtns.jsx\");\n/* harmony import */ var _PhotoAvatar_PhotoAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PhotoAvatar/PhotoAvatar */ \"./Components/Common/PhotoAvatar/PhotoAvatar.jsx\");\n/* harmony import */ var _PostForm_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostForm.module.scss */ \"./Components/Common/PostForm/PostForm.module.scss\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar PostForm = function PostForm(_ref) {\n  var onSubmit = _ref.onSubmit,\n      photo = _ref.photo,\n      textBtn = _ref.textBtn,\n      name = _ref.name;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"Что нового? \"),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var onChange = function onChange(_ref2) {\n    var value = _ref2.target.value;\n    setValue(value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8__.default, {\n    className: _PostForm_module_scss__WEBPACK_IMPORTED_MODULE_7__.default.form,\n    onFinish: onSubmit,\n    name: \"newPost\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8__.default.Item, {\n    name: \"newPostText\",\n    rules: [{\n      required: true,\n      message: \"Пожалуйста, введите текст поста перед отправкой!\"\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__.default.TextArea, {\n    onChange: onChange,\n    value: value,\n    autoSize: {\n      minRows: 3,\n      maxRows: 5\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"div\", {\n    className: _PostForm_module_scss__WEBPACK_IMPORTED_MODULE_7__.default.formBtnInner\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_AdditionalBtns_AdditionalBtns__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_10__.default, {\n    className: _PostForm_module_scss__WEBPACK_IMPORTED_MODULE_7__.default.formBtn,\n    htmlType: \"submit\",\n    type: \"primary\"\n  }, textBtn)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\n\n//# sourceURL=webpack:///./Components/Common/PostForm/PostForm.jsx?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/AdditionalBtns/AdditionalBtns.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/AdditionalBtns/AdditionalBtns.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".AdditionalBtns_additionalBtns__3krGC {\\n  margin-top: 7px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between; }\\n\\n.AdditionalBtns_additionalBtn__3Ekgf {\\n  margin-left: 7px; }\\n  .AdditionalBtns_additionalBtn__3Ekgf:first-child {\\n    margin-left: 0; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./Components/Common/AdditionalBtns/AdditionalBtns.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,eAAe;EACf,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,yBAA8B;MAA9B,sBAA8B;UAA9B,8BAA8B,EAAE;;AAElC;EACE,gBAAgB,EAAE;EAClB;IACE,cAAc,EAAE\",\"sourcesContent\":[\".additionalBtns {\\n  margin-top: 7px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between; }\\n\\n.additionalBtn {\\n  margin-left: 7px; }\\n  .additionalBtn:first-child {\\n    margin-left: 0; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"additionalBtns\": \"AdditionalBtns_additionalBtns__3krGC\",\n\t\"additionalBtn\": \"AdditionalBtns_additionalBtn__3Ekgf\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Components/Common/AdditionalBtns/AdditionalBtns.module.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B4%5D");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/PostForm/PostForm.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/PostForm/PostForm.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".PostForm_inner__2frNX {\\n  margin: 10px 0;\\n  padding: 16px 20px 16px;\\n  background-color: #fff; }\\n\\n.PostForm_formBtnInner__1cWcl {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center; }\\n\\n.PostForm_form__1OGKq {\\n  margin-top: 5px;\\n  height: auto; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./Components/Common/PostForm/PostForm.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,cAAc;EACd,uBAAuB;EACvB,sBAAsB,EAAE;;AAE1B;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAA8B;MAA9B,sBAA8B;UAA9B,8BAA8B;EAC9B,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB,EAAE;;AAEvB;EACE,eAAe;EACf,YAAY,EAAE\",\"sourcesContent\":[\".inner {\\n  margin: 10px 0;\\n  padding: 16px 20px 16px;\\n  background-color: #fff; }\\n\\n.formBtnInner {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.form {\\n  margin-top: 5px;\\n  height: auto; }\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"inner\": \"PostForm_inner__2frNX\",\n\t\"formBtnInner\": \"PostForm_formBtnInner__1cWcl\",\n\t\"form\": \"PostForm_form__1OGKq\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./Components/Common/PostForm/PostForm.module.scss?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B1%5D!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B3%5D!../node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B10%5D.use%5B4%5D");

/***/ }),

/***/ "./Components/Common/AdditionalBtns/AdditionalBtns.module.scss":
/*!*********************************************************************!*\
  !*** ./Components/Common/AdditionalBtns/AdditionalBtns.module.scss ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./AdditionalBtns.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/AdditionalBtns/AdditionalBtns.module.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./AdditionalBtns.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/AdditionalBtns/AdditionalBtns.module.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./AdditionalBtns.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/AdditionalBtns/AdditionalBtns.module.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_AdditionalBtns_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Components/Common/AdditionalBtns/AdditionalBtns.module.scss?");

/***/ }),

/***/ "./Components/Common/PostForm/PostForm.module.scss":
/*!*********************************************************!*\
  !*** ./Components/Common/PostForm/PostForm.module.scss ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_PostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./PostForm.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/PostForm/PostForm.module.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_PostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_PostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_PostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./PostForm.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/PostForm/PostForm.module.scss\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_PostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./PostForm.module.scss */ \"../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[10].use[3]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./Components/Common/PostForm/PostForm.module.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_PostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_PostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_PostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_10_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_10_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_10_use_4_PostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./Components/Common/PostForm/PostForm.module.scss?");

/***/ }),

/***/ "./assets/images/user.png":
/*!********************************!*\
  !*** ./assets/images/user.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"60b92e7867e93f546c0e.png\";\n\n//# sourceURL=webpack:///./assets/images/user.png?");

/***/ })

}]);