import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "@/assets/css/global.css";

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-heading-sans",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
    variable: "--font-body-sans",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    metadataBase: new URL("https://andarestours.com"),
    title: {
        default: "Andares Tours World | Agencia de Viajes y Turismo en Perú",
        template: "%s | Andares Tours World",
    },
    description: "Agencia de turismo en Perú especializada en tickets aéreos, tours, hoteles, traslados y alquiler de movilidades. Vive experiencias únicas con Andares Tours World.",
    keywords: [
        "Andares Tours",
        "Andares Tours World",
        "Agencia de turismo Perú",
        "Tours en Perú",
        "Tickets aéreos",
        "Hoteles en Perú",
        "Traslados turísticos",
        "Alquiler de movilidades",
        "Turismo Jauja",
        "Turismo Junín",
        "Viajes Perú",
        "Tours Huancayo",
    ],
    authors: [
        {
            name: "Andares Tours World",
        },
    ],
    creator: "Andares Tours World",
    publisher: "Andares Tours World",
    category: "travel",
    applicationName: "Andares Tours World",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Andares Tours World | Agencia de Viajes y Turismo",
        description: "Tickets aéreos, tours, hoteles, traslados y experiencias turísticas en Perú.",
        url: "https://andarestours.com",
        siteName: "Andares Tours World",
        locale: "es_PE",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Andares Tours World",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Andares Tours World",
        description: "Agencia de turismo especializada en tours, hoteles y experiencias en Perú.",
        images: ["/og-image.jpg"],
    },
    alternates: {
        canonical: "https://andarestours.com",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${plusJakartaSans.variable} ${manrope.variable}`}>
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "TravelAgency",

                            name: "Andares Tours World",

                            description:
                                "Agencia de viajes y turismo especializada en tickets aéreos, tours, hoteles y traslados en Perú.",

                            telephone: [
                                "+51 928 889 884",
                                "+51 921 440 340",
                            ],

                            email: "andarestoursperu@gmail.com",

                            areaServed: "Peru",

                            address: {
                                "@type": "PostalAddress",
                                addressCountry: "PE",
                            },

                            sameAs: [
                                "https://instagram.com/andarestoursperu",
                                "https://tiktok.com/@andarestoursjauja",
                                "https://x.com/Andarestoursvip",
                            ],
                        }),
                    }}
                />
                {children}
            </body>
        </html>
    );
}