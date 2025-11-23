import styled from 'styled-components'
import { useEffect, useState } from 'react'

import { deleteFavorito, getFavoritos } from '../services/favoritos'
import imgCapa from '../assets/livro.png'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(125deg, #002F52 35%, #326589);
`

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px
`

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 10px;

  p {
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

  async function deletarFavorito(id) {

    const nomeLivro = favoritos.find(favorito => favorito.id === id).nome

    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Livro ${nomeLivro} removido dos favoritos!`)
  }

  useEffect(() => {
      fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <Titulo>Abaixo sua lista de Favoritos!</Titulo>
      <ResultadoContainer>
        { favoritos.length !== 0 ? favoritos.map(favorito => (
          <Resultado key={favorito.id} onClick={() => deletarFavorito(favorito.id)}>
            <img src={imgCapa} alt={favorito.nome} />
            <p>{favorito.nome}</p>
          </Resultado>
        )) : <p>Você não possui favoritos cadastrados.</p> }
      </ResultadoContainer>
    </AppContainer>
  );
}
  
export default Favoritos