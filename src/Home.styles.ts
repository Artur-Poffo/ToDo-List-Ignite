import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  width: 73.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 755px) {
    width: 100vw;
    padding: 0 1.6rem;
  }
`

export const InputArea = styled.div`
  width: 100%;
  height: 5.4rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-top: calc(0px - 2.7rem);
  margin-bottom: 6.4rem;

  input {
    flex: 1;
    padding: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 8px;

    transition: border-color .2s;

    &:focus {
      border-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    }

    @media (max-width: 390px) {
      width: 100%;
    }
  }

  button {
    padding: 1.6rem;
    
    background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    cursor: pointer;

    transition: background-color .2s;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BLUE};
    }

    &:disabled, &:disabled:hover {
      background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
      opacity: .7;
      cursor: not-allowed;
    }

    @media (max-width: 390px) {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 390px) {
      flex-direction: column;
      margin-bottom: 10rem;
    }
`