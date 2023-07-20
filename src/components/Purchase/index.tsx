import { ReactNode } from "react";
import { ButtonIcon } from "../ButtonIcon";
import { Container, Icon, Name } from "./styles";

interface Props {
  name: string;
  price?: ReactNode;
  amount?: ReactNode;
  onRemove: () => void;
}
export function Purchase({ name, price, amount, onRemove }: Props) {
  return (
    <Container>
      <Icon name="add-shopping-cart" />
      <Name>{name}</Name>
      <Name>{price}</Name>
      <Name>{amount}</Name>
      <ButtonIcon icon="delete" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
