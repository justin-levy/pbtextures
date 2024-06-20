import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { Button, Card, Modal } from 'react-bootstrap';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2
};

export const Collections = ({ artworks }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedArtwork, setSelectedArtwork] = useState(null);

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedArtwork((prevSelectedArtwork) => artworks[(prevSelectedArtwork.id) % artworks.length]);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        // setCurrentIndex((prevIndex) => (prevIndex - 1 + artworks.length) % artworks.length);
        setSelectedArtwork((prevSelectedArtwork) => artworks[(prevSelectedArtwork.id + artworks.length - 2) % artworks.length])
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            handleNext(e);
        } else if (e.key === 'ArrowLeft') {
            handlePrev(e);
        }
    };

    useEffect(() => {
        if (!showModal) {
            window.removeEventListener('keydown', handleKeyDown);
            return;
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showModal]);

    const handleShow = (artwork) => {
        setSelectedArtwork(artwork);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedArtwork(null);
    };

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {artworks.map(artwork => (
                    <Card key={artwork.id} className="art-card" onClick={() => handleShow(artwork)}>
                        <div className="image-container">
                            <Card.Img variant="top" src={`thumbnails/${artwork.imageUrl}`} alt={artwork.title} />
                            <div className="overlay">
                                <Card.Title className="overlay-title">{artwork.title}</Card.Title>
                                <Card.Text className="overlay-description">{artwork.description}</Card.Text>
                            </div>
                        </div>
                    </Card>
                ))}
            </Masonry>

            <Modal
                show={showModal}
                onHide={handleClose}
                onClick={handleClose}
                size="lg"
                centered
                // dialogClassName="modal-fullscreen"
                contentClassName="modal-content"
            >
                <Button className="nav-button left" onClick={handlePrev}>
                    &#8592;
                </Button>
                <Button className="nav-button right" onClick={handleNext}>
                    &#8594;
                </Button>
                <Modal.Body style={{ padding: 0 }} onClick={handleClose}>
                    {selectedArtwork && (
                        <div
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={`collections/${selectedArtwork.imageUrl}`}
                                alt={selectedArtwork.title}
                                style={{
                                    maxWidth: '90%',
                                    maxHeight: '90%',
                                }}
                            />
                            <button
                                onClick={handleClose}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                }}
                            >
                                &times;
                            </button>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};