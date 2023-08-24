const styleNav = (nav, homeBtn, menuBtn, contactBtn) => {
    nav.classList = ("bg-slate-700");

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    div1.classList = ("px-4 py-3");
    div2.classList = ("flex items-center");
    ul.classList = ("flex flex-row font-medium mt-0 space-x-8 text-sm mx-auto");
    homeBtn.classList.add("text-white", "hover:underline");
    menuBtn.classList.add("text-white",  "hover:underline");
    contactBtn.classList.add("text-white", "hover:underline");

    nav.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(ul);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    li1.appendChild(homeBtn);
    li2.appendChild(menuBtn);
    li3.appendChild(contactBtn);
}

const styleHeader = (header, restaurantName) => {
    header.classList.add("grid", "grid-rows-3", "mt-4");
    restaurantName.classList.add("text-lg");
}

const styleHome = (home, headline, chefImage, restaurantDesc1, restaurantDesc2) => {
    headline.classList.add("m-16");
    chefImage.classList.add("mx-auto");
    restaurantDesc1.classList.add("m-12");
    restaurantDesc2.classList.add("m-12");
}

const styleContact = (contact, phoneNumber, address, restaurantLocation) => {
    contact.classList.add("grid", "grid-rows-3", "h-80", "m-20", "text-lg");
}

const styleMenu = (menu) => {
    menu.classList.add("grid", "grid-cols-2");
}

const styleMenuItem = (menuItem) => {
    menuItem.classList.add("h-40", "w-40", "mx-auto", "mt-16");
}

export {styleNav, styleHeader, styleHome, styleContact, styleMenu, styleMenuItem};