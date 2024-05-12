"use client";
import React, { useState, useEffect } from "react";
import { BASE_IMAGE, fetchServises } from "../api/api";
import Image from "next/image";

interface ImageData {
  attributes: {
    url: string;
  };
}

interface ServiceAttributes {
  mainImage: {
    data: ImageData;
  };
  serviseName: string;
}

interface Item {
  id: string;
  attributes: ServiceAttributes;
}

function Servises() {
  const [items, setItems] = useState<Item[]>([]);

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
            </div>
            <div className="row">
              {items.map((item, index) => (
                <div key={index} className="col-md-3">
                  <div className="box ">
                    <div className="img-box">
                      <Image
                        src={item.attributes.logo.data.attributes.url}
                        width={90}
                        height={90}
                        alt="Picture of the author"
                      />{" "}
                    </div>
                    <div className="detail-box">
                      <h5>{item.attributes.name}</h5>
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
