import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/Modal'
import { getMovieDetail } from '@/services/movieService'
import { useEffect, useState } from 'react'
import { Movie } from '../types/typesDetailMovie'

interface ModalSaveExitQuoteProps {
  showModalUnsaved: boolean
  onSuccess: () => void
  SubTitle?: boolean
  Title?: string
  Subtitle?: string
  value?: number
  showModalDetalId: number
}

export const ModalUnsaved: React.FC<ModalSaveExitQuoteProps> = ({
  showModalUnsaved,
  Title,
  showModalDetalId,

  onSuccess,
}) => {
  const [detalmovie, setDetalMovie] = useState<Movie>()
  console.log(detalmovie)

  const getDetailMovie = async () => {
    try {
      const res = await getMovieDetail({
        movie_id: showModalDetalId,
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setDetalMovie(res as any)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetailMovie()
  }, [showModalDetalId])

  return (
    <div>
      <Modal show={showModalUnsaved} size="md">
        <Modal.Body>
          <div className="text-black">
            <div className="flex w-96px bg-font rounded-2xl h-10 mt-4 ">
              <div className=" w-full h-full text-black relative z-40">
                <div className="text-white">
                  <h1 className="text-2xl font-semibold ">{Title}</h1>
                </div>
              </div>
            </div>
            <div className="text-white relative z-40  font-semibold">
              <p> {detalmovie?.title}</p>

              <p>Idioma : {detalmovie?.original_language}</p>
              <p>
                Descripcion:{' '}
                {detalmovie && detalmovie?.overview.length > 50
                  ? `${detalmovie?.overview.slice(0, 100)}...`
                  : detalmovie?.overview}
              </p>
              <p className="hover:text-xl hover:text-black">
                {' '}
                <a href={detalmovie?.homepage} className="text-lg">
                  {' '}
                  Ver
                </a>{' '}
              </p>
            </div>
            <div>
              {detalmovie?.backdrop_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${detalmovie?.backdrop_path}`}
                  alt={'img'}
                  className="w-full h-64 object-cover rounded-t-lg absolute -my-48  -mx-6"
                />
              )}
            </div>
            <div className="flex w-full justify-end relative z-40 ">
              <div>
                <Button
                  onClick={onSuccess}
                  className="w-48 text-white rounded-xl bg-[#43885e]    hover:text-secondary "
                >
                  Aceptar
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
