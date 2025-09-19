// Smooth scrolling and section management
class SectionManager {
    constructor() {
        this.sections = document.querySelectorAll('.section');
        this.dots = document.querySelectorAll('.dot');
        this.currentSection = 0;
        this.isScrolling = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupCollapsibles();
        this.showSection(0);
    }
    
    setupEventListeners() {
        // Wheel event for scrolling
        document.addEventListener('wheel', (e) => this.handleWheel(e));
        
        // Touch events for mobile
        let touchStartY = 0;
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSection();
                } else {
                    this.prevSection();
                }
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === ' ') {
                e.preventDefault();
                this.nextSection();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.prevSection();
            }
        });
        
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showSection(index);
            });
        });
    }
    
    setupCollapsibles() {
        const questionHeaders = document.querySelectorAll('.question-header');
        
        questionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const targetId = header.getAttribute('data-target');
                const answerContent = document.getElementById(targetId);
                const isOpen = answerContent.classList.contains('open');
                
                // Close all other answers in the same section
                const currentSectionElement = header.closest('.section');
                const allAnswers = currentSectionElement.querySelectorAll('.answer-content');
                const allHeaders = currentSectionElement.querySelectorAll('.question-header');
                
                allAnswers.forEach(answer => answer.classList.remove('open'));
                allHeaders.forEach(h => h.classList.remove('active'));
                
                // Toggle current answer
                if (!isOpen) {
                    answerContent.classList.add('open');
                    header.classList.add('active');
                }
            });
        });
    }
    
    handleWheel(e) {
        if (this.isScrolling) return;
        
        e.preventDefault();
        
        if (e.deltaY > 0) {
            this.nextSection();
        } else {
            this.prevSection();
        }
    }
    
    nextSection() {
        if (this.currentSection < this.sections.length - 1) {
            this.showSection(this.currentSection + 1);
        }
    }
    
    prevSection() {
        if (this.currentSection > 0) {
            this.showSection(this.currentSection - 1);
        }
    }
    
    showSection(index) {
        if (index === this.currentSection || this.isScrolling) return;
        
        this.isScrolling = true;
        
        // Remove active class from all sections and dots
        this.sections.forEach(section => section.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current section and dot
        this.sections[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        // Update current section
        this.currentSection = index;
        
        // Scroll to section with precise positioning
        const targetSection = this.sections[index];
        const targetTop = targetSection.offsetTop;
        
        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
        
        // Reset scrolling flag after animation
        setTimeout(() => {
            this.isScrolling = false;
        }, 800);
        
        // Animate section content
        this.animateSection(index);
    }
    
    animateSection(index) {
        const section = this.sections[index];
        const contentWrapper = section.querySelector('.content-wrapper');
        
        if (contentWrapper) {
            contentWrapper.style.transform = 'translateY(30px)';
            contentWrapper.style.opacity = '0';
            
            setTimeout(() => {
                contentWrapper.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                contentWrapper.style.transform = 'translateY(0)';
                contentWrapper.style.opacity = '1';
            }, 100);
        }
        
        // Animate agenda items with stagger
        if (index === 0) {
            const agendaItems = section.querySelectorAll('.agenda-item');
            agendaItems.forEach((item, i) => {
                item.style.transform = 'translateY(50px)';
                item.style.opacity = '0';
                
                setTimeout(() => {
                    item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    item.style.transform = 'translateY(0)';
                    item.style.opacity = '1';
                }, 200 + (i * 150));
            });
        }
        
        // Animate questions page
        if (index === 4) {
            const questionMark = section.querySelector('.question-mark');
            const subtitle = section.querySelector('.questions-subtitle');
            
            if (questionMark) {
                questionMark.style.transform = 'scale(0)';
                questionMark.style.opacity = '0';
                
                setTimeout(() => {
                    questionMark.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    questionMark.style.transform = 'scale(1)';
                    questionMark.style.opacity = '1';
                }, 300);
            }
            
            if (subtitle) {
                subtitle.style.transform = 'translateY(30px)';
                subtitle.style.opacity = '0';
                
                setTimeout(() => {
                    subtitle.style.transition = 'all 0.6s ease';
                    subtitle.style.transform = 'translateY(0)';
                    subtitle.style.opacity = '1';
                }, 600);
            }
        }
        
        // Animate thanks page
        if (index === 5) {
            const emojis = section.querySelectorAll('.emoji');
            const subtitle = section.querySelector('.thanks-subtitle');
            
            emojis.forEach((emoji, i) => {
                emoji.style.transform = 'scale(0) rotate(180deg)';
                emoji.style.opacity = '0';
                
                setTimeout(() => {
                    emoji.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    emoji.style.transform = 'scale(1) rotate(0deg)';
                    emoji.style.opacity = '1';
                }, 200 + (i * 150));
            });
            
            if (subtitle) {
                subtitle.style.transform = 'translateY(30px)';
                subtitle.style.opacity = '0';
                
                setTimeout(() => {
                    subtitle.style.transition = 'all 0.6s ease';
                    subtitle.style.transform = 'translateY(0)';
                    subtitle.style.opacity = '1';
                }, 800);
            }
        }
        
        // Animate question blocks with stagger
        const questionBlocks = section.querySelectorAll('.question-block');
        questionBlocks.forEach((block, i) => {
            block.style.transform = 'translateY(30px)';
            block.style.opacity = '0';
            
            setTimeout(() => {
                block.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                block.style.transform = 'translateY(0)';
                block.style.opacity = '1';
            }, 300 + (i * 100));
        });
        
        // Animate demo button
        const demoButton = section.querySelector('.demo-button');
        if (demoButton) {
            demoButton.style.transform = 'scale(0.8)';
            demoButton.style.opacity = '0';
            
            setTimeout(() => {
                demoButton.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                demoButton.style.transform = 'scale(1)';
                demoButton.style.opacity = '1';
            }, 600);
        }
    }
}

// Demo button functionality
function setupDemoButtons() {
    const demoButtons = document.querySelectorAll('.demo-button');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
            
            // Show notification (placeholder for actual demo)
            showNotification('Demo ready! 🚀');
        });
    });
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: linear-gradient(45deg, #007aff, #5856d6);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 3000);
}

// Snap to section on scroll end
function setupScrollSnap() {
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        // Clear existing timeout
        clearTimeout(scrollTimeout);
        
        // Set a new timeout to detect when scrolling has stopped
        scrollTimeout = setTimeout(() => {
            const sections = document.querySelectorAll('.section');
            const viewportHeight = window.innerHeight;
            const scrollPosition = window.pageYOffset;
            
            // Find the section that should be active
            let activeIndex = 0;
            let minDistance = Infinity;
            
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const distance = Math.abs(scrollPosition - sectionTop);
                
                if (distance < minDistance) {
                    minDistance = distance;
                    activeIndex = index;
                }
            });
            
            // Update navigation dots
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === activeIndex);
            });
            
            // Update section states
            sections.forEach((section, index) => {
                section.classList.toggle('active', index === activeIndex);
            });
            
        }, 100);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const sectionManager = new SectionManager();
    setupDemoButtons();
    setupScrollSnap();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle resize events
window.addEventListener('resize', () => {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        // Recalculate positions if needed
        const currentSection = document.querySelector('.section.active');
        if (currentSection) {
            const targetTop = currentSection.offsetTop;
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        }
    }, 250);
});
