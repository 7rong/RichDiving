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