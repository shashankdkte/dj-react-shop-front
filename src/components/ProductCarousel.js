import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTopProducts } from '../actions/productAction';
import Loader from './Loader';
import Message from './Message';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BASE_API_URL } from '../constants/cartConstants';

function ProductCarousel() {

  const dispatch = useDispatch();
  const productTopRated = useSelector(state => state.productTopRated);
    const { loading, error, products } = productTopRated;
  
  useEffect(() => { 
    dispatch(listTopProducts())
  }
    , [dispatch])
  return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <Carousel pause='hover' className='dark mb-6'>
                  {products.map(product => {
                      const image = `${BASE_API_URL + product.image}`

                     return  (<Carousel.Item key={product._id}>
                          <Link to={`/product/${product._id}`}>
                              <Image src={image} alt={product.name} fluid />
                              <Carousel.Caption className='carousel.caption'>
                                  <h4>{product.name} (${product.price})</h4>
                              </Carousel.Caption>
                          </Link>
                      </Carousel.Item>
                     )
                  }
                    )}
                </Carousel>
            )

    )
}

export default ProductCarousel