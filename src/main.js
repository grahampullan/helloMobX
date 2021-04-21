import{DataStore, DataObject} from "./store.js";
import{circles} from "./circles.js";
import{autorun, runInAction} from "mobx";
import * as d3 from "d3";

let nPtsStart = 10;
const myStore = new DataStore();
myStore.addDataObject( generateData(nPtsStart) );

const appDiv = d3.select("#app");

const plotDiv = appDiv.append("div");

circles(plotDiv, myStore.dataObjects[0].data); 

const slider = appDiv.append("input")
	.attr("type","range")
	.attr("min",1)
	.attr("max",50)
	.attr("value",10)
	.attr("step",1);

slider.on("input", function() { 
	const newPts = generateData(this.value); 
	myStore.dataObjects[0].data = newPts;
} );

const button = appDiv.append("input")
	.attr("type","button")
	.attr("value","Change all sizes");

const button2 = appDiv.append("input")
	.attr("type","button")
	.attr("value","Change one pt");

button.on("click", function() {
	const pts = myStore.dataObjects[0].data;
	const newPts = pts.map( pt => ({x:pt.x, y:pt.y, r:Math.random()*20}));
	myStore.dataObjects[0].data = newPts;
})

button2.on("click", function() {
	runInAction( () => {
		myStore.dataObjects[0].data[0]={x:Math.random(),y:Math.random(),r:Math.random()*40};
	});
})


function generateData(nPts) {
	const pts = [];
	for (let i=0; i<nPts; i++){
		let pt={};
		pt.x = Math.random();
		pt.y = Math.random();
		pt.r = Math.random()*20;
		pts.push(pt);
	}
	return pts;
}












