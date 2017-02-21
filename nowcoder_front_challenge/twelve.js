/**
 * Created by CatM on 2017/2/21.
 */
// 统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
// 1. 不限制 key 的顺序
// 2. 输入的字符串参数不会为空
// 3. 忽略空白字符
// demo:count('hello world') => {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
function count(str) {
  var t = /\S/g; //匹配一个非空白字符
  var obj = {};
  str.replace(t,function (m) {
    if(obj[m] === undefined){
      obj[m] = 1;
    }else{
      obj[m]++;
    }
  })
  return obj;
}
console.log(count('hello world'));