"use client";

import { useState } from "react";
import Image from "next/image";


export default function cadastrarUsuario() {
  const [InformacoesFormulario, setInformacoesFormulario] = useState({
    nomeCompleto: "",
    email: "",
    senha: "",
    confirmacaoSenha: "",
    telefone: "",
    cep: "",
    numEndereco: "",
    complEndereco: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (["nomeCompleto"].includes(name)) {
      updatedValue = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
    }

    if (name === "telefone") {
      updatedValue = value.replace(/\D/g, "");
    }

    setInformacoesFormulario({
      ...InformacoesFormulario,
      [name]: updatedValue,
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(InformacoesFormulario.email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    const senhaRegex = /^\d+$/;
    if (InformacoesFormulario.senha.length < 6 || !senhaRegex.test(InformacoesFormulario.senha)) {
      alert("A senha deve ter pelo menos 6 caracteres devendo ser composta apenas por NÚMEROS.");
      return;
    }

    if (
      !InformacoesFormulario.nomeCompleto ||
      !InformacoesFormulario.email ||
      !InformacoesFormulario.senha ||
      !InformacoesFormulario.confirmacaoSenha ||
      !InformacoesFormulario.telefone ||
      !InformacoesFormulario.cep ||
      !InformacoesFormulario.numEndereco
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (InformacoesFormulario.senha !== InformacoesFormulario.confirmacaoSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Extraindo os campos que não vêm da API externa
    const {
      nomeCompleto,
      email,
      senha,
      confirmacaoSenha,
      telefone,
      cep,
      numEndereco,
      complEndereco,
    } = InformacoesFormulario;

    const dadosParaEnviar = {
      nomeCompleto,
      email,
      senha,
      telefone,
      cep,
      numEndereco,
      complEndereco,
    };

    const dadosFormularioJson = JSON.stringify(dadosParaEnviar);

    localStorage.setItem("InformacoesFormulario", dadosFormularioJson);

    try {
      const response = await fetch(
        "http://localhost:8080/projetoTeste/rest/cadastro/inserir",
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
      <h1 className="text-5xl font-bold dark:text-white leading-20">Bem-vindo a SEALAB!</h1>
      <p></p>
      <h1 className="text-2xl dark:text-white leading-20">Cadastrando-se em nosso portal você terá acesso a conteúdos exclusivos de nossos parceiros à respeito de ações e campanhas promovidas em prol dos oceanos. Além disso poderá contribuir ativamente denunciando crimes ambientais como pesca ilegal, descarte incorreto ou tráfico de animais. Vamos juntos salvar nosso planeta!</h1>
      </div>
      <div className="flex justify-end md:w-1/2">
        <Image
          className="w-full h-auto"
          src="/assets/Usuario/cadastro_pagina.png"
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

              <h1><center>Cadastre-se e junte-se à milhares de pessoas em prol dos oceanos!</center></h1>

          </div>
        </div>
          <div className="flex flex-col md:grid md:grid-cols-3 justify-center gap-10 mb-10">
            <div className="flex flex-col gap-3">
              
                <label
                  htmlFor="nomeCompleto"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Nome Completo
                </label>
             
              <input
                id="nomeCompleto"
                type="text"
                name="nomeCompleto"
                placeholder="Digite seu nome completo"
                required
                value={InformacoesFormulario.nomeCompleto}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
             
                <label
                  htmlFor="email"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  E-mail
                </label>
              
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
                value={InformacoesFormulario.email}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
            
                <label
                  htmlFor="telefone"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Telefone
                </label>
             
              <input
                id="telefone"
                type="tel"
                name="telefone"
                placeholder="(xx) xxxx-xxxx"
                required
                value={InformacoesFormulario.telefone}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label
                  htmlFor="cep"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  CEP
                </label>
           
              <input
                id="cep"
                type="text"
                name="cep"
                placeholder="Digite seu CEP"
                required
                value={InformacoesFormulario.cep}
                onChange={(e) => { handleChange(e); buscaCep(e); }}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label
                  htmlFor="logradouro"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Rua
                </label>
            
              <input
                id="logradouro"
                type="text"
                name="logradouro"
                placeholder=""
                required
                value={InformacoesFormulario.logradouro}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
           
                <label
                  htmlFor="numEndereco"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Número
                </label>
             
              <input
                id="numEndereco"
                type="text"
                name="numEndereco"
                placeholder="Digite o nº da residência"
                required
                value={InformacoesFormulario.numEndereco}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
             
                <label
                  htmlFor="complEndereco"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Complemento (se houver)
                </label>
             
              <input
                id="complEndereco"
                type="text"
                name="complEndereco"
                placeholder="casa A, apto 12B..."
                required
                value={InformacoesFormulario.complEndereco}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
             
                <label
                  htmlFor="bairro"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Bairro
                </label>
              
              <input
                id="bairro"
                type="text"
                name="bairro"
                placeholder=""
                required
                value={InformacoesFormulario.bairro}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
            
                <label
                  htmlFor="localidade"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Cidade
                </label>
              
              <input
                id="localidade"
                type="text"
                name="localidade"
                placeholder=""
                required
                value={InformacoesFormulario.localidade}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
             
                <label
                  htmlFor="uf"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Estado
                </label>
              
              <input
                id="uf"
                type="text"
                name="uf"
                placeholder=""
                required
                value={InformacoesFormulario.uf}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label
                  htmlFor="senha"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Senha
                </label>
             
              <input
                id="senha"
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                required
                value={InformacoesFormulario.senha}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
             
                <label
                  htmlFor="confirmacaoSenha"
                  className="font-sen text-xl text-[#667085] dark:text-white"
                >
                  Confirme sua Senha
                </label>
             
              <input
                id="confirmacaoSenha"
                type="password"
                name="confirmacaoSenha"
                placeholder="Confirme a senha"
                required
                value={InformacoesFormulario.confirmacaoSenha}
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