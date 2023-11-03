import React from 'react'

function ShippingComponentProduct() {
  return (
    <div class="product-content-info">
          <div class="product-content-info-item">
            <div class="product-content-info-item-image"><i class="fa-solid fa-truck"></i></div>
            <div class="product-content-info-item-text">
              <p><strong>Standard Shipping</strong></p>
              <p><strong>Free</strong> Tue, Jun 13 - June 15</p>
            </div>
          </div>
          <div class="product-content-info-item">
            <div class="product-content-info-item-image"><i class="fa-solid fa-truck-fast"></i></div>
            <div class="product-content-info-item-text">
              <p><strong>Express Shipping</strong></p>
              <p><strong>$1.99/item</strong> Tue,Jun 13</p>
            </div>
          </div>
          <div class="product-content-info-item">
            <div class="product-content-info-item-image"><i class="fa-solid fa-person-walking-arrow-loop-left"></i>
            </div>
            <div class="product-content-info-item-text">
              <p><strong>Return Policy</strong></p>
              <p><strong>Free</strong> Within 30 days of receipt</p>
            </div>
          </div>
        </div>
  )
}

export default ShippingComponentProduct