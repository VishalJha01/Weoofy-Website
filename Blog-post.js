document.addEventListener('DOMContentLoaded', function() {
    // Blog post data
    const blogPosts = [
        {
            id: 1,
            title: "The Alarming Rise of Global Temperatures: What You Need to Know",
            content: `
                <p>Climate change is one of the most pressing issues of our time, with global temperatures rising at an unprecedented rate. This article explores the latest data on global warming and its far-reaching impacts on our planet's ecosystems.</p>
                
                <h2>The Current State of Global Warming</h2>
                <p>According to NASA, the average global temperature has increased by about 1.1°C (2°F) since the late 19th century. The majority of this warming has occurred in the past 40 years, with the seven most recent years being the warmest on record.</p>
                
                <h2>Impacts on Ecosystems</h2>
                <p>The effects of global warming are already visible in many ecosystems around the world:</p>
                <ul>
                    <li>Arctic sea ice is declining at a rate of 13% per decade</li>
                    <li>Coral reefs are experiencing mass bleaching events</li>
                    <li>Extreme weather events, such as hurricanes and heatwaves, are becoming more frequent and intense</li>
                    <li>Many plant and animal species are facing extinction due to habitat loss and changing climate conditions</li>
                </ul>
                
                <h2>What Can We Do?</h2>
                <p>While the situation is dire, there are steps we can take to mitigate the effects of global warming:</p>
                <ol>
                    <li>Reduce our carbon footprint by using renewable energy sources and improving energy efficiency</li>
                    <li>Support policies and initiatives that aim to reduce greenhouse gas emissions</li>
                    <li>Protect and restore natural habitats, such as forests and wetlands, which act as carbon sinks</li>
                    <li>Make sustainable choices in our daily lives, such as using public transportation or eating a plant-based diet</li>
                </ol>
                
                <p>By taking action now, we can work towards a more sustainable future and protect our planet for generations to come. Every individual effort counts, and together, we can make a significant impact in combating climate change.</p>
                
                <h2>The Role of International Cooperation</h2>
                <p>Addressing climate change requires global cooperation. International agreements like the Paris Climate Accord represent important steps toward coordinated action. Countries around the world are setting ambitious targets to reduce emissions and transition to renewable energy sources.</p>
                
                <p>However, more needs to be done. Governments, businesses, and individuals all have important roles to play in this global challenge. By working together and holding each other accountable, we can create meaningful change.</p>
                
                <h2>Conclusion</h2>
                <p>The rising global temperatures present one of the greatest challenges of our time. While the data is concerning, there is still hope. Through collective action, innovative solutions, and sustainable practices, we can mitigate the worst effects of climate change and build a healthier planet for future generations.</p>
            `,
            image: "pp.jpg",
            date: "January 15, 2024",
            author: "Dr. Emily Chen",
            authorImage: "12.jpeg",
            category: "Climate Change"
        },
        {
            id: 2,
            title: "Ocean Plastic Crisis: Innovative Solutions to Combat Marine Pollution",
            content: `
                <p>The world's oceans are facing an unprecedented crisis due to plastic pollution. Every year, millions of tons of plastic waste enter our oceans, threatening marine life and ecosystems. This article explores the innovative solutions being developed to combat this growing problem.</p>
                
                <h2>The Scale of the Problem</h2>
                <p>According to recent studies, approximately 8 million metric tons of plastic enter our oceans annually. If current trends continue, by 2050, there could be more plastic than fish in the ocean by weight. Plastic pollution affects marine life through entanglement, ingestion, and habitat destruction.</p>
                
                <h2>Innovative Cleanup Technologies</h2>
                <p>Several groundbreaking technologies are being developed to address ocean plastic pollution:</p>
                <ul>
                    <li>Ocean Cleanup Array: A passive system using ocean currents to collect plastic</li>
                    <li>Seabin Project: Floating trash bins that can capture microplastics as small as 2mm</li>
                    <li>Mr. Trash Wheel: A water wheel-powered trash interceptor that prevents river plastic from reaching the ocean</li>
                    <li>Plastic-eating enzymes: Engineered bacteria that can break down plastic into biodegradable components</li>
                </ul>
                
                <h2>Prevention Strategies</h2>
                <p>While cleanup efforts are essential, preventing plastic from entering the oceans in the first place is equally important:</p>
                <ol>
                    <li>Improved waste management systems in coastal communities</li>
                    <li>Bans on single-use plastics and microbeads</li>
                    <li>Extended producer responsibility programs</li>
                    <li>Development of truly biodegradable alternatives to conventional plastics</li>
                </ol>
                
                <h2>What You Can Do</h2>
                <p>Individual actions can make a significant difference in reducing ocean plastic pollution:</p>
                <ul>
                    <li>Reduce your use of single-use plastics</li>
                    <li>Properly dispose of plastic waste and participate in recycling programs</li>
                    <li>Support organizations working on ocean cleanup and conservation</li>
                    <li>Choose products with minimal or plastic-free packaging</li>
                    <li>Participate in beach and river cleanups in your community</li>
                </ul>
                
                <h2>Conclusion</h2>
                <p>The ocean plastic crisis requires a multi-faceted approach involving technological innovation, policy changes, and individual action. By combining cleanup efforts with prevention strategies, we can work towards healthier oceans for future generations. Every piece of plastic we prevent from entering the ocean is a step in the right direction.</p>
            `,
            image: "oce.jpg",
            date: "January 10, 2024",
            author: "Mark Johnson",
            authorImage: "https://source.unsplash.com/100x100/?environmentalist,man",
            category: "Ocean Conservation"
        },
        {
            id: 3,
            title: "The Hidden Cost of Fast Fashion: Environmental Impact and Sustainable Alternatives",
            content: `
                <p>The fashion industry is one of the largest polluters in the world, with fast fashion contributing significantly to environmental degradation. This article examines the environmental impact of fast fashion and explores sustainable alternatives for conscious consumers.</p>
                
                <h2>The Environmental Footprint of Fast Fashion</h2>
                <p>Fast fashion has a substantial environmental impact across its entire supply chain:</p>
                <ul>
                    <li>Water pollution: Textile dyeing is the second largest polluter of water globally</li>
                    <li>Carbon emissions: The fashion industry produces 10% of global carbon emissions</li>
                    <li>Waste generation: 85% of textiles end up in landfills each year</li>
                    <li>Microplastic pollution: Synthetic fabrics release microplastics into waterways when washed</li>
                </ul>
                
                <h2>The Social Cost</h2>
                <p>Beyond environmental concerns, fast fashion often involves ethical issues:</p>
                <ul>
                    <li>Poor working conditions in manufacturing facilities</li>
                    <li>Low wages that don't meet basic needs</li>
                    <li>Child labor in some supply chains</li>
                    <li>Health hazards from toxic chemicals used in production</li>
                </ul>
                
                <h2>Sustainable Alternatives</h2>
                <p>Fortunately, there are growing alternatives to fast fashion:</p>
                <ol>
                    <li>Slow fashion: Focusing on quality, longevity, and timeless design</li>
                    <li>Secondhand and vintage shopping: Extending the life of existing garments</li>
                    <li>Clothing rental services: Reducing the need for ownership</li>
                    <li>Sustainable brands: Companies committed to ethical and environmental practices</li>
                    <li>DIY and upcycling: Creating new items from existing materials</li>
                </ol>
                
                <h2>Sustainable Materials</h2>
                <p>When purchasing new clothing, consider these more sustainable materials:</p>
                <ul>
                    <li>Organic cotton: Grown without synthetic pesticides or fertilizers</li>
                    <li>Hemp: Requires minimal water and no pesticides</li>
                    <li>Linen: Made from flax, which can grow in poor soil with little water</li>
                    <li>Recycled fabrics: Made from post-consumer or post-industrial waste</li>
                    <li>Tencel/Lyocell: Produced from sustainably harvested wood pulp in a closed-loop process</li>
                </ul>
                
                <h2>Building a Sustainable Wardrobe</h2>
                <p>Transitioning to a more sustainable approach to fashion doesn't mean throwing everything away and starting over. Instead, consider these steps:</p>
                <ol>
                    <li>Take inventory of what you already own</li>
                    <li>Repair and maintain your existing clothing</li>
                    <li>When you need something new, research sustainable options</li>
                    <li>Invest in quality pieces that will last</li>
                    <li>Consider the "30 wears test" before purchasing</li>
                </ol>
                
                <h2>Conclusion</h2>
                <p>By making more conscious choices about our clothing, we can reduce the environmental impact of fashion while still expressing our personal style. The shift toward sustainable fashion is not just a trend but a necessary evolution of the industry for the health of our planet.</p>
            `,
            image: "re.jpg",
            date: "January 5, 2024",
            author: "Sarah Thompson",
            authorImage: "https://source.unsplash.com/100x100/?fashion-designer,woman",
            category: "Sustainable Living"
        },
        {
            id: 4,
            title: "The Future of Sustainable Living: Trends to Watch in 2025",
            content: `
                <p>As we move further into the 2020s, sustainable living is evolving from a niche lifestyle choice to a mainstream necessity. This article explores the emerging trends and innovations that will shape eco-friendly living in 2025 and beyond.</p>
                
                <h2>Smart Homes Becoming Eco-Homes</h2>
                <p>The integration of artificial intelligence and IoT (Internet of Things) technology is revolutionizing home energy management:</p>
                <ul>
                    <li>AI-powered energy management systems that learn your habits and optimize consumption</li>
                    <li>Smart appliances that run during off-peak hours to reduce grid strain</li>
                    <li>Home battery storage systems that integrate with renewable energy sources</li>
                    <li>Water recycling systems that can reduce household water consumption by up to 70%</li>
                </ul>
                
                <h2>Circular Economy Going Mainstream</h2>
                <p>The linear "take-make-dispose" model is being replaced by circular systems:</p>
                <ul>
                    <li>Product-as-a-service models replacing ownership in more categories</li>
                    <li>Modular design allowing for easy repair and component replacement</li>
                    <li>Blockchain technology enabling transparent tracking of materials through supply chains</li>
                    <li>Community repair cafés and tool libraries becoming common in urban areas</li>
                </ul>
                
                <h2>Regenerative Agriculture Revolution</h2>
                <p>Beyond sustainable farming, regenerative practices are gaining momentum:</p>
                <ul>
                    <li>Carbon farming becoming financially viable through improved carbon markets</li>
                    <li>Vertical and urban farming expanding in cities worldwide</li>
                    <li>Precision agriculture reducing resource use while increasing yields</li>
                    <li>Plant-based and lab-grown proteins becoming cost-competitive with conventional meat</li>
                </ul>
                
                <h2>Sustainable Transportation Ecosystem</h2>
                <p>The way we move is undergoing a profound transformation:</p>
                <ul>
                    <li>Electric vehicles reaching price parity with combustion engines</li>
                    <li>Mobility-as-a-service reducing the need for personal vehicle ownership</li>
                    <li>Hydrogen fuel becoming viable for heavy transport and shipping</li>
                    <li>Urban planning prioritizing walkability and micro-mobility</li>
                </ul>
                
                <h2>Eco-Conscious Communities</h2>
                <p>Community-level sustainability initiatives are creating resilient neighborhoods:</p>
                <ul>
                    <li>Community solar and microgrids providing local energy resilience</li>
                    <li>Neighborhood composting and food waste management systems</li>
                    <li>Shared resources reducing individual consumption</li>
                    <li>Green spaces designed for biodiversity and climate resilience</li>
                </ul>
                
                <h2>Conclusion</h2>
                <p>The future of sustainable living is not about sacrifice but about smarter, more connected, and more regenerative systems. By embracing these emerging trends, we can create a lifestyle that is not only environmentally responsible but also more resilient, healthier, and often more economical. The innovations of 2025 will set the stage for a truly sustainable future.</p>
            `,
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
            content: `
                <p>Zero waste living is a lifestyle approach that aims to minimize the amount of trash sent to landfills, incinerators, and the ocean. While achieving absolute zero waste is challenging in our current system, significant reductions are possible through mindful choices and habits.</p>
                
                <h2>Understanding Waste Hierarchy</h2>
                <p>The zero waste philosophy follows a hierarchy often referred to as the 5 Rs:</p>
                <ol>
                    <li><strong>Refuse</strong> what you don't need</li>
                    <li><strong>Reduce</strong> what you do need</li>
                    <li><strong>Reuse</strong> by repurposing or sharing</li>
                    <li><strong>Recycle</strong> what you cannot refuse, reduce, or reuse</li>
                    <li><strong>Rot</strong> (compost) the rest</li>
                </ol>
                
                <h2>Getting Started: Kitchen and Food</h2>
                <p>The kitchen is often the source of significant household waste. Here's how to reduce it:</p>
                <ul>
                    <li>Shop with reusable bags, produce bags, and containers</li>
                    <li>Buy in bulk to reduce packaging waste</li>
                    <li>Plan meals to reduce food waste</li>
                    <li>Compost food scraps</li>
                    <li>Replace disposable items with reusable alternatives (napkins, towels, food wraps)</li>
                </ul>
                
                <h2>Bathroom and Personal Care</h2>
                <p>The bathroom is another area where simple swaps can make a big difference:</p>
                <ul>
                    <li>Switch to bar soap, shampoo, and conditioner to eliminate plastic bottles</li>
                    <li>Use a safety razor instead of disposable razors</li>
                    <li>Try reusable cloth pads, menstrual cups, or period underwear</li>
                    <li>Choose bamboo toothbrushes and plastic-free dental floss</li>
                    <li>Make or buy plastic-free toiletries</li>
                </ul>
                
                <h2>Clothing and Textiles</h2>
                <p>Fast fashion contributes significantly to waste. Consider these alternatives:</p>
                <ul>
                    <li>Buy second-hand clothing when possible</li>
                    <li>Choose natural fibers that will biodegrade at end-of-life</li>
                    <li>Repair clothing instead of replacing it</li>
                    <li>Donate or repurpose textiles that can no longer be worn</li>
                    <li>Consider a capsule wardrobe to reduce consumption</li>
                </ul>
                
                <h2>Home and Office</h2>
                <p>Reduce waste in your living and working spaces:</p>
                <ul>
                    <li>Go paperless with bills and communications</li>
                    <li>Use rechargeable batteries</li>
                    <li>Repair appliances and electronics when possible</li>
                    <li>Choose second-hand or sustainable furniture</li>
                    <li>Reduce junk mail by unsubscribing from mailing lists</li>
                </ul>
                
                <h2>On the Go</h2>
                <p>Prepare a zero waste kit for when you're away from home:</p>
                <ul>
                    <li>Reusable water bottle</li>
                    <li>Travel mug for coffee or tea</li>
                    <li>Cloth napkin</li>
                    <li>Reusable utensils</li>
                    <li>Containers for takeout or leftovers</li>
                </ul>
                
                <h2>Conclusion</h2>
                <p>Zero waste living is a journey, not a destination. Start with small changes and build from there. Remember that the goal is progress, not perfection. By making conscious choices about consumption and waste, we can collectively make a significant positive impact on our environment.</p>
            `,
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
            content: `
                <p>The renewable energy revolution is transforming how we power our world. As climate change concerns grow and technology advances, clean energy sources are becoming increasingly viable alternatives to fossil fuels. This article explores the current state of renewable energy and its potential to reshape our future.</p>
                
                <h2>The Growth of Renewable Energy</h2>
                <p>Renewable energy capacity has grown exponentially in recent years:</p>
                <ul>
                    <li>Global renewable energy capacity has more than doubled in the past decade</li>
                    <li>Solar and wind power costs have fallen by approximately 90% and 70% respectively since 2009</li>
                    <li>Renewables accounted for 72% of all new power capacity additions worldwide in 2019</li>
                    <li>Many countries now regularly meet significant portions of their electricity demand from renewable sources</li>
                </ul>
                
                <h2>Solar Power: Harnessing the Sun</h2>
                <p>Solar energy has seen remarkable advancements:</p>
                <ul>
                    <li>Photovoltaic (PV) technology continues to improve in efficiency and decrease in cost</li>
                    <li>Innovative applications include solar windows, roads, and even fabrics</li>
                    <li>Community solar projects are making clean energy accessible to those who can't install their own systems</li>
                    <li>Solar-plus-storage solutions are addressing intermittency concerns</li>
                </ul>
                
                <h2>Wind Power: Capturing the Breeze</h2>
                <p>Wind energy has become a major player in the renewable sector:</p>
                <ul>
                    <li>Offshore wind farms are expanding rapidly, accessing stronger and more consistent winds</li>
                    <li>Turbine technology has evolved to capture energy even in low-wind conditions</li>
                    <li>Floating wind platforms are opening up deeper water locations</li>
                    <li>Small-scale wind solutions are being developed for urban environments</li>
                </ul>
                
                <h2>Beyond Solar and Wind</h2>
                <p>Other renewable technologies are making significant contributions:</p>
                <ul>
                    <li>Hydropower remains the largest renewable electricity source globally</li>
                    <li>Geothermal energy provides reliable baseload power in geologically active regions</li>
                    <li>Biomass and biogas convert organic waste into energy</li>
                    <li>Tidal and wave energy technologies are advancing to harness ocean power</li>
                    <li>Green hydrogen produced using renewable electricity is emerging as a versatile energy carrier</li>
                </ul>
                
                <h2>Overcoming Challenges</h2>
                <p>Despite progress, several challenges remain:</p>
                <ul>
                    <li>Energy storage solutions are needed to address intermittency</li>
                    <li>Grid infrastructure requires modernization to handle distributed generation</li>
                    <li>Policy and regulatory frameworks need updating in many regions</li>
                    <li>Just transition strategies must be implemented to support communities currently dependent on fossil fuel industries</li>
                </ul>
                
                <h2>The Path Forward</h2>
                <p>The renewable energy transition is accelerating, driven by:</p>
                <ul>
                    <li>Continued technological innovation reducing costs</li>
                    <li>Growing corporate commitments to renewable energy</li>
                    <li>Increasing climate awareness among consumers</li>
                    <li>Supportive policies in many regions</li>
                    <li>Investment shifting away from fossil fuels</li>
                </ul>
                
                <h2>Conclusion</h2>
                <p>The renewable energy revolution represents one of the most significant technological and economic shifts of our time. As clean energy continues to scale, it offers a path to mitigate climate change while creating new economic opportunities and improving energy access globally. The transition to a renewable-powered world is not just possible—it's already underway.
                </p>
            `,
            image: "https://source.unsplash.com/800x600/?solar-energy",
            date: "December 20, 2023",
            author: "David Wilson",
            authorImage: "https://source.unsplash.com/100x100/?engineer,man",
            category: "Climate Change"
        }
    ];

    // Get the blog post ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));

    // Find the blog post with the matching ID
    const post = blogPosts.find(post => post.id === postId);

    if (post) {
        const blogPostContainer = document.getElementById('blog-post');
        blogPostContainer.innerHTML = `
            <h1 class="blog-post-title">${post.title}</h1>
            <div class="blog-post-meta">
                <div class="blog-post-author">
                    <img src="${post.authorImage}" alt="${post.author}" class="blog-post-author-img">
                    <div class="blog-post-author-info">
                        <h6>${post.author}</h6>
                        <small>${post.date}</small>
                    </div>
                </div>
                <span class="blog-post-category">${post.category}</span>
            </div>
            <img src="${post.image}" alt="${post.title}" class="blog-post-image">
            <div class="blog-post-content">
                ${post.content}
            </div>
            <div class="blog-post-share">
                <h5 class="blog-post-share-title">Share this article</h5>
                <div class="blog-post-share-buttons">
                    <a href="#" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" title="Share on Pinterest"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#" title="Share via Email"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        `;
        
        // Update document title
        document.title = `${post.title} - WECOFY Blog`;
        
        // Populate related posts
        const relatedPostsContainer = document.getElementById('related-posts');
        if (relatedPostsContainer) {
            // Find posts in the same category, excluding the current post
            let relatedPosts = blogPosts.filter(p => p.category === post.category && p.id !== post.id);
            
            // If not enough related posts in the same category, add some from other categories
            if (relatedPosts.length < 3) {
                const otherPosts = blogPosts.filter(p => p.category !== post.category && p.id !== post.id);
                relatedPosts = [...relatedPosts, ...otherPosts].slice(0, 3);
            } else {
                relatedPosts = relatedPosts.slice(0, 3);
            }
            
            relatedPostsContainer.innerHTML = '';
            
            relatedPosts.forEach(relatedPost => {
                const postElement = document.createElement('div');
                postElement.className = 'col-md-4';
                postElement.innerHTML = `
                    <div class="blog-card h-100">
                        <div class="blog-card-img-container">
                            <img src="${relatedPost.image}" class="blog-card-img" alt="${relatedPost.title}">
                            <span class="blog-category-tag">${relatedPost.category}</span>
                        </div>
                        <div class="blog-card-body">
                            <h5 class="blog-card-title">${relatedPost.title}</h5>
                            <div class="blog-card-meta">
                                <div class="blog-author">
                                    <img src="${relatedPost.authorImage}" alt="${relatedPost.author}" class="blog-author-img">
                                    <span>${relatedPost.author}</span>
                                </div>
                                <span>${relatedPost.date}</span>
                            </div>
                            <a href="blog-post.html?id=${relatedPost.id}" class="btn btn-outline-success w-100">Read More</a>
                        </div>
                    </div>
                `;
                relatedPostsContainer.appendChild(postElement);
            });
        }
        
        // Update navigation links
        const prevPostLink = document.querySelector('.blog-post-nav-link:first-child');
        const nextPostLink = document.querySelector('.blog-post-nav-link:last-child');
        
        if (prevPostLink && nextPostLink) {
            // Find previous and next posts
            const currentIndex = blogPosts.findIndex(p => p.id === post.id);
            const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : blogPosts[blogPosts.length - 1];
            const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : blogPosts[0];
            
            // Update previous post link
            prevPostLink.href = `blog-post.html?id=${prevPost.id}`;
            prevPostLink.querySelector('.blog-post-nav-title').textContent = prevPost.title.length > 40 ? 
                prevPost.title.substring(0, 40) + '...' : prevPost.title;
            
            // Update next post link
            nextPostLink.href = `blog-post.html?id=${nextPost.id}`;
            nextPostLink.querySelector('.blog-post-nav-title').textContent = nextPost.title.length > 40 ? 
                nextPost.title.substring(0, 40) + '...' : nextPost.title;
        }
        
        // Update sidebar recent posts
        const recentPostsLinks = document.querySelectorAll('.recent-post h6 a');
        if (recentPostsLinks.length > 0) {
            // Get 3 most recent posts
            const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
            
            recentPostsLinks.forEach((link, index) => {
                if (recentPosts[index]) {
                    link.textContent = recentPosts[index].title.length > 40 ? 
                        recentPosts[index].title.substring(0, 40) + '...' : recentPosts[index].title;
                    link.href = `blog-post.html?id=${recentPosts[index].id}`;
                }
            });
        }
    } else {
        const blogPostContainer = document.getElementById('blog-post');
        blogPostContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-exclamation-circle fa-3x mb-3 text-muted"></i>
                <h2>Blog Post Not Found</h2>
                <p class="text-muted">Sorry, the requested blog post could not be found.</p>
                <a href="blog.html" class="btn btn-outline-success mt-3">Back to Blog</a>
            </div>
        `;
    }

    // Comment form submission
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
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
                        Your comment has been submitted for review.
                    </div>
                </div>
            `;
            document.body.appendChild(notification);
            
            // Hide and remove notification after 3 seconds
            setTimeout(() => {
                notification.remove();
            }, 3000);
            
            commentForm.reset();
        });
    }

    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('#newsletter-form, #newsletter-form-main, #sidebar-newsletter-form');
    newsletterForms.forEach(form => {
        if (form) {
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
        }
    });

    // Update cart count
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    // Category links in sidebar
    const categoryLinks = document.querySelectorAll('.list-group-item a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = `blog.html?category=${this.textContent.trim()}`;
        });
    });

    // Tag links
    const tagLinks = document.querySelectorAll('.badge.bg-light');
    tagLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = `blog.html?tag=${this.textContent.trim()}`;
        });
    });

    // Search form in sidebar
    const sidebarSearchForm = document.querySelector('.card .card-body form');
    if (sidebarSearchForm) {
        sidebarSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="search"]');
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm) {
                window.location.href = `blog.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }
});