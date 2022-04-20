/**
 * index.js - sponge
 * 
 * Smart scroll with React Hooks
 * 
 * Copyright 2022 Ryan Martin
 */

/**
 * +-----------------+           +-----------+
 * | Scroll Listener |--[lock] --| Sponge.to |
 * +-----------------+           +-----------+
 */

const PathName = () => window.location.pathname;
const Listener = (handler) => { window.addEventListener("scroll", handler, false); }
const Capture = () => [window.scrollX, window.scrollY];
const top = [0, 0];

function createSponge() {
  const rem_mode_env = Object.create({lock: false, unlock: true});
  const sl = createSl();

  const Handle = (e) => {
    if (sl.pathname !== PathName()) {

      // locking
      sl.set_state(rem_mode_env.lock);
    }

    if (sl.state) {
      console.log("unlock");
    } else {
      console.log("lock");
    }
  };

  Listener(Handle);

  return {
    to() {
      scrollTo(sl.to(PathName()));

      // unlocking only for this subpath
      sl.set_state(rem_mode_env.unlock);
    }
  }
}

/**
 * @param {Array} cob 
 */
function scrollTo(cob) { window.scrollTo(cob[0], cob[1]); }

/**
 * shadow layer, Array of indexOf value's value's index
 * 
 * keys values
 * 
 * value <- index -> index
 */
 function createSl() {

  // default to false
  const state = false;
  const index = [];
  const value = [];
  const pathname = null;

  return {

    /**
     * Only get first key
     * 
     * @param {*} sv
     * 
     * @returns {boolean}
     */
    includes: (sv) => { return index.includes(sv) },

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
    to: (t) => {
      return index.includes(t) ? value[index.indexOf(pathname)] : top;
    },
    set_state(t) {
      this.state = t;
      this.pathname = PathName();
    }
  }
}

export { createSponge };