import React from "react";

const Home = () => {
  const nav = ["projects", "art", "about"];

  return (
    <div>
      <nav>
        <ul className="nav">
          {nav.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
