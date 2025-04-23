document.addEventListener("DOMContentLoaded", () => {
    // Load the about section content
    const aboutSection = document.getElementById("about")
  
    if (aboutSection) {
      aboutSection.innerHTML = `
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">Our Journey</span>
            <h2 class="section-title">About WECOFY</h2>
            <div class="section-divider"></div>
            <p class="section-description">Pioneering sustainable living since 2020</p>
          </div>
          
          <div class="row gx-5 gy-4 align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="about-image-wrapper">
                <div class="about-image-container">
                  <img src="4.jpeg" alt="About WECOFY" class="img-fluid rounded-lg shadow-lg">
                  <div class="eco-badge">
                    <span>100% Eco-Friendly</span>
                  </div>
                </div>
              </div>
              
              <div class="about-stats row text-center mt-4">
                <div class="col-4">
                  <div class="stat-item">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">Products</div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="stat-item">
                    <div class="stat-number">10k+</div>
                    <div class="stat-label">Happy Customers</div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Eco Brands</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-lg-6">
              <div class="about-content">
                <div class="about-content-header">
                  <h2 class="about-title">Our Story</h2>
                  <p class="about-lead">
                    WECOFY is your premier destination for sustainable living essentials. We believe in creating a world where eco-friendly choices are not just an alternative, but a way of life.
                  </p>
                </div>
                
                <div class="about-text-container">
                  <p class="about-text">
                    Our carefully curated collection of sustainable products helps you make environmentally conscious
                    decisions without compromising on quality or style. Every product in our catalog is selected with care,
                    ensuring it meets our strict standards for sustainability, durability, and ethical production.
                  </p>
                </div>
                
                <div class="about-features">
                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="feature-card">
                        <div class="feature-icon">
                          <i class="fas fa-leaf"></i>
                        </div>
                        <div class="feature-content">
                          <h5>Sustainable Products</h5>
                          <p>Carefully selected eco-friendly items that reduce environmental impact</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="feature-card">
                        <div class="feature-icon">
                          <i class="fas fa-recycle"></i>
                        </div>
                        <div class="feature-content">
                          <h5>Zero Waste</h5>
                          <p>Minimal packaging, maximum reusability for a cleaner planet</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="feature-card">
                        <div class="feature-icon">
                          <i class="fas fa-truck"></i>
                        </div>
                        <div class="feature-content">
                          <h5>Carbon Neutral</h5>
                          <p>Eco-friendly shipping methods that offset carbon emissions</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="feature-card">
                        <div class="feature-icon">
                          <i class="fas fa-heart"></i>
                        </div>
                        <div class="feature-content">
                          <h5>Ethical Sourcing</h5>
                          <p>Fair trade partnerships that support communities worldwide</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  })
  
  