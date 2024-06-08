
/* Importações gerais */
import Image from 'next/image';

/* Importação de componentes */
import { signOut } from 'next-auth/react';
import React from 'react';


const ProtectedPageCadastro = () => {
  
  // Usa optional chaining para acessar email de forma segura
  return (
    
    <section className="dark:bg-gray-700 dark:text-white h-[100vh] flex justify-center items-center bg-gray-100">
      
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        
       
        <div className="flex flex-col justify-center pr-20">
          
          <h1 className="text-6xl font-manrope leading-none mb-10">Você está logado!
          </h1>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            
            <button onClick={() => signOut({ callbackUrl: '/' })} rel="noopener noreferrer"  className="px-8 py-3 text-lg font-semibold rounded bg-segunda text-white dark:bg-segunda dark:text-gray-50">Logout</button>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-white">Home</a>

          </div>
        </div>

      </div>

    </section>

  );
};

export default ProtectedPageCadastro;
