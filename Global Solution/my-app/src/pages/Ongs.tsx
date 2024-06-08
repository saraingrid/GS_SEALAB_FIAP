"use client"

import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';
import InfiniteMovingCardsDemo from './CarroselPartner'
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
    
                    <h1 className="text-6xl font-bold dark:text-white leading-20"> Importâncias dos nossos parceiros </h1>
                    
                    <div>
                    <p id="text9" tabIndex={8}className="text-2xl md:text-4xl font-manrope dark:text-white leading-8 md:leading-10 text-justify">As organizações não governamentais (ONG) desempenham um papel importante no combate e na redução da poluição dos oceanos. Representam uma voz independente e dedicada à proteção dos oceanos, trabalhando incansavelmente para sensibilizar e inspirar ações concretas. As ONG desempenham um papel importante na educação das comunidades, na sensibilização para os perigos da poluição dos oceanos e no incentivo à mudança comportamental. Além disso, também desempenham um papel importante na recolha de dados e na investigação, fornecendo informações importantes sobre o nível e o impacto da poluição. Através de campanhas de sensibilização e projetos de ação, as ONG mobilizam as comunidades locais e pressionam os governos e as empresas a adotarem políticas e práticas sustentáveis.</p>

                    </div>

                    <div className="self-center md:self-start px-8 py-3 font-sen rounded bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white hover:bg-primeira hover:text-[#3EA0E7]">
               
                    <Link className="text-xl" id="text10" tabIndex={9} href="/Empresa">Seja um parceiro, junte-se a nós!</Link>
                
            </div>
     
                </ motion.div >

            </div>
            <div> 
        <InfiniteMovingCardsDemo/>
      </div>
</section>

    );

}

