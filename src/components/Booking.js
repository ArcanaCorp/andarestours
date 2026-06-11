'use client';
import { booking } from "@/services/booking.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Booking ({ agency }) {

    const [ form, setForm ] = useState({
        name: '',
        phone: '',
        package: '',
        date: '',
        pax: 1,
        total: ''
    })
    const [ loading, setLoading ] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async () => {
        if (!form.name || !form.phone || !form.package || !form.date || !form.pax) return toast.warning('Alerta', { description: 'Completa todos los campos para continuar la reserva.' })
        try {
            setLoading(true);
            const data = await booking(form)
            if (!data) return toast.warning('Alerta', { description: 'No se pudo completar la tarde. Inténtalo más tarde.' })
            toast.success('Éxito', { description: 'Se realizó la reserva correctamente. Nos comunicaremos contigo.' })
        } catch (error) {
            console.error(error);
            toast.error('Error', { description: 'Hubo un error inesperado. Inténtalo más tarde.' })
        } finally {
            setForm({
                name: '',
                phone: '',
                package: '',
                date: '',
                pax: ''
            })
            setLoading(false);
        }
    }

    useEffect(() => {

        if (!form.package || !form.pax) {
            setForm(prev => ({
                ...prev,
                total: ""
            }));
            return;
        }

        const selectedPackage = agency?.packages.find(
            pack => pack.id === form.package
        );

        if (!selectedPackage) return;

        setForm(prev => ({
            ...prev,
            total: Number(selectedPackage.price) * Number(form.pax)
        }));

    }, [form.package, form.pax, agency]);

    return (
        <div className="w flex flex-col gap-md bg-white p-3xl rounded-md lg:w m-auto" style={{"--w": "100%", "--w-lg": "60%"}}>
            <div className="w-full flex gap-md">
                <div className="w-full">
                    <label className="block text-sm text-muted mb-sm" htmlFor="name">Nombres completos</label>
                    <input type="text" name="name" id="name" value={form.name} className="input rounded-md" placeholder="Juan Pérez Hilario" onChange={handleChange} disabled={loading} />
                </div>
                <div className="w-full">
                    <label className="block text-sm text-muted mb-sm" htmlFor="phone">Número de WhatsApp</label>
                    <input type="text" name="phone" id="phone" value={form.phone} className="input rounded-md" placeholder="+51 995 998 996" onChange={handleChange} disabled={loading} />
                </div>
            </div>
            <div className="w-full flex gap-md">
                <div className="w-full">
                    <label className="block text-sm text-muted mb-sm" htmlFor="package">¿A dónde vas?</label>
                    <select name="package" id="package" value={form.package} className="input rounded-md" onChange={handleChange} disabled={loading}>
                        <option value={''}>Selecciona el paquete de tu ínteres</option>
                        {agency?.packages.map((pack) => (
                            <option key={pack.id} value={pack.id}>{pack.name}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full">
                    <label className="block text-sm text-muted mb-sm" htmlFor="date">Fecha de viaje</label>
                    <input type="date" name="date" id="date" value={form.date} className="input rounded-md" onChange={handleChange} disabled={loading}/>
                </div>
            </div>
            <div className="w-full flex gap-md items-center">
                <div className="w-full">
                    <label className="block text-sm text-muted mb-sm" htmlFor="pax">Número de viajeros</label>
                    <input type="number" inputMode="numeric" name="pax" id="pax" value={form.pax} min={1} max={12} className="input rounded-md" placeholder="Ejm: 1 o 2" onChange={handleChange} disabled={loading}/>
                </div>
            </div>
            <div className="w-full flex items-center gap-md">
                <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>{loading ? 'Reservando...' : 'Solicitar reserva'}</button>
                {form.total && ( <p className="text-sm font-medium text-muted">Total estimado: S/ {Number(form.total).toFixed(2)}</p>)}
            </div>
            <div className="w-full">
                <p className="text-xs text-muted">* Al enviar este formulario, aceptas nuestras <Link href={'/'} className="text-secondary font-medium">políticas de privacidad</Link> y <Link href={'/'} className="text-secondary font-medium">términos de servicio</Link>.</p>
            </div>
        </div>
    )
}