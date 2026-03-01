"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NavigationButtons = ({
  onNext,
  onSkip,
  onDone,
  isLastSlide,
  nextButtonText = 'Next',
  doneButtonText = 'Done',
  skipButtonText = 'Skip',
  showSkip = true,
  buttonStyle,
  buttonTextStyle
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.leftContainer
  }, showSkip && !isLastSlide && onSkip && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onSkip,
    style: [styles.button, buttonStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.buttonText, buttonTextStyle]
  }, skipButtonText))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.rightContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: isLastSlide ? onDone : onNext,
    style: [styles.button, isLastSlide ? styles.doneButton : null, buttonStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.buttonText, isLastSlide ? styles.doneButtonText : null, buttonTextStyle]
  }, isLastSlide ? doneButtonText : nextButtonText))));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    height: 80
  },
  leftContainer: {
    flex: 1
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333'
  },
  doneButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 25
  },
  doneButtonText: {
    color: '#fff'
  }
});
var _default = exports.default = NavigationButtons;
//# sourceMappingURL=NavigationButtons.js.map