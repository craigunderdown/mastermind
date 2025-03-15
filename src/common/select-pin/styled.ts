import styled from 'styled-components'
import { media } from '../styled-common'

export const SelectPanel = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    column-gap: 10px;
    width: 100%;
    background-color: #c0c0c0;
    border: 2px solid #fff;
    z-index: 1;

    ${media.aboveMobile`
        width: 460px;    
    `}
`

const colours: Record<string, string> = {
    red: '#e32800',
    blue: '#0400d1',
    green: '#01c428',
    yellow: '#fafd16',
    purple: '#9f16fd',
    brown: '#994e00'
}

export const Pin = styled.div<{ colour?: string, disabled?: boolean }>`
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: ${({ colour }) => colour != null ? colours[colour] : '#fff'};
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};

    &::after {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border: 2px solid ${({ colour }) => colour != null ? colours[colour] : '#fff'};
        border-radius: 50%;
    }
`
