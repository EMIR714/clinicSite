'use client';
import React, { FormEvent, useState} from 'react';
import { Map } from "@/components/Map";
import { postContactForm } from '@/app/api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    postContactForm({ name, number, description })
      .then((res) => {
        setResult(res);
        toast.success('Данные успешно отправлены!');
        setName('');
        setNumber('');
        setDescription('');
      })
      .catch((err) => {
        setError(err);
        toast.error('Произошла ошибка при отправке данных.');
      });
  };

    return (

        <div>
<section className="contact_section layout_padding10">
    <div className="container" style={{padding: "20px 0"}}>
    <div className="heading_container heading_center">
          <h2>
            Контакты
          </h2>
        </div>
      <div className="heading_container">
        <h2>
          Обратная связь
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container contact-form">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col-lg-6">
                  <div>
                    <input type="text"
                     placeholder="Имя"
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                  id="name"
                  value={name}
                  required={true}
                                      />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <input placeholder="Номер телефона" 
                    type="tel"
                    name="phone"
                    id="phone"
                    value={number}
                   onChange={(e) => setNumber(e.target.value)}
                    required={true}/>
                  </div>
                </div>
              </div>
              <div>
                <input type="text"
                 className="message-box"
                  placeholder="Сообщение" 
                  name="message"
                  id="message"
                  value={description}
                 onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="btn_box">
                <button type="submit">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container">
            <div className="map">
              <div id="googleMap">
                <Map/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>

  </section>
        </div>

    );
}
export default Contact;