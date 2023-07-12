import { TextInput } from "react-native";
import { styled, css } from "styled-components/native";


export const Container = styled(TextInput)`
  max-width: 100%;
  min-height: 50px;
  max-height: 50px;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  border: solid 1px ${({ theme }) => theme.COLORS.GRAY_300};

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;
