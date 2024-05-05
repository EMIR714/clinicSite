"use client";
import React, { useState, useEffect } from "react";
import { BASE_IMAGE, fetchMyWorks } from "@/app/api/api";
import Image from "next/image";

export const CarouselClient = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchMyWorks().then(data => setItems(data));
  }, []);

  return (
    <section className="client_section layout_padding-bottom" style={{padding: "20px 0"}}>
      <div className="container">
        <div id="carouselExample2Controls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {items.map((item, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                        <Image
                            src={`${BASE_IMAGE}${item.attributes.mainImage.data.attributes.url}`}
                            width={400}
                            height={450}
                            alt="Picture of the author"
                          />
                      
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                            {item.attributes.workTitle}
                          </h6>
                        </div>
                        <p>
                          {item.attributes.workDescription}
                        </p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto" style={{display: 'flex', justifyContent: 'center', marginTop: '-60px'}}>
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
  );
};
