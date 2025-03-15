import styled from 'styled-components'

const mediaQuery = (maxWidth: number, ...rest: string[]): string => {
    return `
        @media only screen and (min-width: ${maxWidth}px) {
            ${rest}
        }
    `
}

export class media {
  static aboveMobile(styling: TemplateStringsArray) {
    return mediaQuery(480, ...styling);
  }
  static aboveTablet(styling: TemplateStringsArray) {
    return mediaQuery(768, ...styling);
  }
  static aboveDesktop(styling: TemplateStringsArray) {
    return mediaQuery(1024, ...styling);
  }
}

export const Heading = styled.h1`
    margin: 0;
    font-size: 32px;
    line-height: 1em;
    text-align: center;

    ${media.aboveMobile`
        font-size: 40px;    
    `}
`

export const SubHeading = styled.h2`
  margin: 0;
  font-size: 20px;
  line-height: 1em;
  text-align: center;

  ${media.aboveMobile`
    font-size: 30px;    
  `}
`;

export const MenuButton = styled.button`
    position: relative;
    font-family: "Tektur", "Roboto", "Helvetica Neue", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    width: calc(100% - 20px);
    background-color: #fff;
    color: #000;
    font-size: 20px;
    user-select: none;
    cursor: pointer;

    &::after {
        content: "";
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border: 2px solid #fff;
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
      border-color: transparent;
    }

    ${media.aboveMobile`
        width: auto;
    `}
`;
