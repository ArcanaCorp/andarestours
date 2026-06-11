'use client';

import Booking from "@/components/Booking";
import CardImage from "@/components/CardImage";
import CardService from "@/components/CardService";
import Contact from "@/components/Contact";
import { page } from "@/db/db";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import { useData } from "@/providers/DataProvider";
import { IconBrandWhatsapp, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

export default function Page () {

    const { agency } = useData();

    return (

        <>
        
            <Header/>

            <main className="w-full">

                <section className="relative w-full h lg:h" style={{"--h": "calc(100dvh - 60px)", "--h-lg": "calc(100dvh - 80px)"}}>
                    <div className="w-full h-full" style={{"backgroundColor": "rgba(0,0,0,.3)"}}>
                        <div className="w m-auto h-full flex flex-col justify-center gap-xl xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}} data-aos="fade-up">
                            <h1 className="text-4xl font-bold text-white lg:text-6xl">
                                <span className="block">{page.hero.tit1}</span>
                                <span className="block">{page.hero.tit2}</span>
                            </h1>
                            <p className="text-white">
                                <span className="block">{page.hero.txt1}</span>
                                <span className="block">{page.hero.txt2}</span>
                            </p>
                            <div className="flex gap-md">
                                <Link href={'https://wa.me/51928889884/?text=Hola+deseo+realizar+una+reserva'} target="_blank" className="btn btn-primary">{page.hero.cta}</Link>
                                <Link href={'https://andarestoursworld.com/#destinations'} className="btn btn-secondary">{page.hero.cti}</Link>
                            </div>
                        </div>
                    </div>
                    <picture className="absolute inset block w-full h-full" style={{"zIndex": "-1"}}>
                        <source media="(min-width: 1024px)" srcSet="/bg-hero-desktop.jpg" />
                        <img src="/bg-hero.jpg" alt="Hero background" className="w-full h-full object-cover"/>
                    </picture>
                </section>

                <section className="relative w-full py-5xl bg-white" id="about">
                    <div className="w m-auto flex flex-col gap-xl xxl:w lg:flex-row" style={{"--w": "90%", "--w-xxl": "80%"}}>
                        <div className="w-full">
                            <div className="w-full h bg-surface rounded-md overflow-hidden" style={{"--h": "400px"}} data-aos="fade-right">
                                <img src="/banner-3.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-md" data-aos="fade-left">
                            <p className="text-secondary uppercase">Sobre nosotros</p>
                            <h2 className="text-4xl font-medium">Tu aliado experto en viajes de lujo y aventura</h2>
                            <p className="text-muted">En Andares Tours World, creemos que viajar es mucho más que desplazarse de un punto a otro. Es una oportunidad para conectar culturas, desafiar límites y crear recuerdos que perduran la vida.</p>
                            <div className="flex gap-md flex-col lg:flex-row">
                                <div className="w-full p-md rounded-md bg-surface">
                                    <h3 className="text-primary font-bold text-lg mb-sm">Misión</h3>
                                    <p className="text-muted text-sm">Diseñar experiencias personalizadas con los más altos estándares de calidad y seguridad</p>
                                </div>
                                <div className="w-full p-md rounded-md bg-surface">
                                    <h3 className="text-primary font-bold text-lg mb-sm">Valores</h3>
                                    <p className="text-muted text-sm">Integridad, excelencia en el servicio, pasión por el detalle y compromiso con el viajero</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-md">
                                <div className="flex none">
                                    <div className="w h bg-white center rounded-full" style={{"--w": "50px", "--h": "50px"}}>
                                        <div className="w h bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}>
                                            <img src={`https://ui-avatars.com/api/?name=John+Doe&background=FF00FF`} />
                                        </div>
                                    </div>
                                    <div className="w h bg-white center rounded-full" style={{"--w": "50px", "--h": "50px", "marginLeft": "-20px"}}>
                                        <div className="w h bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}>
                                            <img src={`https://ui-avatars.com/api/?name=John+Doe&background=FF00FF`} />
                                        </div>
                                    </div>
                                    <div className="w h bg-white center rounded-full" style={{"--w": "50px", "--h": "50px", "marginLeft": "-20px"}}>
                                        <div className="w h bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}>
                                            <img src={`https://ui-avatars.com/api/?name=John+Doe&background=FF00FF`} />
                                        </div>
                                    </div>
                                    <div className="w h bg-white center rounded-full" style={{"--w": "50px", "--h": "50px", "marginLeft": "-20px"}}>
                                        <div className="w h bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}>
                                            <img src={`https://ui-avatars.com/api/?name=John+Doe&background=FF00FF`} />
                                        </div>
                                    </div>
                                    <div className="w h bg-white center rounded-full" style={{"--w": "50px", "--h": "50px", "marginLeft": "-20px"}}>
                                        <div className="w h bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}>
                                            <img src={`https://ui-avatars.com/api/?name=John+Doe&background=FF00FF`} />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted text-sm"><b className="text-primary">5+ Especialistas</b> dedicados a tu próximo destino</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-5xl" id="services">
                    <div className="w m-auto flex flex-col gap-xl xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                        <div className="flex flex-col gap-sm" data-aos="fade-up">
                            <h2 className="text-2xl text-center lg:text-4xl">{page.services.tit}</h2>
                            <p className="text-center">{page.services.sub}</p>
                        </div>
                        <ul className="w-full grid grid-1 gap-md md:grid-2 lg:grid-5">
                            {page.services.cards.map((p, i) => (
                                <CardService key={i} p={p} />
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="w-full pt-5xl bg-white flex flex-col" id="destinations">
                    <div className="w m-auto flex flex-col gap-xl xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                        <div className="flex flex-col gap-sm" data-aos="fade-up">
                            <h2 className="text-2xl text-center lg:text-4xl">{page.destinations.tit}</h2>
                            <p className="text-center">{page.destinations.sub}</p>
                        </div>
                        <ul className="grid grid-1 gap-md mb-2xl md:grid-2 lg:grid-3 xxl:grid-4">
                            {agency?.packages.length > 0 && (
                                agency?.packages.map((pck) => (
                                    <CardImage key={pck.id} d={pck} />
                                ))
                            )}
                        </ul>
                    </div>
                    <div className="w-full bg-primary">
                        <div className="w m-auto flex flex-col lg:flex-row py-2xl" style={{"--w": "90%"}}>
                            {page.destinations.numbers.map((n, i) => (
                                <div key={i} className="w-full text-white text-center">
                                    <h3 className="text-4xl font-bold">{n.quantity}</h3>
                                    <p className="uppercase">{n.txt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="w-full py-5xl bg-white">
                    <div className="w m-auto flex flex-col gap-xl xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                        <div className="flex flex-col gap-sm" data-aos="fade-up">
                            <h2 className="text-2xl text-center lg:text-4xl">{page.gallery.tit}</h2>
                            <p className="text-center">{page.gallery.sub}</p>
                        </div>
                        <ul className="w-full grid grid-1 gap-md lg:grid-3">
                            {agency?.packages.length > 0 && (
                                agency?.packages?.flatMap(pack => pack.package_images?.map((image, index) => (
                                    <li key={`${pack.id}-${index}`} className="w-full rounded-md overflow-hidden pointer" data-aos="zoom-in">
                                        <img src={image.image_url} alt={`${pack.name}`} className="w-full h-full" />
                                    </li>
                                )))
                            )}
                        </ul>
                    </div>
                </section>

                <section className="w-full py-5xl bg-surface" id="contact">
                    <div className="w m-auto flex flex-col gap-5xl lg:flex-row xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                        <div className="w-full" data-aos="zoom-in-right">
                            <p className="text-secondary uppercase">CONTÁCTANOS</p>
                            <h2 className="text-2xl lg:text-4xl">¿Listo para empezar tu viaje?</h2>
                            <p className="text-muted my-lg">Estamos aquí para ayudarte a planificar cada detalle. Escríbenos y un asesor se pondrá en contacto a la brevedad.</p>
                            <ul className="flex flex-col gap-md my-md">
                                <li className="w-full flex gap-md items-center">
                                    <span className="w h center rounded-full bg-white text-secondary" style={{"--w": "50px", "--h": "50px"}}><IconMapPin/></span>
                                    <p>
                                        <span className="block text-primary font-bold">Dirección</span>
                                        <span className="text-sm">{agency?.direction}</span>
                                    </p>
                                </li>
                                <li className="w-full flex gap-md items-center">
                                    <span className="w h center rounded-full bg-white text-secondary" style={{"--w": "50px", "--h": "50px"}}><IconPhone/></span>
                                    <p>
                                        <span className="block text-primary font-bold">Llámanos</span>
                                        <span className="text-sm">{agency?.phone}</span>
                                    </p>
                                </li>
                                <li className="w-full flex gap-md items-center">
                                    <span className="w h center rounded-full bg-white text-secondary" style={{"--w": "50px", "--h": "50px"}}><IconBrandWhatsapp/></span>
                                    <p>
                                        <span className="block text-primary font-bold">Escríbenos</span>
                                        <span className="text-sm">{agency?.whatsapp || agency?.phone}</span>
                                    </p>
                                </li>
                                <li className="w-full flex gap-md items-center">
                                    <span className="w h center rounded-full bg-white text-secondary" style={{"--w": "50px", "--h": "50px"}}><IconMail/></span>
                                    <p>
                                        <span className="block text-primary font-bold">Email</span>
                                        <span className="text-sm">{agency?.email}</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full" data-aos="zoom-in-left">
                            <Contact agency={agency} />
                        </div>
                    </div>
                </section>

                <section className="w-full py-5xl bg-white">
                    <div className="w m-auto flex flex-col items-center text-center gap-md p-4xl rounded-md lg:w bg-gradient-primary" style={{"--w": "90%", "--w-lg": "60%"}} data-aos="fade-up">
                        <h2 className="text-white text-center text-5xl font-bold">Tu próxima aventura comienza hoy</h2>
                        <p className="text-white text-center">No dejes para mañana el viaje que puedes vivir hoy. Nuestros asesores expertos están listos para diseñar tu itenerario perfect.</p>
                        <Link href={`https://wa.me/51${agency?.whatsapp || agency?.phone}/?text=Hola+deseo+cotizar+un+tour`} target="_blank" className="w-fit btn btn-secondary flex gap-md"><IconBrandWhatsapp/> Cotizar por Whatsapp</Link>
                    </div>
                </section>

                <section className="w-full py-5xl">
                    <div className="w m-auto flex flex-col gap-xl xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}} data-aos="fade-up">
                        <div className="flex flex-col gap-sm" data-aos="fade-up">
                            <h2 className="text-2xl text-center lg:text-4xl">{page.booking.tit}</h2>
                            <p className="text-center">{page.booking.sub}</p>
                        </div>
                        <Booking agency={agency} />
                    </div>
                </section>

            </main>

            <Footer agency={agency} />
        
        </>

    )

}