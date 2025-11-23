import styled from 'styled-components'
import { getFavoritos } from '../services/favoritos'
import { useEffect, useState } from 'react'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(125deg, #002F52 35%, #326589);
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
      const favoritosAPI = await getFavoritos()
      setFavoritos(favoritosAPI)
  }

  useEffect(() => {
      fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      {favoritos.map(favorito => (
        <p>{favorito.nome}</p>
      ))}
    </AppContainer>
  );
}
  
export default Favoritos