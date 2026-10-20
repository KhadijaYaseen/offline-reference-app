import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../types/product';

interface Props {
    product: Product;
    onPress: () => void;
}

export const ProductCard: React.FC<Props> = ({ product, onPress }) => {
    const iconName = (product.icon as keyof typeof Ionicons.glyphMap) || 'layers-outline';

    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
            <View style={styles.iconCircle}>
                <Ionicons name={iconName} size={22} color="#0f172a" />
            </View>
            <View style={styles.info}>
                <View style={styles.headerRow}>
                    <Text style={styles.category}>{product.category.toUpperCase()}</Text>
                    <Text style={styles.meta}>{product.date || 'Today'}</Text>
                </View>
                <Text style={styles.title} numberOfLines={1}>
                    {product.title}
                </Text>
                <Text style={styles.description} numberOfLines={2}>
                    {product.description}
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.author}>{product.author || 'Engineering Team'}</Text>
                    <Text style={styles.readTime}>{product.readTime || '3 min read'}</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#94a3b8" style={styles.chevron} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 14,
        marginHorizontal: 16,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#f8fafc',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    info: {
        flex: 1,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    category: {
        fontSize: 10,
        color: '#64748b',
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    meta: {
        fontSize: 11,
        color: '#94a3b8',
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: 4,
    },
    description: {
        fontSize: 13,
        color: '#64748b',
        lineHeight: 18,
        marginBottom: 6,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    author: {
        fontSize: 11,
        fontWeight: '600',
        color: '#0f172a',
    },
    readTime: {
        fontSize: 11,
        color: '#94a3b8',
    },
    chevron: {
        marginLeft: 8,
    },
});
