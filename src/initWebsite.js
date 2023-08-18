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

    return header;
}

const createMain = () => {
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    const headline = document.createElement("h2");
    headline.textContent = "Discover the Art of Vietnamese Cuisine";

    const restaurantDesc1 = document.createElement("p");
    restaurantDesc1.classList.add("desc-1");
    restaurantDesc1.textContent = "Immerse yourself in the rich and vibrant culinary traditions of Vietnam. Our skilled chefs use the finest ingredients to create dishes that capture the essence of Vietnamese flavors, from savory pho to mouthwatering banh mi.";

    const restaurantDesc2 = document.createElement("p");
    restaurantDesc2.classList.add("desc-2");
    restaurantDesc2.textContent = "Join us for an unforgettable dining experience that will transport you to the bustling streets of Hanoi, where each bite is a journey through Vietnam's diverse and delicious cuisine.";

    mainContent.appendChild(headline);
    mainContent.appendChild(restaurantDesc1);
    mainContent.appendChild(restaurantDesc2);

    return mainContent;
}


const initializeWebsite = () => {
    const content = document.getElementById("content");
    
    content.appendChild(createHeader());
    content.appendChild(createMain());
}

export default initializeWebsite;