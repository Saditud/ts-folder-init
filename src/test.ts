import wait from "./wait";

const loading: string[] = ["⠋", "⠙", "⠸", "⠴", "⠦", "⠇"];

while (true) {  
    loading.forEach((element) => {
        console.clear();
        console.log(element);
        wait(200);
    });
}