import React, { FC, useState } from "react"
import { Heading, MenuButton, SubHeading } from "../../common/styled-common"
import { RadioContainer, SetupContainer } from "./styled"
import { Radio } from "../../common/radio"
import { Toggle } from "../../common/toggle"
import { GameProps } from "../App"

interface SetupProps {
    visible: boolean
    setGame: (game: GameProps) => void
}

export const Setup: FC<SetupProps> = ({ visible, setGame }) => {
    const [gameSetup, setGameSetup] = useState<GameProps>({ pins: 4, allowSameColours: false })
    const setPins = (pins: number) => { setGameSetup({ pins, allowSameColours: gameSetup.allowSameColours }) }
    const setSameColours = () => { setGameSetup({ pins: gameSetup.pins, allowSameColours: !gameSetup.allowSameColours }) }

    return (
        <SetupContainer visible={visible}>
            <Heading>Game Settings</Heading>
            <SubHeading>Level</SubHeading>
            <RadioContainer>
                <Radio label="4 pins (standard)" selected={gameSetup.pins === 4} onClick={() => setPins(4)} />
                <Radio label="5 pins (advanced)" selected={gameSetup.pins === 5} onClick={() => setPins(5)} />
                <Radio label="6 pins (expert)" selected={gameSetup.pins === 6} onClick={() => setPins(6)} />
            </RadioContainer>
            <SubHeading>Allow Multiple Colour Setup</SubHeading>
            <Toggle selected={gameSetup.allowSameColours} onClick={setSameColours} />
            <MenuButton onClick={() => setGame(gameSetup)}>Start Game</MenuButton>
        </SetupContainer>
    )
}
