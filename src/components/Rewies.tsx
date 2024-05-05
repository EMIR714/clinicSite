'use client';
import React, { useState, useEffect } from 'react';
import { FiveStarRating } from "./five-star-rating";
import { fetchFeedbacks } from '@/app/api/api';

function Rewies() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchFeedbacks().then((response) => setItems(response.data));
      }, []);

    return (
        <section class="client_section layout_padding-bottom" style={{padding: "20px 0"}}>
  <div class="container">
    <div class="heading_container heading_center ">
      <h2>
        Отзывы
      </h2> 
    </div>
    <div id="carouselExample2Controls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
      {items.map((item, i) => (
  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
    <div class="row">
      <div class="col-md-11 col-lg-10 mx-auto">
        <div class="box">
          <div class="img-box">
            <FiveStarRating rating={item.attributes.stars} />
          </div>
          <div class="detail-box">
            <div class="name">
              <h6>
                {item.attributes.clientName}
              </h6>
            </div>
            <p>
              {item.attributes.feedbackText}
            </p>
            <i class="fa fa-quote-left" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
))}

      </div>
      <div className="mx-auto" style={{display: 'flex', justifyContent: 'center'}}>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2Controls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2Controls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
    </div>
  </div>
</section>

    )
}
export default Rewies;