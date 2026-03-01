"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Onboarding: true
};
Object.defineProperty(exports, "Onboarding", {
  enumerable: true,
  get: function () {
    return _Onboarding.default;
  }
});
exports.default = void 0;
var _Onboarding = _interopRequireDefault(require("./Onboarding"));
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = _Onboarding.default;
//# sourceMappingURL=index.js.map