"use client";

import { useState } from "react";
import Image from "next/image";

const tipoOcorrenciaMap = {
  'descarte ilegal de lixo no mar': 1,
  'pesca ilegal': 2,
  'socorro a animal marinho': 3,
  'Vazamento de rejeitos no mar (ex. oleo, esgoto)': 4,
  'descarte ilegal de lixo na praia': 5
} as const;

type TipoOcorrencia = keyof typeof tipoOcorrenciaMap;

export default function cadastrarOcorrencia() {
  const [informacoesFormulario, setInformacoesFormulario] = useState({
    descOcorrencia: "",
    numEnd: "",
    complEnd: "",
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
    idTpOcorrencia: "",
    dtOcorrencia: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInformacoesFormulario({
      ...informacoesFormulario,
      [name]: value,
    });
  };

  const buscaCep = async (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setInformacoesFormulario((prevState) => ({
            ...prevState,
            logradouro: data.logradouro,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf,
          }));
        } else {
          alert("CEP não encontrado!");
        }
      } catch (error) {
        alert("Erro ao buscar o CEP: " + error);
      }
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !informacoesFormulario.numEnd ||
      !informacoesFormulario.descOcorrencia ||
      !informacoesFormulario.cep ||
      !informacoesFormulario.dtOcorrencia
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const dadosParaEnviar = {
      ...informacoesFormulario,
      idTpOcorrencia: tipoOcorrenciaMap[informacoesFormulario.idTpOcorrencia as TipoOcorrencia]
    };

    const dadosFormularioJson = JSON.stringify(dadosParaEnviar);

    try {
      const response = await fetch(
        "http://localhost:8080/projetoTeste/rest/ocorrencia/inserir",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: dadosFormularioJson,
        }
      );
      if (response.ok) {
        alert("Dados enviados com sucesso!");
      } else {
        alert("Falha ao enviar os dados.");
      }
    } catch (error) {
      alert("Erro ao enviar os dados: " + error);
    }
  };

  return (
    <div className="flex flex-col items-center dark:bg-gray-700 min-h-[100vh]">
      <div className="bg-[#023E8A] flex flex-col md:flex-row justify-between items-center gap-10 bg-segunda w-full mb-10">
        <div className="text-right text-white md:w-1/2">
          <h1 className="text-5xl font-bold dark:text-white leading-20">a SEALAB quer te ouvir!</h1>
          
          <h1 className="text-2xl dark:text-white leading-20">
            Cadastrando uma ocorrência você contribui para a preservação dos nossos oceanos. Denuncie crimes ambientais como pesca ilegal, descarte incorreto ou tráfico de animais.
          </h1>
        </div>
        <div className="flex justify-end md:w-1/2">
          <Image
            className="w-full h-auto"
            src="/assets/Ocorrencia/pessoa_salva_animal.png"
            alt="Imagem para compor a página de cadastro"
            width={550}
            height={200}
          />
        </div>
      </div>
      <div className="bg-white w-full dark:bg-gray-700 flex flex-col justify-center items-center p-5">
        <form className="flex flex-col w-full px-10" action="post" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-10">
            <div className="text-[#053543] w-full font-sen text-4xl h-20 flex justify-start items-center dark:text-white">
              <h1><center>Cadastre uma Ocorrência!</center></h1>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="descOcorrencia" className="font-sen text-xl text-[#667085] dark:text-white">Descrição da Ocorrência</label>
            <textarea
              id="descOcorrencia"
              name="descOcorrencia"
              placeholder="Descreva a ocorrência"
              required
              value={informacoesFormulario.descOcorrencia}
              onChange={handleChange}
              className="p-3 font-sen text-md rounded-sm bg-slate-100"
            />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 justify-center gap-10 mb-10">
            <div className="flex flex-col gap-3">
              <label htmlFor="numEnd" className="font-sen text-xl text-[#667085] dark:text-white">Número do Endereço</label>
              <input
                id="numEnd"
                type="text"
                name="numEnd"
                placeholder="Digite o número do endereço"
                required
                value={informacoesFormulario.numEnd}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="complEnd" className="font-sen text-xl text-[#667085] dark:text-white">Complemento</label>
              <input
                id="complEnd"
                type="text"
                name="complEnd"
                placeholder="Digite o complemento"
                value={informacoesFormulario.complEnd}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="cep" className="font-sen text-xl text-[#667085] dark:text-white">CEP</label>
              <input
                id="cep"
                type="text"
                name="cep"
                placeholder="Digite o CEP"
                required
                value={informacoesFormulario.cep}
                onChange={(e) => { handleChange(e); buscaCep(e); }}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="logradouro" className="font-sen text-xl text-[#667085] dark:text-white">Logradouro</label>
              <input
                id="logradouro"
                type="text"
                name="logradouro"
                placeholder="Logradouro"
                value={informacoesFormulario.logradouro}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
                readOnly
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="bairro" className="font-sen text-xl text-[#667085] dark:text-white">Bairro</label>
              <input
                id="bairro"
                type="text"
                name="bairro"
                placeholder="Bairro"
                value={informacoesFormulario.bairro}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
                readOnly
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="localidade" className="font-sen text-xl text-[#667085] dark:text-white">Localidade</label>
              <input
                id="localidade"
                type="text"
                name="localidade"
                placeholder="Localidade"
                value={informacoesFormulario.localidade}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
                readOnly
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="uf" className="font-sen text-xl text-[#667085] dark:text-white">UF</label>
              <input
                id="uf"
                type="text"
                name="uf"
                placeholder="UF"
                value={informacoesFormulario.uf}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
                readOnly
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="idTpOcorrencia" className="font-sen text-xl text-[#667085] dark:text-white">Tipo de Ocorrência</label>
              <select
                id="idTpOcorrencia"
                name="idTpOcorrencia"
                required
                value={informacoesFormulario.idTpOcorrencia}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              >
                <option value="">Selecione o tipo de ocorrência</option>
                {Object.keys(tipoOcorrenciaMap).map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="dtOcorrencia" className="font-sen text-xl text-[#667085] dark:text-white">Data da Ocorrência</label>
              <input
                id="dtOcorrencia"
                type="date"
                name="dtOcorrencia"
                required
                value={informacoesFormulario.dtOcorrencia}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
          </div>
          <div className="flex justify-center items-center px-8 py-3 font-sen text-2xl rounded bg-segunda dark:bg-[#3EA0E7] dark:text-white text-white text-center w-48">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
