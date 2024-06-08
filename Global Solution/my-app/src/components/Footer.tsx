"use client";

/* Importação geral */
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-10 py-10 dark:bg-gray-700 dark:text-white bg-gray-200">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        <div className="flex-shrink-0 lg:w-1/5 flex justify-center lg:justify-start">
          <Link rel="noopener noreferrer" href="#">
            <img
              src={"/assets/Footer/logo_sealab_azul.png"}
              alt="Logo da SeaLab"
              className="w-48 h-48 object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-center md:grid gap-x-3 gap-y-8 lg:w-4/5 md:grid-cols-5">
          <div className="space-y-3">
            <h3 className="text-[#0096C7] tracking-wide uppercase dark:text-[#3EA0E7] font-bold text-xl">Campanhas</h3>
            <ul className="space-y-1 font-manrope text-lg">
              <li><Link rel="noopener noreferrer" href="/Campanhas">Campanhas</Link></li>
            </ul>
          </div>

          <div className="space-y-3 font-manrope text-lg">
            <h3 className="text-[#0096C7] tracking-wide uppercase dark:text-[#3EA0E7] font-bold text-xl">Empresa</h3>
            <ul className="space-y-1">
              <li><Link rel="noopener noreferrer" href="/">Sobre</Link></li>
            </ul>
          </div>

          <div className="space-y-3 font-manrope text-lg">
            <h3 className="text-[#0096C7] font-bold uppercase dark:text-[#3EA0E7] font-bold text-xl">TEAM SEALAB</h3>
            <ul className="space-y-1">
              <li><Link rel="noopener noreferrer" href="/Team">Nosso time</Link></li>
            </ul>
          </div>

          <div className="space-y-3 font-manrope text-lg">
            <h3 className="text-[#0096C7] tracking-wide uppercase dark:text-[#3EA0E7] font-bold text-xl">Parceiros</h3>
            <ul className="space-y-1">
              <li><Link rel="noopener noreferrer" href="/Ongs">Seja um parceiro</Link></li>
            </ul>
          </div>

          <div className="space-y-3 font-manrope text-lg">
            <h3 className="text-[#0096C7] tracking-wide uppercase dark:text-[#3EA0E7] font-bold text-xl">Denúncias</h3>
            <ul className="space-y-1">
              <li><Link rel="noopener noreferrer" href="/Ocorrencia">Registre uma ocorrência</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-[#0096C7] font-bold py-6 font-manrope text-center dark:text-white">
        © 2024 SeaLab. Todos os direitos reservados.
      </div>
    </footer>
  );
}
