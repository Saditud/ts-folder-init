/* function wait(delay: number): void {
    (async (): Promise<void> => {
        await new Promise((resolve) => {
            setTimeout(() => resolve(''), delay);
        });
    })();
} */

export default function wait(delay: number): void {
    const time = new Date();
    time.setMilliseconds(time.getMilliseconds() + delay);
    while (time >= new Date()) {}
}
