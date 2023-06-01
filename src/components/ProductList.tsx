import React from 'react'
import {Button} from 'antd'
import axios from 'axios'
type ProductListProps = {
    products: Product[],
    onDeleted: (id: string) => void
}
const ProductList: React.FC<ProductListProps> = ({products, onDeleted}) => {
    
  return (
    <div>
        <h1>ProductList</h1>
        {
           products.map(p =>{
            return <div key={p.id}>{p.name} <Button onClick={() => onDeleted(p.id)}>&times;</Button></div>
           })
        }
    </div>
  )
}

export default ProductList