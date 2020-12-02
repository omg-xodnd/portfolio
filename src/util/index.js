export function sleep(ms = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

export function createObserver(onIntersect, options = { threshold: 1 }) {
  return new IntersectionObserver(onIntersect, options);
}

export async function smoothScrollTo(targetY, unit = 40) {
  const getDiff = () => targetY - window.scrollY;

  while (1) {
    await sleep(15);
    let diff = getDiff();
    if (Math.abs(diff) < unit) {
      window.scrollTo(0, targetY);
      break;
    } else {
      window.scrollBy(0, Math.sign(diff) * unit);  
    };
  };
}