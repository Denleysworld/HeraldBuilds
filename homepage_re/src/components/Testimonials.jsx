import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "I built my first PC with Herald Builds and it was super easy!",
      author: "Alex R."
    },
    {
      text: "Troubleshooting section saved me hours. Amazing resource!",
      author: "Priya T."
    }
  ];

  return (
    <section className="testimonials-container">
      <h2>What Our Users Say</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <p>" {testimonial.text} "</p>
          <span>– {testimonial.author}</span>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;