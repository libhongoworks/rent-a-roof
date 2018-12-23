import Link from "next/link";

const Header = () => (
  <div>
    <nav className="navbar container">
      <a className="navbar-brand">
        <img
          src="../static/images/00108-real-estate-logos-design-free-house-logo-maker-01.png"
          alt=""
          height="72"
        />
        <span>Rent-A-Roof</span>
      </a>
      <div className="userSignIn">
        <i className="far fa-user" />
        <a className="btn">
          <button className="btn btn-outline-dark">Sign in</button>
        </a>
      </div>
    </nav>
  </div>
);

export default Header;
