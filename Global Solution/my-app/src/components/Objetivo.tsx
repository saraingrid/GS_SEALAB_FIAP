// components/Objetivo.tsx

"use client";

/* Importações gerais */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FocusableComponent from './fonts/FocusableComponent';

export default function Objetivo() {
  return (
    <section className="dark:bg-gray-700 dark:text-white bg-[#fff]">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center lg:w-1/2"
        >
          <FocusableComponent id="text12" tabIndex={11}>
            <Image
              id="text12"
              tabIndex={11}
              src="/assets/Details/func_reciclagem.jpg"
              alt="Imagem"
              className="object-contain"
              width={800}
              height={400}
            />
          </FocusableComponent>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center p-0 md:p-6 text-center rounded-sm lg:w-1/2 lg:text-left"
        >
          <h1
            id="text13"
            tabIndex={12}
            className="text-2xl md:text-5xl font-bold leading-8 md:leading-none mt-10 md:mt-0 text-start"
          >
            Objetivo
          </h1>
          <p id="text14" tabIndex={13} className="mt-6 mb-8 text-2xl md:text-3xl text-manrope sm:mb-12 leading-8 md:leading-10 text-justify"
>
            Promover a sustentabilidade e a redução da poluição marinha conectando indivíduos com organizações que estão fazendo a diferença. Acreditamos que juntos podemos preservar nossos oceanos para as futuras gerações.
          </p>
          <div className="self-center md:self-start px-12 py-4 font-sen text-2xl rounded-lg bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white hover:bg-primeira hover:text-[#3EA0E7]">
          <Link className="text-4xl" id="text10" tabIndex={9} href="/Empresa">Seja um Parceiro!
          </Link></div>
        </motion.div>
      </div>
    </section>
  );
}
