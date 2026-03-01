import React from 'react';
import { View, StyleSheet, Animated, Dimensions, ColorValue } from 'react-native';

const { width } = Dimensions.get('window');

interface DotsProps {
    data: any[];
    scrollX: Animated.Value;
    dotColor?: ColorValue;
    activeDotColor?: ColorValue;
}

const Dots: React.FC<DotsProps> = ({ data, scrollX, dotColor = '#ccc', activeDotColor = '#6C63FF' }) => {
    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });

                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: [dotColor as string, activeDotColor as string, dotColor as string],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        key={i.toString()}
                        style={[
                            styles.dot,
                            {
                                width: dotWidth,
                                opacity,
                                backgroundColor,
                            },
                        ]}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
    },
});

export default Dots;
