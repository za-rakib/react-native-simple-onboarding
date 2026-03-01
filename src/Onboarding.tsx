import React, { useRef, useState, useCallback } from 'react';
import { FlatList, Animated, StyleSheet, Dimensions } from 'react-native';
import Slide from './Slide';
import Dots from './Dots';
import NavigationButtons from './NavigationButtons';
import type { OnboardingProps } from './types';

const { width } = Dimensions.get('window');

const Onboarding: React.FC<OnboardingProps> = ({
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
    buttonTextStyle,
}) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({
        viewAreaCoveragePercentThreshold: 50,
    }).current;

    const handleNext = useCallback(() => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
            });
        }
    }, [currentIndex, slides.length]);

    const backgroundInterpolation = scrollX.interpolate({
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map((slide) => (slide.backgroundColor as string) || '#fff'),
    });

    return (
        <Animated.View style={[styles.container, { backgroundColor: backgroundInterpolation }]}>
            <FlatList
                ref={flatListRef}
                data={slides}
                renderItem={({ item }) => (
                    <Slide
                        slide={item}
                        slideStyle={slideStyle}
                        titleStyle={titleStyle}
                        descriptionStyle={descriptionStyle}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item, index) => `${item.title}-${index}`}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                scrollEventThrottle={32}
            />

            <Dots
                data={slides}
                scrollX={scrollX}
                dotColor={dotColor}
                activeDotColor={activeDotColor}
            />

            <NavigationButtons
                onNext={handleNext}
                onSkip={onSkip}
                onDone={onDone}
                isLastSlide={currentIndex === slides.length - 1}
                nextButtonText={nextButtonText}
                doneButtonText={doneButtonText}
                skipButtonText={skipButtonText}
                showSkip={showSkip}
                buttonStyle={buttonStyle}
                buttonTextStyle={buttonTextStyle}
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Onboarding;
