import React, { useEffect } from 'react';
import Phaser from 'phaser';

const PhaserGame: React.FC = () => {
  useEffect(() => {
    // Get the current screen dimensions
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
    };

    const game = new Phaser.Game(config);

    function preload() {
      // Add preloading logic here (e.g., loading assets)
    }

    function create() {
      // Add game initialization logic here
    }

    function update() {
      // Add game update logic here
    }

    // Handle window resize events to keep the game responsive
    window.addEventListener('resize', () => {
      const newScreenWidth = window.innerWidth;
      const newScreenHeight = window.innerHeight;

      // Update the game's size
      game.scale.resize(newScreenWidth, newScreenHeight);
    });

    return () => {
      game.destroy(true);
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <div id='phaser-container' />;
};

export default PhaserGame;
