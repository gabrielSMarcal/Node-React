import styled from "styled-components"
import { useEffect, useState } from "react"

import Input from "../Input"
import { getLivros } from "../../services/livros"
import { postFavorito } from "../../services/favoritos"
import imgCapa from '../../assets/livro.png'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(125deg, #002F52 35%, #326589);
    color: #FFF;
    text-align: center;
    padding: 100px 0;
    min-height: 290px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
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
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
        border-radius: 8px;
    }
`

function Pesquisa() {

    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    async function fetchLivros() {
        const livrosAPI = await getLivros()
        setLivros(livrosAPI)
    }

    useEffect(() => {
        fetchLivros()
    }, [])

    async function adicionarFavorito(id) {

        const nomeLivro = livros.find(livro => livro.id === id).nome
        await postFavorito(id)

        alert(`Livro ${nomeLivro} adicionado aos favoritos!`)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante!</SubTitulo>
            <Input 
            placeholder='Escreva sua próxima leitura'
            onBlur={evento =>{
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }}/>

            {livrosPesquisados.map(livro => (
                <Resultado key={livro.nome} onClick={() => adicionarFavorito(livro.id)}>
                    <img src={imgCapa} alt='capa'/>
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa