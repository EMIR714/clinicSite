"use client";
import React, { useState, useEffect } from "react";
import { fetchBannerTexts } from "@/app/api/api";

interface TextAttributes {
  mainText: string;
  description: string;
}

interface Item {
  id: string;
  attributes: TextAttributes;
}

export const CarouselText = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchBannerTexts().then((response) =>  setItems(response.data));
  }, []);
  return (
    <div>
      <section className="slider_section" style={{marginTop: '100px'}}>
        <div
          id="customCarousel1"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {items.map((item, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>{item.attributes.mainText}</h1>
                        <p>
                        {item.attributes.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators">
            {items.map((item, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#customCarousel1"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : "false"}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
      </section>
    </div>
  );
};
