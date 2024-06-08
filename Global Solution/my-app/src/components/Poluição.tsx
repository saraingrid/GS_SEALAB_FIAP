// components/Poluicao.tsx

"use client";

/* Importações gerais */
import React from "react";

export default function AboutForms() {
  return (
    <section className="p-4 lg:p-60 bg-[#fff] dark:bg-gray-700 dark:text-white bg-gray-200 min-h-screen">
      <div className="font-bold text-4xl md:text-5xl mt-20 mb-20 text-start md:text-center p-6 md:p-0">
        <h1>Poluição</h1>
      </div>

    
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-md shadow-sm">
          <div className="flex justify-center items-center lg:w-1/2">
            <img src="/assets/Details/imagem3.jpg" alt="Imagem Tartaruga" className="object-cover w-full h-full" />
          </div>

          <div className="flex flex-col justify-center flex-1 p-6 lg:w-1/2">
            <p className="my-6 font-manrope leading-8 text-3xl text-justify">
              No Brasil, em média, 325 mil toneladas de plástico acabam no oceano por ano, a partir de fontes terrestres como disposição em lixões a céu aberto. Esse descarte impacta na vida marinha, nos ecossistemas e na atividade pesqueira. Diante dessa realidade, a Oceana defende a redução na oferta e consumo de itens plásticos, especialmente produtos descartáveis – feitos para um único uso e depois jogados fora.
            </p>
            <p className="my-6 font-manrope leading-8 text-3xl text-justify">
              ONGs desempenham um papel crucial na luta contra a poluição marinha através de educação, limpezas, pesquisa, advocacy, programas de reciclagem, promoção de alternativas sustentáveis e mobilização comunitária. Juntas, essas atividades contribuem significativamente para a preservação dos oceanos e da vida marinha. Ao apoiar e se envolver com essas organizações, podemos todos contribuir para um futuro mais limpo.
            </p>
          </div>
        </div>
     
    </section>
  );
}
