function removeCodeMark(script){
  script = script.split('\n');
  script.pop();
  script.shift();
  return(script);
//   script.replace(/^./, '').replace(/.$/, '');
}
function runCode(script){
  eval(script);
}
function runCodeMark(id){
  runCode(removeCodeMark(document.querySelector(id).innerText));
}
