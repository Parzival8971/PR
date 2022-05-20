const cursor = document.querySelector(".cursor");
let timeout;

// mousemove 상태일 때 커서가 따라옴
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  // mouses 멈출 때 커서 이펙트
  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

// mouseout 상태일 때 커서 이펙트
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

// header 스크롤 이벤트
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  const header = document.getElementById("fix-header");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add("on_small");
  } else {
    header.classList.remove("on_small");
  }
};

// To-top 최상단 버튼 이벤트
window.onload = function () {
  let top = document.querySelector("#to-top");

  window.addEventListener('scroll', function () {
    top.classList.toggle("active", window.scrollY > 200);
  });

  top.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

Splitting();