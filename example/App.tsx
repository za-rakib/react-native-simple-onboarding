import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Onboarding } from 'react-native-simple-onboarding';

const App = () => {
    const handleDone = () => {
        console.log('Onboarding Complete!');
        // Handle navigation to main app
    };

    const handleSkip = () => {
        console.log('Onboarding Skipped!');
        // Handle navigation to main app
    };

    const slides = [
        {
            title: 'Welcome to SimpleOnboarding',
            description: 'The easiest way to build onboarding screens in React Native.',
            backgroundColor: '#6C63FF',
            // In a real app, you'd use require('./assets/slide1.png')
            icon: <View style={styles.placeholderIcon}><Text style={styles.iconText}>🚀</Text></View>
        },
        {
            title: 'Fully Customizable',
            description: 'Change colors, fonts, and buttons with zero effort.',
            backgroundColor: '#4CAF50',
            icon: <View style={styles.placeholderIcon}><Text style={styles.iconText}>🎨</Text></View>
        },
        {
            title: 'Ready for Production',
            description: 'Built with performance and accessibility in mind.',
            backgroundColor: '#FF5722',
            icon: <View style={styles.placeholderIcon}><Text style={styles.iconText}>✅</Text></View>
        },
    ];

    return (
        <View style={styles.container}>
            <Onboarding
                slides={slides}
                onDone={handleDone}
                onSkip={handleSkip}
                activeDotColor="#fff"
                dotColor="rgba(255, 255, 255, 0.3)"
                buttonTextStyle={{ color: '#fff' }}
                doneButtonText="Get Started"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    placeholderIcon: {
        width: 200,
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        fontSize: 80,
    },
});

export default App;
