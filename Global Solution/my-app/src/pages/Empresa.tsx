"use client";

/* Importar UseState*/
import { useState } from "react";

/* Importação do LINK para direcionar para outra página */
import Image from "next/image";

/* Importação dos componentes */


export default function cadastrarEmpresa() {
  const [InformacoesFormulario, setInformacoesFormulario] = useState({
    CNPJ: "",
    nomeEmpresa: "",
    representante: "",
    tipoServico: "",
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

    if (["nomeEmpresa"].includes(name)) {
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
      !InformacoesFormulario.CNPJ ||
      !InformacoesFormulario.nomeEmpresa ||
      !InformacoesFormulario.representante ||
      !InformacoesFormulario.complEndereco ||
      !InformacoesFormulario.email ||
      !InformacoesFormulario.senha ||
      !InformacoesFormulario.confirmacaoSenha ||
      !InformacoesFormulario.telefone ||
      !InformacoesFormulario.cep ||
      !InformacoesFormulario.numEndereco
    ) {
      alert("Por favor, preencha todos os campos, apenas complemento não é obrigatório.");
      return;
    }

    if (InformacoesFormulario.senha !== InformacoesFormulario.confirmacaoSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const {
      nomeEmpresa,
      email,
      senha,
      telefone,
      cep,
      numEndereco,
      complEndereco,
    } = InformacoesFormulario;

    const { confirmacaoSenha, ...dadosParaEnviarEmpresa } = InformacoesFormulario;

    const dadosFormularioJson = JSON.stringify(dadosParaEnviarEmpresa);

    localStorage.setItem("InformacoesFormulario", dadosFormularioJson);

    try {
      const response = await fetch(
        "http://localhost:8080/projetoTeste/rest/pessoajuridica/inserir",
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
      <div className="bg-[#023E8A] flex flex-col md:flex-row justify-between items-center gap-10 w-full mb-10">
        <div className="text-right text-white md:w-1/2">
          <strong className="text-5xl font-bold">Seja um parceiro SEALAB!</strong>
          <h2 className="text-2xl dark:text-white leading-20">
            Nosso portal reúne uma comunidade empenhada em contribuir ativamente na proteção e restauração de nossos Oceanos! Cadastre sua empresa em nosso portal e veja o número de doações se multiplicar. Para empresas privadas garantimos novos usuários que estão em busca de alternativas para Vamos juntos salvar nosso planeta!
          </h2>
        </div>
        <div className="flex justify-end md:w-1/2">
          <Image
            className="w-full h-auto"
            src="/assets/Empresa/pessoas_recolhendo_lixo.jpeg"
            alt="Imagem para compor a página de cadastro de parceiros"
            width={500}
            height={200}
          />
        </div>
      </div>
      <div className="bg-white w-full dark:bg-gray-700 flex flex-col justify-center items-center p-5">
        <form className="flex flex-col w-full px-10" action="post" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-10">
            <div className="text-[#053543] w-full font-sen text-4xl h-20 flex justify-start items-center dark:text-white">
              
                <h1><center>Cadastre-se e junte-se à dezenas de empresas e ONGs que já estão fazendo a diferença na área da Sustentabilidade!</center></h1>
              
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 justify-center gap-10 mb-10">
            <div className="flex flex-col gap-3">
              <label htmlFor="CNPJ" className="font-sen text-xl text-[#667085] dark:text-white">
                CNPJ da Empresa
              </label>
              <input
                id="CNPJ"
                type="text"
                name="CNPJ"
                placeholder="Nome da empresa"
                required
                value={InformacoesFormulario.CNPJ}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label htmlFor="nomeEmpresa" className="font-sen text-xl text-[#667085] dark:text-white">
                  Nome da Empresa
                </label>
              
              <input
                id="nomeEmpresa"
                type="text"
                name="nomeEmpresa"
                placeholder="Nome da empresa"
                required
                value={InformacoesFormulario.nomeEmpresa}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label htmlFor="email" className="font-sen text-xl text-[#667085] dark:text-white">
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
              
                <label htmlFor="telefone" className="font-sen text-xl text-[#667085] dark:text-white">
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
              
                <label htmlFor="cep" className="font-sen text-xl text-[#667085] dark:text-white">
                  CEP
                </label>
             
              <input
                id="cep"
                type="cep"
                name="cep"
                placeholder="Digite o CEP da sua residência"
                required
                value={InformacoesFormulario.cep}
                onChange={(e) => { handleChange(e); buscaCep(e); }}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label htmlFor="uf" className="font-sen text-xl text-[#667085] dark:text-white">
                  Estado (UF)
                </label>
              
              <input
                id="uf"
                type="uf"
                name="uf"
                placeholder="Estado (UF)"
                required
                value={InformacoesFormulario.uf}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label htmlFor="localidade" className="font-sen text-xl text-[#667085] dark:text-white">
                  Cidade
                </label>
              
              <input
                id="localidade"
                type="localidade"
                name="localidade"
                placeholder="Digite o nome da sua Cidade"
                required
                value={InformacoesFormulario.localidade}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label htmlFor="logradouro" className="font-sen text-xl text-[#667085] dark:text-white">
                  Logradouro
                </label>
             
              <input
                id="logradouro"
                type="logradouro"
                name="logradouro"
                placeholder="Digite o seu logradouro"
                required
                value={InformacoesFormulario.logradouro}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label htmlFor="bairro" className="font-sen text-xl text-[#667085] dark:text-white">
                  Bairro
                </label>
              
              <input
                id="bairro"
                type="bairro"
                name="bairro"
                placeholder="Digite o seu bairro"
                required
                value={InformacoesFormulario.bairro}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
             
                <label htmlFor="numEndereco" className="font-sen text-xl text-[#667085] dark:text-white">
                  Número do Endereço
                </label>
            
              <input
                id="numEndereco"
                type="numEndereco"
                name="numEndereco"
                placeholder="Digite o número do seu endereço"
                required
                value={InformacoesFormulario.numEndereco}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label htmlFor="complEndereco" className="font-sen text-xl text-[#667085] dark:text-white">
                  Complemento do Endereço
                </label>
             
              <input
                id="complEndereco"
                type="complEndereco"
                name="complEndereco"
                placeholder="Digite o complemento do seu endereço"
                value={InformacoesFormulario.complEndereco}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
             
                <label htmlFor="representante" className="font-sen text-xl text-[#667085] dark:text-white">
                  Representante da Empresa
                </label>
             
              <input
                id="representante"
                type="representante"
                name="representante"
                placeholder="Digite o nome do representante da empresa"
                required
                value={InformacoesFormulario.representante}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
              
                <label htmlFor="senha" className="font-sen text-xl text-[#667085] dark:text-white">
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
              
                <label htmlFor="confirmacaoSenha" className="font-sen text-xl text-[#667085] dark:text-white">
                  Confirmar Senha
                </label>
             
              <input
                id="confirmacaoSenha"
                type="password"
                name="confirmacaoSenha"
                placeholder="Confirme sua senha"
                required
                value={InformacoesFormulario.confirmacaoSenha}
                onChange={handleChange}
                className="p-3 font-sen text-md rounded-sm bg-slate-100"
              />
            </div>
            <div className="flex flex-col gap-3">
             
                <label className="font-sen text-xl text-[#667085] dark:text-white">Tipo de Serviço</label>
              
              <div className="flex flex-wrap gap-5">
                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="tipoServico"
                    value="1"
                    onChange={handleChange}
                  />
                  Coleta e Reciclagem de lixo residencial
                </label>
                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="tipoServico"
                    value="2"
                    onChange={handleChange}
                  />
                  Limpeza dos mares e praias
                </label>
                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="tipoServico"
                    value="3"
                    onChange={handleChange}
                  />
                  Palestras conscientização poluição marinha
                </label>
                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="tipoServico"
                    value="4"
                    onChange={handleChange}
                  />
                  Ações de fiscalização junto ao governo
                </label>
                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="tipoServico"
                    value="5"
                    onChange={handleChange}
                  />
                  Salvamento e conservação de animais marinhos
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            
              <button
                type="submit"
                className="bg-[#023E8A] hover:bg-[#023E8A] text-white font-bold py-2 px-4 rounded-md"
              >
                Cadastrar
              </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}
