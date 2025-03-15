import styled from 'styled-components'

export const HomeScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;

    & > *:not(:last-child) {
        margin-bottom: 20px;
    }
`
