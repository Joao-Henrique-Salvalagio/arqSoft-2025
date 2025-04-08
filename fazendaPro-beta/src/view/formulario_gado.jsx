import { useState } from "react";

export default function GadoForm() {
  const [gado, setGado] = useState([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [raca, setRaca] = useState("");
  const [buscaId, setBuscaId] = useState("");
  const [resultadoBusca, setResultadoBusca] = useState(null);

  const adicionarGado = () => {
    if (nome.trim() === "" || idade.trim() === "" || raca.trim() === "") return;
    const novoGado = { id: gado.length + 1, nome, idade, raca };
    setGado([...gado, novoGado]);
    setNome("");
    setIdade("");
    setRaca("");
  };

  const buscarPorId = () => {
    const encontrado = gado.find((g) => g.id === parseInt(buscaId));
    setResultadoBusca(encontrado || "Não encontrado");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 border border-gray-300">
      <h1 className="text-xl font-bold text-center">Gerenciamento de Gado</h1>
      
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Nome do Gado"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
        <input
          type="number"
          placeholder="Idade do Gado"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
        <input
          type="text"
          placeholder="Raça do Gado"
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
        <button
          onClick={adicionarGado}
          className="bg-purple-600 text-white px-4 py-2 rounded-md w-full hover:bg-purple-700"
        >
          Criar Gado
        </button>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Lista de Gado</h2>
        <ul className="list-disc pl-5 space-y-1">
          {gado.map((g) => (
            <li key={g.id} className="border p-2 rounded-md">
              {g.id} - {g.nome}, {g.idade} anos, Raça: {g.raca}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="space-y-2">
        <input
          type="number"
          placeholder="Buscar por ID"
          value={buscaId}
          onChange={(e) => setBuscaId(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
        <button
          onClick={buscarPorId}
          className="bg-purple-600 text-white px-4 py-2 rounded-md w-full hover:bg-purple-700"
        >
          Buscar
        </button>
        {resultadoBusca && (
          <p className="mt-2 text-center text-gray-700">
            {typeof resultadoBusca === "string" ? resultadoBusca : `Encontrado: ${resultadoBusca.nome}, ${resultadoBusca.idade} anos, Raça: ${resultadoBusca.raca}`}
          </p>
        )}
      </div>
    </div>
  );
}
