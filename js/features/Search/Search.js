import { IconSearch } from '../../ui/icons/index.js';
import { IconClose } from '../../ui/icons/index.js';
import { Button } from '../../ui/index.js';

/**
 * @function Search
 * @returns {string}
 */

export const Search = () => `
  <form class="search" id="search">
    ${Button('search__button search__loupe', 'search-loupe', IconSearch)}
    <input class="search__input"
      type="text"
      placeholder="Search image"
      id="search__input"
    />
    ${Button('search__button search__close', 'search-close', IconClose)}
  </form>
`;
