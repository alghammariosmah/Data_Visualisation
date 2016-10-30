var w = 1000;
var h = 600;
var padding = 30;

data1 = data


Germany = [];
Belguim = [];
France = [];
Greece = [];
Hungary = [];
Itay = [];
Netherlands = [];
Poland = [];
Portugal = [];
Spain = [];
Romania = []; // doesn't exist in the dataset


latestdict = [];

for (var i = 0; i < 119; i++){

	if ( data1[i].name == "Germany" || data1[i].name =="France" || data1[i].name =="Italy" || data1[i].name =="Spain" || data1[i].name =="Poland" || data1[i].name =="Netherlands" || data1[i].name =="Belgium" || data1[i].name =="Greece" || data1[i].name =="Portugal" || data1[i].name =="Hungary"){
		countries = data[i].name;

		for (var j = 5; j <= 17; j++) {
			outyear = data[i].years[j].year;
			outpopulation = data[i].years[j].population;

            latestdict.push([outyear,outpopulation]);

            if (countries == "Germany"){
                Germany.push([outyear,outpopulation])
            }else if(countries == "Belgium"){
                Belguim.push([outyear,outpopulation])
            }else if(countries == "France") {
                France.push([outyear,outpopulation])
            }else if(countries == "Greece"){
                Greece.push([outyear,outpopulation])
            }else if(countries == "Italy") {
                Itay.push([outyear,outpopulation])
            }else if(countries == "Hungary") {
                Hungary.push([outyear,outpopulation])
            }else if(countries == "Poland") {
                Poland.push([outyear,outpopulation])
            }else if(countries == "Netherlands") {
                Netherlands.push([outyear,outpopulation])
            }else if(countries == "Portugal") {
                Portugal.push([outyear,outpopulation])
            }else if(countries == "Spain") {
                Spain.push([outyear,outpopulation])
            }

		}

	}

}

var xScale = d3.scale.linear()
    .domain([d3.min(Germany, function (d) {
        return d[0]
    }),d3.max(Germany, function (d) {
        return d[0]
    })])
    .range([padding, w-padding]);
//var yScale = d3.scale.linear()
//	.domain([d3.min(newdict1, function (d) {return d[Task_1];}),d3.max(newdict1, function(d) { return d[Task_1];})])
//	.range([h - padding, padding]);

var yScale = d3.scale.linear()
    .domain([d3.min(latestdict, function (d) {
        return d[1]
    }), d3.max(latestdict, function (d) {
        return d[1]
    })])
    .range([h-padding, padding]);


var xAxis = d3.svg.axis()
	.scale(xScale)
	.orient("Bottom")
	.ticks(10);


var line = d3.svg.line()
    .x(function(d) { return xScale(d[0]); })
    .y(function(d) { return yScale(d[1]); })
    .interpolate("basis");

var svg = d3.selectAll("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.append("g")
	.attr("class", "axis")
	.attr("transform", "translate(0," + (h- padding) + ")")
	.call(xAxis);


svg.append("path")
    .attr("class", "line1")
    .attr("d", line(Germany))
svg.append("path")
    .attr("class", "line2")
    .attr("d", line(France))
svg.append("path")
    .attr("class", "line3")
    .attr("d", line(Itay))
svg.append("path")
    .attr("class", "line4")
    .attr("d", line(Spain))
svg.append("path")
    .attr("class", "line5")
    .attr("d", line(Poland))
svg.append("path")
    .attr("class", "line6")
    .attr("d", line(Netherlands))
svg.append("path")
    .attr("class", "line7")
    .attr("d", line(Belguim))
svg.append("path")
    .attr("class", "line8")
    .attr("d", line(Greece))
svg.append("path")
    .attr("class", "line9")
    .attr("d", line(Portugal))
svg.append("path")
    .attr("class", "line10")
    .attr("d", line(Hungary))




