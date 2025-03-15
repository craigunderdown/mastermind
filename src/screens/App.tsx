import React, { FC, useState } from 'react'
import { AppContainer } from './styled'
import { HomeScreen } from './home'
import { Setup } from './setup'
import { Game } from './game'

export interface GameProps {
    pins: number
    allowSameColours: boolean
}

export const GameColours: string[] = ['red', 'yellow', 'green', 'blue', 'purple', 'brown']

export const App: FC = () => {
    const [pageState, setPageState] = useState(1)
    const [gameSetup, setGameSetup] = useState<GameProps>({ pins: 4, allowSameColours: false })

    const startGame = () => {
        setPageState(2)
    }

    const setGame = (state: GameProps) => {
        setGameSetup(state)
        setPageState(3)
    }
 
    return (
        <AppContainer>
            <HomeScreen startGame={startGame} />
            <Setup visible={pageState > 1} setGame={setGame} />
            {pageState > 2 && <Game backToSettings={startGame} gameSetup={gameSetup} />}
        </AppContainer>
    )
}