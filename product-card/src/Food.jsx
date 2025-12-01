import { OrderButton } from "./OrderButton";
export const Food = ({ price, category, available }) => {
  return (
    <>
      <h3>Food</h3>
      <p>Price:{price}</p>
      <p>Available{available ? "Yes" : "No"}</p>
      <p>Category:{category.join(" , ")}</p>
      <OrderButton />
    </>
  );
};
