"use client"

import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"

export default function Home(){

    return(

        <section className="dark:bg-gray-700 dark:text-white">

            <div className="grid md:flex md:justify-center md:items-center min-h-[70vh] p-6 md:p-10">
                
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{opacity:1, x:0}}
                exit={{ opacity: 0, x:0}}
                transition={{duration:0.5}}
                className="flex flex-col gap-10 justify-start items-start">
    
                        <h1 id="text8" tabIndex={7}  className="text-4xl md:text-6xl font-bold leading-none text-left dark:text-white">Quem é a SEALAB? </h1>

                    <div>

                    <p id="text9" tabIndex={8}className="text-2xl md:text-4xl font-manrope dark:text-white leading-8 md:leading-10 text-justify">Bem-vindo à Sealab, uma plataforma dedicada à redução da poluição marinha. Nosso compromisso é com a preservação dos ecossistemas oceânicos e a promoção de um futuro mais limpo e saudável para as gerações presentes e futuras. </p>
                    <p id="text9" tabIndex={8}className="text-2xl md:text-4xl font-manrope dark:text-white leading-8 md:leading-10 text-justify">Na Sealab, acreditamos que todos têm um papel fundamental na proteção dos oceanos. Colaboramos com ONGs, empresas e comunidades locais para implementar soluções eficazes de combate à poluição marinha, conectando pessoas e organizações. Junte-se a nós para proteger nossos oceanos e garantir um futuro mais sustentável para o nosso planeta! </p>
                        
                    </div>

                    <div className="self-center md:self-start px-12 py-4 font-sen text-2xl rounded-lg bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white hover:bg-primeira hover:text-[#3EA0E7]">
                    <Link className="text-4xl" id="text10" tabIndex={9} href="/Usuario">Seja um defensor!</Link></div>
     
                </ motion.div >

            </div>

</section>

    );

}

