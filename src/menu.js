import {styleMenu, styleMenuItem} from "./style";

const createMenuItem = (name, description) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = `/images/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    styleMenuItem(foodImage);
    return menuItem;
}

const createMenu = () => {
    const menu  = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createMenuItem("Pho", "Beef Noodle Soup"));
    menu.appendChild(createMenuItem("Bun Rieu", "Tomato Crab Noodle Soup"));
    menu.appendChild(createMenuItem("Cha Gio", "Crispy Fried Spring Rolls"));
    menu.appendChild(createMenuItem("Banh Mi", "Vietnamese Sub"));
    menu.appendChild(createMenuItem("Com Tam Dac Biet", "Broken rice w/ Grilled Beef, Chicken, and Pork"));
    menu.appendChild(createMenuItem("Xoi Ga", "Fried Chicken Wings w/ Sticky Rice"));

    styleMenu(menu);
    return menu;
}

const loadMenu = () => {
    const main = document.querySelector(".main-content");
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;