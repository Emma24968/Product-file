import { OrderButton } from "./OrderButton";
export const Food = ({title, price, category, available }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>Price:{price}</p>
      <p>Available{available ? "Yes" : "No"}</p>
      <p>Category:{category.join(" , ")}</p>
      <OrderButton />
    </>
  );
};
