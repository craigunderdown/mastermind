import styled from 'styled-components'

export const MatchesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 55px;
`

export const MatchPin = styled.div<{ colour: string }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: ${({ colour }) => colour};
    margin: 2px;
`
