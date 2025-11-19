import React from 'react';
import Header from '../components/header/header';   
import Carousel from '../components/carousel/carousel';
import './home.css';

function Home() {
  return (
    <div className="home-page">
      <Header />

      {/* Carousel Section */}
      <div className="carousel-wrapper my-4">
        <Carousel />
      </div>

      {/* About Me Section */}
      <section className="about-section text-center my-5">
        <div className="card shadow-sm mx-auto p-4" style={{ maxWidth: '800px' }}>
          <div className="card-body">
            <p>Hello! I am Rohan Shinde.</p>
            <p>I blend my love for fitness, technology, and creativity into everything I do.</p>
            <p>By day, I help people reach their health and performance goals as a Personal Trainer and Fitness Coach.</p>
            <p>By night, I explore web development, automation projects, and software solutions that solve real problems.</p>
            <p>I thrive on learning, building, and sharing my skills through practical projects.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Home;
