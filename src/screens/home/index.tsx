import React, { FC } from "react"
import { Heading, MenuButton } from "../../common/styled-common"
import { HomeScreenContainer } from "./styled"

interface HomeScreenProps {
    startGame: () => void
}

export const HomeScreen: FC<HomeScreenProps> = ({ startGame }) => {
    return (
        <HomeScreenContainer>
            <Heading>Mastermind</Heading>
            <MenuButton onClick={startGame}>Start</MenuButton>
        </HomeScreenContainer>
    )
}