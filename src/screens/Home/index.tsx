import React, { useState } from "react";
import {
  Buttonadd,
  Container,
  Content,
  Empty_itens,
  Iconadd,
  Input_amount,
  Input_item,
  Input_price,
  TotalPurchase,
} from "./styles";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Purchase } from "../../components/Purchase";
import { Alert, FlatList, Text } from "react-native";

interface Props {
  name: string;
  price: string;
  qtd: string;
}

export function Home() {
  const [itens, setItens] = useState<Props[]>([]);
  const [values, setValues] = useState<Props>({name: '', price: '', qtd: ''});
  const [sum, setSum] = useState(0);

  function handleChange(): void {
    if (values.name.trim() === "" || values.price.trim() === "" || values.qtd.trim() === ""){
      return Alert.alert(" ", "Campo não pode ser vazio!");
    }

    setItens((prevState) => [...prevState, values]);
    setSum(sum + (Number(values.price) * Number(values.qtd)));
    setValues({name: '', price: '', qtd: ''});
  }

  function handlePuchaseRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o Item: ${name}`, [
      {
        text: "Sim",
        onPress: () =>
        setItens((prevState) =>
            prevState.filter((pushase) => pushase.name !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <Container>
      <Header title="Compras" total={itens.length} />
      <TotalPurchase>R${sum} </TotalPurchase>
      <Content>
        <Input_item>
          <Input
            placeholder="Incluir na lista.."
            value={values.name}
            onChangeText={(text) => setValues((prevState) => ({ ...prevState, name: text }))}
          />
        </Input_item>
        <Input_price>
          <Input
            keyboardType="numeric"
            placeholder="Preço..."
            value={values.price}
            onChangeText={(text) => setValues((prevState) => ({ ...prevState, price: text }))}
          />
        </Input_price>
        <Input_amount>
          <Input
            keyboardType="numeric"
            placeholder="Qtd..."
            value={values.qtd}
            onChangeText={(text) => setValues((prevState) => ({ ...prevState, qtd: text }))}
          />
        </Input_amount>

        <Buttonadd onPress={handleChange}>
          <Iconadd name="addfile" />
        </Buttonadd>
      </Content>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Purchase
          name={item.name}
          price={`R$ ${Number(item.price) * Number(item.qtd)}`}
          amount={`Qtd: ${item.qtd}`}
          onRemove={() => handlePuchaseRemove(item.name)}
        />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Empty_itens>
            <Text>Adicione itens na sua lista de compras.</Text>
          </Empty_itens>
        )}
      />
    </Container>
  );
}
