import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { BASE_API_URL } from '../constants/cartConstants'

function Product({ product }) {
 const image = `${BASE_API_URL + product.image}`
  return (
    <Card className='my-3 rounded product-card'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={image}/>
      </Link>
      <Card.Body className='product-card-body'>
        
         <Link href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong className='label'>{product.name}</strong>
          </Card.Title>
      </Link>
        <div className="flex">
          
          <Card.Text>
          <div className="my-3 label">
              <Rating value={product.rating} text={`${product.num_reviews} `} color={'#f8e825'} />
            </div>
        </Card.Text>
        <Card.Text as="h3" className='product-price'>
                    ${product.price}
                </Card.Text>
          </div>
      </Card.Body>
      <div className="product-arrow">
        <i class="fa-solid fa-arrow-up"></i>
      </div>
    </Card>
  )
}

export default Product