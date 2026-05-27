import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "@/assets/css/global.css";

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-heading-sans",
    subsets: ["latin"],
    display: "swap",
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
    variable: "--font-body-sans",
    subsets: ["latin"],
    display: "swap",
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    metadataBase: new URL("https://andarestoursworld.com"),
    title: {
        default: "Andares Tours World | Tours, Tickets Aéreos y Viajes en Perú",
        template: "%s | Andares Tours World",
    },
    description: "Descubre Perú con Andares Tours World. Tours nacionales, tickets aéreos, hoteles, traslados y experiencias turísticas en Jauja, Junín y todo el Perú.",
    keywords: [
        "Andares Tours World",
        "Agencia de viajes Perú",
        "Tours en Perú",
        "Tours en Jauja",
        "Turismo Junín",
        "Viajes Perú",
        "Tickets aéreos Perú",
        "Hoteles en Perú",
        "Tours Huancaya",
        "Tours selva central",
        "Traslados turísticos",
        "Paquetes turísticos Perú",
        "Agencia de turismo Jauja",
    ],
    authors: [{ name: "ARCANA CORP SAC" }],
    creator: "Andares Tours World",
    publisher: "Andares Tours World",
    applicationName: "Andares Tours World",
    category: "travel",
    alternates: {
        canonical: "https://andarestoursworld.com",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    referrer: "origin-when-cross-origin",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Andares Tours World | Agencia de Viajes y Turismo en Perú",
        description: "Tours, paquetes turísticos, tickets aéreos, hoteles y experiencias únicas en Perú.",
        url: "https://andarestoursworld.com",
        siteName: "Andares Tours World",
        locale: "es_PE",
        type: "website",
        images: [
            {
                url: "https://andarestoursworld.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Andares Tours World",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Andares Tours World",
        description: "Explora Perú con experiencias únicas y tours inolvidables.",
        images: ["https://andarestoursworld.com/og-image.jpg",],
    },
    verification: {
        google: "gfth2Mi50x1ugADdz_j0ijNtZQG7fVyiIDAi1VK_gW0",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="es"
            className={`${plusJakartaSans.variable} ${manrope.variable}`}
        >
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",

                            "@type": "TravelAgency",

                            name: "Andares Tours World",

                            url: "https://andarestoursworld.com",

                            logo: "https://andarestoursworld.com/logo.png",

                            image:
                                "https://andarestoursworld.com/og-image.jpg",

                            description:
                                "Agencia de viajes y turismo especializada en tours, tickets aéreos, hoteles y experiencias turísticas en Perú.",

                            telephone: [
                                "+51 928 889 884",
                                "+51 921 440 340",
                            ],

                            email:
                                "andarestoursperu@gmail.com",

                            address: {
                                "@type": "PostalAddress",
                                addressCountry: "PE",
                                addressLocality: "Jauja",
                                addressRegion: "Junín",
                            },

                            areaServed: {
                                "@type": "Country",
                                name: "Perú",
                            },

                            priceRange: "$$",

                            sameAs: [
                                "https://instagram.com/andarestoursperu",
                                "https://tiktok.com/@andarestoursjauja",
                                "https://x.com/Andarestoursvip",
                            ],

                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: "+51 928 889 884",
                                contactType: "customer service",
                                areaServed: "PE",
                                availableLanguage: "Spanish",
                            },
                        }),
                    }}
                />

                {children}
            </body>
        </html>
    );
}