import Link from "next/link";

export default function Booking ({ agency }) {
    return (
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
                        <option value={''}>Selecciona el paquete de tu ínteres</option>
                        {agency?.packages.map((pack) => (
                            <option key={pack.id}>Canchayllo</option>
                        ))}
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
    )
}