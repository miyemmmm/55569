document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', handleScroll);
  });
  
  function handleScroll() {
    const content = document.getElementById('content');
    const scrollPosition = window.scrollY;
  
    // 在滚动到一定位置时更改背景图
    if (scrollPosition > 200) {
      content.style.backgroundImage = "url('path/to/your/changed-background.jpg')";
    } else {
      content.style.backgroundImage = "url('path/to/your/initial-background.jpg')";
    }
  }
  
  