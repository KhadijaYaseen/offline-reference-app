export interface FeedItem {
    id: number;
    title: string;
    category: string;
    description: string;
    date?: string;
    readTime?: string;
    icon?: string;
    author?: string;
    price?: number;
    image?: string;
    rating?: {
        rate: number;
        count: number;
    };
}

// Universal Feed Item type
export type Product = FeedItem;

export type BottomTabParamList = {
    HomeTab: undefined;
    ExploreTab: undefined;
    NotificationsTab: undefined;
    ProfileTab: undefined;
};

export type RootStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    SignUp: undefined;
    MainTabs: undefined;
    Home: undefined;
    Detail: { product: FeedItem };
    PrivacyPolicy: undefined;
    TermsOfService: undefined;
};
