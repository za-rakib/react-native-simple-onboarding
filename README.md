# react-native-simple-onboarding

A lightweight, fully customizable onboarding component library for React Native applications. Works seamlessly with **Expo** and **Bare React Native**.

Designed for simplicity and flexibility, allowing you to create beautiful onboarding screens in minutes.

## Features

- ✅ **Swipeable Slides**: Smooth horizontal swiping.
- ✅ **Expo Compatible**: 100% Pure JavaScript, no native linking required.
- ✅ **Animated Pagination Dots**: Visual indicator of the current slide.
- ✅ **Custom Backgrounds**: Set unique colors for each slide with smooth transitions.
- ✅ **Flexible Navigation**: Customizable Next, Skip, and Done buttons.
- ✅ **Image & Icon Support**: Use local images or custom components.
- ✅ **TypeScript Ready**: Full type definitions included.
- ✅ **Lightweight**: Zero heavy dependencies.

## Installation

```bash
npm install react-native-simple-onboarding
# or
yarn add react-native-simple-onboarding
```

## Basic Usage

```tsx
import React from 'react';
import { Onboarding } from 'react-native-simple-onboarding';

const App = () => {
  const slides = [
    {
      title: "Welcome",
      description: "Discover amazing features in our app.",
      image: require('./assets/welcome.png'),
      backgroundColor: "#6C63FF",
    },
    {
      title: "Stay Organized",
      description: "Keep track of your tasks with ease.",
      image: require('./assets/organize.png'),
      backgroundColor: "#4CAF50",
    },
    {
      title: "Get Started",
      description: "Join us today and boost your productivity.",
      image: require('./assets/started.png'),
      backgroundColor: "#FF5722",
    }
  ];

  return (
    <Onboarding
      slides={slides}
      onDone={() => console.log('Done pressed')}
      onSkip={() => console.log('Skip pressed')}
    />
  );
};

export default App;
```

## API Reference

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `slides` | `OnboardingSlide[]` | **Required** | Array of slide data objects. |
| `onDone` | `() => void` | **Required** | Callback when the done button is pressed. |
| `onSkip` | `() => void` | `undefined` | Callback when the skip button is pressed. |
| `showSkip` | `boolean` | `true` | Whether to show the skip button. |
| `dotColor` | `ColorValue` | `#ccc` | Color of inactive pagination dots. |
| `activeDotColor` | `ColorValue` | `#6C63FF` | Color of the active pagination dot. |
| `nextButtonText` | `string` | `Next` | Label for the next button. |
| `doneButtonText` | `string` | `Done` | Label for the done button. |
| `skipButtonText` | `string` | `Skip` | Label for the skip button. |
| `titleStyle` | `TextStyle` | `undefined` | Custom style for slide titles. |
| `descriptionStyle` | `TextStyle` | `undefined` | Custom style for slide descriptions. |
| `buttonStyle` | `ViewStyle` | `undefined` | Custom style for navigation buttons. |
| `buttonTextStyle` | `TextStyle` | `undefined` | Custom style for button labels. |

### OnboardingSlide

| Property | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | **Required**. Title of the slide. |
| `description` | `string` | **Required**. Description of the slide. |
| `image` | `ImageSourcePropType` | Optional. Image source (local or remote). |
| `icon` | `ReactNode` | Optional. Custom React component instead of an image. |
| `backgroundColor` | `ColorValue` | Optional. Background color for this specific slide. |

## License

MIT
