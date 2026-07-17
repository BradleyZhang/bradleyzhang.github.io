document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  if (!toc) return;

  const headings = document.querySelectorAll("h2, h3");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;
        const tocLink = toc.querySelector(`a[href="#${id}"]`);
        if (!tocLink) return;

        const listItem = tocLink.parentElement;
        console.log(id);
        toc
          .querySelectorAll("li.active")
          .forEach((el) => el.classList.remove("active"));

        // Set current item as active
        listItem.classList.add("active");

        const parentH2Item = listItem
          .closest("ul")
          .previousElementSibling?.closest("li");
        if (parentH2Item) parentH2Item.classList.add("active");
      });
    },
    {
      rootMargin: "0px 0px -75% 0px",
      threshold: 0.5,
    },
  );

  headings.forEach((heading) => observer.observe(heading));
});
