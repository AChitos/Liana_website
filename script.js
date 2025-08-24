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

// Hero Section Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Book Consultation button - open booking modal
    const bookConsultationBtn = document.getElementById('book-consultation-btn');
    if (bookConsultationBtn) {
        console.log('Book Consultation button found and connected');
        bookConsultationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Book Consultation button clicked');
            const bookingModal = document.getElementById('booking-modal');
            if (bookingModal) {
                // Set modal title for general consultation
                const modalTitle = document.getElementById('booking-modal-title');
                if (modalTitle) {
                    modalTitle.textContent = 'Book Consultation';
                }
                
                // Clear any event-specific data
                const eventInfo = document.getElementById('booking-event-info');
                if (eventInfo) {
                    eventInfo.innerHTML = '';
                }
                
                // Remove event ID from form
                const bookingForm = document.getElementById('booking-form');
                if (bookingForm) {
                    delete bookingForm.dataset.eventId;
                }
                
                bookingModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
                console.log('Booking modal opened');
            } else {
                console.log('Booking modal not found');
            }
        });
    } else {
        console.log('Book Consultation button not found');
    }

    // View Events button - scroll to events section
    const viewEventsBtn = document.getElementById('view-events-btn');
    if (viewEventsBtn) {
        console.log('View Events button found and connected');
        viewEventsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View Events button clicked');
            const eventsSection = document.getElementById('events');
            if (eventsSection) {
                eventsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log('Scrolled to events section');
            } else {
                console.log('Events section not found');
            }
        });
    } else {
        console.log('View Events button not found');
    }
});

// Global functions for button functionality
function openBookingModal() {
    const bookingModal = document.getElementById('booking-modal');
    if (bookingModal) {
        // Set modal title for general consultation
        const modalTitle = document.getElementById('booking-modal-title');
        if (modalTitle) {
            modalTitle.textContent = 'Book Consultation';
        }
        
        // Clear any event-specific data
        const eventInfo = document.getElementById('booking-event-info');
        if (eventInfo) {
            eventInfo.innerHTML = '';
        }
        
        // Remove event ID from form
        const bookingForm = document.getElementById('booking-form');
        if (bookingForm) {
            delete bookingForm.dataset.eventId;
        }
        
        bookingModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        console.log('Booking modal opened via inline function');
    } else {
        console.log('Booking modal not found');
    }
}

function scrollToEvents() {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
        eventsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        console.log('Scrolled to events section via inline function');
    } else {
        console.log('Events section not found');
    }
}

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
        description: "Join us for an introductory workshop exploring the fundamentals of dance therapy. This session will combine gentle movement exercises with mindfulness techniques to promote emotional well-being and self-expression.",
        category: "workshop"
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
        description: "A specialized group session designed for individuals working through trauma. Using body-based therapeutic approaches, we'll explore safe movement practices that support healing and recovery.",
        category: "group"
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
        description: "Our monthly community circle brings together individuals from all backgrounds to experience the joy and healing power of collective movement. No experience necessary!",
        category: "group"
    },
    {
        id: 4,
        title: "Advanced Movement Therapy Intensive",
        date: "2024-03-08",
        time: "09:00",
        location: "Utrecht Dance Academy",
        price: 120,
        spots: 6,
        booked: 2,
        description: "A comprehensive 6-hour intensive workshop for experienced practitioners and therapists. Explore advanced techniques in movement therapy, body awareness, and therapeutic choreography.",
        category: "workshop"
    },
    {
        id: 5,
        title: "Individual Dance Therapy Sessions",
        date: "2024-03-10",
        time: "10:00",
        location: "Private Practice, Utrecht",
        price: 85,
        spots: 1,
        booked: 0,
        description: "One-on-one personalized dance therapy sessions tailored to your specific needs. Perfect for deep personal work and individual healing journeys.",
        category: "individual"
    },
    {
        id: 6,
        title: "Mindfulness & Movement for Stress Relief",
        date: "2024-03-15",
        time: "16:00",
        location: "Utrecht Wellness Center",
        price: 30,
        spots: 20,
        booked: 12,
        description: "Learn practical techniques for managing stress through gentle movement and mindfulness practices. Suitable for all levels and perfect for busy professionals.",
        category: "workshop"
    },
    {
        id: 7,
        title: "Teen Dance Therapy Group",
        date: "2024-03-20",
        time: "15:30",
        location: "Utrecht Youth Center",
        price: 25,
        spots: 12,
        booked: 8,
        description: "A supportive group specifically designed for teenagers exploring identity, emotions, and self-expression through movement. Safe space for emotional exploration.",
        category: "group"
    },
    {
        id: 8,
        title: "Professional Training: Dance Therapy Fundamentals",
        date: "2024-03-25",
        time: "09:00",
        location: "Utrecht University",
        price: 250,
        spots: 15,
        booked: 5,
        description: "Professional development course for healthcare workers, therapists, and educators. Learn the foundations of dance movement therapy for clinical practice.",
        category: "training"
    },
    {
        id: 9,
        title: "Elderly Movement & Memory Enhancement",
        date: "2024-03-30",
        time: "11:00",
        location: "Utrecht Senior Community Center",
        price: 20,
        spots: 18,
        booked: 10,
        description: "Gentle movement therapy designed specifically for seniors to enhance cognitive function, improve balance, and promote social connection through dance.",
        category: "group"
    },
    {
        id: 10,
        title: "Couples Dance Therapy Workshop",
        date: "2024-04-05",
        time: "14:00",
        location: "Private Practice, Utrecht",
        price: 75,
        spots: 8,
        booked: 3,
        description: "Strengthen your relationship through shared movement experiences. Learn to communicate, trust, and connect with your partner through dance therapy.",
        category: "workshop"
    }
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
    },
    {
        id: 3,
        title: "Understanding Trauma Through Body Awareness",
        author: "Dr. Liana",
        date: "2024-01-25",
        content: "Trauma affects not just the mind, but the entire body. Understanding how trauma manifests physically is crucial for effective healing. This article explores the somatic aspects of trauma and how dance therapy provides a safe pathway for processing and releasing stored trauma energy.",
        tags: ["trauma", "body awareness", "healing", "somatic therapy"]
    },
    {
        id: 4,
        title: "The Power of Group Healing in Dance Therapy",
        author: "Dr. Liana",
        date: "2024-01-30",
        content: "Group dance therapy offers unique benefits that individual sessions cannot provide. The collective energy, shared experiences, and mutual support create a powerful healing environment. This article explores the science behind group dynamics in therapeutic settings.",
        tags: ["group therapy", "community", "healing", "wellness"]
    },
    {
        id: 5,
        title: "Mindfulness in Movement: A Daily Practice",
        author: "Dr. Liana",
        date: "2024-02-05",
        content: "Incorporating mindfulness into daily movement can transform ordinary activities into therapeutic practices. Learn simple techniques for bringing awareness to your body throughout the day.",
        tags: ["mindfulness", "daily practice", "wellness", "movement"]
    },
    {
        id: 6,
        title: "Research Update: Dance Therapy and Neuroplasticity",
        author: "Dr. Liana",
        date: "2024-02-10",
        content: "Latest research findings on how dance therapy promotes neuroplasticity and brain health. This comprehensive review covers recent studies and their implications for clinical practice.",
        tags: ["research", "neuroscience", "neuroplasticity", "brain health"]
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

// Load only the 2 latest blog posts for the main page
function loadLatestBlogs() {
    const container = document.getElementById('blog-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (blogs.length === 0) {
        container.innerHTML = '<p class="no-content">No articles published yet. Check back soon for valuable insights!</p>';
        return;
    }
    
    // Sort blogs by date and take only the 2 latest
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestBlogs = sortedBlogs.slice(0, 2);
    
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
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
    
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
            // Restore body scroll when closing modal by clicking outside
            document.body.style.overflow = 'auto';
        }
    });
}

// Close modals with ESC key and restore scroll
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[style*="display: block"]');
        openModals.forEach(modal => {
            modal.style.display = 'none';
            // Restore body scroll when closing modal with ESC
            document.body.style.overflow = 'auto';
        });
    }
});

// Safety function to ensure body scroll is always restored
function ensureBodyScroll() {
    // Check if any modals are open
    const openModals = document.querySelectorAll('.modal[style*="display: block"]');
    if (openModals.length === 0) {
        // No modals are open, ensure body can scroll
        document.body.style.overflow = 'auto';
    }
}

// Add event listener to ensure scroll is restored when page becomes visible
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        ensureBodyScroll();
    }
});

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
            
            // Check if this is an event booking or general consultation
            const eventId = parseInt(this.dataset.eventId);
            
            if (eventId) {
                // Event booking
                const event = events.find(e => e.id === eventId);
                if (event && event.booked < event.spots) {
                    event.booked++;
                    loadEvents();
                    closeModal('booking-modal');
                    showNotification('Event booking confirmed! You will receive a confirmation email shortly.', 'success');
                } else {
                    showNotification('Sorry, this event is fully booked.', 'error');
                }
            } else {
                // General consultation booking
                const consultationData = {
                    name: document.getElementById('booking-name').value,
                    email: document.getElementById('booking-email').value,
                    phone: document.getElementById('booking-phone').value,
                    type: document.getElementById('booking-type').value,
                    notes: document.getElementById('booking-notes').value,
                    date: new Date().toISOString()
                };
                
                // Here you would typically send this data to your backend
                console.log('Consultation booking:', consultationData);
                
                closeModal('booking-modal');
                showNotification('Consultation request submitted! We will contact you within 24 hours to confirm your appointment.', 'success');
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
