import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/product';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export const DetailScreen: React.FC<Props> = ({ route }) => {
    const { product } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
            </View>

            <View style={styles.content}>
                <Text style={styles.category}>{product.category.toUpperCase()}</Text>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>

                <View style={styles.ratingBadge}>
                    <Text style={styles.ratingText}>
                        ★ {product.rating?.rate ?? 4.5} ({product.rating?.count ?? 120} reviews)
                    </Text>
                </View>

                <Text style={styles.heading}>Description</Text>
                <Text style={styles.description}>{product.description}</Text>

                <TouchableOpacity style={styles.cartBtn} activeOpacity={0.8}>
                    <Text style={styles.cartText}>🛒 Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    imageContainer: { padding: 24, backgroundColor: '#FFFFFF', alignItems: 'center' },
    image: { width: 220, height: 220 },
    content: { padding: 20, backgroundColor: '#F8FAFC', borderTopLeftRadius: 24, borderTopRightRadius: 24 },
    category: { fontSize: 12, fontWeight: '700', color: '#64748B', marginBottom: 4 },
    title: { fontSize: 18, fontWeight: '800', color: '#0F172A', marginBottom: 8 },
    price: { fontSize: 22, fontWeight: '900', color: '#0F172A', marginBottom: 8 },
    ratingBadge: { alignSelf: 'flex-start', backgroundColor: '#FEF3C7', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginBottom: 16 },
    ratingText: { fontSize: 12, color: '#D97706', fontWeight: '700' },
    heading: { fontSize: 15, fontWeight: '700', color: '#1E293B', marginBottom: 6 },
    description: { fontSize: 14, color: '#64748B', lineHeight: 22, marginBottom: 24 },
    cartBtn: { backgroundColor: '#0F172A', paddingVertical: 14, borderRadius: 12, alignItems: 'center' },
    cartText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});