import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../types/product';

interface Props {
    product: Product;
    onPress: () => void;
}

export const ProductCard: React.FC<Props> = ({ product, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
            <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
            <View style={styles.info}>
                <Text style={styles.category}>{product.category.toUpperCase()}</Text>
                <Text style={styles.title} numberOfLines={2}>
                    {product.title}
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                    <Text style={styles.rating}>★ {product.rating?.rate ?? 4.5}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 12,
        marginHorizontal: 16,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 8,
        marginRight: 12,
        backgroundColor: '#F8FAFC',
    },
    info: {
        flex: 1,
    },
    category: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '700',
        marginBottom: 2,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 6,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: '800',
        color: '#0F172A',
    },
    rating: {
        fontSize: 12,
        color: '#D97706',
        fontWeight: '600',
    },
});