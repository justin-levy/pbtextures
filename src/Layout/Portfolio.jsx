import React, { useEffect } from 'react';
import { Collections } from '../Collections'
import './Gallery.css'; // Import the CSS file for animations and styling
import { althea, artemis, athena, calliope, dream, jesmonite, sculptures } from '../Collections/artworks';
import { useLocation } from 'react-router-dom';

const Portfolio = () => {

  const location = useLocation();
  const hashFragment = location.hash.substring(1);

  const anchorScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    console.log(hashFragment);
    if (!hashFragment) {
      return;
    }
    setTimeout(function () {
      anchorScroll(hashFragment);
    }, 100);
  }, [hashFragment])

  return (
    <div className="gallery-container bg-white">
      <div id='althea'>
        <h1>Althea</h1>
        <Collections artworks={althea} />
      </div>
      <div id='artemis'>
        <h1>Artemis</h1>
        <Collections artworks={artemis} />
      </div>
      <div id='athena'>
        <h1>Athena</h1>
        <Collections artworks={athena} />
      </div>
      <div id='calliope'>
        <h1>Calliope</h1>
        <Collections artworks={calliope} />
      </div>
      <div id='dream'>
        <h1>Dream</h1>
        <Collections artworks={dream} />
      </div>
      <div id='jesmonite'>
        <h1>Jesmonite</h1>
        <Collections artworks={jesmonite} />
      </div>
      <div id='sculptures'>
        <h1>Sculptures</h1>
        <Collections artworks={sculptures} />
      </div>
    </div>
  );
};

export default Portfolio;
