import styled from "styled-components";

interface ParagraphProps {
  isDone: boolean;
}

export const Container = styled.li<ParagraphProps>`
  width: 100%;
  min-height: 7.2rem;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;

  p {
    flex: 1;

    font-size: ${({ theme }) => theme.FONTS_SIZES.MD};
    color: ${({ theme, isDone }) => isDone ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_200};
    text-decoration: ${({ isDone }) => isDone ? 'line-through' : 'none'};
    line-height: 1.96rem;
  }

  p + svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 4px;

    cursor: pointer;
    transition: background-color .2s, color .2s;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.GRAY_400};
      color: ${({ theme }) => theme.COLORS.DANGER};
    }
  }
`