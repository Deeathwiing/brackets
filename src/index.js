module.exports = function check(str, bracketsConfig) {
    let comp;
    while (str.length !== 0) {
        for (brackets of bracketsConfig) {
            let temp = brackets.join("");
            str = str.replace(temp, "");
        }

        if (str === comp) {
            break;
        }
        comp = str;
    }
    return str.length === 0;
};
