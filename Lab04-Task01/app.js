var canvas = document.getElementById('canvas');
console.log(canvas);
var context = canvas.getContext('2d');
console.log(context);

context.moveTo(20, 60);
context.lineTo(40, 80);
context.stroke();

context.moveTo(40, 80);
context.lineTo(100, 80);
context.stroke();

context.moveTo(100, 80);
context.lineTo(120, 60);
context.stroke();


context.moveTo(120, 60);
context.lineTo(20, 60);
context.stroke();


context.moveTo(100, 60);
context.lineTo(80, 20);
context.stroke();


context.moveTo(80, 20);
context.lineTo(60, 60);
context.stroke();

var objectPoints = [
    {
        x: 20,
        y: 60
    }, {
        x: 40,
        y: 80
    }, {
        x: 100,
        y: 80
    }, {
        x: 120,
        y: 60
    }, {
        x: 100,
        y: 60
    }, {
        x: 80,
        y: 20
    }, {
        x: 60,
        y: 60
    }
];
var minx, maxx, miny, maxy, temp;
minx = objectPoints[0].x;
maxx = objectPoints[0].x;
miny = objectPoints[0].y;
maxy = objectPoints[0].y;
for (var i = 0; i < objectPoints.length; i++) {
    if (minx > objectPoints[i].x) {
        minx = objectPoints[i].x;
    }
    if (maxx < objectPoints[i].x) {
        maxx = objectPoints[i].x;
    }
    if (miny > objectPoints[i].y) {
        miny = objectPoints[i].y;
    }
    if (maxy < objectPoints[i].y) {
        maxy = objectPoints[i].y;
    }
}
console.log(minx);
console.log(maxx);
console.log(miny);
console.log(maxy);

context.moveTo(minx,miny);
context.lineTo(maxx,miny);
context.stroke();

context.moveTo(maxx,miny);
context.lineTo(maxx,maxy);
context.stroke();

context.moveTo(maxx,maxy);
context.lineTo(minx,maxy);
context.stroke();

context.moveTo(minx,maxy);
context.lineTo(minx,miny);
context.stroke();