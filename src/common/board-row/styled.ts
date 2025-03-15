import styled from 'styled-components'

export const BoardRowStyled = styled.div<{ faded: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    max-width: 550px;

    ${({ faded }) => faded && `
        opacity: 0.5;
    `}
`
