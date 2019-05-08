localStorage.setItem("answers", "");

function updateStorage(Value) {
    var l = getStorageLength();
    if (l != 5) {
        var t = localStorage.getItem("answers");
        localStorage.setItem("answers", t + Value);
    }
}

function printStorage() {
    var t = getStorage();
    alert(t);
}

function getStorage() {
    return localStorage.getItem("answers");
}

function getStorageLength() {
    var i = getStorage();
    return i.length;
}
