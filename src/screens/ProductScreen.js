import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { listProductDetail } from '../actions/productAction'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProductScreen(props) {
    // const [product, setProduct] = useState({})
    const dispatch = useDispatch();
    const productDetail = useSelector(state => state.productDetail)
    const {loading,error,product} = productDetail
const { id } = useParams();
  useEffect(() => {
    dispatch(listProductDetail(id))
},[dispatch,id])

  


//   const product = products.find((product) => product._id === id);
  return (
    <div>
          <Link to={`/`} className='btn btn-light my-3'>Go Back</Link>
          {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
               <div>
        <Row>
          <Col md={6}>
            <Image src={product && product.image}/>
          </Col>
          <Col md={3}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Rating value={product.rating} text={`${product.num_reviews} reviews`} color={'#f8e825'} />
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Price: ${product.price}
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Description: {product.description}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
            <Col md={3}>
                                    <Card>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Price:</Col>
                                                    <Col>
                                                        <strong>${product.price}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Status:</Col>
                                                    <Col>
                                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            {product.countInStock > 0 && (
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Qty</Col>
                                                        <Col xs='auto' className='my-1'>
                                                            
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )}


                                            <ListGroup.Item>
                                                <Button
                                                    
                                                    className='btn-block'
                                                    disabled={product.countInStock === 0}
                                                    type='button'>
                                                    Add to Cart
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            </Row>
      </div>
          )}
     
    </div>
  )
}

export default ProductScreen