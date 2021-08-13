import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        lg:pl-12
        lg:pr-12
        pl-3
        pr-3
    `}
`

const LeftContainer = styled.div`
    ${tw`
        lg:w-screen
        xl:w-1/2
        flex
        flex-col
    `}
`

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-5xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `}
`



export function TopSection(){
    return <TopSectionContainer>
        <LeftContainer>
            <Slogan>Megaman Battle Network Deck Builder</Slogan>
            <Description>Build, Share, or Modify folders/decks for the GBA game Megaman Battle Network 6</Description>
        </LeftContainer>
    </TopSectionContainer>
}