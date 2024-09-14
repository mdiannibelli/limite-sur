import '../styles/form.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactForm = () => {
    const form = useRef();
    const button = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cpsk7ol', 'template_748prdz', form.current, { publicKey: '69btsP3H33wpWkDoI' }
        ).then(
            () => {
                button.current.textContent = 'Formulario enviado con éxito!'
                button.current.className = 'font-tajawal text-primary text-xs md:text-xl font-thin flex justify-center uppercase mt-6 mx-auto max-w-[360px] rounded-md p-2 bg-white'
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <form onSubmit={sendEmail} ref={form} className="grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="name" className="flex flex-col">
                    <span className="font-tajawal font-semibold text-md md:text-lg text-white">Nombre*</span>
                    <input type="text" name="user_name" id='name' required className="border-b-2 border-transparent border-white bg-transparent h-8 text-white font-tajawal font-thin text-xs md:text-2xl w-auto focus:outline-none" />
                </label>
            </div>
            <div>
                <label htmlFor="email" className="flex flex-col">
                    <span className="font-tajawal font-semibold text-md md:text-lg text-white">E-mail*</span>
                    <input type="email" name="user_email" id="email" required className="border-b-2 border-transparent border-white bg-transparent h-8 text-white font-tajawal font-thin text-xs md:text-2xl w-auto focus:outline-none" />
                    <span className="font-tajawal text-md text-red-600" id="emailStatus"></span>
                </label>
            </div>
            <div>
                <label htmlFor="phone" className="flex flex-col">
                    <span className="font-tajawal font-semibold text-md md:text-lg text-white">Número de celular*</span>
                    <input type="text" id="phone" name="user_phone" required className="border-b-2 border-transparent border-white bg-transparent h-8 text-white font-tajawal font-thin text-xs md:text-2xl w-auto focus:outline-none" />
                    <span className="font-tajawal text-md text-red-600" id="phoneStatus"></span>
                </label>
            </div>

            <div className="flex flex-col">
                <span className="font-tajawal font-semibold text-md md:text-lg text-white">Cabaña a reservar*</span>
                <select name="user_cabañas" required id="cabañas-reserva" className="border-2 bg-transparent border-white h-8 font-tajawal text-white font-thin text-xs md:text-xl w-auto focus:outline-none">
                    <option value="1" className="bg-primary">Cabaña Esquel</option>
                </select>
            </div>
            <div className="flex flex-col">
                <span className="font-tajawal font-semibold text-md md:text-lg text-white">Cantidad de ocupantes*</span>
                <select name="user_ocupantes" required id="ocupantes" className="border-2 bg-transparent border-white h-8 font-tajawal text-white font-thin text-xs md:text-xl w-auto focus:outline-none">
                    <option value="1" className="bg-primary">2 ocupantes</option>
                    <option value="2" className="bg-primary">3 ocupantes</option>
                    <option value="3" className="bg-primary">4 ocupantes</option>
                    <option value="4" className="bg-primary">5 ocupantes</option>
                    <option value="5" className="bg-primary">6 ocupantes</option>
                </select>
            </div>
            <div className="flex flex-col">
                <span className="font-tajawal font-semibold text-md md:text-lg text-white">Cantidad de noches*</span>
                <input type="number" id="noches" name="user_noches" required className="border-b-2 border-transparent border-white bg-transparent h-8 text-white font-tajawal font-thin text-xs md:text-2xl w-auto focus:outline-none" />
                <span className="font-tajawal text-md text-red-600" id="nochesStatus"></span>
            </div>
            <div className="flex flex-col">
                <span className="font-tajawal font-semibold text-md md:text-lg text-white">Fecha*</span>
                <input id="fecha" type="date" name="user_date" required className="date-value p-2 border-2 bg-transparent border-white h-8 font-tajawal text-white font-thin text-xs md:text-xl w-auto focus:outline-none" />
            </div>
            <div className="col-span-2">
                <label htmlFor="mensaje" className="font-tajawal font-semibold text-md md:text-lg text-white" >
                    <span className="font-tajawal font-semibold text-lg text-white">Mensaje*</span>
                    <div className="m-0 p-0 focus:outline-none">
                        <textarea name="message" required id="mensaje" rows="6" className="p-2.5 block border-2 border-transparent border-white bg-transparent font-tajawal font-thin w-full  focus:outline-none" />
                    </div>
                </label>
            </div>
            <div className="col-span-full">
                <label htmlFor="enviar-formulario" className="flex justify-center">
                    <input type="submit" id="enviar-formulario" value="Enviar" className="cursor-pointer font-tajawal text-white text-2xl uppercase px-8 py-2 rounded-md bg-primary hover:bg-secondary transition duration-500" />
                </label>
                <span ref={button}></span>
            </div>
        </form>
    )
}
