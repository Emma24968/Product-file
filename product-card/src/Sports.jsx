import { OrderButton } from "./OrderButton"

export const Sports = ({title, Price, InStock,Category})=>{
    return(
        <div>
            <h2>{title}</h2>
            <p>Price:${Price}</p>
            <p>In Stock:{InStock ? 'Yes' : 'No'}</p>
            <p>Category:{Category.join(', ')}</p>
            <OrderButton />
        </div>
    )
}