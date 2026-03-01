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
const Slide = ({
  slide,
  slideStyle,
  titleStyle,
  descriptionStyle
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: slide.backgroundColor
    }, slideStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.imageContainer
  }, slide.icon ? slide.icon : slide.image ? /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: slide.image,
    style: styles.image,
    resizeMode: "contain"
  }) : null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.textContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.title, titleStyle]
  }, slide.title), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.description, descriptionStyle]
  }, slide.description)));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  image: {
    width: width * 0.8,
    height: width * 0.8
  },
  textContainer: {
    flex: 0.4,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10
  },
  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 24
  }
});
var _default = exports.default = /*#__PURE__*/_react.default.memo(Slide);
//# sourceMappingURL=Slide.js.map