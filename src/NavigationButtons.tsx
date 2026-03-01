import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

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

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
    onNext,
    onSkip,
    onDone,
    isLastSlide,
    nextButtonText = 'Next',
    doneButtonText = 'Done',
    skipButtonText = 'Skip',
    showSkip = true,
    buttonStyle,
    buttonTextStyle,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {showSkip && !isLastSlide && onSkip && (
                    <TouchableOpacity onPress={onSkip} style={[styles.button, buttonStyle]}>
                        <Text style={[styles.buttonText, buttonTextStyle]}>{skipButtonText}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity
                    onPress={isLastSlide ? onDone : onNext}
                    style={[styles.button, isLastSlide ? styles.doneButton : null, buttonStyle]}
                >
                    <Text style={[styles.buttonText, isLastSlide ? styles.doneButtonText : null, buttonTextStyle]}>
                        {isLastSlide ? doneButtonText : nextButtonText}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
        height: 80,
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    doneButton: {
        backgroundColor: '#6C63FF',
        borderRadius: 25,
    },
    doneButtonText: {
        color: '#fff',
    },
});

export default NavigationButtons;
