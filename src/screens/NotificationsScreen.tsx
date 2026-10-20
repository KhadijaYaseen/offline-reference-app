import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types/product';

type Props = BottomTabScreenProps<BottomTabParamList, 'NotificationsTab'>;

interface NotificationItem {
    id: string;
    title: string;
    description: string;
    time: string;
    read: boolean;
    icon: keyof typeof Ionicons.glyphMap;
}

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
    {
        id: '1',
        title: 'System Synced Successfully',
        description: 'Local offline cache has been synchronized with the latest cloud updates.',
        time: '5m ago',
        read: false,
        icon: 'cloud-done-outline',
    },
    {
        id: '2',
        title: 'Security Alert: New Sign-in',
        description: 'New session started from Android Emulator device.',
        time: '1h ago',
        read: false,
        icon: 'shield-outline',
    },
    {
        id: '3',
        title: 'Starter Template Upgraded',
        description: 'Universal bottom tabs and modular auth screens are now active.',
        time: '3h ago',
        read: false,
        icon: 'rocket-outline',
    },
    {
        id: '4',
        title: 'Network Mode Changed',
        description: 'App switched to offline-first cache mode during intermittent connectivity.',
        time: 'Yesterday',
        read: true,
        icon: 'wifi-outline',
    },
    {
        id: '5',
        title: 'Welcome to Mobile Starter',
        description: 'Your production-ready boilerplate is configured and ready for expansion.',
        time: '2 days ago',
        read: true,
        icon: 'sparkles-outline',
    },
];

export const NotificationsScreen: React.FC<Props> = () => {
    const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);

    const unreadCount = notifications.filter((n) => !n.read).length;

    const handleMarkAllRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    };

    const handleToggleRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Notifications</Text>
                    {unreadCount > 0 && (
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadText}>{unreadCount} new</Text>
                        </View>
                    )}
                </View>
                {unreadCount > 0 && (
                    <TouchableOpacity onPress={handleMarkAllRead}>
                        <Text style={styles.markReadText}>Mark all read</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* Notifications List */}
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.card, !item.read && styles.unreadCard]}
                        onPress={() => handleToggleRead(item.id)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.iconCircle, !item.read && styles.unreadIconCircle]}>
                            <Ionicons
                                name={item.icon}
                                size={20}
                                color={item.read ? '#64748b' : '#0f172a'}
                            />
                        </View>
                        <View style={styles.cardBody}>
                            <View style={styles.cardHeader}>
                                <Text style={[styles.cardTitle, !item.read && styles.unreadTitle]}>
                                    {item.title}
                                </Text>
                                <Text style={styles.timeText}>{item.time}</Text>
                            </View>
                            <Text style={styles.cardDescription}>{item.description}</Text>
                        </View>
                        {!item.read && <View style={styles.activeDot} />}
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        color: '#0f172a',
    },
    unreadBadge: {
        backgroundColor: '#0f172a',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 12,
    },
    unreadText: {
        color: '#ffffff',
        fontSize: 11,
        fontWeight: '700',
    },
    markReadText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#2563eb',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 14,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    unreadCard: {
        backgroundColor: '#f8fafc',
        borderColor: '#e2e8f0',
    },
    iconCircle: {
        width: 38,
        height: 38,
        borderRadius: 10,
        backgroundColor: '#f1f5f9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    unreadIconCircle: {
        backgroundColor: '#e2e8f0',
    },
    cardBody: {
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
        flex: 1,
        marginRight: 8,
    },
    unreadTitle: {
        fontWeight: '700',
        color: '#0f172a',
    },
    timeText: {
        fontSize: 11,
        color: '#94a3b8',
    },
    cardDescription: {
        fontSize: 13,
        color: '#64748b',
        lineHeight: 18,
    },
    activeDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#2563eb',
        marginTop: 6,
        marginLeft: 6,
    },
});
