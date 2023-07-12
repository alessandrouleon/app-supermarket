import { CircleTotal, Container, Content, Icon, Title } from "./styles";

interface Props {
  title: string;
  total: number;
}
export function Header({ title , total}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
      <Icon name="add-shopping-cart"/>
      <CircleTotal>{total}</CircleTotal>
      </Content>
     
    </Container>
  );
}
