var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
console.log(context);
function centerCoords(context) {
    var width = context.canvas.width;
    var height = context.canvas.height;
    context.translate(width / 2, height / 2);
    context.transform(1, 0, 0, -1, 0, 0);
}
centerCoords(context);
var sinWavePoints = [];
for (var i = -100; i < 100; i++) {
    const point = {
        x: i*10,
        y: Math.sin(i)*10
    }
    sinWavePoints.push(point);
}
console.log(sinWavePoints);
for (var i = 0; i < sinWavePoints.length-1; i++) {
    context.moveTo(sinWavePoints[i].x, sinWavePoints[i].y);
    context.lineTo(sinWavePoints[i + 1].x, sinWavePoints[i + 1].y);
    context.stroke();
}