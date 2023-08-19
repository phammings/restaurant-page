const createContact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');
  
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 123 456 789';
  
    const address = document.createElement('p');
    address.textContent = '🏠 123 Jane Finch Street, Toronto, Canada';
  
    const restaurantLocation = document.createElement('img');
    restaurantLocation.src = 'images/restaurant-location.png';
    restaurantLocation.alt = 'Pho Cuu Long Restaurant';
  
    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);
  
    return contact;
  }
  
const loadContact = () => {
    const main = document.querySelector(".main-content");
    main.textContent = '';
    main.appendChild(createContact());
  }
  
  export default loadContact;