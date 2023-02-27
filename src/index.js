module.exports = function check(str, bracketsConfig) {
  let closing = [];
  for (let i = 0; i < str.length; i++){
      let index;
      for (let j = 0; j < bracketsConfig.length; j ++) {
          if (bracketsConfig[j][0] == str.charAt(i)){
              index = j;
              break;
          }
      }
      switch (true) {
          case str.charAt(i) == closing[closing.length-1]:
              closing.pop()
              break;
          case index !== undefined:
              closing.push(bracketsConfig[index][1]);
              break;
          default:
              return false;
      }
  }
  return closing.length == 0;
}