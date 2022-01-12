/*
程式碼取自：
https://blog.imfing.com/2020/04/markdown-in-blogger/
*/
var showdownOption = {
  'simplifiedAutoLink': true,
  'strikethrough': true,
  'tables': true,
  'tasklists': true
}
var converter = new showdown.Converter(showdownOption);
var posts = document.querySelectorAll(".post-body");
Array.prototype.forEach.call(posts, function (el, i) {
  var idx = el.innerHTML.indexOf("!markdown");
  if (idx != -1 && idx <= 1) {
    let md = el.innerHTML
    .replace(/\n&amp;gt;/g, '\n>')  // fix quotes
    .replace("!markdown", "")  // remove flag
    .split('&lt;').join('<')
    .split('&gt;').join('>');   
    el.innerHTML = converter.makeHtml(md)
    .replace(/&amp;amp;/g, "&amp;"); // remove redundant escape
  }
});
