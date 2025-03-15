import React, { FC } from 'react'
import { RadioIcon, RadioLabel, StyledRadioButton } from './styled'

interface RadioProps {
    label: string
    selected: boolean
    onClick: () => void
}

export const Radio: FC<RadioProps> = ({ label, selected, onClick }) => {
    return (
        <StyledRadioButton onClick={onClick}>
            <RadioIcon selected={selected} />
            <RadioLabel>{label}</RadioLabel>
        </StyledRadioButton>
    )
}
