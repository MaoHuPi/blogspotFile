(() => {
  let likeBtn = document.querySelector('#likeBtn'), 
  iframe = document.createElement('iframe');
  iframe.src = `https://button.like.co/in/embed/jhou5846/button/?referrer=${location.href}`;
  iframe.style.width= '50%';
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('data-ruffle-polyfilled', '');
  likeBtn.appendChild(iframe);
})();
