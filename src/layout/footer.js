'use client';

import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandX, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer ({ agency }) {

    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-white py-5xl">
            <div className="w m-auto xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                <div className="w-full grid grid-1 lg:grid-4 gap-5xl">
                    <div className="w-full">
                        <img src="./logo.png" className="w mb-md" style={{"--w": "60%"}} alt="Logo de ANDARES TOURS" />
                        <p className="text-sm text-muted mb-sm">Conectamos viajeros apasionados con destinos extraordinarios.</p>
                        <p className="text-sm text-muted">Especialistas en crear memorias que duran para siempre.</p>
                        <ul className="flex gap-md flex-row my-md">
                            <Link href={'https://www.facebook.com/AndaresToursWorld'} target="_blank" className="w h center bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}><IconBrandFacebook/></Link>
                            <Link href={'https://www.tiktok.com/@andarestoursperu'} target="_blank" className="w h center bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}><IconBrandTiktok/></Link>
                            <Link href={'https://www.instagram.com/andarestoursperu'} target="_blank" className="w h center bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}><IconBrandInstagram/></Link>
                            <Link href={'https://www.x.com/Andarestoursvip'} target="_blank" className="w h center bg-surface rounded-full" style={{"--w": "40px", "--h": "40px"}}><IconBrandX/></Link>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold text-primary text-lg mb-md">Enlaces rápidos</h4>
                        <ul className="w-full flex flex-col gap-md">
                            <Link href={'https://andarestoursworld.com/'} className="text-muted text-sm">Inicio</Link>
                            <Link href={'https://andarestoursworld.com/#about'} className="text-muted text-sm">Nosotros</Link>
                            <Link href={'https://andarestoursworld.com/#services'} className="text-muted text-sm">Nuestros Servicios</Link>
                            <Link href={'https://andarestoursworld.com/#destinations'} className="text-muted text-sm">Destinos TOP</Link>
                            <Link href={'https://andarestoursworld.com/'} className="text-muted text-sm">Políticas de privacidad</Link>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold text-primary text-lg mb-md">Contacto</h4>
                        <ul className="w-full flex flex-col gap-md">
                            <Link href={'mailto:reservas@andarestoursworld.com?subject=Consulta%20de%20Reserva'} className="flex items-center gap-sm text-sm"><IconMail/> {agency?.email}</Link>
                            <Link href={'tel:+51928889884'} className="flex items-center gap-sm text-sm"><IconPhone/> {agency?.phone ? `+51 ${agency?.phone}` : ''}</Link>
                            <Link href={'https://maps.app.goo.gl/fEn9YqivKqk1LXKo9'} target="_blank" className="flex items-center gap-sm text-sm"><IconMapPin/> {agency?.direction}</Link>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold text-primary text-lg mb-md">Newsletter</h4>
                        <p className="text-sm text-muted mb-md">Recibe ofertas exclusivas y guías de viaje directamente en tu correo.</p>
                        <div className="w-full flex flex-col gap-md">
                            <input type="email" id="email" className="input rounded-md" name="email" placeholder="Tu correo electrónico" />
                            <button className="w-full btn btn-primary">Subscribirme</button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-between lg:flex-row">
                    <p className="text-xs text-muted">© {year} Andares Tours todos los derechos reservados</p>
                    <ul className="flex flex-row items-center gap-sm">
                        <Link href={'/'} className="text-xs text-muted">Términos de servicio</Link>
                        <Link href={'/'} className="text-xs text-muted">Cookies</Link>
                        <Link href={'https://wa.me/51966327426/?text=Tenemos+problemas+técnicos+en+la+página+Andares+Tours'} target="_blank" className="text-xs text-muted">Soporte</Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}