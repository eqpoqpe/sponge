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
  // if (sponger) {
  //   return (sponger(null, "use"));
  // }
}

/**
 * @param {*} defaultvalue
 * 
 * @returns {Sponger}
 */
function createSponge(defaultvalue) {
  const $ = createSl();

  window.addEventListener("scroll", () => {
    const { pathname } = window.location;

    if ($.includes(pathname))
      $.reset(pathname, [window.scrollX, window.scrollY]);
    else
      $.push(pathname).set([window.scrollX, window.scrollY]);

    console.log(JSON.stringify($.get()));
  });

  // return a Sponger
  return (props) => {
    console.log("Sponge");

    return props.children;
  };
}

/**
 * shadow layer, Array of indexOf value's value's index
 * 
 * keys values
 * 
 * value <- index -> index
 */
function createSl() {
  const index = [];
  const value = [];

  return {

    /**
     * Only get first key
     * 
     * @param {*} sv
     * 
     * @returns {boolean}
     */
    includes: (sv) => (
      index.includes(sv)
    ),

    /**
     * Only get first key
     * 
     * @param {*} s
     * 
     * @returns {*}
     */
    push: (s) => {
      index.push(s);

      return { set: (v) => { value.push(v); } }
    },

    /**
     * 
     * @param {*} s
     * @param {*} n
     */
    reset: (s, n) => { value[index.indexOf(s)] = n; },
    get: () => (value)
  }
}

export { createSponge, useSponge };
