import React from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
const {
  width
} = Dimensions.get('window');
const Dots = ({
  data,
  scrollX,
  dotColor = '#ccc',
  activeDotColor = '#6C63FF'
}) => {
  return /*#__PURE__*/React.createElement(View, {
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
    return /*#__PURE__*/React.createElement(Animated.View, {
      key: i.toString(),
      style: [styles.dot, {
        width: dotWidth,
        opacity,
        backgroundColor
      }]
    });
  }));
};
const styles = StyleSheet.create({
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
export default Dots;
//# sourceMappingURL=Dots.js.map