const styleNav = (nav, homeBtn, menuBtn, contactBtn) => {
    nav.classList = ("bg-gray-50 dark:bg-gray-700");

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    div1.classList = ("max-w-screen-xl px-4 py-3 mx-auto");
    div2.classList = ("flex items-center");
    ul.classList = ("flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm");
    homeBtn.classList.add("text-gray-900", "dark:text-white", "hover:underline");
    menuBtn.classList.add("text-gray-900", "dark:text-white", "hover:underline");
    contactBtn.classList.add("text-gray-900", "dark:text-white", "hover:underline");

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

const styleNavButton = (button) => {

}

export default styleNav;