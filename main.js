
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

    // Kiểm tra xem các phần tử có được tìm thấy không
    if (!menuToggle || !mobileMenu) {
        console.error("Lỗi: Không tìm thấy ID HTML của Menu Toggle hoặc Mobile Menu.");
        return; // Dừng nếu không tìm thấy
    }

    // Logic Mở/Đóng Sidebar (Burger Menu)
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
        mobileMenu.classList.add('translate-x-0');
    });

    menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('-translate-x-full');
    });

    // Logic Dropdown Menu trong Mobile (Toggle Submenu)
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
// Dropdown cấp 2 (Pages mobile)
document.querySelectorAll(".mobile-sub-btn").forEach(button => {
  button.addEventListener("click", () => {
    const submenu = button.nextElementSibling;
    const icon = button.querySelector("i");

    submenu.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  });
});
// 
// Mobile Menu Sidebar với các màn hình con trượt vào/ra
// 

  // Khai báo các phần tử DOM
  const mobileMenu = document.getElementById('mobile-menu');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  
  // Lấy tất cả các nút đóng/mở
  const closeBtns = document.querySelectorAll('[id^="mobile-menu-close"]'); // Các nút đóng x
  const mainScreen = document.getElementById('main-screen');
  const childScreens = document.querySelectorAll('.mobile-child-screen'); // Các màn hình con (Demo, Services, Pages)
  
  const openButtons = document.querySelectorAll('.menu-btn-open'); // Các nút kích hoạt màn hình con (Demo, Services...)
  const backButtons = document.querySelectorAll('.menu-btn-back'); // Các nút mũi tên quay lại

  // --- Hàm chính: Mở/Đóng Sidebar ---

  // Hàm Đóng Sidebar
  const closeSidebar = () => {
    mobileMenu.classList.add('-translate-x-full');
    
    // Đảm bảo menu con được reset về trạng thái ẩn (translate-x-full) khi đóng
    childScreens.forEach(screen => {
      screen.classList.add('translate-x-full');
    });
    // Đảm bảo màn hình chính hiện ra (ngay cả khi chưa trượt)
    mainScreen.classList.remove('-translate-x-full');
  }

  // Mở Sidebar
  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
  });
  
  // Áp dụng sự kiện đóng cho tất cả các nút 'x'
  closeBtns.forEach(btn => btn.addEventListener('click', closeSidebar));


  // --- Logic 1: Mở màn hình con (Trượt vào) ---
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target'); // Lấy ID của màn hình con (ví dụ: 'demo-screen')
      const targetScreen = document.getElementById(targetId);

      // 1. Ẩn màn hình chính (Trượt sang trái)
      mainScreen.classList.add('-translate-x-full'); 

      // 2. Hiển thị màn hình con (Trượt vào: loại bỏ translate-x-full)
      targetScreen.classList.remove('translate-x-full');
    });
  });

  // --- Logic 2: Quay lại màn hình chính (Trượt ra) ---
  backButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentScreen = button.closest('.mobile-child-screen'); // Tìm màn hình con hiện tại

      // 1. Ẩn màn hình con (Trượt ra phải)
      currentScreen.classList.add('translate-x-full');

      // 2. Hiện màn hình chính (Trượt vào: loại bỏ -translate-x-full)
      mainScreen.classList.remove('-translate-x-full');
    });
  });
