export const Product = ({title, price, InStock,category})=>{
    return(
        <div>
            <h3>{title}</h3>
            <p>Price:${price}</p>
            <p>In Stock:{InStock? 'Yes': 'No'}</p>
            <p>Category:{category.join(' , ')}</p>
        </div>
    )
}