import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { loginSchema, LoginValues } from './shema'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
export interface LoginFormProps {
  onSuccess: (values: LoginValues) => void
  isLoading?: boolean
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  })
  return (
    <form onSubmit={handleSubmit(onSuccess)}>
      <div className="space-y-3 mt-10">
        <div>
          <Input
            {...register('username')}
            className="text-sm"
            placeholder="Usuario"
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
        </div>

        <div className=" relative pt-2">
          <Input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            className="text-sm   "
            placeholder="Contraseña"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          {showPassword ? (
            <Button
              type="button"
              className="absolute  !top-4 right-4 h-6"
              onClick={() => setShowPassword(false)}
            >
              <span className="text-black"> Ver</span>
              <span className="text-lg icon-eye-slash text-primaryText-50" />
            </Button>
          ) : (
            <Button
              type="button"
              className="absolute bg-transparent !top-4 right-4 h-6"
              onClick={() => setShowPassword(true)}
            >
              {' '}
              <span className="text-black"> Ver</span>
              <span className="text-xl icon-eye text-primaryText-50" />
            </Button>
          )}
        </div>
      </div>
      <div className="flex items-center justify-around pt-5 pb-10">
        <Button
          className="w-80  transition-all  bg-[#576488] hover:bg-secondary-50 hover:ring-2 hover:ring-secondary hover:text-secondary"
          type="submit"
        >
          <span className="">Ingresar</span>
        </Button>
      </div>
    </form>
  )
}
