import React, { useState } from 'react';
import axios from 'axios';
import ProductList from '@/components/ProductList';
export default function Page() {
  const [products, setProducts] = useState<Product[]>([])
  const fetchProducts = async () =>{
    const res = await axios.get<{data: Product[], status:string }>('/api/products');
    const {data} = res.data
    setProducts(data)
  }
  React.useEffect(() =>{
    fetchProducts();
  }, [])
  const handleDelete = async(id: string) =>{
    const res = await axios.delete<{status:string }>(`/api/products/${id}`);
    if(res.data.status === 'ok'){
      const filterData = products.filter(p => p.id !== id);
      setProducts(filterData);
    }
  }
  return (
    <div>
      <h1>Page products</h1>
      <ProductList products={products} onDeleted={handleDelete}/>
    </div>
  );
}
