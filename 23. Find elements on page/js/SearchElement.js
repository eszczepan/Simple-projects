class SearchElement {
  info = document.querySelector(".info");

  search(ElementName) {
    this.info.innerHTML = ``;
    const elements = document.querySelectorAll(ElementName);
    elements.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("info__div");
      div.innerHTML = `
      <div>Class: ${item.className}</div>
      <div>OffsetHeight: ${item.offsetHeight}</div>
      <div>OffsetLeft: ${item.offsetLeft}</div>
      <div>OffsetTop: ${item.offsetTop}</div>
      <div>OffsetWidth: ${item.offsetWidth}</div>
      `;
      this.info.appendChild(div);
    });
  }
}
