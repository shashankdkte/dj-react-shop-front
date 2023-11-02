import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { BASE_API_URL } from '../constants/cartConstants'

function Product({ product }) {
 const image = `${BASE_API_URL + product.image}`
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={image}/>
      </Link>
      <Card.Body>
         <Link href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
      </Link>
          
          <Card.Text>
          <div className="my-3">
              <Rating value={product.rating} text={`${product.num_reviews} reviews`} color={'#f8e825'}/>
            </div>
        </Card.Text>
        <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product