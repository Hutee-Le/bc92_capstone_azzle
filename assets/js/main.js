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

JOS.init();