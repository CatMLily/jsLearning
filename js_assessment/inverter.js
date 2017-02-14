/**
 * Created by CatM on 2017/2/10.
 */
/**
 * 主要是进制转换系列,用的是toString
 * toString() 方法返回指定对象的字符串形式。
 * 参数radix可选,规定表示数字的基数，使 2 ~ 36 之间的整数。*/
// 1.获取数字 num 二进制形式第 bit 位的值。注意：
// bit 从 1 开始
// 返回 0 或 1
// 举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1
function valueAtBit(num, bit) {
  var num2 = num.toString(2);
  var len = num2.length;
  return num2.charAt(len-bit);
}

// 2.给定二进制字符串，将其换算成对应的十进制数字
function base10(str) {
  var str2 = parseInt(str,2);
  return str2;
}

// 3.将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
// 主要是字符串拼接
function convertToBinary(num) {
  var num2 = num.toString(2);
  while(num2.length < 8) {
    num2 = '0'+num2;
  }
  return num2;
}

// 4.求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
// number.toFixed() 选择保留小数点后多少位,确定精度
function multiplies(a, b) {
  var mul = a*b;
  return mul.toFixed(3);
}
