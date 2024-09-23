import { BaseLayout, Card } from '@/components/ui'
import { getMovies } from '@/services/movieService'
import { useEffect, useState } from 'react'
import { Paginations } from './component/paginations'
import { ModalUnsaved } from './component/ModalUnsaved'

export interface MovieResponse {
  page: number
  results: Movie[]
}

interface Movie {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [valueMovieGener, setValueMovieGener] = useState<number>(28)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showModalDetalId, setShowModalDetailId] = useState(0)

  const dataMovies = async () => {
    try {
      const res = await getMovies({
        page: currentPage,
        with_genres: String(valueMovieGener),
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setMovies(res.results as any)
      setTotalPages(res.total_pages)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dataMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueMovieGener, currentPage])

  return (
    <>
      <BaseLayout header valuesGenerMovue={setValueMovieGener}>
        <div className="  grid grid-cols-3 gap-10">
          {movies.length > 0 ? (
            movies.map((data) => (
              <Card
                className="rounded-lg h-48 border-none hover:shadow-2xl bg-[#a0e1e467]"
                key={data.id}
              >
                {data.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt={data.title}
                    className="w-full h-52 object-cover rounded-t-lg"
                  />
                )}
                <div className="   mx-60 font-medium hover:font-semibold 2xl:mx-[450px] hover:cursor-pointer">
                  <span
                    onClick={() => {
                      setShowModalDetailId(data.id)
                      setShowModal(true)
                    }}
                    className="text-white absolute  -my-48"
                    key={data.id}
                  >
                    Detalle
                  </span>
                </div>
                <div className="p-2 absolute -mt-20">
                  <h2 className="text-lg font-bold text-white">{data.title}</h2>
                  <p className="text-sm text-gray-500">
                    Release Date: {data.release_date}
                  </p>
                  <p className="text-sm text-gray-100">
                    Rating: {data.vote_average} ({data.vote_count} votes)
                  </p>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-white">No movies found</p>
          )}
        </div>
        <div>
          <Paginations
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </BaseLayout>
      <div>
        <ModalUnsaved
          showModalDetalId={showModalDetalId}
          Title="Detalles de pelicula"
          showModalUnsaved={showModal}
          onSuccess={() => setShowModal(false)}
        />
      </div>
    </>
  )
}
