"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchMyWorks } from "@/app/api/api";

interface ImageData {
  attributes: {
    url: string;
  };
}

interface WorkAttributes {
  photo: {
    data: ImageData;
  };
  name: string;
  workDescription: string;
}

interface Item {
  id: string;
  attributes: WorkAttributes;
}

export const CarouselClient = () => {
  const [items, setItems] = useState<Item[]>([]);

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
                            src={item.attributes.photo.data.attributes.url}
                            width={400}
                            height={450}
                            alt="Picture of the author"
                          />
                      
                      <div className="detail-box">
                        <div className="name">
                          <h6>
                            {item.attributes.name}
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
  );
};
