document.addEventListener("DOMContentLoaded", () => {
  // Get cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const orderSummary = document.getElementById("order-summary")
  const orderSubtotal = document.getElementById("order-subtotal")
  const orderShipping = document.getElementById("order-shipping")
  const orderTax = document.getElementById("order-tax")
  const orderTotal = document.getElementById("order-total")

  // Display order summary
  function displayOrderSummary() {
    orderSummary.innerHTML = ""
    let subtotal = 0

    if (cart.length === 0) {
      orderSummary.innerHTML = `<div class="text-center py-4">Your cart is empty</div>`
      window.location.href = "index.html"
      return
    }

    cart.forEach((item) => {
      const itemElement = document.createElement("div")
      itemElement.className = "summary-item"
      itemElement.innerHTML = `
        <div class="d-flex align-items-center">
          <img src="${item.image}" alt="${item.name}" class="img-fluid rounded me-3" style="width: 50px; height: 50px; object-fit: cover;">
          <div>
            <h6 class="mb-0">${item.name}</h6>
            <small class="text-muted">Qty: ${item.quantity}</small>
          </div>
        </div>
        <span>₹${(item.price * item.quantity).toFixed(2)}</span>
      `
      orderSummary.appendChild(itemElement)
      subtotal += item.price * item.quantity
    })

    const shipping = 50 // Fixed shipping cost
    const tax = subtotal * 0.05 // 5% tax
    const total = subtotal + shipping + tax

    orderSubtotal.textContent = `₹${subtotal.toFixed(2)}`
    orderShipping.textContent = `₹${shipping.toFixed(2)}`
    orderTax.textContent = `₹${tax.toFixed(2)}`
    orderTotal.textContent = `₹${total.toFixed(2)}`
  }

  displayOrderSummary()

  // Handle payment method selection
  const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]')
  const creditCardFields = document.getElementById("creditCardFields")
  const upiFields = document.getElementById("upiFields")

  paymentMethods.forEach((method) => {
    method.addEventListener("change", function () {
      // Hide all payment fields
      creditCardFields.classList.add("d-none")
      upiFields.classList.add("d-none")

      // Show the selected payment fields
      if (this.value === "creditCard") {
        creditCardFields.classList.remove("d-none")
      } else if (this.value === "upi") {
        upiFields.classList.remove("d-none")
      }
    })
  })

  // Form validation and submission
  const checkoutForm = document.getElementById("checkout-form")
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Basic form validation
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const address = document.getElementById("address").value
    const city = document.getElementById("city").value
    const state = document.getElementById("state").value
    const zipcode = document.getElementById("zipcode").value

    if (!firstName || !lastName || !email || !phone || !address || !city || !state || !zipcode) {
      alert("Please fill in all required fields")
      return
    }

    // Payment method validation
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value

    if (selectedPaymentMethod === "creditCard") {
      const cardNumber = document.getElementById("cardNumber").value
      const expiryDate = document.getElementById("expiryDate").value
      const cvv = document.getElementById("cvv").value

      if (!cardNumber || !expiryDate || !cvv) {
        alert("Please fill in all credit card details")
        return
      }
    } else if (selectedPaymentMethod === "upi") {
      const upiId = document.getElementById("upiId").value

      if (!upiId) {
        alert("Please enter your UPI ID")
        return
      }
    }

    // Simulate order processing
    const orderProcessingModal = document.createElement("div")
    orderProcessingModal.className = "modal fade"
    orderProcessingModal.id = "orderProcessingModal"
    orderProcessingModal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center p-5">
            <div class="spinner-border text-success mb-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <h4>Processing Your Order</h4>
            <p>Please wait while we process your payment...</p>
          </div>
        </div>
      </div>
    `
    document.body.appendChild(orderProcessingModal)

    const processingModal = new bootstrap.Modal(document.getElementById("orderProcessingModal"))
    processingModal.show()

    // Simulate processing delay
    setTimeout(() => {
      processingModal.hide()

      // Clear cart after successful order
      localStorage.removeItem("cart")

      // Show success message
      const orderSuccessModal = document.createElement("div")
      orderSuccessModal.className = "modal fade"
      orderSuccessModal.id = "orderSuccessModal"
      orderSuccessModal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body text-center p-5">
              <div class="mb-4">
                <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
              </div>
              <h4>Order Placed Successfully!</h4>
              <p>Thank you for your purchase. Your order #ECO-${Math.floor(100000 + Math.random() * 900000)} has been placed successfully.</p>
              <p>A confirmation email has been sent to ${email}.</p>
              <a href="index.html" class="btn btn-success mt-3">Continue Shopping</a>
            </div>
          </div>
        </div>
      `
      document.body.appendChild(orderSuccessModal)

      const successModal = new bootstrap.Modal(document.getElementById("orderSuccessModal"))
      successModal.show()
    }, 2000)
  })

  // Newsletter form submission
  const newsletterForm = document.getElementById("newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for subscribing to our newsletter!")
      newsletterForm.reset()
    })
  }
})

