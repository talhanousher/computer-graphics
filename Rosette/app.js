var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var vertex = +prompt("Enter Number Of Vertex");
var polygonPoints = [];
function centerCoords(context) {
    var width = context.canvas.width;
    var height = context.canvas.height;
    context.translate(width / 2, height / 2);
    context.transform(1, 0, 0, -1, 0, 0);
}
centerCoords(context);
for (var i = 0; i < vertex; i++) {
    const point = {
        x: 50 * Math.cos(i * 2 * Math.PI / vertex),
        y: 50 * Math.sin(i * 2 * Math.PI / vertex)
    }
    polygonPoints.push(point);
}

for (var i = 0; i < polygonPoints.length - 1; i++) {
    for(var j=0;j<polygonPoints.length;j++){
        console.log(i,j);
        context.moveTo(polygonPoints[i].x, polygonPoints[i].y);
        context.lineTo(polygonPoints[j].x, polygonPoints[j].y);
        context.stroke();
    }
}