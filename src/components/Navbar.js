import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png"
          alt=""
          width="300"
          height="240"
          className="d-inline-block align-text-top"
        />
      </a>

      <div className="links">
        <a
          href="/add"
          style={{
            color: "white",
            backgroundColor: "#ffd90f",
            borderRadius: "8px",
          }}
        >
          Karakter Ekle
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
