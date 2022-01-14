(() => {
    let data = [
        {
            'text':'Ko-fi', 
            'color':'#86c3ee', 
            'image':'https://storage.ko-fi.com/cdn/cup-border.png', 
            'link':'https://ko-fi.com/maohupi'
        }, 
        {
            'text':'Liker.Land', 
            'color':'#56b893', 
            'image':'', 
            'link':'https://liker.land/jhou5846/civic'
        }
    ], 
    div = document.createElement('div');
    data.forEach(index => {
        let button = document.createElement('button'), 
        img = document.createElement('div'), 
        text = document.createElement('span');
        // img
        img.src = index['image'];
        button.appendChild(img);
        // text
        text.innerText = index['text'];
        text.style.fontSize = '2vw';
        button.appendChild(text);
        // button
        button.style.backgroundColor = index['color'];
        button.style.borderRadius = '100vw';
        button.style.padding = '0.2vw 1vw';
        button.style.margin = '1vw';
        div.appendChild(button);
    });
    // div
    div.style.display = 'flex';
    div.style.position = 'fixed';
    div.style.bottom = '0px';
    div.style.left = '0px';
    div.style.zIndex = '100';
    document.body.appendChild(div);
})(); 
