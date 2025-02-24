import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { buscar, deletar } from "../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../models/Categoria";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Acesso não autorizado.");
      } else {
        alert("Erro ao buscar a categoria.");
      }
    }
  }

  async function deletarCategoria() {
    setIsLoading(true);
    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagada com sucesso");
      retornar();
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Acesso não autorizado.");
      } else {
        alert("Erro ao deletar a categoria.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você quer apagar a categoria a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-green-900 text-white font-bold text-2xl">
          Categoria
        </header>
        <p className="p-8 text-3xl bg-gray-100 text-gray-900">
          {categoria.nome}
        </p>
        <div className="flex gap-2">
          <button
            className="w-full text-slate-100 bg-gray-500 hover:bg-gray-600 py-2 rounded"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-red-600 hover:bg-red-700 py-2 rounded flex items-center justify-center"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
