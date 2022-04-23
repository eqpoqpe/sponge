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
  const rem_mode_env = {};

  Object.defineProperties(rem_mode_env, {
    "lock": {
      value: false,
      writable: false
    },
    "unlock": {
      value: true,
      writable: false
    }
  });

  const sl = createSl();

  const Handle = (e) => {
    if (sl.pathname !== PathName()) {

      // set lock
      sl.set_state(rem_mode_env.lock);
    }

    if (sl.state && sl.includes(PathName())) {
      sl.reset(PathName(), Capture());
    }
  };

  Listener(Handle);

  return {
    to() {
      const pathname = PathName();

      if (!sl.includes(PathName())) {
        scrollTo(top);
        sl.push(PathName()).set(Capture());
      }

      if (sl.includes(pathname)) {
        const [x, y] = sl.position(pathname);

        window.scrollTo(x, y);
      }

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
  
  // saved in stack
  // default to false
  // state of unlock lock
  var state = false;
  var pathname = null;
  
  // private
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
    includes(sv) { return index.includes(sv) },

    /**
     * Only get first key
     * 
     * @param {string} s
     * 
     * @returns {*}
     */
    push(s) {
      index.push(s);

      return { set(v) { value.push(v); } }
    },

    /**
     * 
     * @param {*} s
     * @param {*} n
     */
    reset(s, n) { value[index.indexOf(s)] = n; },
    get: () => [index, value],

    /**
     * @returns {[number, number]}
     */
    position(t) {
      // return index.includes(t) ? value[index.indexOf(pathname)] : top;
      return value[index.indexOf(t)];
    },
    set_state(t) {
      this.state = t;
      this.pathname = PathName();
    }
  }
}

export { createSponge };
