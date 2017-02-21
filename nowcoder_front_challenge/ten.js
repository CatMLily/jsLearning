/**
 * Created by CatM on 2017/2/21.
 */
// 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
// 1. rgb 中每个 , 后面的空格数量不固定
// 2. 十六进制表达式使用六位小写字母
// 3. 如果输入不符合 rgb 格式，返回原始输入
function rgb2hex(sRGB) {
  var t = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
  var mat = sRGB.match(t);
  if(!mat){
    return sRGB;
  }else{
    var ret = '#';
    for(var i = 1; i <= 3; i++){
      var m = parseInt(mat[i]);
      if(m<=255&&m>=0){
        // 如果转为16进制只有一位 则要补0
        ret += (m<16?'0'+m.toString(16):m.toString(16))
      }else{
        return sRGB;
      }
    }
    return ret;
  }
}
console.log(rgb2hex('rgb(255,     255,    255)'));