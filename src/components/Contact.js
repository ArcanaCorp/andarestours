'use client';

import { sendMessage } from "@/services/contact.service";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact ({ agency }) {

    const [ form, setForm ] = useState({
        name: '',
        email: '',
        phone: '',
        package: '',
        message: ''
    })

    const [ loading, setLoading ] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async () => {
        try {
            if (!form.name || !form.email || !form.phone || !form.package) return toast.warning('Alerta', { description: 'Completa los campos obligatorios para continuar (*)' })
                setLoading(true);
                const data = await sendMessage(form);
                if (!data) throw new Error("Ocurrio un error. Inténtalo más tarde");
                    toast.success('Se envió con éxito tu mensaje', { description: 'Pronto nos comunicaremos contigo.' })
        } catch (error) {
            console.error(error);
            toast.error('Error', { description: 'Ocurrio un error. Inténtalo más tarde' })
        } finally {
            setForm({
                name: '',
                email: '',
                phone: '',
                package: '',
                message: ''
            })
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-md bg-white rounded-md p-md lg:p-xl">
            <div className="w-full">
                <label className="block text-sm text-muted mb-sm" htmlFor="name">Nombre (*)</label>
                <input type="text" name="name" id="name" value={form.name} className="input rounded-md" placeholder="Tu nombre" onChange={handleChange} disabled={loading} />
            </div>
            <div className="w-full flex flex-col gap-md lg:flex-row">
                <div className="w-full">
                    <label className="block text-sm text-muted mb-sm" htmlFor="email">Correo Electrónico (*)</label>
                    <input type="text" name="email" id="email" value={form.email} className="input rounded-md" placeholder="Tu correo" onChange={handleChange} disabled={loading} />
                </div>
                <div className="w-full">
                    <label className="block text-sm text-muted mb-sm" htmlFor="phone">Número de Whatsapp (*)</label>
                    <input type="text" name="phone" id="phone" value={form.phone} className="input rounded-md" placeholder="Tu número" onChange={handleChange} disabled={loading} />
                </div>
            </div>
            <div className="w-full">
                <label className="block text-sm text-muted mb-sm" htmlFor="package">Paquete de ínteres (*)</label>
                <select name="package" id="package" value={form.package} className="input rounded-md" onChange={handleChange} disabled={loading}>
                    <option value={''}>Selecciona el paquete de tu ínteres</option>
                    {agency?.packages.map((pack) => (
                        <option key={pack.id} value={pack.id}>{pack?.name}</option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label className="block text-sm text-muted mb-sm" htmlFor="message">¿En qué podemos ayudarte?</label>
                <textarea name="message" id="message" value={form.message} className="textarea rounded-md" placeholder="Cuéntanos tus planes de viaje..." onChange={handleChange} disabled={loading} />
            </div>
            <div className="w-full">
                <button className="w-full btn btn-primary" disabled={loading} onClick={handleSubmit}>{loading ? 'Enviando mensaje...' : 'Enviar mensaje'}</button>
            </div>
        </div>
    )
}