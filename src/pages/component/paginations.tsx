type Paginations = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentPage: number
  totalPages: number
}

export const Paginations: React.FC<Paginations> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="flex justify-center my-8">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Anterior
      </button>
      <span className="mx-2 text-black">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  )
}
