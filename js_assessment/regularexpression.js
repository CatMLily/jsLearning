/**
 * Created by CatM on 2017/2/13.
 */
// 1.给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
/**看了看题干应该是要考正则表达式的应用,也可以用循环判断str[i]的类型是否为number,
 * 但是明显正则简单很多嘛,
 * 这里可以回顾一下正则表达式的应用*/
function containsNumber(str) {
  var tst = /\d/; // /d代表匹配数字
  return tst.test(str);
}

// 2.给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
// 知识点:反向引用
function containsRepeatingLetter(str) {
  var t = /([a-zA-Z])\1/;
  return t.test(str);
}

// 3.给定字符串 str，检查其是否以元音字母结尾
// 元音字母包括 a，e，i，o，u，以及对应的大写
// 包含返回 true，否则返回 false
/**
 * 主要知识点:结束符$和大小写匹配符i
 * 相关知识:正则里的模式匹配符*/
function endsWithVowel(str) {
  var t = /[a,e,i,o,u]$/i;
  return t.test(str);
}

// 4.给定字符串 str，检查其是否包含 连续3个数字
// 如果包含，返回最新出现的 3 个数字的字符串
// 如果不包含，返回 false
/**
 * 主要知识点:match,匹配指定字符串*/
function captureThreeNumbers(str) {
  var t = /\d{3}/;
  var arr = str.match(t);
  if(arr){
    return arr[0]
  }else{
    return false;
  }
}

// 给定字符串 str，检查其是否符合如下格式
// XXX-XXX-XXXX
// 其中 X 为 Number 类型
/**
 * 注意开始符号^和结束符的$
 * 简单解释
 * 匹配输入的开始。如果多行标志被设置为true，那么也匹配换行符后紧跟的位置。
 * 例如，/^A/ 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'*/
function matchesPattern(str) {
  var t = /^(\d{3}\-){2}\d{4}$/;
  return t.test(str);
}

// 给定字符串 str，检查其是否符合美元书写格式
// 以 $ 开始
// 整数部分，从个位起，满 3 个数字用 , 分隔
// 如果为小数，则小数部分长度为 2
// 正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3
/**
 * 主要知识点: ?符,匹配一次或者零次,'*'匹配零次或多次*/
function isUSD(str) {
  var t = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
  return t.test(str);
}
