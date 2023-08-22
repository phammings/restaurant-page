import {styleHome} from "./style";

const createHome = () => {
    const home = document.createElement("div");
    home.classList.add("home");

    const headline = document.createElement("h2");
    headline.classList.add("headline");
    headline.textContent = "Discover the Art of Vietnamese Cuisine";

    const chefImage = document.createElement("img");
    const chefFig = document.createElement("figure");
    const imageCaption = document.createElement("figcaption");
    chefImage.src = "/restaurant-page/images/Chef.jpeg";
    chefImage.alt = "Vietnamese Chef";
    imageCaption.innerText = "Our Very Own Chef Kevin Nguyen";

    const restaurantDesc1 = document.createElement("p");
    restaurantDesc1.classList.add("desc-1");
    restaurantDesc1.textContent = "Immerse yourself in the rich and vibrant culinary traditions of Vietnam. Our skilled chefs use the finest ingredients to create dishes that capture the essence of Vietnamese flavors, from savory pho to mouthwatering banh mi.";

    const restaurantDesc2 = document.createElement("p");
    restaurantDesc2.classList.add("desc-2");
    restaurantDesc2.textContent = "Join us for an unforgettable dining experience that will transport you to the bustling streets of Hanoi, where each bite is a journey through Vietnam's diverse and delicious cuisine.";

    chefFig.appendChild(chefImage);
    chefFig.appendChild(imageCaption);
    home.appendChild(headline);
    home.append(chefFig);
    home.appendChild(restaurantDesc1);
    home.appendChild(restaurantDesc2);

    styleHome(home, headline, chefImage, restaurantDesc1, restaurantDesc2);
    return home;
}

const loadHome = () => {
    const main = document.querySelector(".main-content");
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;