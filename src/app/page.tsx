"useClient";
import Image from "next/image";
import styles from "./page.module.css";
import Servises from "./servises/page";
import Rewies from "@/components/Rewies";
import Doctors from "./doctors/page";
import Dentist from "../../public/dentist kg.png";
import { CarouselText } from "@/components/CarouselText";
import ruchki from "../../public/ruchki.svg";
import marka from "../../public/1.svg";
import icon3 from "../../public/3.svg";
import icon4 from "../../public/4.svg";
import icon5 from "../../public/5.svg";
import icon6 from "../../public/6.svg";
import banner from "../../public/drnoorlan_banner.jpeg"

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className="hero_area">
          <div className="hero_bg_box" style={{ marginTop: "-110px" }}>
            <Image
              src={Dentist}
              width={1500}
              height={700}
              alt="Picture of the author"
            />
          </div>
          <CarouselText />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.jpg" alt="" />
              </div>
            </div>
            <div
              className="department_section layout_padding10"
              style={{ padding: "20px 0" }}
            >
              <div className="department_container">
                <div className="container">
                  <div
                    className="heading_container heading_center"
                    style={{ marginBottom: "20px" }}
                  >
                    <h2>Почему выбирают нас</h2>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="detail-box">
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src={marka}
                            width={45}
                            height={45}
                            alt="Picture of the author"
                          />
                          <h5>Мы работаем с 2018 года</h5>
                        </div>
                        <p>
                          Все наши специалисты — профессионалы своего дела.
                          Гарантируем, вам будет оказана квалифицированная
                          помощь.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="detail-box">
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <Image
                            src={ruchki}
                            width={45}
                            height={45}
                            alt="Picture of the author"
                          />
                          <h5>Тёплое отношение</h5>
                        </div>
                        <p>
                          Вам больше не нужно бояться стоматологов. Наши
                          специалисты гарантируют комфортное и безболезненное
                          лечение.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="detail-box">
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src={icon3}
                            width={45}
                            height={45}
                            alt="Picture of the author"
                          />
                          <h5>Высокое качество лечения</h5>
                        </div>
                        <p>
                          Используем лучшие материалы и оборудование. В качестве
                          работы вы можете убедиться, ознакомившись с отзывами.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="detail-box">
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src={icon4}
                            width={45}
                            height={45}
                            alt="Picture of the author"
                          />
                          <h5>Собственные помещения</h5>
                        </div>
                        <p>
                          Уютные кабинеты, современное оборудование, высокие
                          стандарты гигиеничности. Профессиональные врачи
                          обеспечивают безопасность и комфорт в ходе лечения.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="detail-box">
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src={icon5}
                            width={45}
                            height={45}
                            alt="Picture of the author"
                          />
                          <h5>Доступные цены</h5>
                        </div>
                        <p>
                          Мы стараемся сократить ваши расходы, поэтому регулярно
                          организуем для вас выгодные акции и скидки.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="detail-box">
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src={icon6}
                            width={45}
                            height={45}
                            alt="Picture of the author"
                          />
                          <h5>Сервис онлайн-записи</h5>
                        </div>
                        <p>
                          Теперь вы можете записаться к врачу быстро и легко.
                          Просто выберите удобное время и оставьте заявку на
                          приём!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container"> 
        <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
              <Image
                            src={banner}
                            width={600}
                            height={270}
                            alt="Picture of the author"
                            style={{maxWidth: "100%"}}
                          />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    О <span>нас</span>
                  </h2>
                </div>
                <p>
                Мы специализируемся в широком спектре стоматологических процедур: от рутинной гигиены полости рта и лечения кариеса до сложных ортодонтических коррекций и хирургических вмешательств. Наша клиника оборудована передовой техникой, что позволяет нам предоставлять высокоточные и безопасные процедуры.
<br />
<br />
Dr.Noorlan - место, где улыбка станет ярче. Доверьте свое улучшение здоровью и красоте нашей опытной команде, и мы с радостью сделаем вашу улыбку самой лучшей версией себя!
<br />
<br />
Dr Noorlan - это современная стоматологическая клиника, предлагающая высококачественные услуги в уютной и спокойной обстановке.
                </p>
              </div>
            </div>
          </div>
          </div>
        <Doctors />
        <Servises />
        <Rewies />
      </main>
    </div>
  );
}
