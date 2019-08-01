function downloadFile(text, name, type) {
    let a = document.createElement("a");
    let file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a);
    a.click();
}
export default {
    downloadFile
}
