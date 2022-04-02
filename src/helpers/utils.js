/**
 * Delay
 */
export function delay(timeout = 200, data = null) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
}
