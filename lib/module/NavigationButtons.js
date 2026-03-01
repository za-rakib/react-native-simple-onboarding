import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.leftContainer
  }, showSkip && !isLastSlide && onSkip && /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onSkip,
    style: [styles.button, buttonStyle]
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.buttonText, buttonTextStyle]
  }, skipButtonText))), /*#__PURE__*/React.createElement(View, {
    style: styles.rightContainer
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: isLastSlide ? onDone : onNext,
    style: [styles.button, isLastSlide ? styles.doneButton : null, buttonStyle]
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.buttonText, isLastSlide ? styles.doneButtonText : null, buttonTextStyle]
  }, isLastSlide ? doneButtonText : nextButtonText))));
};
const styles = StyleSheet.create({
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
export default NavigationButtons;
//# sourceMappingURL=NavigationButtons.js.map