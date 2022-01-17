function removeCodeMark(script){
  if(typeof(script) == 'object'){
    script = document.querySelector(script).innerText;
  }
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
