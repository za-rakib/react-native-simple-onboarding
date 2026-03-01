import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
interface NavigationButtonsProps {
    onNext: () => void;
    onSkip?: () => void;
    onDone: () => void;
    isLastSlide: boolean;
    nextButtonText?: string;
    doneButtonText?: string;
    skipButtonText?: string;
    showSkip?: boolean;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextStyle;
}
declare const NavigationButtons: React.FC<NavigationButtonsProps>;
export default NavigationButtons;
//# sourceMappingURL=NavigationButtons.d.ts.map