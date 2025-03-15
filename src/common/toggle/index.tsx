import React, { FC } from 'react'
import { Slider, ToggleContainer } from './styled'

interface ToggleProps {
    selected: boolean
    onClick: () => void
}

export const Toggle: FC<ToggleProps> = ({ selected, onClick }) => {
    return (
        <ToggleContainer onClick={onClick}>
            <Slider selected={selected}>{selected ? 'On' : 'Off'}</Slider>
        </ToggleContainer>
    )
}
