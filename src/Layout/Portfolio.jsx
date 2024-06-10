import React from 'react';
import Masonry from 'react-masonry-css';
import { Card } from 'react-bootstrap';
import './Gallery.css'; // Import the CSS file for animations and styling

const artworks = [
  { id: 1, title: 'Artwork 1', description: 'Description 1', imageUrl: 'art/art1.jpg' },
  { id: 2, title: 'Artwork 2', description: 'Description 2', imageUrl: 'art/art1.jpg' },
  { id: 3, title: 'Artwork 3', description: 'Description 3', imageUrl: 'art/art1.jpg' },
  { id: 4, title: 'Artwork 4', description: 'Description 4', imageUrl: 'art/art1.jpg' },
  { id: 5, title: 'Artwork 5', description: 'Description 5', imageUrl: 'art/art1.jpg' },
  { id: 6, title: 'Artwork 6', description: 'Description 6', imageUrl: 'art/art1.jpg' },
];

const Portfolio = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1
  };

  return (
    <div className="gallery-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {artworks.map(artwork => (
          <Card key={artwork.id} className="art-card">
            <div className="image-container">
              <Card.Img variant="top" src={artwork.imageUrl} alt={artwork.title} />
              <div className="overlay">
                <Card.Title className="overlay-title">{artwork.title}</Card.Title>
                <Card.Text className="overlay-description">{artwork.description}</Card.Text>
              </div>
            </div>
          </Card>
        ))}
      </Masonry>
    </div>
  );
};

export default Portfolio;
