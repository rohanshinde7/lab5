import React from 'react';
import './carousel.css';

function Carousel() {
  return (
    <div
      className="carousel slide carousel-fade mx-auto"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/coding.jpg" className="d-block w-100" alt="About Me" />
        </div>
        <div className="carousel-item">
          <img src="/images/training.jpg" className="d-block w-100" alt="Personal Training" />
        </div>
        <div className="carousel-item">
          <img src="/images/tech.jpg" className="d-block w-100" alt="Tech Projects" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
