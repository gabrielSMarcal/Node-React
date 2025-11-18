import styled from 'styled-components'

import perfil from '../../../assets/perfil.svg'
import sacola from '../../../assets/sacola.svg'

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
          {icones.map( (icone) => (
            <Icone><img src={icone} alt="ícone" /></Icone>
          ))}
        </Icones>
    )
}

export default IconesHeader