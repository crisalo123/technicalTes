import { useNavigate } from 'react-router-dom'
import { LoginForm } from './component/LoginForm'

export interface AuthValues {
  username: string
  password: string
}

export const LoginPage = () => {
  const navigate = useNavigate()
  const handleSuccess = (values: AuthValues): void => {
    if (values.password !== '' && values.username !== '') {
      navigate('/home')
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full  items-center justify-center bg-cover backgroundLogin">
      <div className="rounded-lg border shadow-md bg-primaryBackground-200 p-1  bg-[#0e0e1f99] ">
        <div className="flex flex-col text-center pt-16 !px-20 ">
          <h2 className="text-6xl text-white font-extrabold">Bienvenido</h2>
          <p className="text-primaryText pt-2">
            Ingrese con sus credenciales de acceso
          </p>
          <div className="pt-8 ">
            <LoginForm onSuccess={handleSuccess} />
          </div>
          <div className="flex flex-col items-center text-center justify-around pb-3 pt-20">
            Prueba tecnica
          </div>
          <div className="flex flex-col items-center text-center justify-around pb-16">
            <p className="text-sm opacity-75 text-primaryText-50">
              {`© ${new Date().getFullYear()} Derechos reservados`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
