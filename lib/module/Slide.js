import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
const {
  width
} = Dimensions.get('window');
const Slide = ({
  slide,
  slideStyle,
  titleStyle,
  descriptionStyle
}) => {
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, {
      backgroundColor: slide.backgroundColor
    }, slideStyle]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.imageContainer
  }, slide.icon ? slide.icon : slide.image ? /*#__PURE__*/React.createElement(Image, {
    source: slide.image,
    style: styles.image,
    resizeMode: "contain"
  }) : null), /*#__PURE__*/React.createElement(View, {
    style: styles.textContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.title, titleStyle]
  }, slide.title), /*#__PURE__*/React.createElement(Text, {
    style: [styles.description, descriptionStyle]
  }, slide.description)));
};
const styles = StyleSheet.create({
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
export default /*#__PURE__*/React.memo(Slide);
//# sourceMappingURL=Slide.js.map