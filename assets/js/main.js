document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    if (!menuToggle || !mobileMenu) {
        console.error("Lỗi: Không tìm thấy ID HTML của Menu Toggle hoặc Mobile Menu.");
        return; 
    }
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
        mobileMenu.classList.add('translate-x-0');
    });
    menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('-translate-x-full');
    });
    mobileDropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const submenu = dropdown.querySelector('.mobile-submenu');
        const icon = dropdown.querySelector('i');
        if (button) {
            button.addEventListener('click', () => {
                submenu.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        }
    });
});
document.querySelectorAll(".mobile-sub-btn").forEach(button => {
  button.addEventListener("click", () => {
    const submenu = button.nextElementSibling;
    const icon = button.querySelector("i");

    submenu.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  });
});
  const mobileMenu = document.getElementById('mobile-menu');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtns = document.querySelectorAll('[id^="mobile-menu-close"]'); 
  const mainScreen = document.getElementById('main-screen');
  const childScreens = document.querySelectorAll('.mobile-child-screen'); 
  const openButtons = document.querySelectorAll('.menu-btn-open'); 
  const backButtons = document.querySelectorAll('.menu-btn-back'); 
  const closeSidebar = () => {
    mobileMenu.classList.add('-translate-x-full');
    childScreens.forEach(screen => {
      screen.classList.add('translate-x-full');
    });
    mainScreen.classList.remove('-translate-x-full');
  }
  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
  });
  closeBtns.forEach(btn => btn.addEventListener('click', closeSidebar));
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetScreen = document.getElementById(targetId);
      mainScreen.classList.add('-translate-x-full'); 
      targetScreen.classList.remove('translate-x-full');
    });
  });
  backButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentScreen = button.closest('.mobile-child-screen'); 
      currentScreen.classList.add('translate-x-full');
      mainScreen.classList.remove('-translate-x-full');
    });
  });
$(document).ready(function () {
    const $slider = $('.slick__library');
    const totalItems = $slider.children().length;
    const requiredToShow = 5;
    if (totalItems === requiredToShow) {
        $slider.children().each(function() {
            $(this).clone().appendTo($slider);
        });
        console.log("Đã nhân bản 5 items để kích hoạt Slick Slider.");
    }
    $slider.slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: requiredToShow, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        centerMode: true,
        centerPadding: '0px', 
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
            },
            {
            breakpoint: 768, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2, 
                slidesToScroll: 1
            }
            }
        ]
    });
    new WOW().init();
});
// according
  const container = document.getElementById('accordion-card');
  const buttons = container.querySelectorAll('button');

  function openOnly(btn) {
    const targetSel = btn.getAttribute('data-target');
    const target = document.querySelector(targetSel);

    // Close all
    buttons.forEach(b => {
      const t = document.querySelector(b.getAttribute('data-target'));
      b.setAttribute('aria-expanded', 'false');
      b.dataset.open = 'false';
      t.classList.add('hidden');
      t.classList.remove('block');
    });

    // Open clicked
    btn.setAttribute('aria-expanded', 'true');
    btn.dataset.open = 'true';
    target.classList.remove('hidden');
    target.classList.add('block');
  }

  buttons.forEach(btn => {
    // Click to toggle, but always keep one open
    btn.addEventListener('click', () => openOnly(btn));

    // Keyboard support (Enter/Space)
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openOnly(btn);
      }
      // Optional: arrow navigation
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const list = Array.from(buttons);
        const i = list.indexOf(btn);
        const next = e.key === 'ArrowDown' ? list[i + 1] ?? list[0] : list[i - 1] ?? list[list.length - 1];
        next.focus();
      }
    });
  });

  // Ensure at least one is open on load
  window.addEventListener('DOMContentLoaded', () => {
    const opened = container.querySelector('button[aria-expanded="true"]');
    openOnly(opened || buttons[0]);
  });
JOS.init();