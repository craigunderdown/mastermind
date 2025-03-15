import styled from 'styled-components'
import { media } from '../styled-common'

export const StyledRadioButton = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RadioIcon = styled.div<{ selected: boolean }>`
    position: relative;
    display: flex;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #727272;
    box-sizing: border-box;
    margin-bottom: 10px;

    ${({ selected }) => selected && `
        background-color: #fff;
    `}

    &::after {
        content: '';
        position: absolute;
        border: 2px solid #fff;
        border-radius: 50%;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
    }
`

export const RadioLabel = styled.div`
    font-size: 14px;
    text-align: center;

    ${media.aboveTablet`
        font-size: 20px;    
    `}
`
