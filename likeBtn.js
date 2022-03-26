(() => {
  let likeBtn = document.querySelector('#likeBtn'), 
  iframe = document.createElement('iframe');
  iframe.src = `https://button.like.co/in/embed/jhou5846/button/?referrer=${}`;
  likeBtn.appendChild(iframe);
})();
