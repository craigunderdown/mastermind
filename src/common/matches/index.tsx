import React, { FC } from 'react'
import { MatchesContainer, MatchPin } from './styled'

interface MatchesProps {
    matching: string[]
    pins: number
}

export const Matches: FC<MatchesProps> = ({ matching, pins }) => {
    const matchElems = []

    for (let i = 0; i < pins; i++) {
        matchElems.push(<MatchPin colour={matching?.[i] ?? 'transparent'} />)
    }

    return (
        <MatchesContainer>{matchElems}</MatchesContainer>
    )
}
