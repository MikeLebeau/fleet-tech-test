// Found here https://www.freecodecamp.org/news/javascript-debounce-example/
export default function debounce(callback: Function, timeout: number = 300) {
    let timer: number;

    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => { callback.apply(this); }, timeout);
    };
}