import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';
import { NavItems } from './navitems';
import { SCREENS } from '../responsive';

const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
        w-full
        mx-auto
        my-0
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}

    /*
        Ex media query
        @media (min-width: ${SCREENS.sm}) {
            width: ...
        }
    */
`;

const LogoContainer = styled.div``;

export function Navbar() {
    return <NavbarContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <NavItems />
    </NavbarContainer>
}