/// <reference types="react" />
import type { ImageSourcePropType, TextStyle, ViewStyle, ColorValue } from 'react-native';
export interface OnboardingSlide {
    /**
     * Title of the slide
     */
    title: string;
    /**
     * Description or subtitle text
     */
    description: string;
    /**
     * Image source (require or uri)
     */
    image?: ImageSourcePropType;
    /**
     * Custom component instead of an image
     */
    icon?: React.ReactNode;
    /**
     * Background color for this specific slide
     */
    backgroundColor?: ColorValue;
}
export interface OnboardingProps {
    /**
     * Array of slide data objects
     */
    slides: OnboardingSlide[];
    /**
     * Callback when the user finishes the onboarding
     */
    onDone: () => void;
    /**
     * Callback when the user skips the onboarding
     */
    onSkip?: () => void;
    /**
     * Color of the inactive pagination dots
     * @default '#ccc'
     */
    dotColor?: ColorValue;
    /**
     * Color of the active pagination dot
     * @default '#6C63FF'
     */
    activeDotColor?: ColorValue;
    /**
     * Label for the "Next" button
     * @default 'Next'
     */
    nextButtonText?: string;
    /**
     * Label for the "Done" button
     * @default 'Done'
     */
    doneButtonText?: string;
    /**
     * Label for the "Skip" button
     * @default 'Skip'
     */
    skipButtonText?: string;
    /**
     * Whether to show the skip button
     * @default true
     */
    showSkip?: boolean;
    /**
     * Custom style for the title text
     */
    titleStyle?: TextStyle;
    /**
     * Custom style for the description text
     */
    descriptionStyle?: TextStyle;
    /**
     * Custom style for the container of each slide
     */
    slideStyle?: ViewStyle;
    /**
     * Custom style for the buttons
     */
    buttonStyle?: ViewStyle;
    /**
     * Custom style for the button text
     */
    buttonTextStyle?: TextStyle;
    /**
     * Transition animation type (experimental)
     * @default 'none'
     */
    animationType?: 'none' | 'fade';
}
//# sourceMappingURL=types.d.ts.map