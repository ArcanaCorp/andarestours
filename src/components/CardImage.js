import { IconClock, IconStarFilled } from "@tabler/icons-react";

export default function CardImage ({ d }) {
    return (
        <li className="w-full h rounded-md overflow-hidden pointer" style={{"--h": "450px", "backgroundImage": `url(${d.image})`, "backgroundPosition": "center", "backgroundSize": "cover"}}>
            <div className="relative w-full h-full p-lg flex flex-col justify-between" style={{"backgroundColor": "rgba(0,0,0,.5)"}}>
                <span className="flex items-center justify-end gap-xs rounded-full bg-white text-xs p-md" style={{"width": "fit-content"}}><IconStarFilled size={16} color="#ffb020"/> 4.9</span>
                <div className="text-white">
                    <p className="text-md">{d.region}</p>
                    <h3 className="font-semi-bold text-3xl mb-md">{d.name}</h3>
                    <p className="flex gap-md mb-md">
                        <span className="flex items-center gap-xs text-sm"><IconClock size={16}/> {d.time}</span>
                        <span className="text-xl font-bold">S/{(d.price).toFixed(2)}</span>
                    </p>
                    <button className="w-full btn btn-secondary">Reservar ahora</button>
                </div>
            </div>
            <img className="absolute inset w-full h-full" style={{"zIndex": "-1"}} src={d.image} width={100} height={100} alt={`${d.name} - Andares Tours`} />
        </li>
    )
}