"use client";
import React, { useState, useEffect } from "react";
import { BASE_IMAGE, fetchPosts } from "../api/api";

function Doctors() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => setItems(data));
  }, []);

  return (
    <div>
      <section
        className="doctor_section layout_padding10"
        style={{ padding: "20px 0" }}
      >
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Наши доктора</h2>
            <p className="col-md-10 mx-auto px-0">
              Incilint sapiente illo quo praesentium officiis laudantium
              nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis
              laudantium fuga ad voluptas aspernatur error fugiat quos facilis
              saepe quas fugit, beatae id quisquam.
            </p>
          </div>

          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col-sm-6 col-lg-4 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img
                      id="image"
                      src={`${BASE_IMAGE}${item.attributes.media.data[0].attributes.url}`}
                      alt=""
                      style={{ height: "420px" }}
                    />
                  </div>
                  <div className="detail-box">
                    <div className="social_box">
                      <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                    <h5 id="name">{item.attributes.name}</h5>
                    {/* <h6 id="jobTitle">{item.attributes.jobTitle}</h6> */}
                    {/* <h6 id="biography">{item.attributes.biography}</h6> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Doctors;
