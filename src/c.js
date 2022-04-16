import { createSl } from "./sl";

function createSponge() {
  const top = [0, 0];
  const pathname = () => window.location.pathname;
  const sl = createSl();

  return {
    to() {
      if (sl.includes(pathname())) {
        console.log("DONE");
      } else {
        scrollTo(top);
        console.log("Error");
      }
    }
  }
}

/**
 * @param {Array} cob 
 */
function scrollTo(cob) {
  window.scrollTo(0, 0);
}

export { createSponge };