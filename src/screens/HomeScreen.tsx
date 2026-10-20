import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/product';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { OfflineBanner } from '../components/OfflineBanner';

type Props = NativeStackScreenProps<RootStackParamList>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { products, loading, isOffline, error, refresh } = useProducts();
    const [search, setSearch] = useState('');

    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <OfflineBanner isOffline={isOffline} />

            {/* Search Input */}
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search items..."
                    placeholderTextColor="#94A3B8"
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            {/* Loading State */}
            {loading && products.length === 0 ? (
                <View style={styles.center}>
                    <ActivityIndicator size="large" color="#0F172A" />
                    <Text style={styles.loadingText}>Loading feed...</Text>
                </View>
            ) : error && products.length === 0 ? (
                /* Error & Retry State */
                <View style={styles.center}>
                    <Text style={styles.errorText}>⚠️ {error}</Text>
                    <TouchableOpacity style={styles.retryBtn} onPress={refresh}>
                        <Text style={styles.retryText}>Try Again</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                /* Products List with Pull-to-refresh */
                <FlatList
                    data={filtered}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <ProductCard
                            product={item}
                            onPress={() => navigation.navigate('Detail', { product: item })}
                        />
                    )}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} />}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8FAFC' },
    searchBar: { padding: 12, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderColor: '#E2E8F0' },
    searchInput: { backgroundColor: '#F1F5F9', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, fontSize: 14 },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    loadingText: { marginTop: 10, color: '#64748B' },
    errorText: { color: '#DC2626', fontSize: 14, textAlign: 'center', marginBottom: 12 },
    retryBtn: { backgroundColor: '#0F172A', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
    retryText: { color: '#FFFFFF', fontWeight: '600' },
});