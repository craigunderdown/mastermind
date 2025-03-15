import styled from 'styled-components'

export const SetupContainer = styled.div<{ visible: boolean }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: all 300ms ease-in-out;
    background-color: #727272;
    padding: 10px;
    box-sizing: border-box;

    ${({ visible }) => visible && `
        left: 0;
    `}

    & > *:not(:last-child) {
        margin-bottom: 30px;
    }
`;

export const RadioContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
`