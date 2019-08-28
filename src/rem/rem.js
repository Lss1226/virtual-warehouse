function fnRem() {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
}
fnRem();
window.onresize=fnRem;
export default fnRem;

// (function (doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function () {
//       var clientWidth = docEl.clientWidth;
//       if (!clientWidth) return;
//       if(clientWidth>=640){
//         docEl.style.fontSize = '100px';
//       }else{
//         docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
//       }
//     };
//
//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);


// export default !function(){
//   function e() {
//     var rem = (document.documentElement.clientWidth > 720 ? 720 : document.documentElement.clientWidth) / 38;
//     document.documentElement.style.fontSize = rem + "px";
//     var realitySize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
//     if (rem !== realitySize) {
//       rem = rem * rem / realitySize;
//       document.documentElement.style.fontSize = rem + 'px';
//     }
//   }
//   var n = null;
//   window.addEventListener("resize", function () {
//     clearTimeout(n), n = setTimeout(e, 300)
//   }, !1), e()
// }(window);
