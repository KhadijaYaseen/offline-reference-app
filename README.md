# Universal Mobile Starter Template

[![CI Pipeline](https://github.com/KhadijaYaseen/offline-reference-app/actions/workflows/ci.yml/badge.svg)](https://github.com/KhadijaYaseen/offline-reference-app/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Expo SDK](https://img.shields.io/badge/Expo-SDK%2057-000020.svg)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6.svg)](https://www.typescriptlang.org/)

A production-grade **Universal Mobile Starter Boilerplate** built with **React Native, Expo SDK 57, and TypeScript**. Designed as a modular foundational reference architecture for any mobile application (Social, SaaS, FinTech, Delivery, or E-Commerce), eliminating repetitive boilerplate setup and accelerating new project kickoffs.

---

## 📱 Key Features & Modules

### 1. Onboarding Walkthrough
- 3-step introductory carousel highlighting core capabilities.
- Dynamic active-dot pagination indicators.
- One-tap "Skip" and "Get Started" navigation routes.

### 2. Modern Auth Flow (Boilerplate)
- **Login Screen**: Clean email/password inputs, password show/hide eye toggle, "Forgot Password?" dialog, Google/Apple social sign-in placeholders, and a "Continue as Guest / Skip" bypass.
- **Sign Up Screen**: Full name, email, dual password confirmation check, and interactive checkbox linked directly to legal agreements.

### 3. Universal 4 Bottom Tabs Navigation
- 🏠 **Home / Feed**: Content feed powered by an **Offline-First Caching Engine** (`AsyncStorage`) and pull-to-refresh capabilities.
- 🔍 **Explore / Discover**: Real-time universal search with category filter chips (`Technology`, `Design`, `Finance`, `Lifestyle`) and empty state handling.
- 🔔 **Activity & Alerts**: Notification center with unread count badges, "Mark all read" action, and relative timestamps.
- 👤 **Profile & Settings**: User session card, Dark Mode and Offline toggle switches, version info, Terms & Privacy links, and a confirmation logout flow.

### 4. Resilient Offline-First Architecture
- **Persistent Local Cache**: Powered by `@react-native-async-storage/async-storage` for instantaneous startup without network lag.
- **Exponential Backoff Retry Engine**: Gracefully handles intermittent network drops by attempting retries at spaced intervals before throwing.
- **NetInfo State Banner**: Displays an amber notification badge when device connectivity drops while keeping all cached content readable.

### 5. Mandatory Legal & Utility Screens
- **Resource Detail View**: Detailed content reader with offline guarantee cards and native share sheet integration.
- **Privacy Policy Screen**: Standard data protection and local storage disclosure.
- **Terms of Service Screen**: Foundational boilerplate terms and usage rights agreement.

---

## 🎥 Demo Video

- **Video Walkthrough (Google Drive):** [Watch Demo Walkthrough](https://drive.google.com/file/d/1k5ZU7WX5Ee6kPLr2MGsvVtTSlUQFlVow/view?usp=sharing)
- **In-Repository Video File:** [`docs/demo.mp4`](docs/demo.mp4)

---

## 🚀 Quick Start (Under 5 Minutes)

### Prerequisites
- **Node.js**: v20 or higher
- **npm** or **yarn**
- **Expo Go App** (Android / iOS) or Android Studio Emulator

### Installation & Launch
```bash
# 1. Clone the repository
git clone https://github.com/KhadijaYaseen/offline-reference-app.git
cd offline-reference-app

# 2. Install dependencies (with legacy peer deps flag for React 19 compatibility)
npm install --legacy-peer-deps

# 3. Start development server
npm start
```

### Running on Device / Emulator:
- **Android Emulator**: Press `a` in the terminal (or run `npm run android`).
- **Physical Phone**: Scan the QR code using the **Expo Go** app.
- **Web Preview**: Press `w` in the terminal.

---

## 📂 Project Structure

```text
├── App.tsx                      # Root navigation setup (NativeStack + BottomTabs)
├── app.json                     # Expo configuration and universal icon branding
├── assets/                      # Universal minimalist app icon and splash assets
├── __tests__/                   # Automated Jest test suites
│   ├── cache.test.ts            # AsyncStorage persistence unit tests
│   └── productsApi.test.ts      # Exponential backoff retry unit tests
└── src/
    ├── api/                     # Network services and retry logic
    │   └── productsApi.ts
    ├── components/              # Modular UI components
    │   ├── FeedCard.tsx         # Universal feed card item
    │   └── OfflineBanner.tsx    # Amber network drop warning banner
    ├── hooks/                   # Custom business logic hooks
    │   └── useProducts.ts       # Offline-first state manager
    ├── screens/                 # Application screens
    │   ├── OnboardingScreen.tsx # 3-step introductory carousel
    │   ├── LoginScreen.tsx      # Clean modern authentication
    │   ├── SignUpScreen.tsx     # Registration & terms agreement
    │   ├── HomeScreen.tsx       # Resilient feed with pull-to-refresh
    │   ├── ExploreScreen.tsx    # Category filter chips & search
    │   ├── NotificationsScreen.tsx # Activity alerts & unread badges
    │   ├── ProfileScreen.tsx    # Preferences, toggles & session
    │   ├── DetailScreen.tsx     # Resource detail overview
    │   ├── PrivacyPolicyScreen.tsx # Legal privacy policy
    │   └── TermsOfServiceScreen.tsx # Legal terms of service
    ├── services/                # Local database & caching
    │   └── cache.ts             # AsyncStorage client-side store
    └── types/                   # TypeScript schemas & navigation params
        └── product.ts
```

---

## 🧪 Automated Testing & CI

This repository maintains strict TypeScript typechecking and automated unit tests running on every pull request via GitHub Actions.

```bash
# Run TypeScript compilation check
npm run lint

# Run Jest unit test suite
npm test
```

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
