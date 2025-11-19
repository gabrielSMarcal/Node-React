import styled from "styled-components"
import Input from "../Input"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(125deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 100px 0;
    height: 290px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF";
    font-size: 36px;
    text-align: center;
    width: 100%;"
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Pesquisa() {
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante!</SubTitulo>
            <Input placeholder='Escreva sua próxima leitura'/>
        </PesquisaContainer>
    )
}

export default Pesquisa