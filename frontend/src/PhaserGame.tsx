import React, { useEffect } from 'react';
import Phaser from 'phaser';
import PropTypes from 'prop-types';

const PhaserGame: React.FC = () => {
  useEffect(() => {
    let game: Phaser.Game;

    const initializeGame = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: screenWidth,
        height: screenHeight,
        scene: {
          preload: preload,
          create: create,
          update: update,
        },
        scale: {
          mode: Phaser.Scale.FIT, // Use SHOW_ALL for responsiveness
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
      };

      game = new Phaser.Game(config);
    };

    const preload = () => {
      // Add preloading logic here (e.g., loading assets)
    };

    const create = () => {
      // Add game initialization logic here
    };

    const update = () => {
      // Add game update logic here
    };

    // Handle window resize events to keep the game responsive
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      const newScreenHeight = window.innerHeight;

      // Update the game's size
      game.scale.resize(newScreenWidth, newScreenHeight);
    };

    // Initialize the game
    initializeGame();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      game.destroy(true);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div id='phaser-container' />;
};

export default PhaserGame;
