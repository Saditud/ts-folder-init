export default function wait(delay: number): void {
    const time = new Date();
    time.setMilliseconds(time.getMilliseconds() + delay);
    while (time >= new Date()) {}
}
