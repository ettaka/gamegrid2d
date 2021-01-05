function draw_cell(ctx, grid, i, j) {
	var x = grid.cell_w * i+grid.line_width/2;
	var y = grid.cell_h * j+grid.line_width/2;
	ctx.beginPath();
	ctx.lineWidth = grid.line_width;
	ctx.strokeStyle = grid.color;
	ctx.rect(x, y, grid.cell_w, grid.cell_h);
	ctx.stroke();
}

function draw_grid(ctx, grid) {
	for(var i=0; i<grid.i; i++) {
		for(var j=0; j<grid.j; j++) {
			draw_cell(ctx, grid, i, j);
		}
	}
}

export {draw_grid};
