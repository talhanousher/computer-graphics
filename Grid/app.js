var drawGrid = function (w, h, id) {
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = w;
    ctx.canvas.height = h;
    console.log(ctx.canvas.width, ctx.canvas.height);

    for (x = 20; x <= w-20; x += 20) {
        for (y = 20; y <= h-20; y += 20) {
            ctx.moveTo(x, 20);
            ctx.lineTo(x, h-20);
            ctx.stroke();
            ctx.moveTo(20, y);
            ctx.lineTo(w-20, y);
            ctx.stroke();
        }
    }

};


drawGrid(500, 500, "canvas");