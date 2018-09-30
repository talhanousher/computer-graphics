var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var A = [{ x: 10 * 1.3, y: 10 * 1.3 }, { x: -10 * 1.3, y: 10 * 1.3 }, { x: -10 * 1.3, y: -10 * 1.3 }, { x: 10 * 1.3, y: -10 * 1.3 }];
var B = [{ x: 50 * 1.3, y: -20 * 1.3 }, { x: 40 * 1.3, y: 30 * 1.3 }, { x: 40 * 1.3, y: 0 * 1.3 }, { x: 30 * 1.3, y: -20 * 2 }];
var C1 = [];
var C2 = [];
var C3 = [];
var C4 = [];
var C5 = [];
var C6 = [];
var C7 = [];
for (var i = 0; i < A.length; i++) {
    var point = {
        x: A[i].x * (1 - 0.5) + B[i].x * 0.5,
        y: A[i].y * (1 - 0.5) + B[i].y * 0.5
    }
    C1.push(point);
}
for (var i = 0; i < A.length; i++) {
    var point = {
        x: A[i].x * (1 - (1)) + B[i].x * (1),
        y: A[i].y * (1 - (1)) + B[i].y * (1)
    }
    C6.push(point);
}
for (var i = 0; i < A.length; i++) {
    var point = {
        x: A[i].x * (1 - (1.5)) + B[i].x * (1.5),
        y: A[i].y * (1 - (1.5)) + B[i].y * (1.5)
    }
    C4.push(point);
}
for (var i = 0; i < A.length; i++) {
    var point = {
        x: A[i].x * (1 - (2)) + B[i].x * (2),
        y: A[i].y * (1 - (2)) + B[i].y * (2)
    }
    C7.push(point);
}
for (var i = 0; i < A.length; i++) {
    var point = {
        x: A[i].x * (1 - (-1)) + B[i].x * (-1),
        y: A[i].y * (1 - (-1)) + B[i].y * (-1)
    }
    C2.push(point);
}
for (var i = 0; i < A.length; i++) {
    var point = {
        x: A[i].x * (1 - (-0.5)) + B[i].x * (-0.5),
        y: A[i].y * (1 - (-0.5)) + B[i].y * (-0.5)
    }
    C3.push(point);
}
for (var i = 0; i < A.length; i++) {
    var point = {
        x: A[i].x * (1 - (-1.5)) + B[i].x * (-1.5),
        y: A[i].y * (1 - (-1.5)) + B[i].y * (-1.5)
    }
    C5.push(point);
}
function centerCoords(context) {
    var width = context.canvas.width;
    var height = context.canvas.height;
    context.translate(width / 2, height / 2);
    context.transform(1, 0, 0, -1, 0, 0);
}
centerCoords(context);
for (var i = 0; i < A.length - 1; i++) {
    context.moveTo(A[i].x, A[i].y);
    context.lineTo(A[i + 1].x, A[i + 1].y);
    context.stroke();
}
context.moveTo(A[i].x, A[i].y);
context.lineTo(A[0].x, A[0].y);
context.stroke();


for (var i = 0; i < B.length - 1; i++) {
    context.moveTo(B[i].x, B[i].y);
    context.lineTo(B[i + 1].x, B[i + 1].y);
    context.stroke();
}
context.moveTo(B[i].x, B[i].y);
context.lineTo(B[0].x, B[0].y);
context.stroke();

for (var i = 0; i < C1.length - 1; i++) {
    context.moveTo(C1[i].x, C1[i].y);
    context.lineTo(C1[i + 1].x, C1[i + 1].y);
    context.stroke();
}
context.moveTo(C1[i].x, C1[i].y);
context.lineTo(C1[0].x, C1[0].y);
context.stroke();
console.log(C2);

for (var i = 0; i < C2.length - 1; i++) {
    context.moveTo(C2[i].x, C2[i].y);
    context.lineTo(C2[i + 1].x, C2[i + 1].y);
    context.stroke();
}
context.moveTo(C2[i].x, C2[i].y);
context.lineTo(C2[0].x, C2[0].y);
context.stroke();

for (var i = 0; i < C3.length - 1; i++) {
    context.moveTo(C3[i].x, C3[i].y);
    context.lineTo(C3[i + 1].x, C3[i + 1].y);
    context.stroke();
}
context.moveTo(C3[i].x, C3[i].y);
context.lineTo(C3[0].x, C3[0].y);
context.stroke();


for (var i = 0; i < C4.length - 1; i++) {
    context.moveTo(C4[i].x, C4[i].y);
    context.lineTo(C4[i + 1].x, C4[i + 1].y);
    context.stroke();
}
context.moveTo(C4[i].x, C4[i].y);
context.lineTo(C4[0].x, C4[0].y);
context.stroke();

for (var i = 0; i < C5.length - 1; i++) {
    context.moveTo(C5[i].x, C5[i].y);
    context.lineTo(C5[i + 1].x, C5[i + 1].y);
    context.stroke();
}
context.moveTo(C5[i].x, C5[i].y);
context.lineTo(C5[0].x, C5[0].y);
context.stroke();

for (var i = 0; i < C6.length - 1; i++) {
    context.moveTo(C6[i].x, C6[i].y);
    context.lineTo(C6[i + 1].x, C6[i + 1].y);
    context.stroke();
}
context.moveTo(C6[i].x, C6[i].y);
context.lineTo(C6[0].x, C6[0].y);
context.stroke();

for (var i = 0; i < C7.length - 1; i++) {
    context.moveTo(C7[i].x, C7[i].y);
    context.lineTo(C7[i + 1].x, C7[i + 1].y);
    context.stroke();
}
context.moveTo(C7[i].x, C7[i].y);
context.lineTo(C7[0].x, C7[0].y);
context.stroke();