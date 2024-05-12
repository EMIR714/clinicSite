"use client";
import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/api";
import Image from "next/image";
import InstaIcon from "../../../public/instagram.png";
import WhatsIcon from "../../../public/whatsapp.png";
import Link from "next/link";

interface MediaData {
  attributes: {
    url: string;
  };
}
interface PhotoData {
  attributes: {
    url: string;
  };
}

interface Attributes {
  media: {
    data: MediaData[];
  };
  photo: {
    data: PhotoData;
  };
  namePersonal: string;
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
          </div>

          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col-sm-6 col-lg-4 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img
                      id="image"
                      src={item.attributes.photo.data.attributes.url}
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
                    <h5 id="name">{item.attributes.namePersonal}</h5>
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
