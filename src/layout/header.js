import { page } from "@/db/db";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header () {

    const pathname = usePathname();

    return (
        <header className="sticky inset w-full h lg:h bg-white" style={{"--h": "60px", "--h-lg": "80px", "zIndex": "1001"}}>
            <div className="w flex items-center justify-between h-full m-auto xxl:w" style={{"--w": "90%", "--w-xxl": "80%"}}>
                <Link href={'/'} className="block h lg:h" style={{"--h": "46px", "--h-lg": "66px"}}>
                    <img src="./logo.png" alt="Logo de Andares Tours | Agencia de viajes y turismo en Perú especializada en tours, tickets aéreos, hoteles y experiencias únicas." width={100} height={100} />
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
                <Link href={'https://wa.me/51928889884/?text=Hola+deseo+realizar+una+reserva'} target="_blank" className="btn btn-primary">Reservar ya!</Link>
            </div>
        </header>
    )
}