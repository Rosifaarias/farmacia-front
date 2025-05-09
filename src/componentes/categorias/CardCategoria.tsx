import { Link } from "react-router-dom";
import Categoria from "../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-lg overflow-hidden bg-white shadow-lg">
      <header className="py-4 px-6 bg-green-900 text-white font-semibold text-xl">
        Categoria
      </header>
      <p className="px-6 py-4 text-xl bg-gray-100 text-gray-900">
        {categoria.nome}
      </p>

      <div className="flex gap-2 px-6 py-4">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-white bg-black hover:bg-gray-800 py-2 rounded flex items-center justify-center"
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full text-white bg-red-600 hover:bg-red-700 py-2 rounded flex items-center justify-center"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
