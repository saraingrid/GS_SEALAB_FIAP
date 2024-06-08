"use client"

/* importações gerais */
import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';

import FocusableComponent from './fonts/FocusableComponent';
import FontSizeDecreaserContainer from "./fonts/FontSizeDecreaserContainer"; // Para diminuir a fonte

/* Importação do módulo de animação */
import { motion } from "framer-motion"

/* Importação do FullWidthSection */
import { FullWidthSection } from "../components/FullWidthSection";

export default function Home() {

    const [isFontUpEnabled, setIsFontUpEnabled] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem('isFontUpEnabled');
        console.log('Stored value:', storedValue);
        setIsFontUpEnabled(storedValue === 'true');
    }, []);

    const [isFontDownEnabled, setIsFontDownEnabled] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem('isFontDownEnabled');
        console.log('Stored value:', storedValue);
        setIsFontDownEnabled(storedValue === 'true');
    }, []);

    return (
        <section className="dark:bg-gray-700 text-5xl dark:text-white">
        {/* Adicionando o componente FullWidthSection logo abaixo da navbar */}
        <FullWidthSection backgroundImage="/assets/Home/image2.webp">
          <div className="text-[#FFF] w-full font-sen dark:text-white">
            <h1 className="text-6xl">Nós somos a SEALAB!</h1>
            <p className="text-4xl mt-4">
              No Brasil, segundo a Abrelpe, mais de 3 milhões de toneladas de resíduos sólidos vão parar nos rios e mares todos os anos, quantidade suficiente para cobrir mais de 7 mil campos de futebol. Cerca de 80% do total de resíduos encontrados nos mares são oriundos de atividades humanas desenvolvidas no continente, seja no litoral ou em regiões onde correm rios que deságuam em ambientes marinhos.
            </p>
            <h1 className="text-5xl text-[#EC3326]">O Brasil é o 4º país no mundo que mais produz lixo. São mais de 11 milhões de toneladas por ano e apenas 1,28% de reciclagem.</h1>
            <p className="text-4xl mt-4">
              Que tal se juntar a nós nessa jornada sustentável em busca de salvar nosso planeta?</p>
          </div>
        </FullWidthSection>
      

            {isFontDownEnabled && <FontSizeDecreaserContainer />}
            
            <div className="grid md:flex md:justify-center md:items-center min-h-[60vh] p-6 md:p-10">
                
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{opacity:1, x:0}}
                exit={{ opacity: 0, x:0}}
                transition={{duration:0.5}}
                className="flex flex-col gap-10 justify-start items-start">
                                    
                    <h1 id="text8" tabIndex={7} className="text-4xl md:text-6xl font-bold leading-none text-left dark:text-white">SEALAB </h1>

                    <div>
                        <p id="text9" tabIndex={8} className="text-lx md:text-3xl font-manrope dark:text-white leading-7 md:leading-10">
                            Conectando pessoas com ONGs e empresas para soluções 
                        </p>
                        <p id="text9" tabIndex={8} className="text-lx md:text-3xl font-manrope dark:text-white leading-7 md:leading-10">
                        na redução da poluição marinha. Junte-se a nós para proteger
                        </p>
                        <p id="text9" tabIndex={8} className="text-lx md:text-3xl font-manrope dark:text-white leading-7 md:leading-10">
                        nossos oceanos! Um portal seguro com empresas sérias e comprometidas!
                        </p>
                    </div>

                    <div className="self-center md:self-start px-12 py-4 font-sen text-2xl rounded-lg bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white hover:bg-primeira hover:text-[#3EA0E7]">
                    <Link className="text-4xl" id="text10" tabIndex={9} href="/Usuario">Junte-se a nós!</Link></div>
                </motion.div>

                <motion.div
                    initial={{opacity:0, y:200, scale:0.5}}
                    whileInView={{opacity:1, y:0, scale:1}}
                    exit={{opacity:0, y:0, scale:0.5}}
                    transition={{duration:0.5}}
                >       
                    <img id="text11" tabIndex={10} src={"/assets/Home/reciclar-escola.jpg"} alt="Imagem" className="w-[1300px]"></img>
                </motion.div>
            </div>
        </section>
    );
}