import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function CardService ({ p }) {
    return (
        <li className="w-full bg-white border rounded-md py-lg px-md flex items-center flex-col gap-md text-center pointer" data-aos="zoom-in">
            <div className="w h center rounded-full bg-surface" style={{"--w": "60px", "--h": "60px"}}>{p.ico}</div>
            <h3 className="font-bold text-primary text-xl">{p.tit}</h3>
            <p className="text-muted">{p.txt}</p>
            <Link href={p.link} className="flex items-center gap-xs text-primary font-medium">Más información <IconChevronRight size={16}/></Link>
        </li>
    )
}