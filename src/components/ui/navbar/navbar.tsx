import { useEffect, useState } from 'react'
import { getMoviesList } from '@/services/movieService'
import { useNavigate } from 'react-router-dom'

interface movieList {
  id: number
  name: string
}

interface PropsNavbar {
  valueGenerMovie: (values: number) => void
}

export const Navbar: React.FC<PropsNavbar> = ({ valueGenerMovie }) => {
  const [showMovieList, setShowMovieList] = useState<movieList[]>([])

  const navigate = useNavigate()

  const handleEventButton = () => {
    navigate('/')
  }

  const getDataMovie = async () => {
    try {
      const res = await getMoviesList()
      setShowMovieList(res.genres as any)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataMovie()
  }, [])

  return (
    <nav className="h-auto  overflow-y-auto  w-60 min-w-60 p-2 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="fixed flex h-auto overflow-y-auto  w-60 flex-col items-center text-white">
        <div className="mt-1 2xl:mt-5">
          <h2 className="text-lg font-semibold">Géneros</h2>
          <hr />
          {showMovieList.map((data) => (
            <div
              key={data.id}
              onClick={() => {
                valueGenerMovie(data.id)
              }}
            >
              <p className="hover:cursor-pointer hover:text-lg hover:bg-[#6a5acd] hover:rounded-md hover:text-white p-2 transition-colors">
                {data.name}
              </p>
            </div>
          ))}
        </div>

        <div
          onClick={handleEventButton}
          className="justify-end mx-auto flex bg-transparent border-[1px] p-5 hover:cursor-pointer"
        >
          <p>Cerrar sesion</p>
        </div>
      </div>
    </nav>
  )
}
