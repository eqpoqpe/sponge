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
function useSponge(sponger) { }

const capture = () => [window.scrollX, window.scrollY];
const top = [0, 0];

/**
 * @param {*} defaultvalue
 * 
 * @returns {Sponger}
 */
function createSponge(defaultvalue) {
  const $ = createSl();

  window.addEventListener("scroll", () => {
    const { pathname } = window.location;

    if ($.includes(pathname)) {
      $.reset(pathname, capture());
    } else if (isDifference(capture(), top)) {
      scrollTo(top);
      $.push(pathname).set(capture());
    }

    console.log(isDifference(capture(), top));

    // console.log(JSON.stringify($.get()));
  });

  return { get: $.get, to: $.to };
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
    get: () => ([index, value]),

    /**
     * @returns {[number, number]}
     */
    to: () => {
      let { pathname } = window.location;

      return index.includes(pathname) ? value[index.indexOf(pathname)] : top;
    }
  }
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
function scrollTo(x, y) {
  window.scrollTo(x, y);
}

/**
 * 
 * @param {Array} st
 *  
 * @returns {boolean}
 */
function isDifference(st, dest) {
  return (() => {
    for (let index = 0; index < 2; index++) {
      if (st[index] !== dest[index]) {
        return true;
      }
    }

    return false;
  })();
}

export { createSponge, useSponge, scrollTo };
