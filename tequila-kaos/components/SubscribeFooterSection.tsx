import { Instagram, Linkedin } from "lucide-react";

export default function SubscribeFooterSection() {
    return (
        <section className="relative flex flex-col items-center justify-center py-16 px-6 bg-kaos-brown text-center overflow-hidden">

            {/* Subscribe Form */}
            <div className="max-w-md w-full z-10 space-y-8 mb-24">
                <h2 className="text-4xl font-heading text-kaos-beige uppercase tracking-wide">
                    Sé Parte del Kaos
                </h2>

                <p className="text-kaos-beige/80 text-sm leading-relaxed font-light">
                    Suscríbete y obtén acceso a promociones secretas, experiencias únicas y
                    sorpresas que no publicamos en ningún otro lado.
                </p>

                <div className="space-y-4">
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="email" className="text-kaos-beige/60 text-xs uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="tucorreo@gmail.com"
                            className="w-full bg-transparent border border-kaos-gold/30 rounded-lg p-3 text-kaos-beige placeholder:text-kaos-beige/20 focus:outline-none focus:border-kaos-gold transition-colors"
                        />
                    </div>
                    <button className="w-full bg-kaos-beige text-kaos-brown font-semibold py-3 rounded-full uppercase tracking-wide hover:bg-white transition-colors">
                        Enviar correo
                    </button>
                </div>
            </div>

            {/* Warning Text */}
            <div className="max-w-lg z-10 mb-16">
                <h3 className="text-xl font-heading text-kaos-beige uppercase tracking-wide mb-2">
                    El abuso en el consumo de este producto es nocivo para la salud.
                </h3>
                <p className="text-kaos-beige/60 text-sm font-light">
                    Hecho en México · NOM-006 · CRT · 100% Agave Azul
                </p>
            </div>

            {/* Footer */}
            <footer className="w-full flex flex-col items-center gap-8 pt-8 border-t border-kaos-gold/10">
                {/* Logo */}
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-heading text-kaos-beige tracking-wider">KAOS</h1>
                    <div className="text-[10px] tracking-[0.3em] text-kaos-gold mt-1">100% AGAVE</div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6">
                    <a
                        href="https://www.linkedin.com/company/tequila-kaos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-kaos-beige text-kaos-brown flex items-center justify-center hover:bg-white transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/tequilakaos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-kaos-beige text-kaos-brown flex items-center justify-center hover:bg-white transition-colors"
                    >
                        <Instagram size={20} />
                    </a>
                </div>

                {/* Links 
                <div className="flex flex-col gap-4 text-kaos-beige/60 text-sm font-light">
                    <a href="#" className="hover:text-kaos-beige transition-colors">Contactanos</a>
                    <a href="#" className="hover:text-kaos-beige transition-colors">Sobre nosotros</a>
                    <a href="#" className="hover:text-kaos-beige transition-colors">Terminos y condiciones</a>
                </div>
                */}
            </footer>
        </section>
    );
}