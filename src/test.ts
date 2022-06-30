const loading: string[] = ['⠋', '⠙', '⠸', '⠴', '⠦', '⠇'];

function wait(delay: number): void {
  const time = new Date();
  time.setMilliseconds(time.getMilliseconds() + delay);
  while (time >= new Date()) { /* */ }
}

for (;;) {
  loading.forEach((element) => {
    console.clear();
    console.log(element);
    wait(50);
  });
}
