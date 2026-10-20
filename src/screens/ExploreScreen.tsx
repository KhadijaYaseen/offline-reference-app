import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types/product';

type Props = BottomTabScreenProps<BottomTabParamList, 'ExploreTab'>;

interface ExploreItem {
    id: string;
    title: string;
    category: string;
    description: string;
    icon: keyof typeof Ionicons.glyphMap;
}

const CATEGORIES = ['All', 'Technology', 'Design', 'Finance', 'Lifestyle'];

const EXPLORE_DATA: ExploreItem[] = [
    {
        id: '1',
        title: 'Building Resilient Offline Systems',
        category: 'Technology',
        description: 'Learn how local caching and sync strategies improve mobile UX.',
        icon: 'phone-portrait-outline',
    },
    {
        id: '2',
        title: 'Modern Mobile UI Design Patterns',
        category: 'Design',
        description: 'Explore typography hierarchy, spacing scales, and accessible color palettes.',
        icon: 'color-palette-outline',
    },
    {
        id: '3',
        title: 'Fintech Transaction Architectures',
        category: 'Finance',
        description: 'Patterns for idempotent payment requests and offline queuing.',
        icon: 'wallet-outline',
    },
    {
        id: '4',
        title: 'Productivity Workflows for Engineers',
        category: 'Lifestyle',
        description: 'Time management, asynchronous communication, and deep work setups.',
        icon: 'time-outline',
    },
    {
        id: '5',
        title: 'Cross-Platform State Management',
        category: 'Technology',
        description: 'Comparing hooks, context, and client-side persistence in React Native.',
        icon: 'hardware-chip-outline',
    },
];

export const ExploreScreen: React.FC<Props> = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter items based on active category and search query
    const filteredItems = EXPLORE_DATA.filter((item) => {
        const matchesCategory =
            selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={18} color="#64748b" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search topics, articles, or resources..."
                    placeholderTextColor="#94a3b8"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchQuery('')}>
                        <Ionicons name="close-circle" size={18} color="#94a3b8" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Category Filter Chips */}
            <View style={styles.chipsWrapper}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.chipsContainer}
                >
                    {CATEGORIES.map((cat) => {
                        const isSelected = selectedCategory === cat;
                        return (
                            <TouchableOpacity
                                key={cat}
                                style={[styles.chip, isSelected && styles.activeChip]}
                                onPress={() => setSelectedCategory(cat)}
                            >
                                <Text style={[styles.chipText, isSelected && styles.activeChipText]}>
                                    {cat}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>

            {/* Explore Feed */}
            <FlatList
                data={filteredItems}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="search" size={40} color="#cbd5e1" />
                        <Text style={styles.emptyTitle}>No results found</Text>
                        <Text style={styles.emptySubtitle}>
                            Try searching for something else or reset the filter.
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.cardHeader}>
                            <View style={styles.iconCircle}>
                                <Ionicons name={item.icon} size={20} color="#0f172a" />
                            </View>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{item.category}</Text>
                            </View>
                        </View>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardDescription}>{item.description}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 10,
        marginHorizontal: 16,
        marginTop: 12,
        marginBottom: 12,
        paddingHorizontal: 12,
        height: 44,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#0f172a',
    },
    chipsWrapper: {
        marginBottom: 12,
    },
    chipsContainer: {
        paddingHorizontal: 16,
        gap: 8,
    },
    chip: {
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 20,
        backgroundColor: '#f1f5f9',
    },
    activeChip: {
        backgroundColor: '#0f172a',
    },
    chipText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#475569',
    },
    activeChipText: {
        color: '#ffffff',
        fontWeight: '600',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
        gap: 12,
    },
    card: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        padding: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 8,
        backgroundColor: '#f8fafc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    badge: {
        backgroundColor: '#f1f5f9',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    badgeText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#475569',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: 6,
    },
    cardDescription: {
        fontSize: 13,
        color: '#64748b',
        lineHeight: 19,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
    },
    emptyTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0f172a',
        marginTop: 12,
        marginBottom: 4,
    },
    emptySubtitle: {
        fontSize: 13,
        color: '#64748b',
        textAlign: 'center',
        paddingHorizontal: 30,
    },
});
