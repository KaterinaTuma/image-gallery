import { Header } from '../widgets/index.js';
import { QueryPanel } from '../widgets/index.js';
import { Footer } from '../widgets/index.js';

/**
 * @function App
 * @returns {string}
 */

export const App = () => `
  <div class="app" id="app">
    ${Header()}
    ${QueryPanel()}
    <section class="gallery" id="gallery">Gallery</section>
    ${Footer()}
  </div>
`;
