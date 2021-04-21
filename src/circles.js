import * as d3 from "d3";
import {autorun} from "mobx";

export function circles(div, data){

	const x = d3.scaleLinear()
		.range([0,400]);

	const y = d3.scaleLinear()
		.range([400,0]);

	const svg = div.append("svg")
		.attr("width",400)
		.attr("height",400);
			
	autorun( () => {
		svg.selectAll(".point")
			.data(data)
			.join("circle")
				.attr("class", "point")
				.attr("cx", d => x(d.x) )
				.attr("cy", d => y(d.y) )
				.attr("r",  d => d.r)
				.attr("fill", "steelblue")
				.attr("stroke","red");
	
				 
	});
}