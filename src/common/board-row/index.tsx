import React, { FC, useState } from 'react'
import { RoundStatus } from '../../screens/game'
import { SelectPin } from '../select-pin'
import { BoardRowStyled } from './styled'
import { MenuButton } from '../styled-common'
import { Matches } from '../matches'

interface BoardRowProps {
    guess?: RoundStatus
    pins: number
    currentRound: boolean
    faded: boolean
    submitGuess: (guess: RoundStatus) => void
}

export const BoardRow: FC<BoardRowProps> = ({ guess, pins, currentRound, faded, submitGuess }) => {
    const [currentGuess, setCurrentGuess] = useState<RoundStatus>(guess ?? { colours: {}, matching: [] })
    
    const onConfirmedPin = (pinNumber: number) => (value: string) => {
        const newGuess = {
            matching: currentGuess.matching,
            colours: {
                ...currentGuess.colours,
                [pinNumber]: value
            }
        }
        setCurrentGuess(newGuess)
    }

    const rowPins = []
    for (let i = 0; i < pins; i++) {
        rowPins.push(
            <SelectPin key={i} colour={currentGuess?.colours?.[i]} disabled={!currentRound} onConfirmed={onConfirmedPin(i)} />
        )
    }

    const guessClicked = () => {
        if (!currentRound) {
            return
        }

        submitGuess(currentGuess)
    }
    
    return (
        <>
            <BoardRowStyled faded={faded}>
                {rowPins}
                <Matches matching={currentGuess.matching} pins={pins} />
            </BoardRowStyled>
            {currentRound && (
                <MenuButton
                    disabled={Object.keys(currentGuess.colours).length !== pins}
                    onClick={guessClicked}
                >
                    {'Guess'}
                </MenuButton>
            )}
        </>
    )
}
