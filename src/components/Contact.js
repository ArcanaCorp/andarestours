export default function Contact ({ agency }) {
    return (
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
                    <option value={''}>Selecciona el paquete de tu ínteres</option>
                    {agency?.packages.map((pack) => (
                        <option key={pack.id}>Canchayllo</option>
                    ))}
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
    )
}