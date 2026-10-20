import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/product';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export const DetailScreen: React.FC<Props> = ({ route }) => {
    const { product } = route.params;
    const iconName = (product.icon as keyof typeof Ionicons.glyphMap) || 'layers-outline';

    const handleShare = async () => {
        try {
            await Share.share({
                message: `${product.title}\n\n${product.description}`,
            });
        } catch (e) {
            console.error('Error sharing:', e);
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Top Banner Icon */}
            <View style={styles.iconContainer}>
                <View style={styles.iconCircle}>
                    <Ionicons name={iconName} size={48} color="#0f172a" />
                </View>
                <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{product.category.toUpperCase()}</Text>
                </View>
            </View>

            {/* Title & Metadata */}
            <Text style={styles.title}>{product.title}</Text>
            <View style={styles.metaRow}>
                <Ionicons name="person-circle-outline" size={16} color="#64748b" />
                <Text style={styles.metaText}>{product.author || 'Engineering Team'}</Text>
                <Text style={styles.metaDot}>•</Text>
                <Ionicons name="time-outline" size={16} color="#64748b" />
                <Text style={styles.metaText}>{product.readTime || '3 min read'}</Text>
            </View>

            {/* Content Section */}
            <View style={styles.section}>
                <Text style={styles.sectionHeading}>Overview</Text>
                <Text style={styles.description}>{product.description}</Text>
            </View>

            {/* Architecture Highlights Card */}
            <View style={styles.highlightCard}>
                <View style={styles.highlightRow}>
                    <Ionicons name="shield-checkmark" size={20} color="#059669" />
                    <Text style={styles.highlightTitle}>Offline Persistence</Text>
                </View>
                <Text style={styles.highlightText}>
                    This item is fully cached locally on your device via AsyncStorage and remains
                    accessible even when network connectivity drops.
                </Text>
            </View>

            {/* Share / Action Button */}
            <TouchableOpacity style={styles.actionBtn} onPress={handleShare}>
                <Ionicons name="share-social-outline" size={18} color="#ffffff" style={{ marginRight: 8 }} />
                <Text style={styles.actionText}>Share Resource</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    content: {
        padding: 20,
    },
    iconContainer: {
        alignItems: 'center',
        marginVertical: 16,
    },
    iconCircle: {
        width: 88,
        height: 88,
        borderRadius: 20,
        backgroundColor: '#f8fafc',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        marginBottom: 12,
    },
    categoryBadge: {
        backgroundColor: '#f1f5f9',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    categoryText: {
        fontSize: 11,
        fontWeight: '700',
        color: '#475569',
        letterSpacing: 0.5,
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        color: '#0f172a',
        marginBottom: 10,
        lineHeight: 28,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 6,
    },
    metaText: {
        fontSize: 13,
        color: '#64748b',
    },
    metaDot: {
        color: '#94a3b8',
        marginHorizontal: 4,
    },
    section: {
        marginBottom: 20,
    },
    sectionHeading: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: 8,
    },
    description: {
        fontSize: 15,
        color: '#475569',
        lineHeight: 24,
    },
    highlightCard: {
        backgroundColor: '#f8fafc',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
    },
    highlightRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        gap: 8,
    },
    highlightTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#0f172a',
    },
    highlightText: {
        fontSize: 13,
        color: '#64748b',
        lineHeight: 19,
    },
    actionBtn: {
        backgroundColor: '#0f172a',
        height: 48,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '600',
    },
});
