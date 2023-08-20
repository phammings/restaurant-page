import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import {styleNav, styleHeader, styleButton} from "./style";

const setActiveButton = (button) => {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}

const createNav = () => {
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        return;
      }
      setActiveButton(homeButton);
      loadHome();
    });
  
    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        return;
      }
      setActiveButton(menuButton);
      loadMenu();
    });
  
    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        return;
      }
      setActiveButton(contactButton);
      loadContact();
    });
  
    styleNav(nav, homeButton, menuButton, contactButton);
    return nav;
}

const createHeader = () => {
    const header = document.createElement("div");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Pho Cuu Long";

    const headerDesc = document.createElement("p");
    headerDesc.textContent = "Experience the Authentic Flavors of Vietnam";
    
    header.appendChild(restaurantName);
    header.appendChild(headerDesc);
    header.appendChild(createNav());

    styleHeader(header);
    return header;
}

const createMain = () => {
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    return mainContent;
}

const initializeWebsite = () => {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMain());

    setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

initializeWebsite();