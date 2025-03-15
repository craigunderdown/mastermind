import React, { FC, useState } from "react"
import { Heading, MenuButton } from "../../common/styled-common"
import { EndPanel, GameContainer } from "./styled"
import { GameColours, GameProps } from "../App"
import { BoardRow } from "../../common/board-row"

interface SetupProps {
    gameSetup: GameProps
    backToSettings: () => void
}

export interface RoundStatus {
    colours: Record<number, string>
    matching: string[]
}

interface GameStatus {
    rounds: RoundStatus[]
    completed: boolean
    win: boolean
}

const createAnswer = (gameSetup: GameProps): string[] => {
    const answer: string[] = []
    let remainingColours = [...GameColours]

    for (let i = 0; i < gameSetup.pins; i++) {
        const index = Math.max(0, Math.round(Math.random() * remainingColours.length - 1))
        const selectedColour = remainingColours[index]
        
        answer.push(selectedColour)

        if (!gameSetup.allowSameColours) {
            remainingColours = remainingColours.filter(rc => rc !== selectedColour)
        }
    }

    return answer
}

export const Game: FC<SetupProps> = ({ gameSetup, backToSettings }) => {
    const [answer, setAnswer] = useState<string[]>(createAnswer(gameSetup))
    const [gameStatus, setGameStatus] = useState<GameStatus>({ rounds: [], completed: false, win: false })
    const currentRound = gameStatus.rounds.length
    const rowElems = []

    const restartGame = () => {
        setAnswer(createAnswer(gameSetup))
        setGameStatus({ rounds: [], completed: false, win: false })
    }

    const addGuess = (guess: RoundStatus) => {
        const guessMatches: string[] = []
        const guessedArray: string[] = []
        const checkArray: string[] = []

        answer.forEach((ans, idx) => {
            if (guess.colours[idx] === ans) {
                guessMatches.push('black')
            } else {
                checkArray.push(guess.colours[idx])
            }
            guessedArray.push(guess.colours[idx])
        })

        answer.forEach((a, idx) => {
            let foundIndex = -1
            if ((foundIndex = checkArray.indexOf(a)) !== -1) {
                guessMatches.push('white')
                checkArray.splice(foundIndex, 1)
            }
        })

        const wonGame = guessMatches.length === gameSetup.pins && guessMatches.every(m => m === 'black')

        setGameStatus({
            win: wonGame,
            completed: currentRound === 9 || wonGame,
            rounds: [
                ...gameStatus.rounds,
                {
                    ...guess,
                    matching: guessMatches
                }
            ]
        })
    }

    for (let i = 0; i < 10; i++) {
        const guess = i < currentRound ? gameStatus.rounds[i] : undefined
        rowElems.push(
            <BoardRow
                key={`${currentRound}_${i}`}
                guess={guess}
                pins={gameSetup.pins}
                currentRound={currentRound === i}
                faded={i > currentRound}
                submitGuess={addGuess}
            />
        )
    }

    return (
        <GameContainer>
            <Heading>{`Current Guess: ${currentRound + 1}/10`}</Heading>
            {rowElems}
            {gameStatus.completed && (
                <EndPanel>
                    <Heading>{gameStatus.win ? 'You won!' : 'You lose!'}</Heading>
                    <MenuButton onClick={restartGame}>Play Again</MenuButton>
                    <MenuButton onClick={backToSettings}>Game Settings</MenuButton>
                </EndPanel>
            )}
        </GameContainer>
    )
}
