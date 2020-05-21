class App {
  constructor() {
    const addBtn = document.querySelector(".add");
    const addForm = document.querySelector(".form--add");
    const searchBtn = document.querySelector(".search");
    const searchForm = document.querySelector(".form--search");
    const addElement = new AddElement();
    const searchElement = new SearchElement();

    addBtn.addEventListener("click", () => {
      console.log("clicked");
      addElement.create(
        addForm["html"].value,
        addForm["text"].value,
        addForm["attr"].value,
        addForm["attrVal"].value
      );
    });

    searchBtn.addEventListener("click", () => {
      searchElement.search(searchForm["search"].value);
    });
  }
}
