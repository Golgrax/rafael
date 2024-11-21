window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Parallax effect for each layer
  document.querySelector(".layer-1").style.transform = `translateY(${scrollPosition * 0.5}px) scale(${1.2 + scrollPosition * 0.0005})`;
  document.querySelector(".layer-1").style.filter = `blur(${0.2 + scrollPosition * 0.002}px)`;

  document.querySelector(".layer-2").style.transform = `translateY(${scrollPosition * 0.3}px) scale(${1.1 + scrollPosition * 0.0005})`;
  document.querySelector(".layer-2").style.filter = `blur(${Math.max(0, 0.2 - scrollPosition * 0.0015)}px)`;

  document.querySelector(".layer-3").style.transform = `translateY(${scrollPosition * 0.1}px) scale(${1 + scrollPosition * 0.0003})`;
});
