new Swiper('.brands-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1280: {
                slidesPerView: 5,
            },
        }
    });
// Initialize Swiper when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const servicesSwiper = new Swiper('.services-carousel', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // When window width is >= 576px
            576: {
                slidesPerView: 2,
            },
            // When window width is >= 992px
            992: {
                slidesPerView: 3,
            },
            // When window width is >= 1200px
            1200: {
                slidesPerView: 4,
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
            // Initialize Swiper
            const swiper = new Swiper('.services-carousel', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                },
                speed: 800,
                keyboard: {
                    enabled: true,
                },
            });

            // FadeInUp Animation
            const fadeElements = document.querySelectorAll('.fadeInUp');
            
            // Set initial styles
            fadeElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
            });
            
            // Animate on scroll
            function animateOnScroll() {
                fadeElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    if (rect.top < windowHeight - 100) {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }
                });
            }
            
            window.addEventListener('load', animateOnScroll);
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll();
        });
        var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);
