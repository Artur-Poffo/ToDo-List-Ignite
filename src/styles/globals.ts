import { createGlobalStyle } from 'styled-components'

export const GlobalsStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 3px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
    outline: none;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: ${({ theme }) => theme.FONTS_FAMILY.PRIMARY};
    font-size: ${({ theme }) => theme.FONTS_SIZES.LG};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`