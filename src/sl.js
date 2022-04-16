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

      scrollTo(0, 0);

      return index.includes(pathname) ? value[index.indexOf(pathname)] : top;
    }
  }
}

export { createSl };