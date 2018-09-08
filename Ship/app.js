var drawGrid = function (w, h, id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = w;
    ctx.canvas.height = h;
    console.log(ctx.canvas.width, ctx.canvas.height);

    for (x = 20; x <= w - 20; x += 20) {
        for (y = 20; y <= h - 20; y += 20) {
            ctx.moveTo(x, 20);
            ctx.lineTo(x, h - 20);
            ctx.strokeStyle = "#000000";
            ctx.stroke();
            ctx.moveTo(20, y);
            ctx.lineTo(w - 20, y);
            ctx.strokeStyle = "#000000";
            ctx.stroke();
        }
    }
    ctx.beginPath();
    ctx.lineWidth = 5
    ctx.strokeStyle = "#FF0000";
    ctx.moveTo(100, 460);
    ctx.lineTo(400, 460);
    ctx.stroke();
    ctx.moveTo(100, 460);
    ctx.lineTo(60, 400);
    ctx.stroke();
    ctx.moveTo(400, 460);
    ctx.lineTo(460, 400);
    ctx.stroke();
    ctx.moveTo(60, 400);
    ctx.lineTo(460, 400);
    ctx.stroke();
    ctx.moveTo(140, 380);
    ctx.lineTo(240, 380);
    ctx.stroke();
    ctx.moveTo(240, 380);
    ctx.lineTo(240, 280);
    ctx.stroke();
    ctx.moveTo(140, 380);
    ctx.lineTo(240, 280);
    ctx.stroke();
    ctx.moveTo(280,380);
    ctx.lineTo(280,180);
    ctx.stroke();
    ctx.moveTo(280,380);
    ctx.lineTo(400,380);
    ctx.stroke();
    ctx.moveTo(400,380);
    ctx.lineTo(280,180);
    ctx.stroke();

};


drawGrid(500, 500, "canvas");