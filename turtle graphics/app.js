var turtleCanvas = document.getElementById('turtleCanvas');
var turtleContext = turtleCanvas.getContext('2d');

var imageCanvas = document.getElementById('imageCanvas');
var imageContext = imageCanvas.getContext('2d');

var turtle;
function initialise() {
    turtle = {
        pos: {
            x: 0,
            y: 0
        },
        angle: 0,
        width: 1,
        visible: true,
        redraw: true, // does this belong here?

        colour: { r: 0, g: 0, b: 0, a: 1 },
    };
    imageCanvas.lineWidth = turtle.width;
    imageCanvas.strokeStyle = "black";
    imageCanvas.globalAlpha = 1;
}

// draw the turtle and the current image
function draw() {
    clearContext(turtleContext);
    
        var x = turtle.pos.x;
        var y = turtle.pos.y;
        var w = 10;
        var h = 15;
        turtleContext.save();
        // use canvas centered coordinates facing upwards
        centerCoords(turtleContext);
        // move the origin to the turtle center
        turtleContext.translate(x, y);
        // rotate about the center of the turtle
        // console.log(turtle);
        turtleContext.rotate(-turtle.angle);
        // move the turtle back to its position
        turtleContext.translate(-x, -y);
        // draw the turtle icon
        turtleContext.beginPath();
        turtleContext.moveTo(x - w / 2, y);
        turtleContext.lineTo(x + w / 2, y);
        turtleContext.lineTo(x, y + h);
        // turtleContext.closePath();
        turtleContext.fillStyle = "blue";
        turtleContext.fill();
        turtleContext.restore();
        turtleContext.drawImage(imageCanvas, 0, 0, 300, 300, 0, 0, 300, 300);
}
function clearContext(context) {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.restore();
}
function centerCoords(context) {
    var width = context.canvas.width;
    var height = context.canvas.height;
    context.translate(width / 2, height / 2);
    context.transform(1, 0, 0, -1, 0, 0);
}
function left(angle) {
    turtle.angle -= degToRad(angle);
    draw();
}
function right(angle) {
    turtle.angle += degToRad(angle);
    draw();
}
function degToRad(deg) {
    return deg / 180 * Math.PI;
}
function drawIf() {
    if (turtle.redraw) draw();
}
function farword(distance) {
    // console.log(turtle);
    imageContext.moveTo(turtle.pos.x, turtle.pos.y);
    imageContext.lineTo(turtle.pos.x + distance * Math.sin(turtle.angle), turtle.pos.y + distance * Math.cos(turtle.angle));
    imageContext.stroke();
    turtle.pos.x = turtle.pos.x + distance * Math.sin(turtle.angle);
    turtle.pos.y = turtle.pos.y + distance * Math.cos(turtle.angle);
    // console.log(turtle);
    draw();
}
initialise();
draw();
centerCoords(imageContext);
