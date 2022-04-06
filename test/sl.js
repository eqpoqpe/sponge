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
      index.includes(Object.keys(sv)[0])
    ),

    /**
     * Only get first key
     * 
     * @param {*} sv
     * 
     * @returns {boolean}
     */
    push: (sv) => (
      index.push(Object.keys(sv)[0]) === value.push(sv)
    ),
    get: () => (value)
  }
};