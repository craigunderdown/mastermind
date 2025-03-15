import React, { FC, useState } from 'react'
import { GameColours } from '../../screens/App'
import { Pin, SelectPanel } from './styled'

interface SelectPinProps {
    colour?: string
    disabled: boolean
    onConfirmed: (colour: string) => void
}

export const SelectPin: FC<SelectPinProps> = ({ colour, disabled, onConfirmed }) => {
    const [showSelectPanel, setShowSelectPanel] = useState<boolean>(false)

    const clickedPin = () => {
        if (disabled) {
            return
        }
        setShowSelectPanel(true)
    }

    const selectValue = (colour: string) => {
        onConfirmed(colour)
        setShowSelectPanel(false)
    }

    return (
        <>
            {showSelectPanel && (
                <SelectPanel>
                    {GameColours.map((c, idx) => <Pin key={idx} colour={c} onClick={() => { selectValue(c) } } />)}
                </SelectPanel>
            )}
            <Pin colour={colour} disabled={disabled} onClick={clickedPin} />
        </>
    )
}
