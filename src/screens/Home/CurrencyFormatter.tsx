import React from 'react';
import { Text, View } from 'react-native';

interface CurrencyFormatterProps {
  amount: number;
  currency: string;
}

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({ amount, currency }) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency
  });

  const formattedAmount = formatter.format(Number(amount));

  return <Text>{formattedAmount}</Text>;
};

export default CurrencyFormatter;
