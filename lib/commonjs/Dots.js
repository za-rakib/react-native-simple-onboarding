"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  width
} = _reactNative.Dimensions.get('window');
const Dots = ({
  data,
  scrollX,
  dotColor = '#ccc',
  activeDotColor = '#6C63FF'
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, data.map((_, i) => {
    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
    const dotWidth = scrollX.interpolate({
      inputRange,
      outputRange: [10, 20, 10],
      extrapolate: 'clamp'
    });
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.3, 1, 0.3],
      extrapolate: 'clamp'
    });
    const backgroundColor = scrollX.interpolate({
      inputRange,
      outputRange: [dotColor, activeDotColor, dotColor],
      extrapolate: 'clamp'
    });
    return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
      key: i.toString(),
      style: [styles.dot, {
        width: dotWidth,
        opacity,
        backgroundColor
      }]
    });
  }));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8
  }
});
var _default = exports.default = Dots;
//# sourceMappingURL=Dots.js.map