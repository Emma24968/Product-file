import { OrderButton } from "./OrderButton"

export const Sports = ({title, Price, InStock,Category})=>{
    return(
        <div>
            <h3>{title}</h3>
            <p>Price:${Price}</p>
            <p>In Stock:{InStock ? 'Yes' : 'No'}</p>
            <p>Category:{Category.join(', ')}</p>
            <OrderButton />
        </div>
    )
}