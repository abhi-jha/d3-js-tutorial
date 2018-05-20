var w = 300;
var h = 100;

var padding = 5;
var dataset = [5,10,14,20,25];

var svg = d3.select("body").append("svg").attr("width",w).attr("height",h);

svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", function(d,i){return  i *(w/dataset.length);})
.attr("y",function(d){return h-d;})
.attr("width", w/dataset.length-padding)
.attr("height",function(d){
    return d*4;
})
.attr("fill",function(d){return "rgb(" + (d*10)+",0,0)"});

w = 300;
h = 100;

padding = 3;
dataset = [5,10,14,20,25,30,40,56,67,78,89,90];

//Change the following two control strings to vary r,g,b
var str1 = "rgb(0,0,";
var str2 = ")";

var draw = function(w,h,padding,dataset,str1,str2){
var svg = d3.select("body").append("svg").attr("width",w).attr("height",h);
svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", function(d,i){return  i *(w/dataset.length);})
.attr("y",function(d){return h-d;})
.attr("width", w/dataset.length-padding)
.attr("height",function(d){
    return d*4;
})
.attr("fill",function(d){return str1+(d*10)+str2});
}

draw(w,h,padding,dataset,str1,str2);
draw(w,h,padding,dataset,"rgb(0,",",0)");
draw(w,h,padding,dataset,"rgb(",",0,0)");
draw(w,h,padding,dataset,str1,str2);