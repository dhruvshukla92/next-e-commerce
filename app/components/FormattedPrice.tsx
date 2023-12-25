import React from "react";

interface Props {
  amount: number;
}

const FormattedPrice = ({ amount }: Props) => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(amount);

  return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
