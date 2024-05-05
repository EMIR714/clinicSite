import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 footer_col">
              <div className="footer_contact">
                <h4>Dr. Noorlan</h4>
                <div className="contact_link_box">
                  <a href="https://2gis.kg/bishkek/geo/15763234351066240">
                    <span>Адрес: ул. Исанова 41</span>
                  </a>
                  <a href="tel:+996999898868">
                    <span>+996 999 898 868</span>
                  </a>
                </div>
              </div>
              <div className="footer_social">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto footer_col">
              <div className="footer_link_box">
                <h4>Ссылки</h4>
                <div className="footer_links">
                  <Link className="nav-link" href="/" passHref>
                    {" "}
                    Главная
                    <span className="sr-only"></span>
                  </Link>
                  <Link className="nav-link" href="/works" passHref>
                    Мои работы
                  </Link>
                  <Link className="nav-link" href="/servises" passHref>
                    Услуги
                  </Link>
                  <Link className="nav-link" href="/doctors" passHref>
                    Персонал
                  </Link>
                  <Link className="nav-link" href="/contact" passHref>
                    Контакты{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-info">
            <p>
            <span id="displayYear"></span>
              Сайт интегрирован с DentApp
              <br />
              
              <span id="displayYear"></span> Все права защищены.
               ©Aksoft
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
