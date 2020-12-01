export function sleep(ms = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

export function createObserver(onIntersect, options = { threshold: 1 }) {
  return new IntersectionObserver(onIntersect, options);
}

export async function smoothScrollTo(targetY, unit = 10) {
  const getDiff = () => targetY - window.scrollY;
  const getUnit = (diff = getDiff()) => (
    Math.abs(diff) < 30 ? diff : Math.sign(diff) * unit
  );
  while (getDiff() !== 0) {
    await sleep(15);
    window.scrollBy(0, getUnit());
  };
}