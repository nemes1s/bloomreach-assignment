const defaultParagraph = document.createElement("p");
defaultParagraph.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

document.addEventListener("DOMContentLoaded", function() {
  brHelpers.get("#add-more-content").addEventListener("click", function() {
    const item = brHelpers.get("p");

    const clone = item ? item.cloneNode(true) : defaultParagraph;

    document.getElementById("article-content").appendChild(clone);
  });

  brHelpers.get("#show-no-js").addEventListener("click", function() {
    brHelpers.get(".content").classList.add("show-no-js");
  });

  brHelpers.get("#show-js").addEventListener("click", function() {
    brHelpers.get(".content").classList.remove("show-no-js");
  });

  document.addEventListener("click", function(event) {
    if (event.target && event.target.parentNode.classList.contains("submenu")) {
      alert(event.target.innerText);
    }
  });

  document.addEventListener("click", function(event) {
    let element = event.target;
    if (element && element.parentNode.classList.contains("main-menu")) {
      brHelpers.getAll(".show-submenu").forEach(item => {
        if (item !== element) {
          item.classList.remove("show-submenu");
        }
      });
      element.classList.toggle("show-submenu");
    } else {
      brHelpers.getAll(".show-submenu").forEach(item => {
        item.classList.remove("show-submenu");
      });
    }
  });
});
