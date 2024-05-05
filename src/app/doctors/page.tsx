"use client";
import React, { useState, useEffect } from "react";
import { BASE_IMAGE, fetchPosts } from "../api/api";
import Image from "next/image";
import InstaIcon from "../../../public/instagram.png";
import WhatsIcon from "../../../public/whatsapp.png";
import Link from "next/link";

interface MediaData {
  attributes: {
    url: string;
  };
}

interface Attributes {
  media: {
    data: MediaData[];
  };
  name: string;
}

interface Item {
  id: string;
  attributes: Attributes;
}

function Doctors() {
  const [items, setItems] = useState<Item[]>([]);

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
                    />
                  </div>
                  <div className="detail-box">
                    <div className="social_box">
                      <Link href="/doctors">
                        <Image
                          src={InstaIcon}
                          width={30}
                          height={30}
                          alt="Picture of the author"
                        />
                      </Link>
                      <Link href="/doctors">
                        <Image
                          src={WhatsIcon}
                          width={30}
                          height={30}
                          alt="Picture of the author"
                        />
                      </Link>
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
