import React from 'react';
import profile1 from './assets/dracula.webp';
import profile2 from './assets/frankenstein.webp';
import profile3 from './assets/bride.webp';
import profile4 from './assets/phantom.webp';

const testimonials = [
  {
    name: "Vlad",
    rating: 5,
    review: "A night of exquisite flavors, as rich and deep as the velvet darkness. Simply immortal.",
    image: profile1
  },
  {
    name: "Frank",
    rating: 4,
    review: "Powerful taste with some rough edges, but overall a creation to admire.",
    image: profile2
  },
  {
    name: "Elena",
    rating: 5,
    review: "A perfect harmony of ingredients, electrifyingly delicious and full of life.",
    image: profile3
  },
  {
    name: "Erik",
    rating: 2,
    review: "The melodies whisper, but the heart remains cold and unsatisfied.",
    image: profile4
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title marzaki">Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-rating">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
           <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
            loading="lazy"
            />
            <p className="testimonial-review">“{testimonial.review}”</p>
            <p className="testimonial-name">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
