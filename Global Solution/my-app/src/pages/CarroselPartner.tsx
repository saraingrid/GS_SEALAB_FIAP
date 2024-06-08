"use client";

/* Instalação
npm i framer-motion clsx tailwind-merge --force
*/

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";

export default function InfiniteMovingCardsDemo() {
  return (

    <div className="bg-white">

      <div className="min-h-[30vh] flex flex-col antialiased bg-white relative mx-auto">

          <div>
              <InfiniteMovingCards
                  items={comentarios}
                  direction="right"
                  speed="fast"
                  className="font-sen text-xl"
              />
          </div>

      </div>

    </div>
  );
}


const comentarios = [

  {
    id: 1,
    imagem: <img src="/assets/PartnerCarrosel/imagem1.png" alt="Imagem 1" width={200} height={200} />,
    name: "A Sea Shepherd é uma organização internacional sem fins lucrativos de conservação da vida marinha.",
    product: "",
  },

  {
    id: 2,
    imagem: <img src="/assets/PartnerCarrosel/imagem2.jpg" alt="Imagem 2" width={150} height={50} />,
    name: "transformando o debate da poluição plástica em ação",
    product: "",
  },

  {
    id: 3,
    imagem: <img src="/assets/PartnerCarrosel/imagem3.jpg" alt="Imagem 3" width={100} height={100} />,
    name: "A Rede Oceano Limpo busca estratégias para monitorar e combater o lixo no mar.",
    product: "",
  },

  {
    id: 4,
    imagem: <img src="/assets/PartnerCarrosel/imagem4.jpg" alt="Imagem 4" width={150} height={100} />,
    name: "Associação de Pesquisa e Preservação de Ecossistemas Aquáticos ",
    product: "",
  },

  {
    id: 5,
    imagem: <img src="/assets/PartnerCarrosel/imagem5.jpg" alt="Imagem 5" width={150} height={100} />,
    name: "Com a missão de promover a conservação da fauna marinha e seu habitat, com foco em mamíferos e tartarugas",
    product: "",
  },
 
];

