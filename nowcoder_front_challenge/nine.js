/**
 * Created by CatM on 2017/2/21.
 */
// 正则的运用 test返回一个boolean值,exec返回一个
function isAvailableEmail(sEmail) {
  var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
  return reg.test(sEmail);
}