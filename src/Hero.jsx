import heroImg from './assets/hero.svg';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-title">
        <h1>Contentful CMS</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          deleniti facilis fugit provident laudantium, suscipit mollitia laborum
          eum animi vitae. Nam voluptas ipsum, minima recusandae autem mollitia
          fuga dolorem possimus.
        </p>
      </div>
      <div className="img-container">
        <img src={heroImg} alt="browser" className="img" />
      </div>
    </section>
  );
};

export default Hero;
