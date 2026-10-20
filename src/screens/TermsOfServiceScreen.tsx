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

type Props = NativeStackScreenProps<RootStackParamList, 'TermsOfService'>;

export const TermsOfServiceScreen: React.FC<Props> = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <Ionicons name="document-text-outline" size={48} color="#0f172a" />
                    <Text style={styles.title}>Terms of Service</Text>
                    <Text style={styles.date}>Effective Date: October 2026</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
                    <Text style={styles.paragraph}>
                        By accessing or using this Mobile Starter Application, you agree to be bound
                        by these Terms of Service. If you disagree with any part of these terms, you
                        may not access the service.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. Use License</Text>
                    <Text style={styles.paragraph}>
                        Permission is granted to use this application as a foundational reference
                        architecture and boilerplate for internal engineering and production mobile
                        development.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>3. User Accounts & Data</Text>
                    <Text style={styles.paragraph}>
                        When creating dummy credentials or testing authentication flows within this
                        starter kit, data is stored locally on device storage. In production
                        environments, secure cloud authentication handles account persistence.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>4. Disclaimer</Text>
                    <Text style={styles.paragraph}>
                        This boilerplate is provided "as is" with automated testing, resilient
                        offline caching, and modular navigation patterns to accelerate delivery.
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
        color: '#0f172a',
        marginTop: 12,
    },
    date: {
        fontSize: 13,
        color: '#64748b',
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
