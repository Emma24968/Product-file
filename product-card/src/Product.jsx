import { OrderButton } from "./OrderButton";
export const Product = ({ title, price, InStock, category }) => {

  const StockStatus = (InStock)?'🟢Online':'🔴Offline'

  return (
    <div>
      <h3>{title}</h3>
      <p>Price:${price}</p>
      <p>In Stock:{StockStatus}</p>
      <p>Category:{category.join(" , ")}</p>
      <OrderButton />
    </div>
  );
};
