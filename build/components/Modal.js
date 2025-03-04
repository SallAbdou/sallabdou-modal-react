"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};
const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  width: "90%",
  maxWidth: "500px"
};
const buttonStyle = {
  marginTop: "10px",
  padding: "8px 16px",
  backgroundColor: "#cdcdcd",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px"
};
const Modal = _ref => {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: modalOverlayStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: modalStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, children, /*#__PURE__*/_react.default.createElement("button", {
    style: buttonStyle,
    onClick: onClose
  }, "Close"))));
};
var _default = exports.default = Modal;