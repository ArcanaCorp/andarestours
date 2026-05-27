export default function manifest() {
    return {
        name: "Andares Tours World",
        short_name: "Andares Tours",
        description: "Agencia de viajes y turismo en Perú especializada en tours, tickets aéreos, hoteles y experiencias únicas.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0f172a",
        orientation: "portrait",
        scope: "/",
        lang: "es-PE",
        categories: ["travel", "tourism"],
        icons: [
            {
                src: "/icons/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icons/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/icons/apple-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}