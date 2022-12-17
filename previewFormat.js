document.querySelectorAll('.post-snippet .snippet-item').forEach(element => {
    element.innerText = element.innerText
        .replaceAll(/!markdown\s*\#*/g, '') // 移除「!markdown」字樣和標題的「#」
        .replaceAll(/\#+/g, '\n') // 移除所有大小之標題的「#」，改為換行
        .replaceAll(/[\*\[\]`_-]\s*/g, '') // 移除其它md語法
        .replaceAll(/\s([0-9]).\s+/g, '\n$1.') // 將條列項目換行
        .replaceAll(/\(.[^\)]*\)/g, ''); // 移除小括號及其包住之文字
});
