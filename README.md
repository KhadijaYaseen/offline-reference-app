# Universal Mobile Starter Template

[![CI Pipeline](https://github.com/khawajaalabs/Mobile-Starter-Template/actions/workflows/ci.yml/badge.svg)](https://github.com/khawajaalabs/Mobile-Starter-Template/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Expo SDK](https://img.shields.io/badge/Expo-SDK%2057-000020.svg)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6.svg)](https://www.typescriptlang.org/)

A production-grade, offline-first **Universal Mobile Starter Boilerplate** built with **React Native, Expo SDK 57, and TypeScript**. Designed as a modular foundational architecture for any mobile application, eliminating repetitive setup and accelerating delivery.

---

## 🎥 **Walkthrough & Live Demo**



https://github.com/user-attachments/assets/7d4a3f11-ec13-4d22-a200-70c73db3d2fb





* **In-Repository Video Walkthrough:** [`docs/demo.mp4`](docs/demo.mp4)
* **Offline Flow Demonstrated:** Full online catalog load → Network disconnect (Airplane Mode) → Resilient local cache retrieval with pull-to-refresh → Detail screen navigation.

---

## 📱 **Core Features & Modules**

### **1. Onboarding Walkthrough**
* **3-Step Carousel:** Smooth swipeable slides highlighting app capabilities.
* **Pagination Indicator:** Dynamic active-dot visual feedback.
* **Navigation Flow:** One-tap "Skip" and "Get Started" buttons routing directly to authentication.

### **2. Production Auth Flow**
* **Login Screen:** Clean email/password inputs, password visibility toggle, "Forgot Password?" prompt, social authentication buttons, and "Continue as Guest / Skip" bypass.
* **Sign Up Screen:** Full name, email, password match validation, and interactive agreements checkbox.

### **3. Universal 4 Bottom Tabs**
* 🏠 **Home / Feed:** Content feed powered by an **Offline-First Caching Engine** (`AsyncStorage`) with pull-to-refresh.
* 🔍 **Explore / Discover:** Real-time search bar with horizontal category filter chips (`Technology`, `Design`, `Finance`, `Lifestyle`) and empty-state handling.
* 🔔 **Alerts & Notifications:** Activity center with unread count badges, relative timestamps, and "Mark all read" action.
* 👤 **Profile & Settings:** User session card, Dark Mode and Offline toggle switches, version info, Terms & Privacy links, and confirmation logout dialog.

### **4. Resilient Offline-First Architecture**
* **Persistent Local Cache:** Instant app startup using `@react-native-async-storage/async-storage` without network delays.
* **Exponential Backoff Retry Engine:** Graceful automatic retry logic for intermittent connection drops and packet loss.
* **NetInfo State Banner:** Amber notification banner that appears automatically when device connectivity drops.

### **5. Mandatory Legal & Utility Screens**
* **Resource Detail Screen:** Comprehensive overview with offline availability guarantee card and native share sheet.
* **Privacy Policy Screen:** Standard data protection disclosures.
* **Terms of Service Screen:** Boilerplate usage rights and licensing agreements.

---

## 🚀 **Quick Start Guide**

### **Prerequisites**
* **Node.js**: v20 or higher
* **npm** or **yarn**
* **Expo Go App** (Android / iOS) or Android Studio Emulator

### **Installation & Launch**

```bash
# 1. Clone the repository
git clone https://github.com/khawajaalabs/Mobile-Starter-Template.git
cd Mobile-Starter-Template

# 2. Install dependencies (with legacy-peer-deps for React 19)
npm install --legacy-peer-deps

# 3. Start development server
npm start
```

### **Running the App**
* **Android Emulator:** Press `a` in the terminal (or run `npm run android`).
* **Physical Phone:** Scan the QR code using the **Expo Go** app.
* **Web Preview:** Press `w` in the terminal.

---

## 📂 **Project Directory Structure**

```text
├── App.tsx                      # Root navigation setup (NativeStack + BottomTabs)
├── app.json                     # Expo configuration and universal icon branding
├── assets/                      # Minimalist geometric app icon and splash assets
├── __tests__/                   # Automated Jest test suites
│   ├── cache.test.ts            # AsyncStorage persistence unit tests
│   └── productsApi.test.ts      # Exponential backoff retry unit tests
└── src/
    ├── api/                     # Network services & retry logic
    │   └── productsApi.ts
    ├── components/              # Modular UI components
    │   ├── ProductCard.tsx      # Universal feed card item
    │   └── OfflineBanner.tsx    # Amber network drop warning banner
    ├── hooks/                   # Custom business logic hooks
    │   └── useProducts.ts       # Offline-first state manager
    ├── screens/                 # Application screens
    │   ├── OnboardingScreen.tsx # 3-step introductory carousel
    │   ├── LoginScreen.tsx      # Modern authentication screen
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

## 🧪 **Automated Testing & Quality**

This repository maintains strict TypeScript typechecking and automated unit tests running on every pull request via GitHub Actions CI.

```bash
# Run TypeScript compilation check
npm run lint

# Run Jest unit test suite
npm test
```

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
