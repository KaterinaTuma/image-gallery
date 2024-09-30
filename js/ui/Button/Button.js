/**
 * @function Button
 * @param {string} className
 * @param {string} id
 * @param {Function} icon
 * @returns {string}
 */

export const Button = (className, id, icon) => `
  <button class="${className}"
    type="button"
    id="${id}"
  >
    ${icon()}
  </button>
`;
