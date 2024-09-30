import { IconCopy } from '../../ui/icons/index.js';

/**
 * @typedef {import('../../types').imageData} imageData
 */

/**
 * @function Card
 * @param {imageData} data
 * @returns {string}
 */

export const Card = (data) => `
  <div class="card">
    <img class="card__image"
      src="${data.urls.regular}"
    />
    <button class="card__button" data-id="copy">
      ${IconCopy()}
    </button>
  </div>
`;
