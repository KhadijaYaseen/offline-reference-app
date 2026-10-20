import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/product';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email.trim() || !password.trim()) {
            setError('Please enter both email and password.');
            return;
        }
        setError('');
        // Production: replace with your auth API call
        navigation.replace('MainTabs');
    };

    const handleForgotPassword = () => {
        Alert.alert(
            'Reset Password',
            'In production, this sends a password reset link to your email address.'
        );
    };

    const handleGuest = () => {
        navigation.replace('MainTabs');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Brand Header */}
                    <View style={styles.brandHeader}>
                        <View style={styles.logoBadge}>
                            <Ionicons name="apps" size={24} color="#ffffff" />
                        </View>
                        <Text style={styles.title}>Welcome back</Text>
                        <Text style={styles.subtitle}>
                            Enter your credentials to access your account
                        </Text>
                    </View>

                    {/* Error Banner */}
                    {error ? (
                        <View style={styles.errorBox}>
                            <Ionicons name="alert-circle-outline" size={18} color="#b91c1c" />
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    ) : null}

                    {/* Inputs */}
                    <View style={styles.form}>
                        {/* Email */}
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="name@company.com"
                            placeholderTextColor="#94a3b8"
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text);
                                if (error) setError('');
                            }}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        {/* Password with inline 'Forgot password?' */}
                        <View style={styles.passwordLabelRow}>
                            <Text style={styles.label}>Password</Text>
                            <TouchableOpacity onPress={handleForgotPassword}>
                                <Text style={styles.forgotText}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Enter your password"
                                placeholderTextColor="#94a3b8"
                                value={password}
                                onChangeText={(text) => {
                                    setPassword(text);
                                    if (error) setError('');
                                }}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeBtn}
                            >
                                <Ionicons
                                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                    size={20}
                                    color="#64748b"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Primary Sign In Button (Navy) */}
                        <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
                            <Text style={styles.primaryButtonText}>Sign in</Text>
                        </TouchableOpacity>

                        {/* Divider */}
                        <View style={styles.dividerRow}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>or continue with</Text>
                            <View style={styles.dividerLine} />
                        </View>

                        {/* Social Buttons */}
                        <View style={styles.socialRow}>
                            <TouchableOpacity
                                style={styles.socialButton}
                                onPress={() => navigation.replace('MainTabs')}
                            >
                                <Ionicons name="logo-google" size={18} color="#0f172a" />
                                <Text style={styles.socialText}>Google</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.socialButton}
                                onPress={() => navigation.replace('MainTabs')}
                            >
                                <Ionicons name="logo-apple" size={18} color="#0f172a" />
                                <Text style={styles.socialText}>Apple</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Continue as Guest */}
                        <TouchableOpacity style={styles.guestButton} onPress={handleGuest}>
                            <Text style={styles.guestText}>Continue as guest</Text>
                        </TouchableOpacity>

                        {/* Sign up link */}
                        <View style={styles.footerRow}>
                            <Text style={styles.footerText}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.signupText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 20,
    },
    brandHeader: {
        marginBottom: 28,
    },
    logoBadge: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#0f172a', // Brand Navy
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    logoBadgeText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: '#64748b',
        lineHeight: 20,
    },
    errorBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fef2f2',
        borderWidth: 1,
        borderColor: '#fecaca',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 16,
        gap: 8,
    },
    errorText: {
        color: '#b91c1c',
        fontSize: 13,
        flex: 1,
    },
    form: {
        width: '100%',
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 6,
    },
    input: {
        height: 46,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 8,
        paddingHorizontal: 14,
        fontSize: 15,
        color: '#0f172a',
        backgroundColor: '#f8fafc',
        marginBottom: 16,
    },
    passwordLabelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    forgotText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#0f172a',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 46,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 8,
        paddingHorizontal: 14,
        backgroundColor: '#f8fafc',
        marginBottom: 20,
    },
    passwordInput: {
        flex: 1,
        fontSize: 15,
        color: '#0f172a',
    },
    eyeBtn: {
        padding: 4,
    },
    primaryButton: {
        height: 46,
        backgroundColor: '#0f172a', // Consistent Navy brand color
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '600',
    },
    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#f1f5f9',
    },
    dividerText: {
        marginHorizontal: 12,
        fontSize: 12,
        color: '#94a3b8',
        fontWeight: '500',
    },
    socialRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12,
    },
    socialButton: {
        flex: 1,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 8,
        backgroundColor: '#ffffff',
        gap: 8,
    },
    socialText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0f172a',
    },
    guestButton: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    guestText: {
        fontSize: 13,
        color: '#64748b',
        fontWeight: '500',
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#64748b',
    },
    signupText: {
        fontSize: 14,
        color: '#0f172a',
        fontWeight: '700',
    },
});
