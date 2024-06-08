// components/Team.tsx

"use client";

/* Importações gerais */
import Link from "next/link";

export default function Team() {
  return (
    <section className="py-0.5 dark:text-white min-h-[80vh] bg-gray-10">
      <div className="container flex flex-col items-center justify-start p-4 mx-auto sm:p-10">
        <p className="p-6 text-lg font-medium tracking-wider text-start md:text-center uppercase md:text-2xl">Time de desenvolvimento</p>
        <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
          
          {/* Integrante Bruno Burian */}
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-[300px] xl:w-[400px] dark:bg-gray-800 dark:text-gray-100">
            <div className="flex-1 my-4">
              <p className="text-2xl font-semibold leading-snug md:text-4xl">Bruno Burian</p>
              <p className="md:text-2xl">RM: 552863</p>
              <img src="/assets/Footer/Bruno.jpeg" alt="Bruno Burian" className="w-full h-[400px] object-cover mt-4 rounded-md" />
            </div>
          </div>

          {/* Integrante Leonardo Chaves */}
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-[300px] xl:w-[400px] dark:bg-gray-800 dark:text-gray-100">
            <div className="flex-1 my-4">
              <p className="text-2xl font-semibold leading-snug md:text-4xl">Leonardo Chaves</p>
              <p className="md:text-2xl">RM: 552707</p>
              <img src="/assets/Footer/leonardo.jpeg" alt="Leonardo Chaves" className="w-full h-[400px] object-cover mt-4 rounded-md" />
            </div>
          </div>

          {/* Integrante Sara Ingrid */}
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-[300px] xl:w-[400px] dark:bg-gray-800 dark:text-gray-100">
            <div className="flex-1 my-4">
              <p className="text-2xl font-semibold leading-snug md:text-4xl">Sara Ingrid</p>
              <p className="md:text-2xl">RM: 554021</p>
              <img src="/assets/Footer/sara.jpeg" alt="Sara Ingrid" className="w-full h-[400px] object-cover mt-4 rounded-md" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
