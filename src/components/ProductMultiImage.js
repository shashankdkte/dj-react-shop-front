import React from 'react'

function ProductMultiImage() {
  return (
    <div className='product-container_images'>
      <ul class="product-container_images-display">
          <li class="product-container-image-item"></li>
          <li class="product-container-image-item"></li>
          <li class="product-container-image-item"></li>
          <li class="product-container-image-item"></li>
        </ul>

        <ul class="product-container_slide-buttons">
          <li class="button-prev"><i class="fa-solid fa-chevron-up"></i></li>
          <li class="button-next"><i class="fa-solid fa-chevron-down"></i></li>
        </ul>
      </div>
    
  )
}

export default ProductMultiImage