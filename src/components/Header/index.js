import styled from 'styled-components'

import Logo from './Logo'
import OpcoesHeader from './OpcoesHeader'
import IconesHeader from './IconesHeader'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header