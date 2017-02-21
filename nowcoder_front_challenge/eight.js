/**
 * Created by CatM on 2017/2/21.
 */
// 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
// 否则如果字符 Unicode 编码 > 255 则长度为 2
/**
 * 思路:题目意思是,当第二个参数为true的时候,则每个字符长度为1,返回s.length
 * 当第二个参数不为true,且字符的Unicode编码>255的时候,该字符长度为2
 * s.charCodeAt(index)
 * index:一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。
 * charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。*/
function strLength(s, bUnicode255For1) {
  if(bUnicode255For1){
    return s.length;
  }else{
    var len = s.length;
    var l = 0;
    for(var i = 0; i < len; i++){
      if(s.charCodeAt(i)>255){
        l += 2;
      }else{
        l += 1;
      }
    }
    return l;
  }
}
console.log(strLength('hello world, 牛客', false));
