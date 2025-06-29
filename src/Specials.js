import React from 'react';
import DishCard from './DishCard';
import greekSalad from './assets/greek salad.jpg';
import bruschetta from './assets/bruchetta.svg';
import lemonDessert from './assets/lemon dessert.jpg';

const specialsData = [
  {
    image: greekSalad,
    name: "Greek Salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    image: bruschetta,
    name: "Bruschetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    image: lemonDessert,
    name: "Lemon Dessert",
    price: 5.00,
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
];

function Specials() {
  return (
    <div className="dish-card-container">
      {specialsData.map((dish, index) => (
        <DishCard
          key={index}
          image={dish.image}
          name={dish.name}
          price={dish.price}
          description={dish.description}
        />
      ))}
    </div>
  );
}

export default Specials;
