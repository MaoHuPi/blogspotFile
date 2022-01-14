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
        button.appendChild(text);
        // button
        button.style.backgroundColor = index['color'];
        div.appendChild(button);
    });
    // div
    div.style.display = 'flex';
    document.body.appendChild(div);
})(); 
