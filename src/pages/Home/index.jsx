import { Home } from "../../components/Home";



// Página interna com a lógica para estar logado ou não
export const HomePage = ({ moviesList }) => {


  return (
    <>
      <Home moviesList={moviesList} />
    </>
  )
}