import { IconBed, IconBrandSafari, IconCar, IconCarGarage, IconPlane } from "@tabler/icons-react";

export const page = {
    navs: [
        {
            txt: 'Inicio',
            link: 'https://andarestoursworld.com'
        },
        {
            txt: 'Nosotros',
            link: 'https://andarestoursworld.com/#about'
        },
        {
            txt: 'Servicios',
            link: 'https://andarestoursworld.com/#services'
        },
        {
            txt: 'Destinos',
            link: 'https://andarestoursworld.com/#destinations'
        },
        {
            txt: 'Contacto',
            link: 'https://andarestoursworld.com/#contact'
        }
    ],
    hero: {
        tit1: 'Explora el mundo con',
        tit2: 'Andares Tours',
        txt1: 'Tickets aéreos, tours, hoteles y experiencias inolvidables en un solo lugar.',
        txt2: 'Diseñamos viajes a medida que transforman vidas',
        cta: 'Reserva ahora',
        cti: 'Ver destinos'
    },
    services: {
        tit: 'Nuestros Servicios Premium',
        sub: 'Ofrecemos soluciones integrales para que tu única preocupación sea disfrutar del paisaje.',
        cards: [
            {
                ico: <IconPlane/>,
                tit: 'Tickets Aéreos',
                txt: 'Las mejores tarifas nacionales e internacionales.',
                link: '/'
            },
            {
                ico: <IconCar/>,
                tit: 'Traslados',
                txt: 'Transporte seguro del aeropuerto a tu hotel.',
                link: '/'
            },
            {
                ico: <IconBrandSafari/>,
                tit: 'Tours Operador',
                txt: 'Guías expertos y rutas exclusivas por el mundo.',
                link: '/'
            },
            {
                ico: <IconBed/>,
                tit: 'Hoteles',
                txt: 'Reserva en los mejores y cómodos hoteles.',
                link: '/'
            },
            {
                ico: <IconCarGarage/>,
                tit: 'Alquiler de movilidad',
                txt: 'Libertad total para explorar a tu propio ritmo.',
                link: '/'
            }
        ]
    },
    destinations: {
        tit: 'Destinos más Populares',
        sub: 'Los lugares que todo viajero sueña visitar.',
        items: [
            {
                region: 'Junín',
                name: 'Cañon del Shutjo',
                time: '4 días / 3 noches',
                price: 60,
                link: '',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Entrada_del_Ca%C3%B1%C3%B3n_de_Shucto.jpg/1280px-Entrada_del_Ca%C3%B1%C3%B3n_de_Shucto.jpg'
            },
            {
                region: 'Ayacucho',
                name: 'Cañon del Shutjo',
                time: '4 días / 3 noches',
                price: 60,
                link: '',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Entrada_del_Ca%C3%B1%C3%B3n_de_Shucto.jpg/1280px-Entrada_del_Ca%C3%B1%C3%B3n_de_Shucto.jpg'
            },
            {
                region: 'Junín',
                name: 'Cañon del Shutjo',
                time: '4 días / 3 noches',
                price: 60,
                link: '',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Entrada_del_Ca%C3%B1%C3%B3n_de_Shucto.jpg/1280px-Entrada_del_Ca%C3%B1%C3%B3n_de_Shucto.jpg'
            }
        ],
        numbers: [
            {
                quantity: '10K+',
                txt: 'Clientes felices'
            },
            {
                quantity: '50+',
                txt: 'Destinos'
            },
            {
                quantity: '500+',
                txt: 'Tours realizados'
            },
            {
                quantity: '5+',
                txt: 'años de experiencia'
            }
        ]
    },
    gallery: {
        tit: 'Momentos que Inspiran',
        sub: 'Nuestra galeria de experiencias que inspiran.',
        images: [
            {
                url: 'https://portal.andina.pe/EDPfotografia/Thumbnail/2015/08/08/000307867W.jpg',
                alt: 'Laguna de Paca'
            },
            {
                url: 'https://portal.andina.pe/EDPfotografia/Thumbnail/2015/08/08/000307867W.jpg',
                alt: 'Cañon del Shutjo'
            },
            {
                url: 'https://portal.andina.pe/EDPfotografia/Thumbnail/2015/08/08/000307867W.jpg',
                alt: 'Bosque de los pinos'
            },
            {
                url: 'https://portal.andina.pe/EDPfotografia/Thumbnail/2015/08/08/000307867W.jpg',
                alt: 'Tunan Marca'
            },
            {
                url: 'https://portal.andina.pe/EDPfotografia/Thumbnail/2015/08/08/000307867W.jpg',
                alt: 'Selva Central'
            },
            {
                url: 'https://portal.andina.pe/EDPfotografia/Thumbnail/2015/08/08/000307867W.jpg',
                alt: 'Jauja City'
            }
        ]
    },
    contact: {
        email: 'reservas@andarestoursworld.com',
        phone: '+51 928 889 884',
        location: 'Jr. Bolognesi 448 - 2do Piso'
    },
    booking: {
        tit: 'Reserva tu Próxima Aventura',
        sub: 'Completa los detalles de tu viaje y uno de nuestros asesores expertos se pondrá en contacto contigo para personalizar tu experiencia.'
    }
}