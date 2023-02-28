import { useState } from 'react'
// import './App.css';
import './index.css'
import Header from './Header.jsx';
import MovieRow from './MovieRow.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <MovieRow rowText='Released in the past year' />
      <MovieRow rowText='Trending Now' />
      <MovieRow rowText='My List' />
    </div>
  );
};


export default App;