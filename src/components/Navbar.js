import React from "react";

const Logo = () => {
  return (
    <div style={{ width: 35 }}>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="heartbeat"
        className="svg-inline--fa fa-heartbeat fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"
        ></path>
      </svg>
    </div>
  );
};

const Navbar = () => {
  const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        <Logo />
      </a>

      <div
        className="collapse navbar-collapse"
        id="navbarColor01"
        style={{ textAlign: "center" }}
      >
        <ul className="navbar-nav mr-auto flex">
          {abc.map((l, index) => (
            <li className="nav-item" style={{ color: "white", border: 25, padding: 1 }} key={index}>
              <a href="#" className="nav-link">
                <h4>{l}</h4>
              </a>
            </li>
          ))}
          {nums.map((n, index) => (
            <li className="nav-item" style={{ color: "white", border: 25, padding: 2 }} key={index}>
              <a href="#" className="nav-link">
                <h4>{n}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
