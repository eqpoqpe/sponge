/**
 * index.js - sponge
 * 
 * scrollX, scrollY, use React Router with Sponge
 * 
 * Copyright (c) 2022 Ryan Martin
 */

/**
 * @param {Sponger} sponger
 * @returns {*}
 */
function useSponge(sponger) {
  if (sponger) {
    return (sponger(null, "use"));
  }

  return undefined;
}

/**
 * @param {any} defaultvalue
 * @returns {Sponger}
 */
function createSponge(defaultvalue) {
  const o = {
    index: [],
    value: [],
    has: () => { }
  }

  return (props) => {
    window.addEventListener("scroll", () => {
      console.log(window.location.pathname);

      let { pathname } = window.location;

      let capture = { pathname: [window.scrollX] };
      Object.assign(inbuild, capture);
    });

    return props.children;
  }
}

/**
 * value <- index -> index
 */
function atoa() {
  const o = {
    index: [],
    value: [],
    has: () => {},
  };
}

export { createSponge, useSponge };
