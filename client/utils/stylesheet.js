/**
 * @typedef {Object} StyleProperties
 * @property {("flex"|"block"|"none")} [display]
 * @property {("row"|"column")} [flexDirection]
 * @property {("flex-start"|"center"|"flex-end")} [alignItems]
 * @property {("flex-start"|"center"|"flex-end"|"space-between"|"space-around")} [justifyContent]
 * @property {string} [height]
 * @property {string} [backgroundColor]
 * @property {string} [padding]
 * @property {string} [borderRadius]
 * @property {string} [boxShadow]
 * @property {("left"|"center"|"right")} [textAlign]
 * @property {string} [fontSize]
 * @property {("normal"|"bold")} [fontWeight]
 * @property {string} [color]
 * @property {("pointer"|"default")} [cursor]
 * @property {string} [border]
 * @property {string} [marginTop]
 */

/**
 * @template T
 * @param {T} styles
 * @returns {T}
 */
export function create(styles) {
  return styles;
}

export const StyleSheet = { create };
