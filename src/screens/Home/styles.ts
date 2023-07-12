import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { styled, css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const TotalPurchase = styled.Text`
  text-align: center;
  justify-content: center;
  margin: 20px 0px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XLS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-weight: 900;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Content = styled.View`
  min-height: 50px;
  max-height: 50px;
  max-width: 100%;
  margin-bottom: 15px;
  justify-content: space-between;
  flex-direction: row;
 
`;

export const Input_item = styled.View`
width: 42%;
`;
export const Input_price = styled.View`
width: 22%;
`;
export const Input_amount = styled.View`
width: 16%;
`;

export const Empty_itens = styled.Text`
color: ${({theme}) => theme.COLORS.GRAY_200};
font-size: 14px;
padding-top: 70%;
text-align: center;
`;

export const Buttonadd = styled(TouchableOpacity)`
  min-height: 50px;
  width: 50px;
  align-items: flex-end;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

export const Iconadd = styled(AntDesign).attrs(({ theme }) => ({
  size: 28,
  color: theme.COLORS.WHITE,
}))`
  border-radius: 10px;
  padding-right: 8px;
  padding-left: 2px;
`;


