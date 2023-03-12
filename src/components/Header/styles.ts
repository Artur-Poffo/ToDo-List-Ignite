import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100vw;
  height: 20rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  display: flex;
  justify-content: center;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  h1 {
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-size: ${({ theme }) => theme.FONTS_SIZES.XL};

    span {
      color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    }
  }
`