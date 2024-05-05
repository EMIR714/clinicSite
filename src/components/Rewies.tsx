'use client';
import React, { useState, useEffect } from 'react';
import { FiveStarRating } from "./five-star-rating";
import { fetchFeedbacks } from '@/app/api/api';

interface FeedbackAttributes {
  stars: number;
  clientName: string;
  feedbackText: string;
}

interface Item {
  id: string;
  attributes: FeedbackAttributes;
}

function Rewies() {
  const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetchFeedbacks().then((response) => setItems(response.data));
      }, []);

    return (
        <section className="client_section layout_padding-bottom" style={{padding: "20px 0"}}>
  <div className="container">
    <div className="heading_container heading_center ">
      <h2>
        Отзывы
      </h2> 
    </div>
    <div id="carouselExample2Controls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
      {items.map((item, i) => (
  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
    <div className="row">
      <div className="col-md-11 col-lg-10 mx-auto">
        <div className="box">
          <div className="img-box">
            <FiveStarRating rating={item.attributes.stars} />
          </div>
          <div className="detail-box">
            <div className="name">
              <h6>
                {item.attributes.clientName}
              </h6>
            </div>
            <p>
              {item.attributes.feedbackText}
            </p>
            <i className="fa fa-quote-left" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
))}

      </div>
      <div className="mx-auto" style={{display: 'flex', justifyContent: 'center'}}>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2Controls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2Controls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
    </div>
  </div>
</section>

    )
}
export default Rewies;