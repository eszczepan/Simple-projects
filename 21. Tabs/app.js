const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = [...tabs.querySelectorAll('[role="tabpanel"]')];

function handleTabClick(e) {
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  tabButtons.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });
  e.target.setAttribute("aria-selected", true);
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") === e.target.id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener("click", handleTabClick)
);
