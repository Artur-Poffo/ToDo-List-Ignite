import styled from "styled-components";

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2.4rem;

  strong {
    font-size: ${({ theme }) => theme.FONTS_SIZES.MD};
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PURPLE};

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  strong > span {
    display: block;

    padding: 0.2rem 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 999px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-weight: 400;
  }

  strong:first-child {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`

export const List = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
`