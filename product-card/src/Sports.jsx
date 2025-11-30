export const Sports = ({title, Price, InStock,Category})=>{
    return(
        <div>
            <p>Title:{title}</p>
            <p>Price:${Price}</p>
            <p>In Stock:{InStock ? 'Yes' : 'No'}</p>
            <p>Category:{Category.join(', ')}</p>
        </div>
    )
}