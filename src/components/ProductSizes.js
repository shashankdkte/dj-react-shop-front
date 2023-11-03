import React from 'react'

function ProductSizes() {
  return (
     <div class="product-info-sizes">
          <div class="product-info-size-label">
            <p>Select Size: <span>Large </span></p>
            <p class="opacity-light">Size Guide -</p>
          </div>
          <ul class="product-sizes">
            <li class="product-size">Small</li>
            <li class="product-size">Medium</li>
            <li class="product-size">Large</li>
          </ul>
        </div>
  )
}

export default ProductSizes