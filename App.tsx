import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RootStackParamList, BottomTabParamList } from './src/types/product';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ExploreScreen } from './src/screens/ExploreScreen';
import { NotificationsScreen } from './src/screens/NotificationsScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { DetailScreen } from './src/screens/DetailScreen';
import { PrivacyPolicyScreen } from './src/screens/PrivacyPolicyScreen';
import { TermsOfServiceScreen } from './src/screens/TermsOfServiceScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

// 4 Standard Universal Bottom Tabs
function MainTabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#0f172a' },
                headerTintColor: '#ffffff',
                headerTitleStyle: { fontWeight: '700', fontSize: 17 },
                tabBarActiveTintColor: '#0f172a',
                tabBarInactiveTintColor: '#94a3b8',
                tabBarStyle: {
                    height: 58,
                    paddingBottom: 8,
                    paddingTop: 6,
                    backgroundColor: '#ffffff',
                    borderTopColor: '#e2e8f0',
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'apps-outline';

                    if (route.name === 'HomeTab') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'ExploreTab') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'NotificationsTab') {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    } else if (route.name === 'ProfileTab') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={22} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{ title: 'Home', headerTitle: 'Mobile Starter' }}
            />
            <Tab.Screen
                name="ExploreTab"
                component={ExploreScreen}
                options={{ title: 'Explore', headerShown: false }}
            />
            <Tab.Screen
                name="NotificationsTab"
                component={NotificationsScreen}
                options={{ title: 'Alerts', headerShown: false }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileScreen}
                options={{ title: 'Profile', headerShown: false }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Onboarding"
                    screenOptions={{
                        headerStyle: { backgroundColor: '#0f172a' },
                        headerTintColor: '#ffffff',
                        headerTitleStyle: { fontWeight: '700', fontSize: 18 },
                        headerBackTitle: 'Back',
                    }}
                >
                    {/* Onboarding Flow */}
                    <Stack.Screen
                        name="Onboarding"
                        component={OnboardingScreen}
                        options={{ headerShown: false }}
                    />

                    {/* Auth Flow */}
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUpScreen}
                        options={{ headerShown: false }}
                    />

                    {/* 4 Bottom Tabs */}
                    <Stack.Screen
                        name="MainTabs"
                        component={MainTabsNavigator}
                        options={{ headerShown: false }}
                    />

                    {/* Modal & Stack Screens */}
                    <Stack.Screen
                        name="Detail"
                        component={DetailScreen}
                        options={{ title: 'Resource Details' }}
                    />
                    <Stack.Screen
                        name="PrivacyPolicy"
                        component={PrivacyPolicyScreen}
                        options={{ title: 'Privacy Policy' }}
                    />
                    <Stack.Screen
                        name="TermsOfService"
                        component={TermsOfServiceScreen}
                        options={{ title: 'Terms of Service' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
