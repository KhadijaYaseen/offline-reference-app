import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/product';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

interface Slide {
    id: number;
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle: string;
}

const SLIDES: Slide[] = [
    {
        id: 1,
        icon: 'rocket-outline',
        title: 'Universal Starter',
        subtitle: 'A clean, production-ready foundation for your mobile applications.',
    },
    {
        id: 2,
        icon: 'cloud-offline-outline',
        title: 'Offline Resilient',
        subtitle: 'Smart local caching and exponential retry keep your users connected.',
    },
    {
        id: 3,
        icon: 'checkmark-circle-outline',
        title: 'Ready to Scale',
        subtitle: 'Pre-built navigation tabs, auth flow, and modular components.',
    },
];

export const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < SLIDES.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            navigation.replace('Login');
        }
    };

    const handleSkip = () => {
        navigation.replace('Login');
    };

    const slide = SLIDES[currentIndex];
    const isLast = currentIndex === SLIDES.length - 1;

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Bar with Skip */}
            <View style={styles.topBar}>
                {!isLast ? (
                    <TouchableOpacity onPress={handleSkip}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={{ width: 40 }} />
                )}
            </View>

            {/* Slide Content */}
            <View style={styles.content}>
                <View style={styles.iconCircle}>
                    <Ionicons name={slide.icon} size={64} color="#2563eb" />
                </View>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.subtitle}>{slide.subtitle}</Text>
            </View>

            {/* Dots Indicator */}
            <View style={styles.dotsContainer}>
                {SLIDES.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            index === currentIndex && styles.activeDot,
                        ]}
                    />
                ))}
            </View>

            {/* Bottom Button */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>
                        {isLast ? 'Get Started' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    topBar: {
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    skipText: {
        fontSize: 15,
        color: '#6b7280',
        fontWeight: '500',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    iconCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#eff6ff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 15,
        color: '#6b7280',
        textAlign: 'center',
        lineHeight: 22,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#e5e7eb',
    },
    activeDot: {
        width: 24,
        backgroundColor: '#2563eb',
    },
    bottomBar: {
        paddingHorizontal: 20,
        paddingBottom: 24,
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});
