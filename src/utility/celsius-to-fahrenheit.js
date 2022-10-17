export function toCelsius(fahrenheit) {
    if (fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    return 0;
}
