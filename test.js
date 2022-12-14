const { ColorIn, registerCanvas } = require('./dist/colorin');
const { createCanvas } = require('@napi-rs/canvas');
const canvas = createCanvas(1, 1);
registerCanvas(canvas);
const colors = [
    [0, '#FFF7ED'],
    [5, '#FFF7ED'],
    [10, '#FDD59F'],
    [15, '#FC8E58'],
    [20, '#EF6546'],
    [25, '#D82C19']
];
const ci = new ColorIn(colors);
console.log(ci.getColor(11));
