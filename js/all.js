const questions = document.querySelectorAll(".faq_q");

questions.forEach((q) => {
  q.addEventListener("click", function () {
    const answer = this.nextElementSibling;

    // 可選：關閉其他已開的答案
    document.querySelectorAll(".faq_a.open").forEach((a) => {
      if (a !== answer) a.classList.remove("open");
    });

    // 切換當前答案的顯示狀態
    answer.classList.toggle("open");
  });
});

// swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination', // 設定原點點容器
    clickable: true,          // 讓使用者可以點擊切換
  },
});