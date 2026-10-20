import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/product';

type Props = NativeStackScreenProps<RootStackParamList, 'PrivacyPolicy'>;

export const PrivacyPolicyScreen: React.FC<Props> = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <Ionicons name="shield-checkmark" size={48} color="#2563eb" />
                    <Text style={styles.title}>Privacy Policy</Text>
                    <Text style={styles.date}>Last updated: October 2026</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. Overview</Text>
                    <Text style={styles.paragraph}>
                        Welcome to our Universal Mobile Starter Application. We are committed
                        to protecting your personal information and your right to privacy.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. Offline Data Storage</Text>
                    <Text style={styles.paragraph}>
                        This application utilizes client-side caching (AsyncStorage) to store
                        data locally on your device. This ensures fast performance and seamless
                        offline access without unnecessary server calls.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>3. Information We Collect</Text>
                    <Text style={styles.paragraph}>
                        When using this starter application, any entered authentication credentials
                        are for demonstration and testing purposes. In production, secure encrypted
                        APIs manage your data.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>4. Contact Us</Text>
                    <Text style={styles.paragraph}>
                        If you have questions or comments about this policy, please contact our
                        development team.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    content: {
        padding: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 28,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        marginTop: 12,
    },
    date: {
        fontSize: 13,
        color: '#6b7280',
        marginTop: 4,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 22,
    },
});
