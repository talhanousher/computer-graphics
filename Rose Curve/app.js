var canvas1 = document.getElementById('canvas1');
var context1 = canvas1.getContext('2d');
var canvas2 = document.getElementById('canvas2');
var context2 = canvas2.getContext('2d');
var canvas3 = document.getElementById('canvas3');
var context3 = canvas3.getContext('2d');

function centerCoords(context) {
    var width = context.canvas.width;
    var height = context.canvas.height;
    context.translate(width / 2, height / 2);
    context.transform(1, 0, 0, -1, 0, 0);
}
centerCoords(context1);
centerCoords(context2);
centerCoords(context3);
var roseCurvePoints = [];
for (var i = 0; i < 2 * Math.PI; i += 0.02) {
    const point = {
        x: 50 * Math.cos(5 * i) * Math.cos(i),
        y: 50 * Math.cos(5 * i) * Math.sin(i)
    }
    roseCurvePoints.push(point);
}
console.log(roseCurvePoints);
for (var i = 0; i < roseCurvePoints.length - 1; i++) {
    context1.moveTo(roseCurvePoints[i].x, roseCurvePoints[i].y);
    context1.lineTo(roseCurvePoints[i + 1].x, roseCurvePoints[i + 1].y);
    context1.stroke();
}


//Bounding Box
var minx = roseCurvePoints[0].x;
var maxx = roseCurvePoints[0].x;
var miny = roseCurvePoints[0].y;
var maxy = roseCurvePoints[0].y;
for (var i = 0; i < roseCurvePoints.length; i++) {
    if (minx > roseCurvePoints[i].x) {
        minx = roseCurvePoints[i].x;
    }
    if (maxx < roseCurvePoints[i].x) {
        maxx = roseCurvePoints[i].x;
    }
    if (miny > roseCurvePoints[i].y) {
        miny = roseCurvePoints[i].y;
    }
    if (maxy < roseCurvePoints[i].y) {
        maxy = roseCurvePoints[i].y;
    }
}
context2.moveTo(minx, miny);
context2.lineTo(maxx, miny);
context2.stroke();

context2.moveTo(maxx, miny);
context2.lineTo(maxx, maxy);
context2.stroke();

context2.moveTo(maxx, maxy);
context2.lineTo(minx, maxy);
context2.stroke();

context2.moveTo(minx, maxy);
context2.lineTo(minx, miny);
context2.stroke();
for (var i = 0; i < roseCurvePoints.length - 1; i++) {
    context2.moveTo(roseCurvePoints[i].x, roseCurvePoints[i].y);
    context2.lineTo(roseCurvePoints[i + 1].x, roseCurvePoints[i + 1].y);
    context2.stroke();
}

//Bounding Circle
var boundingCircle = [];
for (var i = 0; i < 2 * Math.PI; i += 0.02) {
    const point = {
        x: maxx * Math.cos(i),
        y: maxx * Math.sin(i)
    }
    boundingCircle.push(point);
}

for (var i = 0; i < boundingCircle.length-1; i++) {
    context3.moveTo(boundingCircle[i].x, boundingCircle[i].y);
    context3.lineTo(boundingCircle[i + 1].x, boundingCircle[i + 1].y)
    context3.stroke();
}


for (var i = 0; i < roseCurvePoints.length - 1; i++) {
    context3.moveTo(roseCurvePoints[i].x, roseCurvePoints[i].y);
    context3.lineTo(roseCurvePoints[i + 1].x, roseCurvePoints[i + 1].y);
    context3.stroke();
}