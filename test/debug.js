
// eslint-disable-next-line no-unused-vars
function showColorPanel(ci) {
    const imgData = ci.getImageData();
    const canvas = document.createElement('canvas');
    canvas.width = imgData.width;
    canvas.height = imgData.height;
    const ctx = canvas.getContext('2d');
    ctx.putImageData(imgData, 0, 0);
    document.body.appendChild(canvas);
}
