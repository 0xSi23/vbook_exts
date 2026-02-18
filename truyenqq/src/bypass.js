function bypass(url, doc) {
    var cookie = doc.html().match(/document.cookie="(.*?)"/);
    if (cookie) {
        cookie = cookie[1];
        doc = fetch(url).headers({ "Cookie": cookie }).html();
    }
    return doc;
}
