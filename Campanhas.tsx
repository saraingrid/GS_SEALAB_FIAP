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
   
                    <h1 id="text8" tabIndex={7}  className="text-4xl md:text-6xl font-bold leading-none text-left dark:text-white"> Importâncias das Campanhas </h1>

                    <div>
                    <p id="text9" tabIndex={8}className="text-2xl md:text-4xl font-manrope dark:text-white leading-8 md:leading-10 text-justify">As campanhas desempenham um papel importante na sensibilização e motivação do público para lutar contra a poluição dos oceanos. São ferramentas poderosas para educar o público sobre os efeitos nocivos da poluição dos oceanos, incentivando a acção individual e colectiva. Ao enfatizar a urgência e a gravidade do problema, as campanhas despertam o interesse e a preocupação das pessoas, incentivando mudanças de comportamento e práticas relacionadas ao descarte de resíduos. Além disso, as campanhas podem influenciar a política governamental e pressionar as empresas a adotarem práticas sustentáveis. Ao reunir comunidades, organizações e governos com um objectivo comum, as campanhas podem encorajar esforços conjuntos para combater a poluição marinha, promovendo assim a conservação dos ecossistemas marinhos e garantindo um futuro saudável para o planeta e as suas espécies.</p>
                    </div>                 
                </ motion.div >
            </div>
            
</section>

    );

}

