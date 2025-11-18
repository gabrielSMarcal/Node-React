import './style.css'

import perfil from '../../../assets/perfil.svg'
import sacola from '../../../assets/sacola.svg'

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
          {icones.map( (icone) => (
            <li className='icone'><img src={icone} alt="ícone" /></li>
          ))}
        </ul>
    )
}

export default IconesHeader