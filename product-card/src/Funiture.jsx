export const Funiture = ({title, price,InStock, Category})=>{
const StockStatus = (InStock)?'🟢Online':'🔴Offline'
return(
    <div>
        <h3>{title}</h3>
        <p>Price:{price}</p>
        <p>In Stock:{InStock}</p>
        <p>Category:{Category.join(' , ')}</p>
    </div>
)
}