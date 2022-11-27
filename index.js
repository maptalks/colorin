let canvas;
function getCanvas() {
    const width = 100, height = 10;
    if (!canvas) {
        if (OffscreenCanvas) {
            canvas = new OffscreenCanvas(width, height);
        } else {
            canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
        }
    }
    return canvas;
}

export class ColorIn {
    constructor(colors) {
        if (!Array.isArray(colors)) {
            console.error('colors is not array');
            return;
        }
        if (colors.length < 2) {
            console.error('colors.length should >1');
            return;
        }
        this.colors = colors;
        let min = Infinity, max = -Infinity;
        for (let i = 0, len = colors.length; i < len; i++) {
            const value = colors[i][0];
            min = Math.min(value, min);
            max = Math.max(value, max);
        }
        this.min = min;
        this.max = max;
        this.valueOffset = this.max - this.min;
        this._initImgData();
    }

    getImageData() {
        return this.imgData;
    }

    _initImgData() {
        const canvas = getCanvas();
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        const colors = this.colors;
        const valueOffset = this.valueOffset;
        for (let i = 0, len = colors.length; i < len; i++) {
            const [stop, color] = colors[i];
            const s = (stop - this.min) / valueOffset;
            gradient.addColorStop(s, color);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }

    getColor(stop) {
        stop = Math.max(this.min, stop);
        stop = Math.min(stop, this.max);
        const s = (stop - this.min) / this.valueOffset;
        const x = Math.round(s * this.imgData.width);
        const idx = x * 4;
        const r = this.imgData.data[idx];
        const g = this.imgData.data[idx + 1];
        const b = this.imgData.data[idx + 2];
        const a = this.imgData.data[idx + 3];
        return [r, g, b, a];
    }
}
