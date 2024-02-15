function removeChars (string, chars) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        let removeChars = false;


        for (let j = 0; j < chars.length; j++) {
            const char = chars[j];

            if (letter === char) {
                removeChars = true;
            }
        }

        if (!removeChars) {
            result += letter;
        }
    }

    return result;
}

const string = prompt("Введіть рядок:");
const chars = prompt("Введіть символи для видалення через кому:").split('');

alert(removeChars(string, chars));
