// Resalta cada nodo del workflow de a uno, en loop, para simular una ejecución
document.addEventListener("DOMContentLoaded", () => {
  const nodes = document.querySelectorAll(".workflow .node");
  let current = 0;

  if (nodes.length) {
    setInterval(() => {
      nodes.forEach((node) => node.classList.remove("active"));
      nodes[current].classList.add("active");
      current = (current + 1) % nodes.length;
    }, 1200);
  }

  // Aparición suave de las tarjetas de features al hacer scroll
  const cards = document.querySelectorAll(".feature-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((card) => observer.observe(card));
});
