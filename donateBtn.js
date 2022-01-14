(() => {
    let data = [
        {
            'text':'Ko-fi', 
            'color':'#86c3ee', 
            'image':'https://blogger.googleusercontent.com/img/a/AVvXsEisGBvxWZnflFbRK59FBh7PstOoYLCs7lomhj1vPkeiVdDhOtDKEUAwKW6ukUqFq1qoWwuC3MvN2MkabiCWzjwx-IP6AAFpXjJ0XgAxRH3vd3cr-unFc-XMPo-dts9HwCj957zWyTYnS6m_gt8xDzDP4Mau80nhdm_2YcqZ5wqBtFV1jkFQeE1wwhMU', 
            'link':'https://ko-fi.com/maohupi'
        }, 
        {
            'text':'Liker.Land', 
            'color':'#56b893', 
            'image':'https://blogger.googleusercontent.com/img/a/AVvXsEhSGU11s7TlRyv2TjU9B45uBuHXf9u-yYB3s3ahCVcuOXa3uPDHr0eyHhlKfgnrlKj2uzvQOMZckVe92xEQY_50xgWr-p04rOsU-5qQtRsmlgcSdsrTa4q7sGOCwfjMxRyMmVvDehJzIxYH3sVOwywlTrp6A3g8-slgkDYnnMMqBmzRfunKG1HfxUeT', 
            'link':'https://liker.land/jhou5846/civic'
        }
    ], 
    div = document.createElement('div');
    data.forEach(index => {
        let button = document.createElement('button'), 
        img = document.createElement('div'), 
        text = document.createElement('span');
        // img
        img.style.backgroundImage = `url('${index['image']}')`;
        img.style.height = '3vw';
        img.style.width = '3vw';
        img.style.backgroundSize = 'contain';
        img.style.backgroundPosition = 'center';
        img.style.backgroundRepeat = 'no-repeat';
        button.appendChild(img);
        // text
        text.innerText = index['text'];
        text.style.fontSize = '2vw';
        text.style.lineHeight = '3vw';
        button.appendChild(text);
        // button
        button.onclick = function(){window.open(index['link'])}
        button.style.backgroundColor = index['color'];
        button.style.display = 'flex';
        button.style.borderRadius = '100vw';
        button.style.padding = '0.2vw 1vw';
        button.style.margin = '0px 0px 1vw 1vw';
        button.style.borderStyle = 'solid';
        button.style.borderColor = 'black';
        button.style.borderWidth = '0.15vw';
        button.style.boxShadow = '0px 0px 0.5vw 0px';
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
