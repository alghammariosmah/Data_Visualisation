var w = 1000;
var h = 600;
var padding = 90;

data1 = data

latestdict = [];

for (var i = 0; i < 119; i++){

	if ( data1[i].name == "Germany" || data1[i].name =="France" || data1[i].name =="Italy" || data1[i].name =="Spain" || data1[i].name =="Poland" || data1[i].name =="Netherlands" || data1[i].name =="Belgium" || data1[i].name =="Greece" || data1[i].name =="Portugal" || data1[i].name =="Hungary"){
		countries = data[i].name;

		for (var j = 5; j <= 17; j++) {
			outyear = data[i].years[j].year;
			outpopulation = data[i].years[j].population;
            outGDP = data[i].years[j].gdp;
            outLifeExpectancy = data[i].years[j].life_expectancy;


            latestdict.push([countries, outpopulation, outGDP, outLifeExpectancy]);

		}

	}

}



//==============================================================================

var xScale = d3.scale.linear()
    .domain([0,d3.max(latestdict, function(d){return d[1]})])
    .range([padding, w-padding]);
var yScale = d3.scale.ordinal()
    .domain(latestdict.map(function (d) {
        return d[0]
    }))
    .rangeRoundBands([padding, h-padding], 0.1);
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .tickValues(yScale.domain())
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate("+ (padding) + ",0)")
    .call(yAxis);
svg.selectAll("rect")
    .data(latestdict)
    .enter()
    .append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d){ return yScale(d[0])})
    .attr("width", function(d){return xScale(d[1])})
    .attr("height", yScale.rangeBand())
    .attr("fill", function(d,i){return "rgb(255," + i*2 + ",0)"})

//==========================================================================================

d3.select("input#gdp").on("click", function() {

     var xScale = d3.scale.linear()
      .domain([0,d3.max(latestdict, function(d){return d[2]})])
      .range([padding, w-padding]);
    

    var yScale = d3.scale.ordinal()
    .domain(latestdict.map(function (d) {
        return d[0]
    }))
    .rangeRoundBands([padding, h-padding], 0.1);


      var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left")
      .tickValues(yScale.domain())



      svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis);


        svg.selectAll("rect")
        .data(latestdict)
        .attr("x", xScale(0))
        .attr("y", function(d){ return yScale(d[0])})
        .attr("width", function(d){return xScale(d[2])})
        .attr("height", yScale.rangeBand())
        .attr("fill", function(d,i){return "rgb(0,0 ,"+ i*2 +")"})

        });

//====================================================================================================


 d3.select("input#lifeExpectancy").on("click", function() {


     var xScale = d3.scale.linear()
      .domain([0,d3.max(latestdict, function(d){return d[3]})])
      .range([padding, w-padding]);



    var yScale = d3.scale.ordinal()
    .domain(latestdict.map(function (d) {
        return d[0]
    }))
    .rangeRoundBands([padding, h-padding], 0.1);


        var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .tickValues(yScale.domain())



      svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis);



        svg.selectAll("rect")
        .data(latestdict)
        .attr("x", xScale(0))
        .attr("y", function(d){ return yScale(d[0])})
        .attr("width", function(d){return xScale(d[3])})
        .attr("height", yScale.rangeBand())
        .attr("fill", function(d,i){return "rgb(0," + i*2 + ",250)"})


      });