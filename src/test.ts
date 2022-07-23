/* const loading: string[] = ['⠋', '⠙', '⠸', '⠴', '⠦', '⠇'];

function wait(delay: number) {
  const time = new Date();
  time.setMilliseconds(time.getMilliseconds() + delay);
  while (time >= new Date()) {}
}

while (true) {
  loading.forEach((element) => {
    console.clear();
    console.log(element);
    wait(200);
  });
}
 */

function wait(delay: number) {
  (async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(''), delay);
    });
  })();
}
