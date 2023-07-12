import { MaterialIcons } from "@expo/vector-icons";
import { styled, css } from "styled-components/native";

export const Container = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  min-height: 64px;
  max-height: 64px;
  padding-top: 10px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  align-self: flex-start;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XLL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-weight: 700;
  `}
`;

export const Content = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 15px;
`;

export const CircleTotal = styled.Text`
  width: 24px;
  height: 24px;
  margin-top: 5px;
  margin-left: 33px;
  padding-top: 4px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  border-radius: 100px;
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.BLUE_500};
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.BLUE_700,
}))`
  margin-top: 5px;
  margin-left: 7px;
`;
