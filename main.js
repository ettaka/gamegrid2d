//import {hello} from './modules/hello.js';
//hello();

import {draw_grid} from './modules/draw.js';

var canvas = document.createElement('canvas'); // creates new canvas element
canvas.id = 'canvas'; 
canvas.height = 400; 
canvas.width = 400; 
document.body.appendChild(canvas); 

var grid = {
	i: 10,
	j: 10,
	cell_w: 32,
	cell_h: 32,
	line_width: 1,
	color: "red"
}

var ctx = canvas.getContext("2d");

draw_grid(ctx, grid);
