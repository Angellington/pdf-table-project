import React, { useState, useEffect } from 'react';

function Json() {
  const [dados, setDados] = useState(null);

  // Função para carregar os dados do JSON
  const carregarDados = async () => {
    try {
      const response = await fetch('/arquivo.json'); // Caminho para o arquivo JSON
      const jsonData = await response.json();
      setDados(jsonData);
    } catch (error) {
      console.error('Erro ao carregar o arquivo JSON:', error);
    }
  };

  // Usamos useEffect para carregar os dados uma vez e configurar o polling
  useEffect(() => {
    // Carrega os dados ao inicializar
    carregarDados();

    // Configura o polling para carregar os dados a cada 2 segundos
    const intervalo = setInterval(carregarDados, 2000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalo);
  }, []); // O array vazio [] garante que o efeito aconteça apenas uma vez

  return (
    <div>
      <h1>Dados JSON</h1>
      {dados ? (
        <pre>{JSON.stringify(dados, null, 2)}</pre>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Json;
