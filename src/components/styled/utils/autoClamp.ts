/**
 * Smooth transition between two values as the viewport width changes.
 *
 * @param from             px
 * @param to               px
 * @param minViewportWidth px
 * @param maxViewportWidth px
 * @return clamp() CSS function
 */
function autoClamp(
  from: number,
  to: number,
  minViewportWidth: number = 375,
  maxViewportWidth: number = 1440,
) {
  const deltaViewportWidth = `(${maxViewportWidth} - ${minViewportWidth})`;
  const factor = `((100vw - ${minViewportWidth}px) / ${deltaViewportWidth})`;

  let preferredValue;
  if (from < to) {
    preferredValue = `${from}px + (${to} - ${from}) * ${factor}`;
    return `clamp(${from}px, ${preferredValue}, ${to}px)`;
  }
  preferredValue = `${from}px - (${from} - ${to}) * ${factor}`;
  return `clamp(${to}px, ${preferredValue}, ${from}px)`;
}

export default autoClamp;
