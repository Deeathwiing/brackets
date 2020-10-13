// module.exports = 
function check(str, bracketsConfig) {
  
  let comp;
  while (str.length !==0) {
    for (brackets of bracketsConfig) {
        let temp = brackets.join('');
        str = str.replace(temp , '');
    }

    if (str === comp) {
      break;
    }
    comp = str;
  }
  return str.length === 0;

}

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

console.log(check('())(', config1));
