import logoColor from "../assets/blinker-logo-color.svg";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={logoColor} alt="Blinker Logo" className="blinker__logo" />
        </a>
      </div>
      <ul className="nav__links">
        <li className="nav__list">
          <a href="/" className="nav__link link__hover-effect">
            Home
          </a>
        </li>
        <li className="nav__list">
          <a href="/" className="nav__link link__hover-effect">
            Find your car
          </a>
        </li>
        <li className="nav__list">
          <a href="/" className="nav__link btn__contact no-cursor">
            CONTACT
          </a>
        </li>
        <button className="btn__menu"></button>
      </ul>
    </nav>
  );
}

export default Nav;

