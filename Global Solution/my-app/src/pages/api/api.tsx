
// Criar a pasta e arquivo para o backend: services/api.ts
/* Vou testar enviar dados do formulario de contato */

export async function enviarDadosParaJava(InformacoesFormulario: any) {
    try {
      const resposta = await fetch('http://localhost:5000/api/dados-formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(InformacoesFormulario)
      });
  
      if (!resposta.ok) {
        throw new Error('Erro ao enviar dados para o Java');
      }
  
      // Tratar a resposta, se necessário
    } catch (erro) {
      console.error('Erro ao enviar dados para o Java:', erro);
    }
  }
  