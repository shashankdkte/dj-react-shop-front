import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Image, ListGroup, Row ,Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams,useNavigate } from 'react-router-dom'
import Rating from '../components/Rating'
import { useDispatch,useSelector } from 'react-redux'
import { createProductReview, listProductDetail } from '../actions/productAction'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import { BASE_API_URL } from '../constants/cartConstants'
import ProductMultiImage from '../components/ProductMultiImage'
import ProductColors from '../components/ProductColors'
import ProductSizes from '../components/ProductSizes'
import ProductBuyComponent from '../components/ProductBuyComponent'
import ShippingComponentProduct from '../components/ShippingComponentProduct'

function ProductScreen(props) {
    // const [product, setProduct] = useState({})
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch();
    const productDetail = useSelector(state => state.productDetail)
    const { loading, error, product } = productDetail;

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        loading: loadingProductReview,
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate

    const navigate = useNavigate();
    
const { id } = useParams();
    useEffect(() => {
        if (successProductReview) {
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }

        dispatch(listProductDetail(id))

    }, [dispatch, successProductReview,id])

  
    const addtoCartHandler = (e) => {
        e.preventDefault();
        navigate(`/cart/${id}?qty=${qty}`)
}
   const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            id, {
            rating,
            comment
        }
        ))
    }
    //   const product = products.find((product) => product._id === id);
     const image = `${BASE_API_URL + product.image}`
  return (
    <div>
          <Link to={`/`} className='btn btn-light my-3'>Go Back</Link>
          {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
              <div>
    <div class="bread-crumbs">
      <a href="/">Popular Products</a> - <a href="#">Waffle-Knit Top</a>
    </div>
        <Row  className="mb-4">
                      <Col md={1}>
                          <ProductMultiImage />
                          </Col>
                      <Col md={5}>
                          <div className="product-container-main-image">      
                              <Image src={product && image}  className='mb-4'/>
                               <Card className='p-4 mb-small'>
                                           <p className='label'>Description</p> {product.description}
                                        </Card>
                          </div>
                        </Col>
                        <Col md={6}>
                          <Row className="product-info pl-4">
                                    <ListGroup.Item variant="flush">
                                        <ListGroup.Item>
                                            <h3 className='product-name'>{product.name}</h3>
                                        </ListGroup.Item>
                                  <ListGroup.Item>
                                      <p class="product-seller">by <u>Zenna</u> <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Rating value={product.rating} text={`${product.num_reviews} reviews`} color={'#f8e825'} />
                                        </ListGroup.Item>

                                  
                                       <ListGroup.Item className="product-info-pricing-shipping">
                        
                                           <div class="product-price">
            <h2> ${product.price}</h2>
            <div class="product-price-save">
              <p class="discount">$20.99</p>
              <p>you save $14</p>
            </div>
                                          </div>
                                          <p class="product-shipping"><i class="fa-solid fa-truck"></i> Free Shipping</p>
          <p class="product-shipping"><i class="fa-solid fa-person-walking-arrow-loop-left"></i> Free Returns</p>
                                        </ListGroup.Item>
                                  
                                  <ListGroup.Item>
                                      <ProductColors />
                                       </ListGroup.Item>
                                    <ListGroup.Item>
                                      <ProductSizes />
                                  </ListGroup.Item>
                                  {product.count_in_stock > 0 && <p class="product-info-stock p-2"><i class="fa-solid fa-circle-info"></i> {product.count_in_stock < 25 ? `Only ${product.count_in_stock} left in stock` : ' Available In Stock'}</p>}
                                  {product.count_in_stock <= 0 && <p class="product-info-stock p-2"><i class="fa-solid fa-circle-info"></i>Out Of Stock</p>}
                                  <ListGroup.Item className='mb-small'> 
                                      <ProductBuyComponent />
                                  </ListGroup.Item>      
                                  
                              </ListGroup.Item>
                                   {product.count_in_stock > 0 && (
                                      <ListGroup.Item className='mb-small'>
                                          <Row style={{width:"50%"}}>
                                              <Col className='label'>Quantity</Col>
                                              <Col xs="auto" className='my-1'>
                                                  <Form.Control as="select"
                                                      value={qty}
                                                      onChange={(e) => setQty(e.target.value)}>
                                                      {
                                                          [...Array(product.count_in_stock).keys()].map(x => (
                                                              <option key={x + 1} value={x + 1}>
                                                                  {x+1}
                                                              </option>
                                                          ))
                                                      }
                                                  </Form.Control>
                                              </Col>
                                          </Row>
                                      </ListGroup.Item>
                                  )}
                                </Row>
                          <Row> <Button
                                                    
                                                    className='add-to-card-btn mb-small' 
                                                    disabled={product.count_in_stock === 0}
                                                    type='button' onClick={addtoCartHandler}>
                                                    Add to Cart
                                                </Button>
                             
                                    <ShippingComponentProduct/>
                                            {/* <ListGroup.Item>
                                                <Row>
                                                    <Col>Price:</Col>
                                                    <Col>
                                                        <strong>${product.price}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item> */}
                                            {/* <ListGroup.Item>
                                                <Row>
                                                    <Col>Status:</Col>
                                                    <Col>
                                                        {product.count_in_stock > 0 ? 'In Stock' : 'Out of Stock'}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item> */}

                                       


                                           
                                  
                                      
                                </Row>
                      </Col>
                      </Row>
       <Row className='pt-4'>
                                <Col md={6} className='py-2'>
                                    <h4 className='label'>Reviews</h4>
                                    {product.reviews && product.reviews.length === 0 && <Message variant='info'>No Reviews</Message>}

                                    <ListGroup variant='flush'>
                                        {product.reviews && product.reviews.map((review) => (
                                            <ListGroup.Item key={review._id}>
                                                <strong>{review.name}</strong>
                                                <Rating value={review.rating} color='#f8e825' />
                                                <p>{review.createdAt.substring(0, 10)}</p>
                                                <p>{review.comment}</p>
                                            </ListGroup.Item>
                                        ))}

                                     
                                    </ListGroup>
                      </Col>
                      <Col md={6}>
                          <ListGroup variant='flush'>
                                 <ListGroup.Item>
                                            <h4 className='label'>Write a review</h4>

                                            {loadingProductReview && <Loader />}
                                            {successProductReview && <Message variant='success'>Review Submitted</Message>}
                                            {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}

                                            {userInfo ? (
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label>Rating</Form.Label>
                                                        <Form.Control
                                                            as='select'
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}
                                                        >
                                                            <option value=''>Select...</option>
                                                            <option value='1'>1 - Poor</option>
                                                            <option value='2'>2 - Fair</option>
                                                            <option value='3'>3 - Good</option>
                                                            <option value='4'>4 - Very Good</option>
                                                            <option value='5'>5 - Excellent</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group controlId='comment'>
                                                        <Form.Label>Review</Form.Label>
                                                        <Form.Control
                                                            as='textarea'
                                                            row='5'
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                        ></Form.Control>
                                                    </Form.Group>

                                                    <Button
                                                        disabled={loadingProductReview}
                                                        type='submit'
                                                        variant='primary'
                                                    >
                                                        Submit
                                                    </Button>

                                                </Form>
                                            ) : (
                                                    <Message variant='info'>Please <Link to='/login'>login</Link> to write a review</Message>
                                                )}
                                        </ListGroup.Item>
                          </ListGroup>
                       </Col>
                            </Row>
                        </div>
          )}
     
    </div>
  )
}

export default ProductScreen