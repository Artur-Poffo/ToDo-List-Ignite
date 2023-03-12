import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 6.4rem 2.4rem;

  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 1.6rem;
  }

  strong, p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    text-align: center;
  }
`