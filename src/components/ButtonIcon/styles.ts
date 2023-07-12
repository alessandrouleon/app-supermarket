import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";

export type ButtonStylesProps = "PRIMARY" | "SECONDARY";

export interface Props {
  type: ButtonStylesProps;
}

export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  align-items: flex-end;
  justify-content: center;
  margin-right: 20px;
`;

export const Icon = styled(AntDesign).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.BLUE_700 : theme.COLORS.RED_DARK,
}))`
  padding-bottom: 2px;
`;
