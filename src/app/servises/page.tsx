"use client";
import React, { useState, useEffect } from "react";
import { BASE_IMAGE, fetchServises } from "../api/api";
import Image from "next/image";

function Servises() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchServises().then((response) => setItems(response.data));
  }, []);

  return (
    <div>
      <section
        className="department_section layout_padding10"
        style={{ padding: "20px 0" }}
      >
        <div className="department_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>Наши услуги</h2>
              <p>
                Asperiores sunt consectetur impedit nulla molestiae delectus
                repellat laborum dolores doloremque accusantium
              </p>
            </div>
            <div className="row">
              {items.map((item, index) => (
                <div key={index} className="col-md-3">
                  <div className="box ">
                    <div className="img-box">
                      <Image
                        src={`${BASE_IMAGE}${item.attributes.mainImage.data.attributes.url}`}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                      />{" "}
                    </div>
                    <div className="detail-box">
                      <h5>{item.attributes.serviseName}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-box"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Servises;
