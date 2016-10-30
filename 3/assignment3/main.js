/**
 * Created by osamahal-ghammari on 4/18/2016.
 */
var w = 800;
var h = 500;
var padding = 30;



data1 = data

Europe = [];
Germany_stack= [];
Belguim_stack=[];
Spain_stack=[];
France_stack=[];
Greece_stack=[];
Hungary_stack=[];
Italy_stack=[];
Netherlands_stack=[];
Poland_stack=[];
Portugal_stack=[];


Europetest = [];




counter = 0;
for (var i = 0; i < 119; i++){
	if ( data1[i].name == "Germany" || data1[i].name =="France" || data1[i].name =="Italy" || data1[i].name =="Spain" || data1[i].name =="Poland" || data1[i].name =="Netherlands" || data1[i].name =="Belgium" || data1[i].name =="Greece" || data1[i].name =="Portugal" || data1[i].name =="Hungary"){
		countries = data[i].name;
        Europe[countries]={};
        var dic =  new Array();
        var dic1 =  new Array();

		for (var j = 5; j <= 17; j++) {
            outyear = data[i].years[j].year;
            outpopulation = data[i].years[j].population;
            dic.push({
                country: countries,
                year: outyear,
                population: outpopulation
            });

            dic1.push({
                country: countries,
                x: outyear,
                y: outpopulation
            })

            //EuropeSVGborder.push([outpopulation, outyear, countries]);
        }

        if(countries == "Germany"){
            Germany_stack.push({
                country: countries,
                values: dic1
            })
        }else if(countries == "Belgium"){
            Belguim_stack.push({
                country: countries,
                values: dic1
            })
        }else if(countries == "Spain"){
            Spain_stack.push({
                country: countries,
                values: dic1
            })
        }else if(countries == "France"){
            France_stack.push({
                country: countries,
                values: dic1
            })
        }else if(countries == "Greece"){
            Greece_stack.push({
                country: countries,
                values: dic1
            })
        }else if(countries == "Hungary"){
            Hungary_stack.push({
                country: countries,
                values: dic1
            })
        }else if(countries == "Italy"){
            Italy_stack.push({
                country: countries,
                values: dic1
            })
        }else if(countries == "Netherlands"){
            Netherlands_stack.push({
                country: countries,
                values: dic1
            })
        }else if(countries == "Poland"){
            Poland_stack.push({
                country: countries,
                values: dic1
            })
        }else if(countries == "Portugal"){
            Portugal_stack.push({
                country: countries,
                values: dic1
            })
        }
        Europe[countries]= dic;
        Europetest[counter]= dic;
        counter+=1;

	}
}




adjustEuro = Europetest.map(function (d) {
    return d.map(function (o,i) {
        return {
            y: o.population,
            x: o.year,
            country: o.country
        };
    })
});

adjustEuro1 = Europetest.map(function (d) {
    return d.map(function (o,i) {
        return {
            y: o.population,
            x: o.year,
            country: o.country
        };
    })
});


dic2000 = [];
dic2001 = [];
dic2002 = [];
dic2003 = [];
dic2004 = [];
dic2005 = [];
dic2006 = [];
dic2007 = [];
dic2008 = [];
dic2009 = [];
dic2010 = [];
dic2011 = [];
dic2012 = [];


var dic11 = new Array();
for (var k=0; k < Europetest.length; k++){
    for (var kk=0; kk< 13; kk++){
        sperate = Europetest[k][kk];
        if (sperate.year == 2000){
            //console.log(sperate.population)
            dic2000.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2001){
            dic2001.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2002){
            dic2002.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2003){
            dic2003.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2004){
            dic2004.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2005){
            dic2005.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2006){
            dic2006.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2007){
            dic2007.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2008){
            dic2008.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2009){
            dic2009.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2010){
            dic2010.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2011){
            dic2011.push({
                population: sperate.population,
                country: sperate.country});
        }
        else if (sperate.year == 2012){
            dic2012.push({
                population: sperate.population,
                country: sperate.country});
        }
    }
}

Europeyears = [dic2000, dic2001, dic2002, dic2003, dic2004, dic2005, dic2006,
dic2006, dic2007, dic2008, dic2008, dic2009, dic2010, dic2011, dic2012];





var stack = d3.layout.stack()

    //.order("reverse");
stack_data=stack(adjustEuro);

var xScale = d3.scale.ordinal()
				.domain(d3.range(adjustEuro[0].length))
				.rangeRoundBands([0, w], 0.50);


/////////////scale x
xMin = d3.min(adjustEuro, function (d) {
        return d3.min(d, function (i) {
            return i.x
        })});
xMax = d3.max(adjustEuro, function (d) {
        return d3.max(d, function (i) {
            return i.x
        })});
//
var xScalee = d3.scale.linear()
    .domain([xMin, xMax])
    .rangeRound([(0+padding), w-padding], 0.03);



/////////////scale y


var yScale = d3.scale.linear()
				.domain([0,d3.max(stack_data, function(d) {
						return d3.max(d, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, h-100]);

var color = d3.scale.category10();
color.domain(stack_data.map(function (d,i) {
        return d[i].country
    }))


/////////////////////////// initializing the axis
var xAxis = d3.svg.axis()
    .scale(xScalee)
    .orient("bottom")
    .ticks(10);



var svg = d3.select("body")
    .append("svg")
    .attr("width", w+200)
    .attr("height", h);



svg.append("g")
    .attr("class", "axis")
    .attr("id", "axiiiis")
	.attr("transform", "translate(0," + (h-padding) + ")")
	.call(xAxis);
//////////////////////////////////


var div = svg.selectAll("div")
    .data(color.domain())
    .enter()
    .append("g")
    .attr("id", "subline")
    .attr("class", "div")
    .attr("transform", function(d, i) { return "translate(0," + i * 30 + ")"; });


div.append("rect")
    .attr("x", w)
    .attr("y", 15)
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", color);
//
div.append("text")
    .attr("x", w + 30)
    .attr("y", 20)
    .attr("width", 40)
    .style("text-anchor", "start")
    .text(function (d) {
				return d;
			});

///////////////////////////////////////////////////

var div1 = d3.select("body").append("div1")
    .attr("class", "tooltip")
    .style("opacity", 1e-6);



// make bar graph
var width = 300,
    height = 200,
    radius = Math.min(width, height) / 2;

var arc = d3.svg.arc()
    .outerRadius(radius-10 )
    .innerRadius(0);

var pie = d3.layout.pie()
    .value(function (d) {
        return d.population;
    } );

var labelArc = d3.svg.arc()
    .outerRadius(radius - 100)
    .innerRadius(radius - 100);


var myTool= d3.selectAll("#tooltip1")
               .append("svg")
                .attr("class","mytooltip")
                .attr("width", width)
                .attr("height", height)


var myTool2= d3.selectAll("#tooltip2")
               .append("svg")
                .attr("class","mytooltip2")
                .attr("width", width)
                .attr("height", height)

var myTool3= d3.selectAll("#tooltip3")
               .append("svg")
                .attr("class","mytooltip3")
                .attr("width", width)
                .attr("height", height)

var myTool4= d3.selectAll("#tooltip4")
               .append("svg")
                .attr("class","mytooltip4")
                .attr("width", width)
                .attr("height", height)

var myTool5= d3.selectAll("#tooltip5")
               .append("svg")
                .attr("class","mytooltip5")
                .attr("width", width)
                .attr("height", height)
var myTool6= d3.selectAll("#tooltip6")
               .append("svg")
                .attr("class","mytooltip6")
                .attr("width", width)
                .attr("height", height)

var myTool7= d3.selectAll("#tooltip7")
               .append("svg")
                .attr("class","mytooltip7")
                .attr("width", width)
                .attr("height", height)

var myTool8= d3.selectAll("#tooltip8")
               .append("svg")
                .attr("class","mytooltip8")
                .attr("width", width)
                .attr("height", height)

var myTool9= d3.selectAll("#tooltip9")
               .append("svg")
                .attr("class","mytooltip9")
                .attr("width", width)
                .attr("height", height)

var myTool10= d3.selectAll("#tooltip10")
               .append("svg")
                .attr("class","mytooltip10")
                .attr("width", width)
                .attr("height", height)

var myTool11= d3.selectAll("#tooltip11")
               .append("svg")
                .attr("class","mytooltip11")
                .attr("width", width)
                .attr("height", height)

var myTool12= d3.selectAll("#tooltip12")
               .append("svg")
                .attr("class","mytooltip12")
                .attr("width", width)
                .attr("height", height)

var myTool13= d3.selectAll("#tooltip13")
               .append("svg")
                .attr("class","mytooltip13")
                .attr("width", width)
                .attr("height", height)




///////////////////////////////////////////////for single stack

sicky_stack = d3.layout.stack()
    .values(function(d) { return d.values; });

var myTool001= d3.selectAll("#tooltip001")
               .append("svg")
                .attr("class","mytooltip002")
                .attr("width", width)
                .attr("height", height)

var myTool002= d3.selectAll("#tooltip002")
               .append("svg")
                .attr("class","mytooltip002")
                .attr("width", width)
                .attr("height", height)

var myTool003= d3.selectAll("#tooltip003")
               .append("svg")
                .attr("class","mytooltip003")
                .attr("width", width)
                .attr("height", height)

var myTool004= d3.selectAll("#tooltip004")
               .append("svg")
                .attr("class","mytooltip004")
                .attr("width", width)
                .attr("height", height)

var myTool005= d3.selectAll("#tooltip005")
               .append("svg")
                .attr("class","mytooltip005")
                .attr("width", width)
                .attr("height", height)

var myTool006= d3.selectAll("#tooltip006")
               .append("svg")
                .attr("class","mytooltip006")
                .attr("width", width)
                .attr("height", height)

var myTool007= d3.selectAll("#tooltip007")
               .append("svg")
                .attr("class","mytooltip007")
                .attr("width", width)
                .attr("height", height)

var myTool008= d3.selectAll("#tooltip008")
               .append("svg")
                .attr("class","mytooltip008")
                .attr("width", width)
                .attr("height", height)
var myTool009= d3.selectAll("#tooltip009")
               .append("svg")
                .attr("class","mytooltip009")
                .attr("width", width)
                .attr("height", height)

var myTool010= d3.selectAll("#tooltip010")
               .append("svg")
                .attr("class","mytooltip010")
                .attr("width", width)
                .attr("height", height)





///////////////////////////
var xScaleee = d3.scale.ordinal()
				.domain(d3.range(Germany_stack[0].values.length))
				.rangeRoundBands([0, width], 0.05);
/// for the axis, but it won't show up
var xScaleeee = d3.scale.linear()
    .domain([xMin, xMax])
    .rangeRound([(0+padding), width-padding], 0.03);

var xAxis = d3.svg.axis()
                .scale(xScaleeee)
                .orient("bottom")
                .ticks(3);

////////////////////////////////////////////////

svg.selectAll("div")
    .data(stack_data)
    .enter()
    .append("g")
    .attr("class", "stacked_bars")
    .attr("fill", function(d, i) {
        return color(i);
    		   	  })

.selectAll("rect")
			  .data(function(d) { return d; })
			  .enter()
			  .append("rect")
			  .attr("x", function(d, i) {
				return xScale(i);
			  })
			  .attr("y", function(d) {
				//return  h - (yScale(d.y0)+ yScale(d.y)) + padding;
                  return  (h-padding) - (yScale(d.y0)+ yScale(d.y));
			  })
			  .attr("height", function(d) {
				return  yScale(d.y);
			  })
			  .attr("width", xScale.rangeBand())

///mouse hover
.on("mouseover", function(d) {  // when mouse move over the selected bar, change the color to orange
        		d3.select(this);

			//Get this bar's x/y values, then augment for the tooltip
			var xPosition = parseFloat(d3.select(this).attr("x")) + xScale.rangeBand()/2;
            var yPosition = parseFloat(d3.select(this).attr("y"))  + (h - parseFloat(d3.select(this).attr("y"))-(yScale(d.y0)+ yScale(d.y)))/2  ;


			//Update the tooltip position and value
			d3.select("#tooltip")
  				.style("left", xPosition + "px")
  				.style("top", yPosition + "px")
  				.select("#value")
  				.text(d.country)
            d3.select("#tooltip")
  				.style("left", xPosition + "px")
  				.style("top", yPosition + "px")
  				.select("#value2")
  				.text(d.y)


			//Show the tooltip
			d3.select("#tooltip").classed("hidden", false);


		})
    .on("mouseout", function(d) {   // when the mousw move out of the selected bar, change the color back
            d3.select(this).transition()           // add a transition of 0.25s while the color is changing
            .duration(250);

			//Hide the tooltip
			d3.select("#tooltip").classed("hidden", true);


		})////mouse hover

//on clicks
.on("click", function (d) {
    d3.select(this);

    //Get this bar's x/y values, then augment for the tooltip
			var xPosition = parseFloat(d3.select(this).attr("x")) + xScale.rangeBand()/2;
    if (xPosition == 46){
        //Show the tooltip
        d3.select("#tooltip1").classed("hidden1", false);

    }else if(xPosition == 105){

        d3.select("#tooltip2").classed("hidden2", false);
    }else if(xPosition==164){

        d3.select("#tooltip3").classed("hidden3", false);
    }else if(xPosition==223){

        d3.select("#tooltip4").classed("hidden4", false);
    }else if(xPosition==282){

        d3.select("#tooltip5").classed("hidden5", false);
    }else if(xPosition == 341){

        d3.select("#tooltip6").classed("hidden6", false);
    }else if(xPosition == 400){

        d3.select("#tooltip7").classed("hidden7", false);
    }else if(xPosition == 459){

        d3.select("#tooltip8").classed("hidden8", false);
    }else if(xPosition == 518){

        d3.select("#tooltip9").classed("hidden9", false);
    }else if(xPosition == 577){

        d3.select("#tooltip10").classed("hidden10", false);
    }else if(xPosition == 636){

        d3.select("#tooltip11").classed("hidden11", false);
    }else if(xPosition == 695){


        d3.select("#tooltip12").classed("hidden12", false);
    }else if(xPosition == 754){


        d3.select("#tooltip13").classed("hidden13", false);
    }

    })








.on("dblclick", function(d) {  // when mouse move over the selected bar, change the color to orange
        		d3.select(this);

			//Get this bar's x/y values, then augment for the tooltip
			var xPosition = parseFloat(d3.select(this).attr("x")) + xScale.rangeBand()/2;
            var yPosition = parseFloat(d3.select(this).attr("y"))  + (h - parseFloat(d3.select(this).attr("y"))-(yScale(d.y0)+ yScale(d.y)))/2  ;
            var area = d3.svg.area()
    				.x(function(d, i) { return xScaleee(i); })
				.y0(function(d, i) { return  height- yScaleee(d.y0);})//(height-padding) - yScaleee(d.y0); })
    				.y1(function(d) { return  (height-padding) -yScaleee(d.y); });

			if (d.country == "Germany"){
                datum = sicky_stack(Germany_stack)


                var yScaleee = d3.scale.linear()
				.domain([d3.min(datum, function(d) {
						return d3.min(d.values, function(d) {
							return d.y0 + d.y;
						});
					}),
					d3.max(datum, function(d) {
						return d3.max(d.values, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, height-100]);


                myTool001.selectAll("svg")
    		           .data(datum)
  			            .enter()
                        .append("path")
    			   .attr("d", function(d) { return area(d.values); })
	    	    	   .attr("fill","#ff7f0e")
                myTool001.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);
                    //Show the tooltip
			    d3.select("#tooltip001").classed("hidden001", false);


            }else if(d.country == "Spain"){
                datum = sicky_stack(Spain_stack)


                 var yScaleee = d3.scale.linear()
				.domain([d3.min(datum, function(d) {
						return d3.min(d.values, function(d) {
							return d.y0 + d.y;
						});
					}),
					d3.max(datum, function(d) {
						return d3.max(d.values, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, height-100]);


                myTool002.selectAll("svg")
    		           .data(datum)
  			            .enter()
                        .append("path")
    			   .attr("d", function(d) { return area(d.values); })
	    	    	   .attr("fill","#2ca02c")
                .attr("transform", function(d, i) { return "translate(0,-30)"; })
                myTool002.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis)


                //Show the tooltip
                d3.select("#tooltip002").classed("hidden002", false);
            }
            else if(d.country == "France"){
                datum = sicky_stack(France_stack)


                 var yScaleee = d3.scale.linear()
				.domain([d3.min(datum, function(d) {
						return d3.min(d.values, function(d) {
							return d.y0 + d.y;
						});
					}),
					d3.max(datum, function(d) {
						return d3.max(d.values, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, height-100]);


                myTool003.selectAll("svg")
    		           .data(datum)
  			            .enter()
                        .append("path")
    			   .attr("d", function(d) { return area(d.values); })
	    	    	   .attr("fill","#d62728")
                .attr("transform", function(d, i) { return "translate(0,-30)"; })
                myTool003.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis)


                //Show the tooltip
                d3.select("#tooltip003").classed("hidden003", false);
            }
            else if(d.country == "Greece"){
                datum = sicky_stack(Greece_stack)


                 var yScaleee = d3.scale.linear()
				.domain([d3.min(datum, function(d) {
						return d3.min(d.values, function(d) {
							return d.y0 + d.y;
						});
					}),
					d3.max(datum, function(d) {
						return d3.max(d.values, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, height-100]);


                myTool004.selectAll("svg")
    		           .data(datum)
  			            .enter()
                        .append("path")
    			   .attr("d", function(d) { return area(d.values); })
	    	    	   .attr("fill","#9467bd")
                .attr("transform", function(d, i) { return "translate(0,-30)"; })
                myTool004.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis)


                //Show the tooltip
                d3.select("#tooltip004").classed("hidden004", false);
            }
            else if(d.country == "Hungary"){
                datum = sicky_stack(Hungary_stack)


                 var yScaleee = d3.scale.linear()
				.domain([d3.min(datum, function(d) {
						return d3.min(d.values, function(d) {
							return d.y0 + d.y;
						});
					}),
					d3.max(datum, function(d) {
						return d3.max(d.values, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, height-100]);


                myTool005.selectAll("svg")
    		           .data(datum)
  			            .enter()
                        .append("path")
    			   .attr("d", function(d) { return area(d.values); })
	    	    	   .attr("fill","#8c564b")
                .attr("transform", function(d, i) { return "translate(0,-30)"; })
                myTool005.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis)


                //Show the tooltip
                d3.select("#tooltip005").classed("hidden005", false);
            }else if(d.country == "Italy"){
                datum = sicky_stack(Italy_stack)


                 var yScaleee = d3.scale.linear()
				.domain([d3.min(datum, function(d) {
						return d3.min(d.values, function(d) {
							return d.y0 + d.y;
						});
					}),
					d3.max(datum, function(d) {
						return d3.max(d.values, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, height-100]);


                myTool006.selectAll("svg")
    		           .data(datum)
  			            .enter()
                        .append("path")
    			   .attr("d", function(d) { return area(d.values); })
	    	    	   .attr("fill","#e377c2")
                .attr("transform", function(d, i) { return "translate(0,-30)"; })
                myTool006.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis)


                //Show the tooltip
                d3.select("#tooltip006").classed("hidden006", false);
            }else if(d.country == "Netherlands"){
                datum = sicky_stack(Netherlands_stack)


                 var yScaleee = d3.scale.linear()
				.domain([d3.min(datum, function(d) {
						return d3.min(d.values, function(d) {
							return d.y0 + d.y;
						});
					}),
					d3.max(datum, function(d) {
						return d3.max(d.values, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, height-100]);


                myTool007.selectAll("svg")
    		           .data(datum)
  			            .enter()
                        .append("path")
    			   .attr("d", function(d) { return area(d.values); })
	    	    	   .attr("fill","#7f7f7f")
                .attr("transform", function(d, i) { return "translate(0,-30)"; })
                myTool007.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis)


                //Show the tooltip
                d3.select("#tooltip007").classed("hidden007", false);
            } else if(d.country == "Poland"){
                datum = sicky_stack(Poland_stack)


                 var yScaleee = d3.scale.linear()
				.domain([d3.min(datum, function(d) {
						return d3.min(d.values, function(d) {
							return d.y0 + d.y;
						});
					}),
					d3.max(datum, function(d) {
						return d3.max(d.values, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, height-100]);


                myTool008.selectAll("svg")
    		           .data(datum)
  			            .enter()
                        .append("path")
    			   .attr("d", function(d) { return area(d.values); })
	    	    	   .attr("fill","#bcbd22")
                .attr("transform", function(d, i) { return "translate(0,-30)"; })
                myTool008.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis)


                //Show the tooltip
                d3.select("#tooltip008").classed("hidden008", false);
            }else if(d.country == "Portugal"){
                datum = sicky_stack(Portugal_stack)


                 var yScaleee = d3.scale.linear()
				.domain([d3.min(datum, function(d) {
						return d3.min(d.values, function(d) {
							return d.y0 + d.y;
						});
					}),
					d3.max(datum, function(d) {
						return d3.max(d.values, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, height-100]);


                myTool009.selectAll("svg")
    		           .data(datum)
  			            .enter()
                        .append("path")
    			   .attr("d", function(d) { return area(d.values); })
	    	    	   .attr("fill","#17becf")
                .attr("transform", function(d, i) { return "translate(0,-30)"; })
                myTool009.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis)


                //Show the tooltip
                d3.select("#tooltip009").classed("hidden009", false);
            }else if(d.country == "Belguim"){
                datum = sicky_stack(Belguim_stack)


                 var yScaleee = d3.scale.linear()
				.domain([d3.min(datum, function(d) {
						return d3.min(d.values, function(d) {
							return d.y0 + d.y;
						});
					}),
					d3.max(datum, function(d) {
						return d3.max(d.values, function(d) {
							return d.y0 + d.y;
						});
					})
				])
				.range([0, height-100]);


                myTool010.selectAll("svg")
    		           .data(datum)
  			            .enter()
                        .append("path")
    			   .attr("d", function(d) { return area(d.values); })
	    	    	   .attr("fill","#1f77b4")
                .attr("transform", function(d, i) { return "translate(0,-30)"; })
                myTool010.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis)


                //Show the tooltip
                d3.select("#tooltip010").classed("hidden010", false);
            }





		})
    .on("mouseout", function(d) {   // when the mousw move out of the selected bar, change the color back
            d3.select(this).transition()           // add a transition of 0.25s while the color is changing
            .duration(250);

            //Hide the tooltip
			d3.select("#tooltip").classed("hidden", true);

			//Hide the tooltip
			d3.select("#tooltip001").classed("hidden001", true);
            d3.select("#tooltip002").classed("hidden002", true);
            d3.select("#tooltip003").classed("hidden003", true);
            d3.select("#tooltip004").classed("hidden004", true);
            d3.select("#tooltip005").classed("hidden005", true);
            d3.select("#tooltip006").classed("hidden006", true);
            d3.select("#tooltip007").classed("hidden007", true);
            d3.select("#tooltip008").classed("hidden008", true);
            d3.select("#tooltip009").classed("hidden009", true);
            d3.select("#tooltip010").classed("hidden010", true);

            d3.select("#tooltip1").classed("hidden1", true);
            d3.select("#tooltip3").classed("hidden3",true);
            d3.select("#tooltip2").classed("hidden2", true);
            d3.select("#tooltip4").classed("hidden4", true);
            d3.select("#tooltip5").classed("hidden5", true);
            d3.select("#tooltip6").classed("hidden6",true);
            d3.select("#tooltip7").classed("hidden7", true);
            d3.select("#tooltip8").classed("hidden8", true);
            d3.select("#tooltip9").classed("hidden9", true);
            d3.select("#tooltip11").classed("hidden11",true);
            d3.select("#tooltip10").classed("hidden10", true);
            d3.select("#tooltip12").classed("hidden12", true);
            d3.select("#tooltip13").classed("hidden13", true);



		});




myTool.selectAll("svg")
            .data(pie(dic2000))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })


 myTool2.selectAll("svg")
            .data(pie(dic2001))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool3.selectAll("svg")
            .data(pie(dic2002))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool4.selectAll("svg")
            .data(pie(dic2003))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool5.selectAll("svg")
            .data(pie(dic2004))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool6.selectAll("svg")
            .data(pie(dic2005))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool7.selectAll("svg")
            .data(pie(dic2006))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool8.selectAll("svg")
            .data(pie(dic2007))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool9.selectAll("svg")
            .data(pie(dic2008))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool10.selectAll("svg")
            .data(pie(dic2009))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool11.selectAll("svg")
            .data(pie(dic2010))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool12.selectAll("svg")
            .data(pie(dic2011))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; })

myTool13.selectAll("svg")
            .data(pie(dic2012))
            .enter()
            .append("g")
            .attr("class", "arc")

            .append("path")
            .attr("d", arc)
            .style("fill", function(d) { return color(d.data.country); })
            .attr("transform", function(d, i) { return "translate(100,100)"; });