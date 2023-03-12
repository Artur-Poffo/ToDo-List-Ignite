import styled from "styled-components";

export const Container = styled.div`
  input[type=checkbox] {
    display: none;
  }

  label {
    display: block;

    width: 2rem;
    height: 2rem;
    
    background: transparent;
    border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
    border-radius: 50%;

    cursor: pointer;

    transition: background-color .2s, border .2s;

    svg {
      display: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
    }
  }

  input[type=checkbox]:checked + label {
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    border: none;

    svg {
      display: block;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }
`