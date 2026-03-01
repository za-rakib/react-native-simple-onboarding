"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Slide = _interopRequireDefault(require("./Slide"));
var _Dots = _interopRequireDefault(require("./Dots"));
var _NavigationButtons = _interopRequireDefault(require("./NavigationButtons"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  width
} = _reactNative.Dimensions.get('window');
const Onboarding = ({
  slides,
  onDone,
  onSkip,
  dotColor,
  activeDotColor,
  nextButtonText,
  doneButtonText,
  skipButtonText,
  showSkip = true,
  titleStyle,
  descriptionStyle,
  slideStyle,
  buttonStyle,
  buttonTextStyle
}) => {
  const scrollX = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const flatListRef = (0, _react.useRef)(null);
  const [currentIndex, setCurrentIndex] = (0, _react.useState)(0);
  const onViewableItemsChanged = (0, _react.useRef)(({
    viewableItems
  }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;
  const viewabilityConfig = (0, _react.useRef)({
    viewAreaCoveragePercentThreshold: 50
  }).current;
  const handleNext = (0, _react.useCallback)(() => {
    if (currentIndex < slides.length - 1) {
      var _flatListRef$current;
      (_flatListRef$current = flatListRef.current) === null || _flatListRef$current === void 0 || _flatListRef$current.scrollToIndex({
        index: currentIndex + 1,
        animated: true
      });
    }
  }, [currentIndex, slides.length]);
  const backgroundInterpolation = scrollX.interpolate({
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.backgroundColor || '#fff')
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.container, {
      backgroundColor: backgroundInterpolation
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    ref: flatListRef,
    data: slides,
    renderItem: ({
      item
    }) => /*#__PURE__*/_react.default.createElement(_Slide.default, {
      slide: item,
      slideStyle: slideStyle,
      titleStyle: titleStyle,
      descriptionStyle: descriptionStyle
    }),
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    pagingEnabled: true,
    bounces: false,
    keyExtractor: (item, index) => `${item.title}-${index}`,
    onScroll: _reactNative.Animated.event([{
      nativeEvent: {
        contentOffset: {
          x: scrollX
        }
      }
    }], {
      useNativeDriver: false
    }),
    onViewableItemsChanged: onViewableItemsChanged,
    viewabilityConfig: viewabilityConfig,
    scrollEventThrottle: 32
  }), /*#__PURE__*/_react.default.createElement(_Dots.default, {
    data: slides,
    scrollX: scrollX,
    dotColor: dotColor,
    activeDotColor: activeDotColor
  }), /*#__PURE__*/_react.default.createElement(_NavigationButtons.default, {
    onNext: handleNext,
    onSkip: onSkip,
    onDone: onDone,
    isLastSlide: currentIndex === slides.length - 1,
    nextButtonText: nextButtonText,
    doneButtonText: doneButtonText,
    skipButtonText: skipButtonText,
    showSkip: showSkip,
    buttonStyle: buttonStyle,
    buttonTextStyle: buttonTextStyle
  }));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
var _default = exports.default = Onboarding;
//# sourceMappingURL=Onboarding.js.map