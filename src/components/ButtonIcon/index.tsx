import { TouchableOpacityProps } from "react-native";
import { Container, ButtonStylesProps, Icon } from "./styles";
import { AntDesign } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  icon: keyof typeof AntDesign.glyphMap;
  type?: ButtonStylesProps;
}
export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
     <Icon
     name={icon}
     size={32}
     type={type}
     />
    </Container>
  );
}
