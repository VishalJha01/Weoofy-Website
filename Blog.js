document.addEventListener('DOMContentLoaded', function() {
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
            category: "Climate Change"
        },
        {
            id: 2,
            title: "Ocean Plastic Crisis: Innovative Solutions to Combat Marine Pollution",
            excerpt: "Discover groundbreaking technologies and initiatives aimed at reducing plastic waste in our oceans.",
            image: "oce.jpg",
            date: "January 10, 2024",
            author: "Mark Johnson",
            authorImage: "https://source.unsplash.com/100x100/?environmentalist,man",
            category: "Ocean Conservation"
        },
        {
            id: 3,
            title: "The Hidden Cost of Fast Fashion: Environmental Impact and Sustainable Alternatives",
            excerpt: "Uncover the environmental toll of fast fashion and learn about eco-friendly clothing options.",
            image: "re.jpg",
            date: "January 5, 2024",
            author: "Sarah Thompson",
            authorImage: "https://source.unsplash.com/100x100/?fashion-designer,woman",
            category: "Sustainable Living"
        },
        {
            id: 4,
            title: "The Future of Sustainable Living: Trends to Watch in 2025",
            excerpt: "Discover the innovative eco-friendly technologies and practices that will shape our sustainable future.",
            image: "Breathe.jpeg",
            date: "January 20, 2024",
            author: "James Wilson",
            authorImage: "https://source.unsplash.com/100x100/?professor,man",
            category: "Sustainable Living"
        },
        {
            id: 5,
            title: "Zero Waste Living: Simple Steps to Reduce Your Environmental Footprint",
            excerpt: "Learn practical tips for minimizing waste and embracing a more sustainable lifestyle.",
            image: "https://source.unsplash.com/800x600/?zero-waste",
            date: "December 28, 2023",
            author: "Jessica Miller",
            authorImage: "https://source.unsplash.com/100x100/?environmentalist,woman",
            category: "Zero Waste"
        },
        {
            id: 6,
            title: "Renewable Energy Revolution: How Clean Power is Transforming Our World",
            excerpt: "Explore the rapid growth of renewable energy sources and their impact on reducing carbon emissions.",
            image: "https://source.unsplash.com/800x600/?solar-energy",
            date: "December 20, 2023",
            author: "David Wilson",
            authorImage: "https://source.unsplash.com/100x100/?engineer,man",
            category: "Climate Change"
        }
    ];

    // Populate blog posts
    const blogPostsContainer = document.getElementById('blog-posts');
    
    function displayPosts(posts) {
        blogPostsContainer.innerHTML = '';
        
        if (posts.length === 0) {
            blogPostsContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                    <h3>No posts found</h3>
                    <p class="text-muted">No blog posts match your search criteria.</p>
                </div>
            `;
            return;
        }
        
        posts.forEach(post => {
            const blogPost = document.createElement('div');
            blogPost.className = 'col-md-6 col-lg-4';
            blogPost.innerHTML = `
                <div class="blog-card h-100">
                    <div class="blog-card-img-container">
                        <img src="${post.image}" class="blog-card-img" alt="${post.title}">
                        <span class="blog-category-tag">${post.category}</span>
                    </div>
                    <div class="blog-card-body">
                        <h5 class="blog-card-title">${post.title}</h5>
                        <p class="blog-card-text">${post.excerpt}</p>
                        <div class="blog-card-meta">
                            <div class="blog-author">
                                <img src="${post.authorImage}" alt="${post.author}" class="blog-author-img">
                                <span>${post.author}</span>
                            </div>
                            <span>${post.date}</span>
                        </div>
                        <a href="blog-post.html?id=${post.id}" class="btn btn-outline-success w-100">Read More</a>
                    </div>
                </div>
            `;
            blogPostsContainer.appendChild(blogPost);
        });
    }

    // Initial display of all posts
    displayPosts(blogPosts);

    // Category filter functionality
    const categoryButtons = document.querySelectorAll('.blog-category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get selected category
            const category = this.textContent;
            
            // Filter blog posts
            if (category === 'All') {
                displayPosts(blogPosts);
            } else {
                const filteredPosts = blogPosts.filter(post => post.category === category);
                displayPosts(filteredPosts);
            }
        });
    });

    // Search functionality
    const searchForms = document.querySelectorAll('.blog-search form, .search-form');
    searchForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="search"]');
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                displayPosts(blogPosts);
                return;
            }
            
            const filteredPosts = blogPosts.filter(post => 
                post.title.toLowerCase().includes(searchTerm) || 
                post.excerpt.toLowerCase().includes(searchTerm) || 
                post.category.toLowerCase().includes(searchTerm) ||
                post.author.toLowerCase().includes(searchTerm)
            );
            
            displayPosts(filteredPosts);
            
            // Reset category buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            categoryButtons[0].classList.add('active');
            
            // Clear search input
            searchInput.value = '';
        });
    });

    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('#newsletter-form, #newsletter-form-main');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Create and show in-page notification
            const notification = document.createElement("div");
            notification.className = "position-fixed bottom-0 end-0 p-3";
            notification.style.zIndex = "11";
            notification.innerHTML = `
                <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header bg-success text-white">
                        <i class="fas fa-check-circle me-2"></i>
                        <strong class="me-auto">Thank You!</strong>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body bg-dark text-white">
                        You've been subscribed to our newsletter.
                    </div>
                </div>
            `;
            document.body.appendChild(notification);
            
            // Hide and remove notification after 3 seconds
            setTimeout(() => {
                notification.remove();
            }, 3000);
            
            form.reset();
        });
    });

    // Update cart count
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    // Pagination functionality
    const paginationLinks = document.querySelectorAll('.pagination .page-link');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would load different pages of blog posts
            // For now, we'll just scroll to the top of the blog posts section
            const blogSection = document.querySelector('#blog-posts');
            blogSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Featured post click
    const featuredPostLink = document.querySelector('.featured-post a');
    if (featuredPostLink) {
        featuredPostLink.addEventListener('click', function(e) {
            // This is already handled by the href attribute
            // Just for demonstration of additional functionality
            console.log('Featured post clicked');
        });
    }
});