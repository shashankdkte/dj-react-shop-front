import React from 'react'

function HeroSection() {
  return (
     <section class="hero-container mb-6">
      <div class="hero-header-section-container">
        <div class="video-section">
          <div class="video-section-explain">
            <i class="fa fa-play-circle" aria-hidden="true"></i>
          </div>
          <p class="video-section-content">Why shop <br />on Rivly?</p>
        </div>
        <div class="hero-main-text-section">
          <div class="header-text">
            <h1>Shop everything you need online from the shops all over the world with the business <span>you
                love</span></h1>
            <p>Add for a limited time only</p>
            <a href="/" class="join-btn">Join the Rivly Unlimited for FREE</a>
            <a href="/" class="shop-link">Shop all products</a>
          </div>
        </div>

        <div class="number-products-container">
          <div class="nums-section">
            <h2>200K+</h2>
            <p class="small">Products</p>
          </div>
        </div>
      </div>

      <div class="hero-card-section">
        <div class="card-product-review">
          <div class="star-section">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa-regular fa-star"></i>
          </div>

          <div class="product-numeric-review">
            <h2>+15K</h2>
            <p>Product Reviews</p>
          </div>
          <div class="info-section">
            <p>Real identity-verified reviews you can trust</p>
          </div>
        </div>
        <div class="hero-card-group">

          <div class="card-product-quality">
            <div class="info-section">
              <p>Quality products from local business man</p>
            </div>
          </div>
          <div class="card-certified-brands">
            <div class="person-certified-image-section">
              <div class="person-img-certified"></div>
              <div class="person-img-certified"></div>
              <div class="person-img-certified"></div>
              <div class="person-img-certified"></div>
            </div>
            <h3>5000+</h3>
            <p>Certified Brands</p>
          </div>
          <div class="card-product-purchases">

            <div class="product-numeric-purchase">
              <h2>10%+</h2>
              <p>Up to 10% back on all purchases</p>
            </div>
            <div class="info-section-purchase">
              <div class="icon-free">
                <i class="fa fa-motorcycle" aria-hidden="true"></i>
              </div>
              <p>Free Fast and reliable shipping</p>
            </div>
          </div>
        </div>
        <div class="card-product-compete">
          <div class="text-card">
            See how Rivly seller compare to sites like Amazon, Etsy and others
          </div>
          <a href="" class="learn">Learn more</a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection