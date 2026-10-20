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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/product';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(true);
    const [error, setError] = useState('');

    const handleSignUp = () => {
        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            setError('Please fill in all fields.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (!agreeToTerms) {
            setError('Please agree to the Privacy Policy.');
            return;
        }
        setError('');
        // Production: replace with your registration API call
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
                        <Text style={styles.title}>Create an account</Text>
                        <Text style={styles.subtitle}>
                            Sign up to start using the mobile starter kit
                        </Text>
                    </View>

                    {/* Error Banner */}
                    {error ? (
                        <View style={styles.errorBox}>
                            <Ionicons name="alert-circle-outline" size={18} color="#b91c1c" />
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    ) : null}

                    {/* Form Fields */}
                    <View style={styles.form}>
                        {/* Name */}
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            placeholderTextColor="#94a3b8"
                            value={name}
                            onChangeText={(text) => {
                                setName(text);
                                if (error) setError('');
                            }}
                        />

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

                        {/* Password */}
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Create a password"
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

                        {/* Confirm Password */}
                        <Text style={styles.label}>Confirm Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Repeat your password"
                                placeholderTextColor="#94a3b8"
                                value={confirmPassword}
                                onChangeText={(text) => {
                                    setConfirmPassword(text);
                                    if (error) setError('');
                                }}
                                secureTextEntry={!showPassword}
                            />
                        </View>

                        {/* Terms row */}
                        <TouchableOpacity
                            style={styles.termsRow}
                            onPress={() => setAgreeToTerms(!agreeToTerms)}
                        >
                            <Ionicons
                                name={agreeToTerms ? 'checkbox' : 'square-outline'}
                                size={20}
                                color={agreeToTerms ? '#0f172a' : '#94a3b8'}
                            />
                            <Text style={styles.termsText}>
                                I agree to the{' '}
                                <Text
                                    style={styles.legalLink}
                                    onPress={() => navigation.navigate('TermsOfService')}
                                >
                                    Terms
                                </Text>
                                {' & '}
                                <Text
                                    style={styles.legalLink}
                                    onPress={() => navigation.navigate('PrivacyPolicy')}
                                >
                                    Privacy Policy
                                </Text>
                            </Text>
                        </TouchableOpacity>

                        {/* Submit Button */}
                        <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
                            <Text style={styles.primaryButtonText}>Create account</Text>
                        </TouchableOpacity>

                        {/* Sign in link */}
                        <View style={styles.footerRow}>
                            <Text style={styles.footerText}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={styles.signinText}>Sign in</Text>
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
        marginBottom: 24,
    },
    logoBadge: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#0f172a',
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
        marginBottom: 14,
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
        marginBottom: 14,
    },
    passwordInput: {
        flex: 1,
        fontSize: 15,
        color: '#0f172a',
    },
    eyeBtn: {
        padding: 4,
    },
    termsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
        marginTop: 4,
        gap: 8,
    },
    termsText: {
        fontSize: 13,
        color: '#475569',
        flex: 1,
    },
    legalLink: {
        color: '#0f172a',
        fontWeight: '700',
        textDecorationLine: 'underline',
    },
    primaryButton: {
        height: 46,
        backgroundColor: '#0f172a',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6,
    },
    primaryButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '600',
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#64748b',
    },
    signinText: {
        fontSize: 14,
        color: '#0f172a',
        fontWeight: '700',
    },
});
