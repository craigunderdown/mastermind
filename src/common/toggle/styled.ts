import styled from 'styled-components'
import { media } from '../styled-common'

export const ToggleContainer = styled.div`
    position: relative;
    display: flex;
    border-radius: 15px;
    width: 100%;
    height: 40px;
    background-color: #c0c0c0;
    border: 2px solid #fff;
    box-sizing: border-box;

    ${media.aboveMobile`
        width: 600px;    
    `}
`

export const Slider = styled.div<{ selected: boolean }>`
    position: absolute;
    height: 100%;
    width: 50%;
    left: ${({ selected }) => selected ? '50%' : '0'};
    top: 0;
    background-color: #fff;
    transition: all 200ms ease-in-out;
    border-radius: 12px;
    color: #000;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    box-sizing: border-box;
    user-select: none;
`
