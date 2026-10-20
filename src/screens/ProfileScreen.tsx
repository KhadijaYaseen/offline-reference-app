import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Switch,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList, RootStackParamList } from '../types/product';

type Props = CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, 'ProfileTab'>,
    NativeStackScreenProps<RootStackParamList>
>;

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [offlineSync, setOfflineSync] = useState(true);

    const handleLogout = () => {
        Alert.alert('Sign Out', 'Are you sure you want to log out of your session?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Log Out',
                style: 'destructive',
                onPress: () => navigation.replace('Login'),
            },
        ]);
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.content}>
                {/* User Card */}
                <View style={styles.userCard}>
                    <View style={styles.avatar}>
                        <Ionicons name="person" size={26} color="#ffffff" />
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Mobile Engineer</Text>
                        <Text style={styles.userEmail}>developer@company.com</Text>
                        <View style={styles.roleBadge}>
                            <Text style={styles.roleText}>Active Session</Text>
                        </View>
                    </View>
                </View>

                {/* Section: Application Settings */}
                <Text style={styles.sectionHeader}>Preferences</Text>
                <View style={styles.settingsGroup}>
                    {/* Dark Mode Placeholder */}
                    <View style={styles.settingRow}>
                        <View style={styles.settingLeft}>
                            <View style={styles.settingIcon}>
                                <Ionicons name="moon-outline" size={18} color="#0f172a" />
                            </View>
                            <Text style={styles.settingLabel}>Dark Mode (System)</Text>
                        </View>
                        <Switch
                            value={darkMode}
                            onValueChange={setDarkMode}
                            trackColor={{ false: '#e2e8f0', true: '#0f172a' }}
                            thumbColor="#ffffff"
                        />
                    </View>

                    {/* Offline Sync */}
                    <View style={styles.settingRow}>
                        <View style={styles.settingLeft}>
                            <View style={styles.settingIcon}>
                                <Ionicons name="cloud-offline-outline" size={18} color="#0f172a" />
                            </View>
                            <Text style={styles.settingLabel}>Auto Cache & Offline Mode</Text>
                        </View>
                        <Switch
                            value={offlineSync}
                            onValueChange={setOfflineSync}
                            trackColor={{ false: '#e2e8f0', true: '#0f172a' }}
                            thumbColor="#ffffff"
                        />
                    </View>
                </View>

                {/* Section: Legal & Info */}
                <Text style={styles.sectionHeader}>Legal & About</Text>
                <View style={styles.settingsGroup}>
                    {/* Privacy Policy */}
                    <TouchableOpacity
                        style={styles.settingRow}
                        onPress={() => navigation.navigate('PrivacyPolicy')}
                    >
                        <View style={styles.settingLeft}>
                            <View style={styles.settingIcon}>
                                <Ionicons name="shield-checkmark-outline" size={18} color="#0f172a" />
                            </View>
                            <Text style={styles.settingLabel}>Privacy Policy</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#94a3b8" />
                    </TouchableOpacity>

                    {/* Terms of Service */}
                    <TouchableOpacity
                        style={styles.settingRow}
                        onPress={() => navigation.navigate('TermsOfService')}
                    >
                        <View style={styles.settingLeft}>
                            <View style={styles.settingIcon}>
                                <Ionicons name="document-text-outline" size={18} color="#0f172a" />
                            </View>
                            <Text style={styles.settingLabel}>Terms of Service</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#94a3b8" />
                    </TouchableOpacity>

                    {/* App Version Info */}
                    <View style={styles.settingRow}>
                        <View style={styles.settingLeft}>
                            <View style={styles.settingIcon}>
                                <Ionicons name="information-circle-outline" size={18} color="#0f172a" />
                            </View>
                            <Text style={styles.settingLabel}>Starter Version</Text>
                        </View>
                        <Text style={styles.versionText}>v1.0.0 (Expo SDK 57)</Text>
                    </View>
                </View>

                {/* Logout Button */}
                <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
                    <Ionicons name="log-out-outline" size={18} color="#b91c1c" style={{ marginRight: 8 }} />
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
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
        padding: 16,
        paddingBottom: 32,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8fafc',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        marginBottom: 24,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    avatarText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 17,
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: 2,
    },
    userEmail: {
        fontSize: 13,
        color: '#64748b',
        marginBottom: 6,
    },
    roleBadge: {
        alignSelf: 'flex-start',
        backgroundColor: '#f1f5f9',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
    },
    roleText: {
        fontSize: 11,
        color: '#475569',
        fontWeight: '600',
    },
    sectionHeader: {
        fontSize: 13,
        fontWeight: '700',
        color: '#94a3b8',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 8,
        marginLeft: 4,
    },
    settingsGroup: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        marginBottom: 20,
        overflow: 'hidden',
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#f8fafc',
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    settingIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#f8fafc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingLabel: {
        fontSize: 14,
        color: '#1e293b',
        fontWeight: '500',
    },
    versionText: {
        fontSize: 12,
        color: '#94a3b8',
        fontWeight: '500',
    },
    logoutBtn: {
        marginTop: 10,
        height: 46,
        borderRadius: 10,
        backgroundColor: '#fef2f2',
        borderWidth: 1,
        borderColor: '#fecaca',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#b91c1c',
    },
});
