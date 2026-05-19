'use client';

import CardImage from "@/components/CardImage";
import CardService from "@/components/CardService";
import { page } from "@/db/db";
import { IconBed, IconBrandFacebook, IconBrandInstagram, IconBrandSafari, IconBrandTiktok, IconBrandWhatsapp, IconBrandX, IconCar, IconCarGarage, IconChevronRight, IconClock, IconMail, IconMapPin, IconPhone, IconPlane, IconSearch, IconShare, IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page () {

    const pathname = usePathname();

    const year = new Date().getFullYear();

    return (

        <>
        
            <header className="sticky inset w-full h lg:h bg-white" style={{"--h": "60px", "--h-lg": "80px", "zIndex": "1001"}}>
                <div className="w flex items-center justify-between h-full m-auto xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                    <Link href={'/'} className="block h lg:h" style={{"--h": "46px", "--h-lg": "66px"}}>
                        <img src="./LOGO - ANDARESv2.png" alt="Logo de ANDARES" width={100} height={100} />
                    </Link>
                    <nav className="none lg:block">
                        <ul className="flex items-center gap-md">
                            {page.navs.map((nav, i) => (
                                <li key={i}>
                                    <Link href={nav.link} className={`block py-xs px-md text-sm ${pathname === nav.link ? 'font-medium text-secondary' : ''}`}>{nav.txt}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link href={'/'} className="btn btn-primary">Reservar ya!</Link>
                </div>
            </header>

            <main className="w-full">

                <section className="relative w-full h lg:h" style={{"--h": "calc(100dvh - 60px)", "--h-lg": "calc(100dvh - 80px)"}}>
                    <div className="w-full h-full" style={{"backgroundColor": "rgba(0,0,0,.3)"}}>
                        <div className="w m-auto h-full flex flex-col justify-center gap-xl xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                            <h1 className="text-4xl font-bold text-white lg:text-6xl">
                                <span className="block">{page.hero.tit1}</span>
                                <span className="block">{page.hero.tit2}</span>
                            </h1>
                            <p className="text-white">
                                <span className="block">{page.hero.txt1}</span>
                                <span className="block">{page.hero.txt2}</span>
                            </p>
                            <div className="flex gap-md">
                                <Link href={'/'} className="btn btn-primary">{page.hero.cta}</Link>
                                <Link href={'/'} className="btn btn-secondary">{page.hero.cti}</Link>
                            </div>
                        </div>
                    </div>
                    <picture className="absolute inset block w-full h-full" style={{"zIndex": "-1"}}>
                        <source media="(min-width: 1024px)" srcSet="/bg-hero-desktop.jpg" />
                        <img src="/bg-hero.jpg" alt="Hero background" className="w-full h-full object-cover"/>
                    </picture>
                </section>

                <section className="relative w-full py-5xl bg-white">
                    <div className="w m-auto flex flex-col gap-xl xxl:w lg:flex-row" style={{"--w": "90%", "--w-xxl": "80%"}}>
                        <div className="w-full">
                            <div className="w-full h bg-surface rounded-md overflow-hidden" style={{"--h": "400px"}}></div>
                        </div>
                        <div className="w-full flex flex-col gap-md">
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
                                <div className="flex">
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

                <section className="w-full py-5xl">
                    <div className="w m-auto flex flex-col gap-xl xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                        <div className="flex flex-col gap-sm">
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

                <section className="w-full pt-5xl bg-white flex flex-col">
                    <div className="w m-auto flex flex-col gap-xl xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                        <div className="flex flex-col gap-sm">
                            <h2 className="text-2xl text-center lg:text-4xl">{page.destinations.tit}</h2>
                            <p className="text-center">{page.destinations.sub}</p>
                        </div>
                        <ul className="grid grid-1 gap-md mb-2xl md:grid-2 lg:grid-3 xxl:grid-4">
                            {page.destinations.items.map((d, i) => (
                                <CardImage key={i} d={d} />
                            ))}
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
                        <h2 className="text-2xl text-center lg:text-4xl">{page.gallery.tit}</h2>
                        <p className="text-center">{page.gallery.sub}</p>
                        <ul className="w-full grid grid-1 gap-md lg:grid-3">
                            {page.gallery.images.map((img, i) => (
                                <li key={i} className="w-full rounded-md overflow-hidden pointer">
                                    <img src={img.url} alt={`${img.alt}`} className="w-full h-full" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="w-full py-5xl bg-surface">
                    <div className="w m-auto flex flex-col gap-5xl lg:flex-row xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                        <div className="w-full">
                            <p className="text-secondary uppercase">CONTÁCTANOS</p>
                            <h2 className="text-2xl lg:text-4xl">¿Listo para empezar tu viaje?</h2>
                            <p className="text-muted my-lg">Estamos aquí para ayudarte a planificar cada detalle. Escríbenos y un asesor se pondrá en contacto a la brevedad.</p>
                            <ul className="flex flex-col gap-md my-md">
                                <li className="w-full flex gap-md items-center">
                                    <span className="w h center rounded-full bg-white text-secondary" style={{"--w": "50px", "--h": "50px"}}><IconMapPin/></span>
                                    <p>
                                        <span className="block text-primary font-bold">Dirección</span>
                                        <span className="text-sm">{page.contact.location}</span>
                                    </p>
                                </li>
                                <li className="w-full flex gap-md items-center">
                                    <span className="w h center rounded-full bg-white text-secondary" style={{"--w": "50px", "--h": "50px"}}><IconPhone/></span>
                                    <p>
                                        <span className="block text-primary font-bold">Llámanos</span>
                                        <span className="text-sm">{page.contact.phone}</span>
                                    </p>
                                </li>
                                <li className="w-full flex gap-md items-center">
                                    <span className="w h center rounded-full bg-white text-secondary" style={{"--w": "50px", "--h": "50px"}}><IconBrandWhatsapp/></span>
                                    <p>
                                        <span className="block text-primary font-bold">Escríbenos</span>
                                        <span className="text-sm">{page.contact.phone}</span>
                                    </p>
                                </li>
                                <li className="w-full flex gap-md items-center">
                                    <span className="w h center rounded-full bg-white text-secondary" style={{"--w": "50px", "--h": "50px"}}><IconMail/></span>
                                    <p>
                                        <span className="block text-primary font-bold">Email</span>
                                        <span className="text-sm">{page.contact.email}</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col gap-md bg-white rounded-md p-md lg:p-xl">
                                <div className="w-full">
                                    <label className="block text-sm text-muted mb-sm" htmlFor="fullName">Nombre</label>
                                    <input type="text" name="fullName" id="fullName" className="input rounded-md" placeholder="Tu nombre" />
                                </div>
                                <div className="w-full flex flex-col gap-md lg:flex-row">
                                    <div className="w-full">
                                        <label className="block text-sm text-muted mb-sm" htmlFor="email">Correo Electrónico</label>
                                        <input type="text" name="email" id="email" className="input rounded-md" placeholder="Tu correo" />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-sm text-muted mb-sm" htmlFor="phone">Número de Whatsapp</label>
                                        <input type="text" name="phone" id="phone" className="input rounded-md" placeholder="Tu número" />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label className="block text-sm text-muted mb-sm" htmlFor="pack">Paquete de ínteres</label>
                                    <select name="pack" id="pack" className="input rounded-md">
                                        <option>Canchayllo</option>
                                        <option>Canchayllo</option>
                                        <option>Canchayllo</option>
                                        <option>Canchayllo</option>
                                        <option>Canchayllo</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <label className="block text-sm text-muted mb-sm" htmlFor="msg">¿En qué podemos ayudarte?</label>
                                    <textarea name="msg" id="msg" className="textarea rounded-md" placeholder="Cuéntanos tus planes de viaje..." />
                                </div>
                                <div className="w-full">
                                    <button className="w-full btn btn-primary">Enviar mensaje</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-5xl bg-white">
                    <div className="w m-auto flex flex-col items-center text-center gap-md p-4xl rounded-md lg:w bg-gradient-primary" style={{"--w": "90%", "--w-lg": "60%"}}>
                        <h2 className="text-white text-center text-5xl font-bold">Tu próxima aventura comienza hoy</h2>
                        <p className="text-white text-center">No dejes para mañana el viaje que puedes vivir hoy. Nuestros asesores expertos están listos para diseñar tu itenerario perfect.</p>
                        <Link href={'/'} className="w-fit btn btn-secondary flex gap-md"><IconBrandWhatsapp/> Cotizar por Whatsapp</Link>
                    </div>
                </section>

                <section className="w-full py-5xl">
                    <div className="w m-auto flex flex-col gap-xl xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                        <div className="flex flex-col gap-sm">
                            <h2 className="text-2xl text-center lg:text-4xl">{page.booking.tit}</h2>
                            <p className="text-center">{page.booking.sub}</p>
                        </div>
                        <div className="w flex flex-col gap-md bg-white p-3xl rounded-md lg:w m-auto" style={{"--w": "100%", "--w-lg": "60%"}}>
                            <div className="w-full flex gap-md">
                                <div className="w-full">
                                    <label className="block text-sm text-muted mb-sm" htmlFor="nameBooking">Nombres completos</label>
                                    <input type="text" name="nameBooking" id="nameBooking" className="input rounded-md" placeholder="Juan Pérez Hilario" />
                                </div>
                                <div className="w-full">
                                    <label className="block text-sm text-muted mb-sm" htmlFor="phoneBooking">Número de WhatsApp</label>
                                    <input type="text" name="phoneBooking" id="phoneBooking" className="input rounded-md" placeholder="+51 995 998 996" />
                                </div>
                            </div>
                            <div className="w-full flex gap-md">
                                <div className="w-full">
                                    <label className="block text-sm text-muted mb-sm" htmlFor="placeBooking">¿A dónde vas?</label>
                                    <select name="placeBooking" id="placeBooking" className="input rounded-md">
                                        <option>Canchayllo</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <label className="block text-sm text-muted mb-sm" htmlFor="dateBooking">Fecha de viaje</label>
                                    <input type="date" name="dateBooking" id="dateBooking" className="input rounded-md" placeholder="Juan Pérez Hilario" />
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="block text-sm text-muted mb-sm" htmlFor="personBooking">Número de viajeros</label>
                                <select name="personBooking" id="personBooking" className="input rounded-md">
                                    <option>1 viajero</option>
                                    <option>2 viajeros</option>
                                    <option>3-5 viajeros</option>
                                    <option>Grupo (+5)</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <button className="btn btn-primary">Solicitar reserva</button>
                            </div>
                            <div className="w-full">
                                <p className="text-xs text-muted">* Al enviar este formulario, aceptas nuestras <Link href={'/'} className="text-secondary font-medium">políticas de privacidad</Link> y <Link href={'/'} className="text-secondary font-medium">términos de servicio</Link>.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="w-full bg-white py-5xl">
                <div className="w m-auto xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                    <div className="w-full grid grid-1 lg:grid-4 gap-5xl">
                        <div className="w-full">
                            <img src="./LOGO - ANDARESv2.png" className="w mb-md" style={{"--w": "60%"}} alt="Logo de ANDARES TOURS" />
                            <p className="text-sm text-muted mb-sm">Conectamos viajeros apasionados con destinos extraordinarios.</p>
                            <p className="text-sm text-muted">Especialistas en crear memorias que duran para siempre.</p>
                            <ul className="flex gap-md flex-row my-md">
                                <button className="w h center bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}><IconBrandFacebook/></button>
                                <button className="w h center bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}><IconBrandTiktok/></button>
                                <button className="w h center bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}><IconBrandInstagram/></button>
                                <button className="w h center bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}><IconBrandX/></button>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-primary text-lg mb-md">Enlaces rápidos</h4>
                            <ul className="w-full flex flex-col gap-md">
                                <Link href={'/'} className="text-muted text-sm">Inicio</Link>
                                <Link href={'/'} className="text-muted text-sm">Nosotros</Link>
                                <Link href={'/'} className="text-muted text-sm">Nuestros Servicios</Link>
                                <Link href={'/'} className="text-muted text-sm">Destinos TOP</Link>
                                <Link href={'/'} className="text-muted text-sm">Políticas de privacidad</Link>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-primary text-lg mb-md">Contacto</h4>
                            <ul className="w-full flex flex-col gap-md">
                                <Link href={'/'} className="flex items-center gap-sm text-sm"><IconMail/> reservas@andarestoursworld.com</Link>
                                <Link href={'/'} className="flex items-center gap-sm text-sm"><IconPhone/> +51 987 654 321</Link>
                                <Link href={'/'} className="flex items-center gap-sm text-sm"><IconMapPin/> Jr. Bolognesi 421 - Piso 2</Link>
                            </ul>
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-primary text-lg mb-md">Newsletter</h4>
                            <p className="text-sm text-muted mb-md">Recibe ofertas exclusivas y guías de viaje directamente en tu correo.</p>
                            <div className="w-full flex flex-col gap-md">
                                <input type="email" id="email" className="input" name="email" placeholder="Tu correo electrónico" />
                                <button className="w-full btn btn-primary">Subscribirme</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-between lg:flex-row">
                        <p className="text-xs text-muted">© {year} Andares Tours todos los derechos reservados</p>
                        <ul className="flex flex-row items-center gap-sm">
                            <Link href={'/'} className="text-xs text-muted">Términos de servicio</Link>
                            <Link href={'/'} className="text-xs text-muted">Cookies</Link>
                            <Link href={'/'} className="text-xs text-muted">Soporte</Link>
                        </ul>
                    </div>
                </div>
            </footer>
        
        </>

    )

}