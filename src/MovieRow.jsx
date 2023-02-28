import React from 'react';
import poster from '../public/megan.jpg';


function MovieRow({ rowText }) {
  return (
    <div className="row">
      <h4>{rowText}</h4>
      <div className="images-container">
        <img src={poster} />
        <img src={poster} />
        <img src={poster} />
        <img src={poster} />
        <img src={poster} />
        <img src={poster} />
      </div>
    </div>
  );
};

export default MovieRow;