import { Card } from '../../features/index.js';

/**
 * @typedef {import('../../types').imageData} imageData
 */

/**
 * @function Gallery
 * @param {imageData[]} data
 * @returns {string}
 */

export const Gallery = (data) => `
  <div class="gallery__wrapper" id="cards">
    ${data.map((img) => Card(img)).join('')}
  </div>
`;
