export function sleep(ms = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

let isScrollActive = false;
export async function smoothScrollTo(targetY, unit = 40) {
  const getDiff = () => targetY - window.scrollY;
  
  if (isScrollActive) { return };
  
  isScrollActive = true;
  while (1) {
    await sleep(13);
    let diff = getDiff();
    if (Math.abs(diff) < unit) {
      window.scrollTo(0, targetY);
      isScrollActive = false;
      break;
    } else {
      window.scrollBy(0, Math.sign(diff) * unit);  
    };
  };
}