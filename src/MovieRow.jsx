import React from 'react'

function MovieRow({rowText}) {
  return (
    <div className="row">
      <h4>{rowText}</h4>
      <div className="images-container">
        <img src="./megan.jpg" alt="" />
        <img src="./megan.jpg" alt="" />
        <img src="./megan.jpg" alt="" />
        <img src="./megan.jpg" alt="" />
        <img src="./megan.jpg" alt="" />
        <img src="./megan.jpg" alt="" />
        <img src="./megan.jpg" alt="" />
      </div>
    </div>
  );
};

export default MovieRow;