import { IconCamera } from '../../ui/icons/index.js';
import { Search } from '../../features/index.js';
import { Theme } from '../../features/index.js';

/**
 * @function Header
 * @returns {string}
 */

export const Header = () => `
  <header class="header" id="header">
    <div class="header__wrapper">
      <button class="logo" id="logo">
        ${IconCamera()}
        <span>Gallery</span>
      </button>
      ${Search()}
      ${Theme('button button--theme')}
    </div>
  </header>
`;
