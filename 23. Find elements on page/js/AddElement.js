class AddElement {
  elements = document.querySelector(".elements");

  create(html, text, attr, attrVal) {
    const el = document.createElement(html);
    el.textContent = text;
    el.setAttribute(attr, attrVal);
    this.elements.appendChild(el);
  }
}
