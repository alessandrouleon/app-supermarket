import { MaterialIcons } from "@expo/vector-icons";
import { styled, css } from "styled-components/native";

export const Container = styled.View`
  min-height: 56px;
  max-height: 56px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border: ${({theme}) => theme.COLORS.GRAY_400};
`;

export const Name = styled.Text`
  width: 25%;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.BLUE_700,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
