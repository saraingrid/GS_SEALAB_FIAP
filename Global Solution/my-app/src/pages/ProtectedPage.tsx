
/* Importações gerais */
import Image from 'next/image';

/* Importação de componentes */
import { useSession, signOut } from 'next-auth/react';
import React from 'react';


const ProtectedPage = () => {
  const { data: session, status } = useSession({
    required: true, // Isso fará com que redirecione automaticamente se não estiver autenticado
    onUnauthenticated() {
      // Essa função é chamada quando o usuário não está autenticado
      signOut(); // A função signOut redirecionará para a página inicial
    }
  });

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  // Usa optional chaining para acessar email de forma segura
  return (
    
    <section className="dark:bg-gray-700 dark:text-white h-[100vh] flex justify-center items-center bg-gray-100">
      
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        
        <div className="flex items-center justify-center pl-20">
          
          <Image src="/assets/ProtectedPage/imagem.png" alt="Imagem de um computador que representa um Login" className="object-contain" width={700} height={500} />

        </div>
        
        <div className="flex flex-col justify-center pr-20">
          
          <h1 className="text-6xl font-manrope leading-none">Você está logado!
          </h1>
          
          <p className="mt-10 mb-8 sm:mb-12 font-manrope text-2xl">Seu e-mail é {session?.user?.email}!
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            
            <button onClick={() => signOut({ callbackUrl: '/' })} rel="noopener noreferrer"  className="px-8 py-3 text-lg font-semibold rounded bg-segunda text-white dark:bg-segunda dark:text-gray-50">Logout</button>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-white">Home</a>

          </div>
        </div>

      </div>

    </section>

  );
};

export default ProtectedPage;
