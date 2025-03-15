import styled from 'styled-components'

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    row-gap: 20px;
    z-index: 2;
    transition: all 300ms ease-in-out;
    background-color: #727272;
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
`;

export const EndPanel = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    z-index: 3;
    transition: all 300ms ease-in-out;
    background-color: rgba(0,0,0,0.7);
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto;
`
