function removeCodeMark(text, type = 'script'){
  if(type == 'element'){
    text = document.querySelector(text).innerText;
  }
  text = text.split('\n');
  text.pop();
  text.shift();
  return(text);
//   script.replace(/^./, '').replace(/.$/, '');
}
function runCode(script){
  eval(script);
}
function runCodeMark(id){
  runCode(removeCodeMark(document.querySelector(id).innerText));
}
