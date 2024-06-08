// components/Login.tsx

"use client";

/* Importações gerais */
import Link from "next/link";
import { useState } from "react";
import Router from "next/router";
import { signIn } from "next-auth/react";

export default function Login() {
  const [InformacoesFormulario, setInformacoesFormulario] = useState({
    email: '',
    senha: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInformacoesFormulario({
      ...InformacoesFormulario,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(InformacoesFormulario.email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    // Validação da senha
    if (InformacoesFormulario.senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Confirmar se o login vai dar certo e direcionar o usuário para a área protegida
    const { email, senha } = InformacoesFormulario;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      senha,
    });

    if (result && result.error) {
      console.error(result.error);
    } else {
      Router.push("/ProtectedPageCadastro");
    }

    // Salva as informações do formulário no localStorage
    const dadosFormularioJson = JSON.stringify(InformacoesFormulario);
    localStorage.setItem('InformacoesFormulario', dadosFormularioJson);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-center items-center w-full bg-gray-50 dark:bg-gray-800">
        <div className="w-full max-w-2xl p-8 rounded-md dark:bg-gray-700 dark:text-gray-100">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-lg dark:text-white font-manrope">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="seu-email@gmail.com" 
                  className="w-full px-4 py-3 border rounded-md dark:border-gray-300 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600" 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="senha" className="text-lg dark:text-white font-manrope">Senha</label>
                  <Link href="#" className="text-sm hover:underline dark:text-white">Esqueceu sua senha?</Link>
                </div>
                <input 
                  type="password" 
                  name="senha" 
                  id="senha" 
                  placeholder="******" 
                  className="w-full px-4 py-3 border rounded-md dark:border-gray-300 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600" 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="w-full px-8 py-4 text-2xl font-sen rounded-md bg-[#3EA0E7] dark:bg-[#3EA0E7] text-white hover:bg-blue-600"
              >
                Acessar
              </button>
            </div>
          </form>
          <div className="flex items-center my-4">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-white">Ou</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <div className="my-6 space-y-4">
            <button 
              onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/ProtectedPage' })} 
              aria-label="Login with Google" 
              type="button" 
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md dark:border-gray-600 focus:ring-2 focus:ring-offset-1 dark:focus:ring-[#3EA0E7]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-current text-[#3EA0E7] dark:text-white">
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p className="text-lg font-bold dark:text-white">Acesse com Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
