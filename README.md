# prueba tecnica

## Descripción

Este proyecto es una aplicación desarrollada con React, TypeScript y Vite. Permite a los usuarios autenticarse y explorar una variedad de películas utilizando la API de The Movie Database (TMDb).

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que permite el uso de tipos estáticos.
- **Vite**: Herramienta de construcción rápida para aplicaciones web.
- **Axios**: Cliente HTTP para realizar peticiones a la API. -**zod** : herramienta para validar campos especificos

## Instalación

Para clonar el repositorio, usa:

```bash
git clone https://github.com/crisalo123/technicalTes.git
```

## Pasos de Instalación

\*\*Ubicación en la carpeta: Después de clonar el repositorio, ubícate en la carpeta technical-test utilizando el comando:

cd technical-test

## Instalación de dependencias: Instala las dependencias necesarias con:

pnpm install

## Iniciar la aplicación: Para iniciar la aplicación en modo desarrollo, ejecuta:

npm run dev

## Estructura del proyecto: En la carpeta services, encontrarás los servicios utilizados para la ejecución del proyecto

## Uso de la api Obtener Lista de Película

```Typescript
export const getMoviesList = async (): Promise<unknown> => {
  return await movieApi.get(`genre/movie/list?language=en`)
}
```

## Manejo de Datos

```Typescript
 const getDataMovie = async () => {
    try {
      const res = await getMoviesList()
      setShowMovieList(res.genres)
    } catch (error) {
      console.log(error)
    }
  }
```

-- Adicionalmente, encontrarás una lista donde se muestra el consumo del servicio por géneros de película. También podrás realizar la paginación y búsqueda de películas, así como ver el detalle de la película seleccionada.
