import Link from "next/link";
import "./style.css"

function Header() {
  return (
    <div>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="/">
              <span>Orthoc</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" href="/" passHref>
                    {" "}
                    Главная
                    <span className="sr-only"></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/works" passHref>
                    Мои работы
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/servises" passHref>
                    Услуги
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/doctors" passHref>
                    Персонал
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact" passHref>
                    Контакты{" "}
                  </Link>
                </li>
                <form className="form-inline"></form>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
