import React from 'react';
import styled, {css} from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyle from './menuStyles';

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `}
`;

//optional menu prop to give mobile menu style vs desktop style
const NavItem = styled.li<{menu?: any}>`
    ${tw`
        text-sm
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-200
        ease-in-out
        hover:text-gray-700
    `};

${({menu}) => menu && css`
        ${tw`
            text-white
            text-xl
            mb-3
            focus:text-white
            active:text-indigo-100
        `}
    `};
`

const LogoContainer = styled.div``;

export function NavItems() {
    //media query to use burger menu on mobile size screen
    const isMobile = useMediaQuery({
        maxWidth: SCREENS.sm
    });

    if(isMobile) {
        return <Menu right styles={menuStyle}>
                <ListContainer>
                    <NavItem menu>
                        <a href='#'>Home</a>
                    </NavItem>
                    <NavItem menu>
                        <a href='#'>About</a>
                    </NavItem>
                    <NavItem menu>
                        <a href='#'>Explore</a>
                    </NavItem>
                    <NavItem menu>
                        <a href='#'>Create New Deck</a>
                    </NavItem>
                </ListContainer>
            </Menu>
    }

    return <ListContainer>
            <NavItem>
                <a href='#'>Home</a>
            </NavItem>
            <NavItem>
                <a href='#'>About</a>
            </NavItem>
            <NavItem>
                <a href='#'>Explore</a>
            </NavItem>
            <NavItem>
                <a href='#'>Create New Deck</a>
            </NavItem>
    </ListContainer>
}