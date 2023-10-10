import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product';
import axios from 'axios';
function HomeScreen() {
const [products,setProducts] = useState([])
  useEffect(() => {
    async function getProducts()
    {

      const {data} = await axios.get("/api/products")
      console.log(data);
      setProducts(data)
    }
    getProducts()
},[])

  return (
    <div>
      <Row>
      {products && products.map(product => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product}/></Col>
        ))}
        </Row>
    </div>
  )
}

export default HomeScreen