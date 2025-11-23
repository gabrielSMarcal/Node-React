import styled from 'styled-components'
import { getFavoritos } from '../services/favoritos'
import { useEffect, useState } from 'react'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(125deg, #002F52 35%, #326589);
`

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 10px;

  h3 {
    width: 200px;
    text-align: left;
    margin-left: 20px;
    color: #FFF;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
    border-radius: 8px;
  }
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
      <Resultado>
        {favoritos.map((favorito) => (
          <div key={favorito.id}>
            <h3>{favorito.nome}</h3>
          </div>
        ))}
      </Resultado>
    </AppContainer>
  );
}
  
export default Favoritos