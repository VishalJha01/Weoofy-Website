import { products } from "./products.js"

document.addEventListener("DOMContentLoaded", () => {
  // Ensure video playback
  const heroVideo = document.getElementById("hero-video")
  if (heroVideo) {
    heroVideo.play().catch((error) => {
      console.error("Video playback failed:", error)
    })
  }

  // Cart functionality
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartItems = document.getElementById("cartItems")
  const cartTotal = document.getElementById("cartTotal")
  const cartSubtotal = document.getElementById("cartSubtotal")
  const cartShipping = document.getElementById("cartShipping")
  const cartCount = document.querySelector(".cart-count")
  const emptyCartMessage = document.getElementById("emptyCartMessage")

  function updateCart() {
    if (!cartItems) return

    cartItems.innerHTML = ""
    let total = 0

    if (cart.length === 0) {
      if (emptyCartMessage) emptyCartMessage.classList.remove("d-none")
      if (cartSubtotal) cartSubtotal.textContent = "₹0.00"
      if (cartShipping) cartShipping.textContent = "₹0.00"
      if (cartTotal) cartTotal.textContent = "₹0.00"
      if (cartCount) cartCount.textContent = "0"
      return
    }

    if (emptyCartMessage) emptyCartMessage.classList.add("d-none")

    cart.forEach((item, index) => {
      const cartItem = document.createElement("div")
      cartItem.className = "cart-item"
      cartItem.innerHTML = `
        <div class="d-flex align-items-center">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <h6 class="cart-item-title">${item.name}</h6>
            <div class="d-flex justify-content-between align-items-center">
              <span class="cart-item-price">₹${item.price.toFixed(2)}</span>
              <div class="cart-item-quantity">
                <button onclick="decreaseQuantity(${index})">-</button>
                <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
                <button onclick="increaseQuantity(${index})">+</button>
              </div>
            </div>
          </div>
          <button class="btn btn-sm text-danger ms-3" onclick="removeFromCart(${index})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `
      cartItems.appendChild(cartItem)
      total += item.price * item.quantity
    })

    const shipping = total > 999 ? 0 : 99

    if (cartSubtotal) cartSubtotal.textContent = `₹${total.toFixed(2)}`
    if (cartShipping) cartShipping.textContent = shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`
    if (cartTotal) cartTotal.textContent = `₹${(total + shipping).toFixed(2)}`
    if (cartCount) cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0)

    localStorage.setItem("cart", JSON.stringify(cart))
  }

  window.removeFromCart = (index) => {
    cart.splice(index, 1)
    updateCart()
  }

  window.updateQuantity = (index, quantity) => {
    cart[index].quantity = Number.parseInt(quantity)
    updateCart()
  }

  window.increaseQuantity = (index) => {
    cart[index].quantity += 1
    updateCart()
  }

  window.decreaseQuantity = (index) => {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1
      updateCart()
    }
  }

  // Authentication functionality
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault()
      const email = document.getElementById("loginEmail").value
      const password = document.getElementById("loginPassword").value

      try {
        const response = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })

        const data = await response.json()

        if (response.ok) {
          alert("Login successful!")
          localStorage.setItem("user", JSON.stringify(data.user))
          updateAccountButton()
          // Access bootstrap through the window object
          const loginModalElement = document.getElementById("loginModal")
          const loginModal = bootstrap.Modal.getInstance(loginModalElement)
          loginModal.hide()
        } else {
          alert(data.error)
        }
      } catch (error) {
        console.error("Error:", error)
        alert("An error occurred. Please try again.")
      }
    })
  }

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault()
      const name = document.getElementById("registerName").value
      const email = document.getElementById("registerEmail").value
      const password = document.getElementById("registerPassword").value
      const confirmPassword = document.getElementById("confirmPassword").value

      if (password !== confirmPassword) {
        alert("Passwords do not match!")
        return
      }

      try {
        const response = await fetch("http://localhost:3001/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        })

        const data = await response.json()

        if (response.ok) {
          alert("Registration successful! Please login.")
          // Access bootstrap through the window object
          const loginModalElement = document.getElementById("loginModal")
          const loginModal = bootstrap.Modal.getInstance(loginModalElement)
          loginModal.hide()
        } else {
          alert(data.error)
        }
      } catch (error) {
        console.error("Error:", error)
        alert("An error occurred. Please try again.")
      }
    })
  }

  function updateAccountButton() {
    const user = JSON.parse(localStorage.getItem("user"))
    const accountButton = document.querySelector('.nav-link[data-bs-toggle="modal"][data-bs-target="#loginModal"]')

    if (!accountButton) return

    const userName = document.getElementById("userName")
    const userEmail = document.getElementById("userEmail")

    if (user) {
      accountButton.innerHTML = `<i class="fas fa-user fs-5"></i>`
      accountButton.setAttribute("data-bs-target", "#accountModal")

      if (userName && userEmail) {
        userName.textContent = user.name
        userEmail.textContent = user.email
      }
    } else {
      accountButton.innerHTML = `<i class="fas fa-user fs-5"></i>`
      accountButton.setAttribute("data-bs-target", "#loginModal")
    }
  }

  // Call this function when the page loads
  updateAccountButton()

  // Typewriter effect for hero title
  const heroTitle = document.getElementById("hero-title")
  if (heroTitle) {
    const text = "ECO-FRIENDLY ALTERNATIVES"
    let i = 0

    function typeWriter() {
      if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    typeWriter()
  }

  // Hero section quotes
  const heroQuotes = [
    "Sustainable living for a better tomorrow",
    "Choose eco-friendly, choose life",
    "Making sustainable choices accessible",
    "Your partner in sustainable living",
    "Together for a greener future",
  ]
  const heroQuote = document.getElementById("hero-quote")
  if (heroQuote) {
    let currentQuoteIndex = 0

    function rotateQuote() {
      heroQuote.textContent = heroQuotes[currentQuoteIndex]
      currentQuoteIndex = (currentQuoteIndex + 1) % heroQuotes.length
    }

    setInterval(rotateQuote, 5000)
    rotateQuote()
  }

  // Product grid and pagination
  const productsPerPage = 8
  let currentPage = 1
  let filteredProducts = [...products]

  function displayProducts(page) {
    const productGrid = document.getElementById("product-grid")
    if (!productGrid) return

    productGrid.innerHTML = ""

    const startIndex = (page - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

    if (paginatedProducts.length === 0) {
      productGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fas fa-search fa-3x mb-3 text-muted"></i>
          <h4>No products found</h4>
          <p class="text-muted">Try adjusting your filter criteria</p>
        </div>
      `
      return
    }

    paginatedProducts.forEach((product) => {
      const productCard = document.createElement("div")
      productCard.className = "col"
      productCard.innerHTML = `
        <div class="card product-card h-100">
          <div class="product-image-container">
            <img src="${product.image}" class="product-image" alt="${product.name}">
            <span class="eco-badge">Eco-Friendly</span>
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title product-title">${product.name}</h5>
            <p class="card-text product-description">${product.description}</p>
            <div class="mt-auto">
              <p class="product-price">₹${product.price.toFixed(2)}</p>
              <div class="d-flex justify-content-between">
                <button class="btn btn-sm btn-outline-success view-details" data-id="${product.id}">
                  <i class="fas fa-eye me-1"></i> Details
                </button>
                <button class="btn btn-sm btn-success add-to-cart" data-id="${product.id}">
                  <i class="fas fa-cart-plus me-1"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      `
      productGrid.appendChild(productCard)
    })

    updatePagination(page)
  }

  function updatePagination(currentPage) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
    const paginationElement = document.getElementById("pagination")
    if (!paginationElement) return

    paginationElement.innerHTML = ""

    if (totalPages <= 1) {
      return
    }

    const ul = document.createElement("ul")
    ul.className = "pagination"

    // Previous button
    const prevLi = document.createElement("li")
    prevLi.className = `page-item ${currentPage === 1 ? "disabled" : ""}`
    const prevA = document.createElement("a")
    prevA.className = "page-link"
    prevA.href = "#"
    prevA.innerHTML = `<i class="fas fa-chevron-left"></i>`
    prevA.addEventListener("click", (e) => {
      e.preventDefault()
      if (currentPage > 1) {
        displayProducts(currentPage - 1)
      }
    })
    prevLi.appendChild(prevA)
    ul.appendChild(prevLi)

    // Page numbers
    const maxPagesToShow = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1)
    }

    if (startPage > 1) {
      const firstLi = document.createElement("li")
      firstLi.className = "page-item"
      const firstA = document.createElement("a")
      firstA.className = "page-link"
      firstA.href = "#"
      firstA.textContent = "1"
      firstA.addEventListener("click", (e) => {
        e.preventDefault()
        displayProducts(1)
      })
      firstLi.appendChild(firstA)
      ul.appendChild(firstLi)

      if (startPage > 2) {
        const ellipsisLi = document.createElement("li")
        ellipsisLi.className = "page-item disabled"
        const ellipsisA = document.createElement("a")
        ellipsisA.className = "page-link"
        ellipsisA.href = "#"
        ellipsisA.textContent = "..."
        ellipsisLi.appendChild(ellipsisA)
        ul.appendChild(ellipsisLi)
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      const li = document.createElement("li")
      li.className = `page-item ${i === currentPage ? "active" : ""}`
      const a = document.createElement("a")
      a.className = "page-link"
      a.href = "#"
      a.textContent = i
      a.addEventListener("click", (e) => {
        e.preventDefault()
        displayProducts(i)
      })
      li.appendChild(a)
      ul.appendChild(li)
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        const ellipsisLi = document.createElement("li")
        ellipsisLi.className = "page-item disabled"
        const ellipsisA = document.createElement("a")
        ellipsisA.className = "page-link"
        ellipsisA.href = "#"
        ellipsisA.textContent = "..."
        ellipsisLi.appendChild(ellipsisA)
        ul.appendChild(ellipsisLi)
      }

      const lastLi = document.createElement("li")
      lastLi.className = "page-item"
      const lastA = document.createElement("a")
      lastA.className = "page-link"
      lastA.href = "#"
      lastA.textContent = totalPages
      lastA.addEventListener("click", (e) => {
        e.preventDefault()
        displayProducts(totalPages)
      })
      lastLi.appendChild(lastA)
      ul.appendChild(lastLi)
    }

    // Next button
    const nextLi = document.createElement("li")
    nextLi.className = `page-item ${currentPage === totalPages ? "disabled" : ""}`
    const nextA = document.createElement("a")
    nextA.className = "page-link"
    nextA.href = "#"
    nextA.innerHTML = `<i class="fas fa-chevron-right"></i>`
    nextA.addEventListener("click", (e) => {
      e.preventDefault()
      if (currentPage < totalPages) {
        displayProducts(currentPage + 1)
      }
    })
    nextLi.appendChild(nextA)
    ul.appendChild(nextLi)

    paginationElement.appendChild(ul)
  }

  // Filter buttons
  const filterButtons = document.querySelectorAll(".btn-filter")
  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")

        const filter = button.getAttribute("data-filter")

        if (filter === "all") {
          filteredProducts = [...products]
        } else if (filter === "kitchen") {
          filteredProducts = products.filter(
            (p) =>
              p.name.toLowerCase().includes("dish") ||
              p.name.toLowerCase().includes("cup") ||
              p.name.toLowerCase().includes("plate") ||
              p.name.toLowerCase().includes("food") ||
              p.name.toLowerCase().includes("lunch") ||
              p.name.toLowerCase().includes("cutlery"),
          )
        } else if (filter === "bathroom") {
          filteredProducts = products.filter(
            (p) =>
              p.name.toLowerCase().includes("toothbrush") ||
              p.name.toLowerCase().includes("loofah") ||
              p.name.toLowerCase().includes("sponge"),
          )
        } else if (filter === "home") {
          filteredProducts = products.filter(
            (p) =>
              p.name.toLowerCase().includes("bag") ||
              p.name.toLowerCase().includes("case") ||
              p.name.toLowerCase().includes("cloth") ||
              p.name.toLowerCase().includes("storage"),
          )
        } else if (filter === "outdoor") {
          filteredProducts = products.filter(
            (p) =>
              p.name.toLowerCase().includes("light") ||
              p.name.toLowerCase().includes("rug") ||
              p.name.toLowerCase().includes("outdoor"),
          )
        }

        currentPage = 1
        displayProducts(currentPage)
      })
    })
  }

  // Sort options
  const sortOptions = document.getElementById("sortOptions")
  if (sortOptions) {
    sortOptions.addEventListener("change", () => {
      const sortValue = sortOptions.value

      if (sortValue === "price-low") {
        filteredProducts.sort((a, b) => a.price - b.price)
      } else if (sortValue === "price-high") {
        filteredProducts.sort((a, b) => b.price - a.price)
      } else if (sortValue === "newest") {
        filteredProducts.sort((a, b) => b.id - a.id)
      } else {
        // Default: featured
        filteredProducts.sort((a, b) => a.id - b.id)
      }

      displayProducts(currentPage)
    })
  }

  // Initial display
  displayProducts(currentPage)

  // Add to cart functionality
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart") || e.target.closest(".add-to-cart")) {
      const button = e.target.classList.contains("add-to-cart") ? e.target : e.target.closest(".add-to-cart")
      const productId = Number.parseInt(button.getAttribute("data-id"))
      const product = products.find((p) => p.id === productId)

      if (product) {
        const existingItem = cart.find((item) => item.id === product.id)
        if (existingItem) {
          existingItem.quantity += 1
        } else {
          cart.push({ ...product, quantity: 1 })
        }
        updateCart()

        // Create and show in-page notification
        const notification = document.createElement("div")
        notification.className = "cart-notification"
        notification.innerHTML = `
          <div class="cart-notification-content">
            <i class="fas fa-check-circle cart-notification-icon"></i>
            <div class="cart-notification-message">
              <span class="cart-notification-title">Added to Cart</span>
              <span class="cart-notification-description">${product.name}</span>
            </div>
          </div>
        `
        document.body.appendChild(notification)

        // Show notification
        setTimeout(() => {
          notification.classList.add("show")
        }, 100)

        // Hide and remove notification after 3 seconds
        setTimeout(() => {
          notification.classList.remove("show")
          setTimeout(() => {
            document.body.removeChild(notification)
          }, 300)
        }, 3000)
      }
    }
  })

  // View product details
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-details") || e.target.closest(".view-details")) {
      const button = e.target.classList.contains("view-details") ? e.target : e.target.closest(".view-details")
      const productId = Number.parseInt(button.getAttribute("data-id"))
      showProductDetail(productId)
    }
  })

  // Initial cart update
  updateCart()

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "The Alarming Rise of Global Temperatures: What You Need to Know",
      excerpt: "Explore the latest data on global warming and its impact on our planet's ecosystems.",
      image: "pp.jpg",
      date: "January 15, 2024",
      author: "Dr. Emily Chen",
      authorImage: "12.jpeg",
      category: "Climate Change",
    },
    {
      id: 2,
      title: "Ocean Plastic Crisis: Innovative Solutions to Combat Marine Pollution",
      excerpt: "Discover groundbreaking technologies and initiatives aimed at reducing plastic waste in our oceans.",
      image: "oce.jpg",
      date: "January 10, 2024",
      author: "Mark Johnson",
      authorImage: "https://source.unsplash.com/100x100/?environmentalist,man",
      category: "Ocean Conservation",
    },
    {
      id: 3,
      title: "The Hidden Cost of Fast Fashion: Environmental Impact and Sustainable Alternatives",
      excerpt: "Uncover the environmental toll of fast fashion and learn about eco-friendly clothing options.",
      image: "re.jpg",
      date: "January 5, 2024",
      author: "Sarah Thompson",
      authorImage: "https://source.unsplash.com/100x100/?fashion-designer,woman",
      category: "Sustainable Living",
    },
  ]

  // Populate blog posts
  const blogPostsContainer = document.getElementById("blog-posts")
  if (blogPostsContainer) {
    blogPosts.forEach((post) => {
      const blogPost = document.createElement("div")
      blogPost.className = "col-md-4 mb-4"
      blogPost.innerHTML = `
        <div class="card h-100">
          <div class="position-relative">
            <img src="${post.image}" class="card-img-top blog-image" alt="${post.title}">
            <span class="blog-category position-absolute top-0 start-0 m-3">${post.category}</span>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="d-flex align-items-center mb-3">
              <img src="${post.authorImage}" alt="${post.author}" class="rounded-circle me-2" width="30" height="30">
              <small class="text-muted">${post.author} • ${post.date}</small>
            </div>
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text flex-grow-1">${post.excerpt}</p>
            <a href="#" class="btn btn-outline-success hover-effect mt-3">Read More</a>
          </div>
        </div>
      `
      blogPostsContainer.appendChild(blogPost)
    })
  }

  // Customer review data
  const reviews = [
    {
      name: "Sarah Johnson",
      review:
        "WECOFY has transformed how I think about sustainable living. Their products are not just eco-friendly, but also beautifully designed and practical.",
      rating: 5,
      image: "vv.png",
    },
    {
      name: "Michael Chen",
      review:
        "Outstanding quality and excellent customer service. Every product I've purchased has exceeded my expectations.",
      rating: 5,
      image: "m.png",
    },
    {
      name: "Emma Wilson",
      review:
        "Love the variety of sustainable products available. WECOFY makes it easy to make environmentally conscious choices.",
      rating: 5,
      image: "e.png",
    },
  ]

  // Populate customer reviews
  const customerReviews = document.getElementById("customer-reviews")
  if (customerReviews) {
    reviews.forEach((review) => {
      const reviewCard = document.createElement("div")
      reviewCard.className = "col-md-4 mb-4"
      reviewCard.innerHTML = `
        <div class="card review-card">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <img src="${review.image}" alt="${review.name}" class="reviewer-image me-3" width="60" height="60">
              <div>
                <h5 class="card-title mb-1">${review.name}</h5>
                <div class="text-warning">
                  ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}
                </div>
              </div>
            </div>
            <p class="card-text">${review.review}</p>
            <div class="text-end mt-3">
              <small class="text-muted">Verified Purchase</small>
            </div>
          </div>
        </div>
      `
      customerReviews.appendChild(reviewCard)
    })
  }

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for your message. We will get back to you soon!")
      contactForm.reset()
    })
  }

  // Newsletter form submission
  const newsletterForm = document.getElementById("newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for subscribing to our newsletter!")
      newsletterForm.reset()
    })
  }

  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault()
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Checkout button functionality
  const checkoutBtn = document.getElementById("checkoutBtn")
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", (event) => {
      if (cart.length === 0) {
        alert("Your cart is empty!")
        event.preventDefault()
      } else {
        saveCartToLocalStorage()
      }
    })
  }

  // Product Detail Modal Handling
  function showProductDetail(productId) {
    const product = products.find((p) => p.id === productId)
    if (!product) return

    const detailProductImage = document.getElementById("detailProductImage")
    const detailProductName = document.getElementById("detailProductName")
    const detailProductDescription = document.getElementById("detailProductDescription")
    const detailProductPrice = document.getElementById("detailProductPrice")
    const detailBuyNow = document.getElementById("detailBuyNow")
    const detailProductFullDescription = document.getElementById("detailProductFullDescription")
    const detailProductFeatures = document.getElementById("detailProductFeatures")
    const productSpecifications = document.getElementById("productSpecifications")
    const thumbnail1 = document.getElementById("thumbnail1")
    const thumbnail2 = document.getElementById("thumbnail2")
    const thumbnail3 = document.getElementById("thumbnail3")
    const quantityInput = document.getElementById("quantity")
    const decreaseQuantity = document.getElementById("decreaseQuantity")
    const increaseQuantity = document.getElementById("increaseQuantity")
    const detailAddToCart = document.getElementById("detailAddToCart")
    const productReviews = document.getElementById("productReviews")

    // Set main content if elements exist
    if (detailProductImage) detailProductImage.src = product.image
    if (detailProductName) detailProductName.textContent = product.name
    if (detailProductDescription) detailProductDescription.textContent = product.description
    if (detailProductPrice) detailProductPrice.textContent = product.price.toFixed(2)
    if (detailBuyNow) detailBuyNow.href = product.link
    if (detailProductFullDescription) detailProductFullDescription.textContent = product.detailedDescription

    // Set features list
    if (detailProductFeatures) {
      detailProductFeatures.innerHTML = product.features.map((feature) => `<li>${feature}</li>`).join("")
    }

    // Set specifications
    if (productSpecifications) {
      productSpecifications.innerHTML = `
        <tr>
          <td>Product Name</td>
          <td>${product.name}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>₹${product.price.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Material</td>
          <td>${product.features[0]}</td>
        </tr>
        <tr>
          <td>Features</td>
          <td>${product.features.join(", ")}</td>
        </tr>
      `
    }

    // Set thumbnails
    if (thumbnail1) thumbnail1.src = product.image
    if (thumbnail2) thumbnail2.src = product.image
    if (thumbnail3) thumbnail3.src = product.image

    // Handle quantity controls
    if (quantityInput) quantityInput.value = 1

    if (decreaseQuantity) {
      decreaseQuantity.addEventListener("click", () => {
        if (quantityInput.value > 1) {
          quantityInput.value = Number.parseInt(quantityInput.value) - 1
        }
      })
    }

    if (increaseQuantity) {
      increaseQuantity.addEventListener("click", () => {
        quantityInput.value = Number.parseInt(quantityInput.value) + 1
      })
    }

    // Handle Add to Cart
    if (detailAddToCart) {
      detailAddToCart.onclick = () => {
        const quantity = Number.parseInt(quantityInput.value)
        const existingItem = cart.find((item) => item.id === product.id)

        if (existingItem) {
          existingItem.quantity += quantity
        } else {
          cart.push({ ...product, quantity })
        }

        updateCart()

        // Show success message
        alert(`${product.name} (${quantity} items) added to cart!`)

        // Reset quantity
        quantityInput.value = 1
      }
    }

    // Show reviews
    if (productReviews) {
      productReviews.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h5 class="mb-0">Customer Reviews (3)</h5>
          <button class="btn btn-sm btn-outline-success">Write a Review</button>
        </div>
        <div class="review-card mb-3">
          <div class="d-flex align-items-center mb-2">
            <img src="vv.png" alt="Reviewer" class="rounded-circle me-2" width="40" height="40">
            <div>
              <h6 class="mb-0">Sarah Johnson</h6>
              <div class="text-warning small">★★★★★</div>
            </div>
            <small class="ms-auto text-muted">2 days ago</small>
          </div>
          <p>This product exceeded my expectations! It's durable, well-designed, and truly eco-friendly.</p>
        </div>
        <div class="review-card mb-3">
          <div class="d-flex align-items-center mb-2">
            <img src="m.png" alt="Reviewer" class="rounded-circle me-2" width="40" height="40">
            <div>
              <h6 class="mb-0">Michael Chen</h6>
              <div class="text-warning small">★★★★☆</div>
            </div>
            <small class="ms-auto text-muted">1 week ago</small>
          </div>
          <p>Great product that helps reduce my environmental footprint. Would definitely recommend!</p>
        </div>
        <div class="review-card">
          <div class="d-flex align-items-center mb-2">
            <img src="e.png" alt="Reviewer" class="rounded-circle me-2" width="40" height="40">
            <div>
              <h6 class="mb-0">Emma Wilson</h6>
              <div class="text-warning small">★★★★★</div>
            </div>
            <small class="ms-auto text-muted">2 weeks ago</small>
          </div>
          <p>I've been using this product for a month now and I'm very impressed with the quality. It's a great sustainable alternative!</p>
        </div>
      `
    }

    // Show modal
    const productDetailModal = new bootstrap.Modal(document.getElementById("productDetailModal"))
    productDetailModal.show()
  }

  // Update product card event listeners
  document.addEventListener("click", (e) => {
    const imageContainer = e.target.closest(".product-image-container")
    const productTitle = e.target.closest(".product-title")

    if (imageContainer || productTitle) {
      const productCard = e.target.closest(".product-card")
      if (productCard) {
        const addToCartBtn = productCard.querySelector(".add-to-cart")
        if (addToCartBtn) {
          const productId = addToCartBtn.dataset.id
          showProductDetail(Number.parseInt(productId))
        }
      }
    }
  })

  // Search functionality
  const searchForm = document.querySelector(".search-form")
  if (searchForm) {
    const searchInput = searchForm.querySelector('input[type="search"]')

    searchForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const searchTerm = searchInput.value.toLowerCase().trim()

      if (searchTerm === "") {
        filteredProducts = [...products]
      } else {
        filteredProducts = products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            (product.detailedDescription && product.detailedDescription.toLowerCase().includes(searchTerm)),
        )
      }

      currentPage = 1
      displayProducts(currentPage)

      // Scroll to products section
      const shopSection = document.querySelector("#shop")
      if (shopSection) {
        shopSection.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  }

  function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  // Account modal functionality
  const viewProfileBtn = document.getElementById("viewProfileBtn")
  const orderHistoryBtn = document.getElementById("orderHistoryBtn")
  const wishlistBtn = document.getElementById("wishlistBtn")
  const addressesBtn = document.getElementById("addressesBtn")
  const logoutBtn = document.getElementById("logoutBtn")

  if (viewProfileBtn) {
    viewProfileBtn.addEventListener("click", () => {
      alert("View Profile functionality to be implemented")
    })
  }

  if (orderHistoryBtn) {
    orderHistoryBtn.addEventListener("click", () => {
      alert("Order History functionality to be implemented")
    })
  }

  if (wishlistBtn) {
    wishlistBtn.addEventListener("click", () => {
      alert("Wishlist functionality to be implemented")
    })
  }

  if (addressesBtn) {
    addressesBtn.addEventListener("click", () => {
      alert("Saved Addresses functionality to be implemented")
    })
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user")
      updateAccountButton()
      const accountModal = window.bootstrap.Modal.getInstance(document.getElementById("accountModal"))
      accountModal.hide()
      alert("Logged out successfully")
    })
  }

  // Add toast notification styles
  const style = document.createElement("style")
  style.textContent = `
    .cart-notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--background-light);
      color: var(--text-color);
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 9999;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    .cart-notification.show {
      transform: translateY(0);
      opacity: 1;
    }
    
    .cart-notification-content {
      display: flex;
      align-items: center;
    }
    
    .cart-notification-icon {
      color: var(--accent-color);
      font-size: 1.5rem;
      margin-right: 1rem;
    }
    
    .cart-notification-message {
      display: flex;
      flex-direction: column;
    }
    
    .cart-notification-title {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    
    .cart-notification-description {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
    }
  `
  document.head.appendChild(style)

  // Enhanced scroll animation for About section
  function handleScrollAnimation() {
    const elements = document.querySelectorAll(".scroll-animate")
    const aboutFeatures = document.querySelectorAll(".feature-card")
    const aboutStats = document.querySelectorAll(".stat-item")
    const aboutImage = document.querySelector(".about-image-container")
    const aboutContent = document.querySelector(".about-content")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight * 0.8) {
        element.classList.add("show")
      }
    })

    // Animate about image with delay
    if (aboutImage && aboutImage.getBoundingClientRect().top < window.innerHeight * 0.8) {
      setTimeout(() => {
        aboutImage.style.opacity = "1"
        aboutImage.style.transform = "translateY(0) scale(1)"
      }, 300)
    }

    // Animate about content with delay
    if (aboutContent && aboutContent.getBoundingClientRect().top < window.innerHeight * 0.8) {
      setTimeout(() => {
        aboutContent.style.opacity = "1"
        aboutContent.style.transform = "translateY(0)"
      }, 500)
    }

    // Staggered animation for feature cards
    aboutFeatures.forEach((feature, index) => {
      const featurePosition = feature.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (featurePosition < windowHeight * 0.85) {
        setTimeout(() => {
          feature.classList.add("show")
        }, 150 * index)
      }
    })

    // Staggered animation for stats
    aboutStats.forEach((stat, index) => {
      const statPosition = stat.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (statPosition < windowHeight * 0.85) {
        setTimeout(() => {
          stat.classList.add("show")

          // Animate the numbers
          const statNumber = stat.querySelector(".stat-number")
          if (statNumber) {
            const targetNumber = Number.parseInt(statNumber.textContent.replace(/\D/g, ""))
            animateNumber(statNumber, targetNumber)
          }
        }, 200 * index)
      }
    })
  }

  // Number animation function
  function animateNumber(element, target) {
    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    let frame = 0

    // Get the suffix (+ or k+)
    const suffix = element.textContent.includes("k") ? "k+" : "+"

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const currentNumber = Math.round(target * progress)

      element.textContent = currentNumber + suffix

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)
  }

  // Call the function on page load and scroll
  window.addEventListener("scroll", handleScrollAnimation)
  window.addEventListener("load", handleScrollAnimation)

  // Initialize about section animations
  const aboutImageInit = document.querySelector(".about-image-container")
  const aboutContentInit = document.querySelector(".about-content")

  if (aboutImageInit) {
    aboutImageInit.style.opacity = "0"
    aboutImageInit.style.transform = "translateY(30px) scale(0.95)"
    aboutImageInit.style.transition = "all 1s ease"
  }

  if (aboutContentInit) {
    aboutContentInit.style.opacity = "0"
    aboutContentInit.style.transform = "translateY(30px)"
    aboutContentInit.style.transition = "all 1s ease"
  }

  // Call handleScrollAnimation on page load
  setTimeout(() => {
    handleScrollAnimation()
  }, 300)
})


document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with animation classes
  const scrollElements = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right, .scale-in")

  // Determine if an element is in view
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  }

  // Determine if an element is out of view
  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top
    return elementTop > (window.innerHeight || document.documentElement.clientHeight)
  }

  // Add active class to element
  const displayScrollElement = (element) => {
    element.classList.add("active")
  }

  // Remove active class from element
  const hideScrollElement = (element) => {
    element.classList.remove("active")
  }

  // Handle scroll animation for all elements
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el)
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }

  // Add scroll event listener
  window.addEventListener("scroll", () => {
    handleScrollAnimation()
  })

  // Initialize on page load
  handleScrollAnimation()

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
})
