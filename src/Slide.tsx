import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ViewStyle, TextStyle } from 'react-native';
import type { OnboardingSlide } from './types';

const { width } = Dimensions.get('window');

interface SlideProps {
    slide: OnboardingSlide;
    slideStyle?: ViewStyle;
    titleStyle?: TextStyle;
    descriptionStyle?: TextStyle;
}

const Slide: React.FC<SlideProps> = ({ slide, slideStyle, titleStyle, descriptionStyle }) => {
    return (
        <View style={[styles.container, { backgroundColor: slide.backgroundColor }, slideStyle]}>
            <View style={styles.imageContainer}>
                {slide.icon ? (
                    slide.icon
                ) : slide.image ? (
                    <Image source={slide.image} style={styles.image} resizeMode="contain" />
                ) : null}
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.title, titleStyle]}>{slide.title}</Text>
                <Text style={[styles.description, descriptionStyle]}>{slide.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    imageContainer: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: width * 0.8,
        height: width * 0.8,
    },
    textContainer: {
        flex: 0.4,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 24,
    },
});

export default React.memo(Slide);
