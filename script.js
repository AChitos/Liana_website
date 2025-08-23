// Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Sample data
let events = [
    {
        id: 1,
        title: "Healing Through Movement Workshop",
        date: "2024-02-15",
        time: "14:00",
        location: "Utrecht Community Center",
        price: 45,
        spots: 12,
        booked: 3,
        description: "Join us for an introductory workshop exploring the fundamentals of dance therapy. This session will combine gentle movement exercises with mindfulness techniques to promote emotional well-being and self-expression."
    },
    {
        id: 2,
        title: "Trauma Recovery Group Session",
        date: "2024-02-22",
        time: "18:30",
        location: "Private Practice, Utrecht",
        price: 35,
        spots: 8,
        booked: 5,
        description: "A specialized group session designed for individuals working through trauma. Using body-based therapeutic approaches, we'll explore safe movement practices that support healing and recovery."
    },
    {
        id: 3,
        title: "Monthly Dance Therapy Circle",
        date: "2024-03-01",
        time: "10:00",
        location: "Park Pavilion, Utrecht",
        price: 25,
        spots: 15,
        booked: 7,
        description: "Our monthly community circle brings together individuals from all backgrounds to experience the joy and healing power of collective movement. No experience necessary!"
    },
];

let blogs = [
    {
        id: 1,
        title: "The Science Behind Dance Therapy",
        author: "Dr. Liana",
        date: "2024-01-15",
        content: "Dance therapy, also known as dance movement therapy (DMT), is a psychotherapeutic use of movement and dance to support intellectual, emotional, and motor functions of the body. Research shows that dance therapy can significantly reduce symptoms of depression and anxiety while improving overall quality of life. The practice integrates physical, emotional, cognitive, and social aspects of an individual, promoting holistic healing. Studies have demonstrated that rhythmic movement activates the brain's reward system, releasing endorphins and promoting neuroplasticity. This makes dance therapy particularly effective for trauma recovery, as it allows individuals to process experiences through the body when words may not be sufficient.",
        tags: ["research", "therapy", "mental health", "neuroscience"]
    },
    {
        id: 2,
        title: "Starting Your Healing Journey: What to Expect",
        author: "Dr. Liana",
        date: "2024-01-20",
        content: "Beginning therapy can feel overwhelming, especially when it involves movement and expression. Many clients ask what to expect in their first dance therapy session. The answer is simple: there's no wrong way to move. Our sessions begin with a gentle check-in, allowing you to share how you're feeling in the moment. We then explore movement that feels authentic to your current emotional state. Whether it's gentle swaying, structured exercises, or free-form expression, every movement is valid and therapeutic. The goal isn't performance – it's connection. Connection to your body, your emotions, and ultimately, to your path of healing.",
        tags: ["getting started", "therapy process", "expectations", "healing"]
    }
];

// Current event and blog IDs for auto-increment
let currentEventId = events.length + 1;
let currentBlogId = blogs.length + 1;

// Load events on page load
document.addEventListener('DOMContentLoaded', () => {
    loadLatestEvents();
    loadLatestBlogs();
    setupFormHandlers();
});

// Events functionality
function loadEvents() {
    const container = document.getElementById('events-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (events.length === 0) {
        container.innerHTML = '<p class="no-content">No events scheduled yet. Check back soon!</p>';
        return;
    }
    
    events.forEach(event => {
        const eventCard = createEventCard(event);
        container.appendChild(eventCard);
    });
}

// Load only the 3 latest events for the main page
function loadLatestEvents() {
    const container = document.getElementById('events-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (events.length === 0) {
        container.innerHTML = '<p class="no-content">No events scheduled yet. Check back soon!</p>';
        return;
    }
    
    // Sort events by date and take only the 3 latest
    const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    const latestEvents = sortedEvents.slice(0, 3);
    
    latestEvents.forEach(event => {
        const eventCard = createEventCard(event);
        container.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card fade-in-up';
    card.onclick = () => openEventModal(event);
    
    const availableSpots = event.spots - event.booked;
    const isFullyBooked = availableSpots <= 0;
    
    card.innerHTML = `
        <div class="event-header">
            <div class="event-date">${formatDate(event.date)} at ${event.time}</div>
            <div class="event-title">${event.title}</div>
        </div>
        <div class="event-body">
            <div class="event-info">
                <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                <span><i class="fas fa-euro-sign"></i> €${event.price}</span>
            </div>
            <div class="event-info">
                <span><i class="fas fa-users"></i> ${availableSpots} spots left</span>
                <span class="${isFullyBooked ? 'text-danger' : 'text-success'}">${isFullyBooked ? 'Fully Booked' : 'Available'}</span>
            </div>
            <div class="event-description">
                ${event.description.substring(0, 150)}...
            </div>
            <div class="event-actions">
                <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); openEventModal(event)">
                    <i class="fas fa-info-circle"></i> Details
                </button>
                <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); openBookingModal(event)" ${isFullyBooked ? 'disabled' : ''}>
                    <i class="fas fa-calendar-plus"></i> ${isFullyBooked ? 'Fully Booked' : 'Book Now'}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function openEventModal(event) {
    const modal = document.getElementById('event-modal');
    const title = document.getElementById('event-modal-title');
    const body = document.getElementById('event-modal-body');
    
    title.textContent = event.title;
    
    const availableSpots = event.spots - event.booked;
    const isFullyBooked = availableSpots <= 0;
    
    body.innerHTML = `
        <div class="event-details">
            <div class="detail-item">
                <strong><i class="fas fa-calendar"></i> Date & Time:</strong>
                <span>${formatDate(event.date)} at ${event.time}</span>
            </div>
            <div class="detail-item">
                <strong><i class="fas fa-map-marker-alt"></i> Location:</strong>
                <span>${event.location}</span>
            </div>
            <div class="detail-item">
                <strong><i class="fas fa-euro-sign"></i> Price:</strong>
                <span>€${event.price}</span>
            </div>
            <div class="detail-item">
                <strong><i class="fas fa-users"></i> Availability:</strong>
                <span>${availableSpots} of ${event.spots} spots available</span>
            </div>
            <div class="detail-description">
                <strong>Description:</strong>
                <p>${event.description}</p>
            </div>
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="openBookingModal(event); closeModal('event-modal')" ${isFullyBooked ? 'disabled' : ''}>
                    <i class="fas fa-calendar-plus"></i> ${isFullyBooked ? 'Fully Booked' : 'Book This Event'}
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Blog functionality
function loadBlogs() {
    const container = document.getElementById('blog-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (blogs.length === 0) {
        container.innerHTML = '<p class="no-content">No articles published yet. Check back soon for valuable insights!</p>';
        return;
    }
    
    blogs.forEach(blog => {
        const blogCard = createBlogCard(blog);
        container.appendChild(blogCard);
    });
}

// Load only the 3 latest blog posts for the main page
function loadLatestBlogs() {
    const container = document.getElementById('blog-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (blogs.length === 0) {
        container.innerHTML = '<p class="no-content">No articles published yet. Check back soon for valuable insights!</p>';
        return;
    }
    
    // Sort blogs by date and take only the 3 latest
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestBlogs = sortedBlogs.slice(0, 3);
    
    latestBlogs.forEach(blog => {
        const blogCard = createBlogCard(blog);
        container.appendChild(blogCard);
    });
}

function createBlogCard(blog) {
    const card = document.createElement('div');
    card.className = 'blog-card fade-in-up';
    
    const excerpt = blog.content.length > 200 ? blog.content.substring(0, 200) + '...' : blog.content;
    
    card.innerHTML = `
        <div class="blog-header">
            <div class="blog-meta">
                By ${blog.author} • ${formatDate(blog.date)}
            </div>
            <h3 class="blog-title">${blog.title}</h3>
            <div class="blog-excerpt">${excerpt}</div>
        </div>
        <div class="blog-tags">
            ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    card.onclick = () => openBlogModal(blog);
    
    return card;
}

function openBlogModal(blog) {
    const modal = document.getElementById('event-modal'); // Reusing event modal for blog details
    const title = document.getElementById('event-modal-title');
    const body = document.getElementById('event-modal-body');
    
    title.textContent = blog.title;
    
    body.innerHTML = `
        <div class="blog-details">
            <div class="blog-meta-full">
                <span><i class="fas fa-user"></i> ${blog.author}</span>
                <span><i class="fas fa-calendar"></i> ${formatDate(blog.date)}</span>
            </div>
            <div class="blog-content-full">
                ${blog.content.replace(/\n/g, '</p><p>')}
            </div>
            <div class="blog-tags-full">
                <strong>Tags:</strong>
                ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Booking functionality
function openBookingModal(event) {
    const modal = document.getElementById('booking-modal');
    const eventInfo = document.getElementById('booking-event-info');
    
    eventInfo.innerHTML = `
        <div class="booking-event-details">
            <h3>${event.title}</h3>
            <p><i class="fas fa-calendar"></i> ${formatDate(event.date)} at ${event.time}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <p><i class="fas fa-euro-sign"></i> €${event.price}</p>
        </div>
    `;
    
    // Store event ID for booking
    document.getElementById('booking-form').dataset.eventId = event.id;
    
    modal.style.display = 'block';
}

// Modal functionality
function openAddEventModal() {
    document.getElementById('add-event-modal').style.display = 'block';
}

function openAddBlogModal() {
    document.getElementById('add-blog-modal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    
    // Clear forms when closing
    const forms = document.querySelectorAll(`#${modalId} form`);
    forms.forEach(form => form.reset());
}

// Close modals when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Form handlers
function setupFormHandlers() {
    // Add event form
    const addEventForm = document.getElementById('add-event-form');
    if (addEventForm) {
        addEventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newEvent = {
                id: currentEventId++,
                title: document.getElementById('event-title').value,
                date: document.getElementById('event-date').value,
                time: document.getElementById('event-time').value,
                location: document.getElementById('event-location').value,
                price: parseFloat(document.getElementById('event-price').value) || 0,
                spots: parseInt(document.getElementById('event-spots').value),
                booked: 0,
                description: document.getElementById('event-description').value
            };
            
            events.push(newEvent);
            loadEvents();
            closeModal('add-event-modal');
            
            // Show success message
            showNotification('Event added successfully!', 'success');
        });
    }
    
    // Add blog form
    const addBlogForm = document.getElementById('add-blog-form');
    if (addBlogForm) {
        addBlogForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const tags = document.getElementById('blog-tags').value
                .split(',')
                .map(tag => tag.trim())
                .filter(tag => tag);
            
            const newBlog = {
                id: currentBlogId++,
                title: document.getElementById('blog-title').value,
                author: document.getElementById('blog-author').value,
                date: new Date().toISOString().split('T')[0],
                content: document.getElementById('blog-content').value,
                tags: tags
            };
            
            blogs.unshift(newBlog); // Add to beginning of array
            loadBlogs();
            closeModal('add-blog-modal');
            
            // Show success message
            showNotification('Article published successfully!', 'success');
        });
    }
    
    // Booking form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const eventId = parseInt(this.dataset.eventId);
            const event = events.find(e => e.id === eventId);
            
            if (event && event.booked < event.spots) {
                event.booked++;
                loadEvents();
                closeModal('booking-modal');
                
                // Show success message
                showNotification('Booking confirmed! You will receive a confirmation email shortly.', 'success');
            } else {
                showNotification('Sorry, this event is fully booked.', 'error');
            }
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            showNotification('Message sent successfully! We will get back to you soon.', 'success');
            this.reset();
        });
    }
}

// Utility functions
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                gap: 0.5rem;
                z-index: 3000;
                min-width: 300px;
                animation: slideInRight 0.3s ease;
            }
            
            .notification-success {
                border-left: 4px solid #4caf50;
                color: #2e7d32;
            }
            
            .notification-error {
                border-left: 4px solid #f44336;
                color: #c62828;
            }
            
            .notification-info {
                border-left: 4px solid #2196f3;
                color: #1565c0;
            }
            
            .notification-close {
                background: none;
                border: none;
                cursor: pointer;
                margin-left: auto;
                color: #666;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect with smooth hide/show
let lastScrollTop = 0;
let isNavbarVisible = true;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Change background on scroll
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
    }
    
    // Hide/show navbar based on scroll direction with threshold
    if (scrollTop > lastScrollTop && scrollTop > 150 && isNavbarVisible) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.opacity = '0';
        isNavbarVisible = false;
    } else if (scrollTop < lastScrollTop && !isNavbarVisible) {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
        isNavbarVisible = true;
    }
    
    // Always show navbar at the top of the page
    if (scrollTop <= 100) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
        isNavbarVisible = true;
    }
    
    lastScrollTop = scrollTop;
});

// Show navbar when hovering near the top of the page
document.addEventListener('mouseenter', (e) => {
    if (e.clientY <= 80 && !isNavbarVisible) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
        isNavbarVisible = true;
    }
});
