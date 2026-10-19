import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const OfflineBanner: React.FC<{ isOffline: boolean }> = ({ isOffline }) => {
    if (!isOffline) return null;

    return (
        <View style={styles.banner}>
            <Text style={styles.text}>⚡ Offline Mode • Viewing Saved Products</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    banner: {
        backgroundColor: '#D97706',
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 12,
    },
});