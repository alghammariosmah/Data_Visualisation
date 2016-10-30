
data1 = data
var dataset2000={};
dataset2000["name"]="world";
Europa_dic2000={};
Europa_dic2000["name"]= "Europe";
Asia_dic2000={};
Asia_dic2000["name"]= "Asia";
Australia_dic2000={};
Australia_dic2000["name"]="Australia";
Africa_dic2000 = {};
Africa_dic2000["name"]= "Africa";
North_america_dic2000={};
North_america_dic2000["name"]= "North America";
South_america_dic2000={};
South_america_dic2000["name"]= "South America";


Gather2000 = [];
Europe2000 = [];
Asia2000=[];
Australia2000=[];
Africa2000=[];
North_america2000=[];
South_america2000=[];

// for popup stacks
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

Turkey_stack=[];
Israel_stack=[];
Jordan_stack=[];
Russia_stack=[];
Azerbaijan_stack=[];
Bangladesh_stack=[];
Pakistan_stack=[];
Yemen_stack=[];
United_Arab_Emirates_stack=[];
Iran_stack=[];

Australia_stack=[];
New_Zealand_stack=[];

Algeria_stack=[];
Egypt_stack=[];
Morocco_stack=[];
Ethiopia_stack=[];
Kenya_stack=[];
Madagascar_stack=[];
Mali_stack=[];
Nigeria_stack=[];
Senegal_stack=[];
South_Africa_stack=[];

United_States_stack=[];
El_Salvador_stack=[];
Mexico_stack=[];
Dominican_Republic_stack=[];
Panama_stack=[];
Canada_stack=[];
Costa_Rica_stack=[];
Guatemala_stack=[];
Cuba_stack=[];
Honduras_stack=[];

Brazil_stack=[];
Argentina_stack=[];
Paraguay_stack=[];
Bolivia_stack=[];
Chile_stack=[];
Colombia_stack=[];
Peru_stack=[];
Ecuador_stack=[];
Venezuela_stack=[];
Uruguay_stack=[];

for (var i = 0; i < 119; i++) {
    countries = data[i].name;
    for (var j = 5; j <= 17; j++) {
        if ( data1[i].name == "Germany" || data1[i].name =="France" || data1[i].name =="Italy" || data1[i].name =="Spain" || data1[i].name =="Poland" ||
        data1[i].name =="Netherlands" || data1[i].name =="Belgium" || data1[i].name =="Greece" || data1[i].name =="Portugal" ||
        data1[i].name =="Hungary"){
            outyear = data[i].years[j].year;
            outpopulation = data[i].years[j].population;
            if (outyear == 2000){
                Europe2000.push({
                    name: countries,
                    size: outpopulation
                })
            }
            if(countries == "Germany"){
            Germany_stack.push(outpopulation)
            }else if(countries == "Belgium"){
                    Belguim_stack.push(outpopulation)
            }else if(countries == "Spain"){
                Spain_stack.push(outpopulation)
            }else if(countries == "France"){
                France_stack.push(outpopulation)
            }else if(countries == "Greece"){
                Greece_stack.push(outpopulation)
            }else if(countries == "Hungary"){
                Hungary_stack.push(outpopulation)
            }else if(countries == "Italy"){
                Italy_stack.push(outpopulation)
            }else if(countries == "Netherlands"){
                Netherlands_stack.push(outpopulation)
            }else if(countries == "Poland"){
                Poland_stack.push(outpopulation)
            }else if(countries == "Portugal"){
                Portugal_stack.push(outpopulation)}
	}
        else if ( data1[i].name == "Turkey" || data1[i].name =="Israel" || data1[i].name =="Jordan" || data1[i].name =="Russia" || data1[i].name =="Azerbaijan" ||
        data1[i].name =="Bangladesh" || data1[i].name =="Pakistan" || data1[i].name =="Yemen" || data1[i].name =="United Arab Emirates" ||
        data1[i].name =="Iran"){
            outyear = data[i].years[j].year;
            outpopulation = data[i].years[j].population;
            if (outyear == 2000){
                Asia2000.push({
                    name: countries,
                    size: outpopulation
                })
            }
            if(countries == "Turkey"){
                Turkey_stack.push(outpopulation)
            }else if(countries == "Israel"){
                Israel_stack.push(outpopulation)
            }else if(countries == "Jordan"){
                Jordan_stack.push(outpopulation)
            }else if(countries == "Russia"){
                Russia_stack.push(outpopulation)
            }else if(countries == "Azerbaijan"){
                Azerbaijan_stack.push(outpopulation)
            }else if(countries == "Bangladesh"){
                Bangladesh_stack.push(outpopulation)
            }else if(countries == "Pakistan"){
                Pakistan_stack.push(outpopulation)
            }else if(countries == "Yemen"){
                Yemen_stack.push(outpopulation)
            }else if(countries == "United Arab Emirates"){
                United_Arab_Emirates_stack.push(outpopulation)
            }else if(countries == "Iran"){
                Iran_stack.push(outpopulation)
            }
	}
        else if ( data1[i].name == "Australia" || data1[i].name =="New Zealand"){
            outyear = data[i].years[j].year;
            outpopulation = data[i].years[j].population;
            if (outyear == 2000){
                Australia2000.push({
                    name: countries,
                    size: outpopulation
                })
            }
            if(countries == "Australia"){
                Australia_stack.push(outpopulation)
            }else if(countries == "New Zealand"){
                New_Zealand_stack.push(outpopulation)
            }

	}
        else if ( data1[i].name == "Algeria" || data1[i].name =="Egypt" || data1[i].name =="Morocco" || data1[i].name =="Ethiopia" || data1[i].name =="Kenya" ||
        data1[i].name =="Madagascar" || data1[i].name =="Mali" || data1[i].name =="Nigeria" || data1[i].name =="Senegal" ||
        data1[i].name =="South Africa"){
            outyear = data[i].years[j].year;
            outpopulation = data[i].years[j].population;
            if (outyear == 2000){
                Africa2000.push({
                    name: countries,
                    size: outpopulation
                })
            }
            if(countries == "Algeria"){
            Algeria_stack.push(outpopulation)
            }else if(countries == "Egypt"){
                Egypt_stack.push(outpopulation)
            }else if(countries == "Morocco"){
                Morocco_stack.push(outpopulation)
            }else if(countries == "Ethiopia"){
                Ethiopia_stack.push(outpopulation)
            }else if(countries == "Kenya"){
                Kenya_stack.push(outpopulation)
            }else if(countries == "Madagascar"){
                Madagascar_stack.push(outpopulation)
            }else if(countries == "Mali"){
                Mali_stack.push(outpopulation)
            }else if(countries == "Nigeria"){
                Nigeria_stack.push(outpopulation)
            }else if(countries == "Senegal"){
                Senegal_stack.push(outpopulation)
            }else if(countries == "South Africa"){
                South_Africa_stack.push(outpopulation)
            }

	}
        else if ( data1[i].name == "United States" || data1[i].name =="El Salvador" || data1[i].name =="Mexico" || data1[i].name =="Dominican Republic" || data1[i].name =="Panama" ||
        data1[i].name =="Canada" || data1[i].name =="Costa Rica" || data1[i].name =="Guatemala" || data1[i].name =="Cuba" ||
        data1[i].name =="Honduras"){
            outyear = data[i].years[j].year;
            outpopulation = data[i].years[j].population;
            if (outyear == 2000){
                North_america2000.push({
                    name: countries,
                    size: outpopulation
                })
            }
            if(countries == "United States"){
                United_States_stack.push(outpopulation)
            }else if(countries == "El Salvador"){
                El_Salvador_stack.push(outpopulation)
            }else if(countries == "Mexico"){
                Mexico_stack.push(outpopulation)
            }else if(countries == "Dominican Republic"){
                Dominican_Republic_stack.push(outpopulation)
            }else if(countries == "Panama"){
                Panama_stack.push(outpopulation)
            }else if(countries == "Canada"){
                Canada_stack.push(outpopulation)
            }else if(countries == "Costa Rica"){
                Costa_Rica_stack.push(outpopulation)
            }else if(countries == "Guatemala"){
                Guatemala_stack.push(outpopulation)
            }else if(countries == "Cuba"){
                Cuba_stack.push(outpopulation)
            }else if(countries == "Honduras"){
                Honduras_stack.push(outpopulation)
            }

	}
        else if ( data1[i].name == "Brazil" || data1[i].name =="Argentina" || data1[i].name =="Paraguay" || data1[i].name =="Bolivia" || data1[i].name =="Chile" ||
        data1[i].name =="Colombia" || data1[i].name =="Peru" || data1[i].name =="Ecuador" || data1[i].name =="Venezuela" ||
        data1[i].name =="Uruguay"){
            outyear = data[i].years[j].year;
            outpopulation = data[i].years[j].population;
            if (outyear == 2000){
                South_america2000.push({
                    name: countries,
                    size: outpopulation
                })
            }
            if(countries == "Brazil"){
                Brazil_stack.push(outpopulation)
            }else if(countries == "Argentina"){
                Argentina_stack.push(outpopulation)
            }else if(countries == "Paraguay"){
                Paraguay_stack.push(outpopulation)
            }else if(countries == "Bolivia"){
                Bolivia_stack.push(outpopulation)
            }else if(countries == "Chile"){
                Chile_stack.push(outpopulation)
            }else if(countries == "Colombia"){
                Colombia_stack.push(outpopulation)
            }else if(countries == "Peru"){
                Peru_stack.push(outpopulation)
            }else if(countries == "Ecuador"){
                Ecuador_stack.push(outpopulation)
            }else if(countries == "Venezuela"){
                Venezuela_stack.push(outpopulation)
            }else if(countries == "Uruguay"){
                Uruguay_stack.push(outpopulation)
            }

	}
    }
}

Europa_dic2000["children"]= Europe2000;
Asia_dic2000["children"]= Asia2000;
Australia_dic2000["children"]= Australia2000;
Africa_dic2000["children"]= Africa2000;
North_america_dic2000["children"]= North_america2000;
South_america_dic2000["children"]= South_america2000;
Gather2000.push(Europa_dic2000, Asia_dic2000, Australia_dic2000, Africa_dic2000, North_america_dic2000, South_america_dic2000);
dataset2000["children"]= Gather2000;

var w = 800;
var h = 600;

d3.select("input#hide_labels").on("click", hide_labels);
d3.select("input#show_labels").on("click", show_labels);


// calculate size (value) for each node
var pack = d3.layout.pack()
    .value(function(d) { return d.size; });

pack.nodes(dataset2000);

var tree = d3.layout.tree();
var nodes = tree.nodes(dataset2000);
    nodes[0].fixed = true;
    nodes[0].x = w / 2;
    nodes[0].y = h / 2;
var links = tree.links(nodes);

var force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([w, h])
    .charge(function(d) { return d._children ? -d.value / 1000000 : -500; })
    .linkDistance(function(d) { return d.target._children ? 80 : 50; })
    .start();

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

//Create edges as lines
var edges = svg.selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "link");
    //Create nodes as circles
var node = svg.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", function(d) { return d.children ? 10 : Math.sqrt(d.size) / 500; })
        .style("fill", color)
        .on("click", click)
        .call(force.drag);

var label = svg.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .text(function(d) { return d.name; });


    //Every time the simulation "ticks", this will be called
force.on("tick", function() {
        edges.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

});


function color(d) {
    return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";}

function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;
};

node.on("mouseover", hovering)
    .on("mouseout", unhovering);

// Labels
function show_labels() {
    force.on("tick", function() {
        edges.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

        label.attr("dx", function(d) { return d.x; })
            .attr("dy", function(d) { return d.y; });

});
};
function hide_labels() {
    force.on("tick", function() {
        edges.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

        label.attr("dx", function(d) { return 1000; })
            .attr("dy", function(d) { return 1000; });

});
};
function hovering(d) {
    d3.select(this);

    var xPosition = d.x + 20;
    var yPosition = d.y + 20;

    //Update the tooltip position and value
    d3.select("#tooltip")
        .style("left", xPosition + "px")
        .style("top", yPosition + "px")
        .select("#value")
        .text(d.name)
    d3.select("#tooltip")
        .style("left", xPosition + "px")
        .style("top", yPosition + "px")
        .select("#value2")
        .text(d.size)
    //Show the tooltip
    d3.select("#tooltip").classed("hidden", false)
};



////////////////////
var width = 400,
    height = 220,
    padding = 20;

var xScale = d3.scale.ordinal()
    .domain(d3.range(Germany_stack.length))
    .rangeRoundBands([0, width], 0.05);

//////////////////////////////// add
///Europe
var myTool001= d3.selectAll("#tooltip001")
               .append("svg")
                .attr("class","mytooltip001")
                .attr("width", width)
                .attr("height", height);

var myTool002= d3.selectAll("#tooltip002")
               .append("svg")
                .attr("class","mytooltip002")
                .attr("width", width)
                .attr("height", height);

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

// South America
var myTool011= d3.selectAll("#tooltip011")
               .append("svg")
                .attr("class","mytooltip011")
                .attr("width", width)
                .attr("height", height);

var myTool012= d3.selectAll("#tooltip012")
               .append("svg")
                .attr("class","mytooltip012")
                .attr("width", width)
                .attr("height", height);

var myTool013= d3.selectAll("#tooltip013")
               .append("svg")
                .attr("class","mytooltip013")
                .attr("width", width)
                .attr("height", height)

var myTool014= d3.selectAll("#tooltip014")
               .append("svg")
                .attr("class","mytooltip014")
                .attr("width", width)
                .attr("height", height)

var myTool015= d3.selectAll("#tooltip015")
               .append("svg")
                .attr("class","mytooltip015")
                .attr("width", width)
                .attr("height", height)

var myTool016= d3.selectAll("#tooltip016")
               .append("svg")
                .attr("class","mytooltip016")
                .attr("width", width)
                .attr("height", height)

var myTool017= d3.selectAll("#tooltip017")
               .append("svg")
                .attr("class","mytooltip017")
                .attr("width", width)
                .attr("height", height)

var myTool018= d3.selectAll("#tooltip018")
               .append("svg")
                .attr("class","mytooltip018")
                .attr("width", width)
                .attr("height", height)
var myTool019= d3.selectAll("#tooltip019")
               .append("svg")
                .attr("class","mytooltip019")
                .attr("width", width)
                .attr("height", height)

var myTool020= d3.selectAll("#tooltip020")
               .append("svg")
                .attr("class","mytooltip020")
                .attr("width", width)
                .attr("height", height)

//North America
var myTool021= d3.selectAll("#tooltip021")
               .append("svg")
                .attr("class","mytooltip021")
                .attr("width", width)
                .attr("height", height);

var myTool022= d3.selectAll("#tooltip022")
               .append("svg")
                .attr("class","mytooltip022")
                .attr("width", width)
                .attr("height", height);

var myTool023= d3.selectAll("#tooltip023")
               .append("svg")
                .attr("class","mytooltip023")
                .attr("width", width)
                .attr("height", height);

var myTool024= d3.selectAll("#tooltip024")
               .append("svg")
                .attr("class","mytooltip024")
                .attr("width", width)
                .attr("height", height);

var myTool025= d3.selectAll("#tooltip025")
               .append("svg")
                .attr("class","mytooltip025")
                .attr("width", width)
                .attr("height", height);

var myTool026= d3.selectAll("#tooltip026")
               .append("svg")
                .attr("class","mytooltip026")
                .attr("width", width)
                .attr("height", height);

var myTool027= d3.selectAll("#tooltip027")
               .append("svg")
                .attr("class","mytooltip027")
                .attr("width", width)
                .attr("height", height);

var myTool028= d3.selectAll("#tooltip028")
               .append("svg")
                .attr("class","mytooltip028")
                .attr("width", width)
                .attr("height", height);
var myTool029= d3.selectAll("#tooltip029")
               .append("svg")
                .attr("class","mytooltip029")
                .attr("width", width)
                .attr("height", height);

var myTool030= d3.selectAll("#tooltip030")
               .append("svg")
                .attr("class","mytooltip030")
                .attr("width", width)
                .attr("height", height);

// Africa
var myTool031= d3.selectAll("#tooltip031")
               .append("svg")
                .attr("class","mytooltip031")
                .attr("width", width)
                .attr("height", height);

var myTool032= d3.selectAll("#tooltip032")
               .append("svg")
                .attr("class","mytooltip032")
                .attr("width", width)
                .attr("height", height);

var myTool033= d3.selectAll("#tooltip033")
               .append("svg")
                .attr("class","mytooltip033")
                .attr("width", width)
                .attr("height", height);

var myTool034= d3.selectAll("#tooltip034")
               .append("svg")
                .attr("class","mytooltip034")
                .attr("width", width)
                .attr("height", height);

var myTool035= d3.selectAll("#tooltip035")
               .append("svg")
                .attr("class","mytooltip035")
                .attr("width", width)
                .attr("height", height);

var myTool036= d3.selectAll("#tooltip036")
               .append("svg")
                .attr("class","mytooltip036")
                .attr("width", width)
                .attr("height", height);

var myTool037= d3.selectAll("#tooltip037")
               .append("svg")
                .attr("class","mytooltip037")
                .attr("width", width)
                .attr("height", height);

var myTool038= d3.selectAll("#tooltip038")
               .append("svg")
                .attr("class","mytooltip038")
                .attr("width", width)
                .attr("height", height);
var myTool039= d3.selectAll("#tooltip039")
               .append("svg")
                .attr("class","mytooltip039")
                .attr("width", width)
                .attr("height", height);

var myTool040= d3.selectAll("#tooltip040")
               .append("svg")
                .attr("class","mytooltip040")
                .attr("width", width)
                .attr("height", height);

//Asia
var myTool041= d3.selectAll("#tooltip041")
               .append("svg")
                .attr("class","mytooltip041")
                .attr("width", width)
                .attr("height", height);

var myTool042= d3.selectAll("#tooltip042")
               .append("svg")
                .attr("class","mytooltip042")
                .attr("width", width)
                .attr("height", height);

var myTool043= d3.selectAll("#tooltip043")
               .append("svg")
                .attr("class","mytooltip043")
                .attr("width", width)
                .attr("height", height);

var myTool044= d3.selectAll("#tooltip044")
               .append("svg")
                .attr("class","mytooltip044")
                .attr("width", width)
                .attr("height", height);

var myTool045= d3.selectAll("#tooltip045")
               .append("svg")
                .attr("class","mytooltip045")
                .attr("width", width)
                .attr("height", height);

var myTool046= d3.selectAll("#tooltip046")
               .append("svg")
                .attr("class","mytooltip046")
                .attr("width", width)
                .attr("height", height);

var myTool047= d3.selectAll("#tooltip047")
               .append("svg")
                .attr("class","mytooltip047")
                .attr("width", width)
                .attr("height", height);

var myTool048= d3.selectAll("#tooltip048")
               .append("svg")
                .attr("class","mytooltip048")
                .attr("width", width)
                .attr("height", height);
var myTool049= d3.selectAll("#tooltip049")
               .append("svg")
                .attr("class","mytooltip049")
                .attr("width", width)
                .attr("height", height);

var myTool050= d3.selectAll("#tooltip050")
               .append("svg")
                .attr("class","mytooltip050")
                .attr("width", width)
                .attr("height", height);

var myTool051= d3.selectAll("#tooltip051")
               .append("svg")
                .attr("class","mytooltip051")
                .attr("width", width)
                .attr("height", height);

var myTool052= d3.selectAll("#tooltip052")
               .append("svg")
                .attr("class","mytooltip052")
                .attr("width", width)
                .attr("height", height);

/////////////////////////////// static
var xScalee = d3.scale.linear()
    .domain([2000,2012])
    .rangeRound([0+padding, width-padding], 0.03);

var xAxis = d3.svg.axis()
                .scale(xScalee)
                .orient("bottom")
                .tickFormat(d3.format("d"));


// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;

    } else {

    //Update the tooltip position and value
        // show the graph here
        if (d.name == "Germany"){

            d3.select("#tooltip001")
                .select("#value001")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Germany_stack), d3.max(Germany_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Germany_stack), d3.max(Germany_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool001.selectAll("rect")
            .data(Germany_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool001.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool001.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool001.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip001").classed("hidden001", false);
            }
        else if (d.name == "Italy"){

            d3.select("#tooltip002")
                .select("#value002")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Italy_stack), d3.max(Italy_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Italy_stack), d3.max(Italy_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool002.selectAll("rect")
            .data(Italy_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool002.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool002.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool002.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip002").classed("hidden002", false);
            }
        else if (d.name == "Spain"){

            d3.select("#tooltip003")
                .select("#value003")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Spain_stack), d3.max(Spain_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Spain_stack), d3.max(Spain_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool003.selectAll("rect")
            .data(Spain_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool003.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool003.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool003.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip003").classed("hidden003", false);
            }
        else if (d.name == "Poland"){

            d3.select("#tooltip004")
                .select("#value004")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Poland_stack), d3.max(Poland_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Poland_stack), d3.max(Poland_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool004.selectAll("rect")
            .data(Poland_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool004.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool004.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool004.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip004").classed("hidden004", false);
            }
        else if (d.name == "Belgium"){

            d3.select("#tooltip005")
                .select("#value005")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Belguim_stack), d3.max(Belguim_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Belguim_stack), d3.max(Belguim_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool005.selectAll("rect")
            .data(Belguim_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool005.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool005.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool005.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip005").classed("hidden005", false);
            }
        else if (d.name == "Portugal"){

            d3.select("#tooltip006")
                .select("#value006")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Portugal_stack), d3.max(Portugal_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Portugal_stack), d3.max(Portugal_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool006.selectAll("rect")
            .data(Portugal_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool006.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool006.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool006.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip006").classed("hidden006", false);
            }
        else if (d.name == "France"){

            d3.select("#tooltip007")
                .select("#value007")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(France_stack), d3.max(France_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(France_stack), d3.max(France_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool007.selectAll("rect")
            .data(France_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool007.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool007.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool007.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip007").classed("hidden007", false);
            }
        else if (d.name == "Netherlands"){

            d3.select("#tooltip008")
                .select("#value008")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Netherlands_stack), d3.max(Netherlands_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Netherlands_stack), d3.max(Netherlands_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool008.selectAll("rect")
            .data(Netherlands_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool008.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool008.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool008.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip008").classed("hidden008", false);
            }
        else if (d.name == "Greece"){

            d3.select("#tooltip009")
                .select("#value009")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Greece_stack), d3.max(Greece_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Greece_stack), d3.max(Greece_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool009.selectAll("rect")
            .data(Greece_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool009.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool009.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool009.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip009").classed("hidden009", false);
            }
        else if (d.name == "Hungary"){

            d3.select("#tooltip010")
                .select("#value010")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Hungary_stack), d3.max(Hungary_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Hungary_stack), d3.max(Hungary_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool010.selectAll("rect")
            .data(Hungary_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool010.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool010.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool010.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip010").classed("hidden010", false);
            }
        else if (d.name == "Brazil"){

            d3.select("#tooltip011")
                .select("#value011")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Brazil_stack), d3.max(Brazil_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Brazil_stack), d3.max(Brazil_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool011.selectAll("rect")
            .data(Brazil_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool011.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool011.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool011.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip011").classed("hidden011", false);
            }
        else if (d.name == "Argentina"){

            d3.select("#tooltip012")
                .select("#value012")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Argentina_stack), d3.max(Argentina_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Argentina_stack), d3.max(Argentina_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool012.selectAll("rect")
            .data(Argentina_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool012.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool012.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool012.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip012").classed("hidden012", false);
            }
        else if (d.name == "Uruguay"){

            d3.select("#tooltip013")
                .select("#value013")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Uruguay_stack), d3.max(Uruguay_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Uruguay_stack), d3.max(Uruguay_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool013.selectAll("rect")
            .data(Uruguay_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool013.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool013.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool013.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip013").classed("hidden013", false);
            }
        else if (d.name == "Chile"){

            d3.select("#tooltip014")
                .select("#value014")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Israel_stack), d3.max(Israel_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Israel_stack), d3.max(Israel_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool014.selectAll("rect")
            .data(Israel_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool014.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool014.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool014.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip014").classed("hidden014", false);
            }
        else if (d.name == "Colombia"){

            d3.select("#tooltip015")
                .select("#value015")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Colombia_stack), d3.max(Colombia_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Colombia_stack), d3.max(Colombia_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool015.selectAll("rect")
            .data(Colombia_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool015.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool015.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool015.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip015").classed("hidden015", false);
            }
        else if (d.name == "Paraguay"){

            d3.select("#tooltip016")
                .select("#value016")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Paraguay_stack), d3.max(Paraguay_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Paraguay_stack), d3.max(Paraguay_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool016.selectAll("rect")
            .data(Paraguay_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool016.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool016.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool016.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip016").classed("hidden016", false);
            }
        else if (d.name == "Peru"){

            d3.select("#tooltip017")
                .select("#value017")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Peru_stack), d3.max(Peru_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Peru_stack), d3.max(Peru_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool017.selectAll("rect")
            .data(Peru_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool017.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool017.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool017.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip017").classed("hidden017", false);
            }
        else if (d.name == "Bolivia"){

            d3.select("#tooltip018")
                .select("#value018")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Bolivia_stack), d3.max(Bolivia_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Bolivia_stack), d3.max(Bolivia_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool018.selectAll("rect")
            .data(Bolivia_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool018.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool018.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool018.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip018").classed("hidden018", false);
            }
        else if (d.name == "Ecuador"){

            d3.select("#tooltip019")
                .select("#value019")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Ecuador_stack), d3.max(Ecuador_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Ecuador_stack), d3.max(Ecuador_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool019.selectAll("rect")
            .data(Ecuador_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool019.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool019.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool019.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip019").classed("hidden019", false);
            }
        else if (d.name == "Venezuela"){

            d3.select("#tooltip020")
                .select("#value020")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Venezuela_stack), d3.max(Venezuela_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Venezuela_stack), d3.max(Venezuela_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool020.selectAll("rect")
            .data(Venezuela_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool020.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool020.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool020.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip020").classed("hidden020", false);
            }

        else if (d.name == "United States"){

            d3.select("#tooltip021")
                .select("#value021")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(United_States_stack), d3.max(United_States_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(United_States_stack), d3.max(United_States_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool021.selectAll("rect")
            .data(United_States_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool021.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool021.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool021.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip021").classed("hidden021", false);
            }
        else if (d.name == "El Salvador"){

            d3.select("#tooltip022")
                .select("#value022")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(El_Salvador_stack), d3.max(El_Salvador_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(El_Salvador_stack), d3.max(El_Salvador_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool022.selectAll("rect")
            .data(El_Salvador_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool022.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool022.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool022.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip022").classed("hidden022", false);
            }
        else if (d.name == "Cuba"){

            d3.select("#tooltip023")
                .select("#value023")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Cuba_stack), d3.max(Cuba_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Cuba_stack), d3.max(Cuba_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool023.selectAll("rect")
            .data(Cuba_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool023.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool023.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool023.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip023").classed("hidden023", false);
            }
        else if (d.name == "Panama"){

            d3.select("#tooltip024")
                .select("#value024")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Panama_stack), d3.max(Panama_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Panama_stack), d3.max(Panama_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool024.selectAll("rect")
            .data(Panama_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool024.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool024.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool024.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip024").classed("hidden024", false);
            }
        else if (d.name == "Guatemala"){

            d3.select("#tooltip025")
                .select("#value025")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Guatemala_stack), d3.max(Guatemala_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Guatemala_stack), d3.max(Guatemala_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool025.selectAll("rect")
            .data(Guatemala_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool025.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool025.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool025.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip025").classed("hidden025", false);
            }
        else if (d.name == "Costa Rica"){

            d3.select("#tooltip026")
                .select("#value026")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Costa_Rica_stack), d3.max(Costa_Rica_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Costa_Rica_stack), d3.max(Costa_Rica_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool026.selectAll("rect")
            .data(Costa_Rica_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool026.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool026.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool026.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip026").classed("hidden026", false);
            }
        else if (d.name == "Honduras"){

            d3.select("#tooltip027")
                .select("#value027")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Honduras_stack), d3.max(Honduras_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Honduras_stack), d3.max(Honduras_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool027.selectAll("rect")
            .data(Honduras_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool027.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool027.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool027.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip027").classed("hidden027", false);
            }
        else if (d.name == "Dominican Republic"){

            d3.select("#tooltip028")
                .select("#value028")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Dominican_Republic_stack), d3.max(Dominican_Republic_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Dominican_Republic_stack), d3.max(Dominican_Republic_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool028.selectAll("rect")
            .data(Dominican_Republic_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool028.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool028.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool028.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip028").classed("hidden028", false);
            }
        else if (d.name == "Canada"){

            d3.select("#tooltip029")
                .select("#value029")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Canada_stack), d3.max(Canada_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Canada_stack), d3.max(Canada_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool029.selectAll("rect")
            .data(Canada_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool029.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool029.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool029.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip029").classed("hidden029", false);
            }
        else if (d.name == "Mexico"){

            d3.select("#tooltip030")
                .select("#value030")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Mexico_stack), d3.max(Mexico_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Mexico_stack), d3.max(Mexico_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool030.selectAll("rect")
            .data(Mexico_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool030.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool030.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool030.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip030").classed("hidden030", false);
            }

        else if (d.name == "Nigeria"){

            d3.select("#tooltip031")
                .select("#value031")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Nigeria_stack), d3.max(Nigeria_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Nigeria_stack), d3.max(Nigeria_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool031.selectAll("rect")
            .data(Nigeria_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool031.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool031.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool031.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip031").classed("hidden031", false);
            }
        else if (d.name == "Egypt"){

            d3.select("#tooltip032")
                .select("#value032")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Egypt_stack), d3.max(Egypt_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Egypt_stack), d3.max(Egypt_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool032.selectAll("rect")
            .data(Egypt_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool032.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool032.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool032.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip032").classed("hidden032", false);
            }
        else if (d.name == "Morocco"){

            d3.select("#tooltip033")
                .select("#value033")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Morocco_stack), d3.max(Morocco_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Morocco_stack), d3.max(Morocco_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool033.selectAll("rect")
            .data(Morocco_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool033.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool033.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool033.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip033").classed("hidden033", false);
            }
        else if (d.name == "Senegal"){

            d3.select("#tooltip034")
                .select("#value034")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Senegal_stack), d3.max(Senegal_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Senegal_stack), d3.max(Senegal_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool034.selectAll("rect")
            .data(Senegal_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool034.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool034.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool034.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip034").classed("hidden034", false);
            }
        else if (d.name == "Madagascar"){

            d3.select("#tooltip035")
                .select("#value035")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Madagascar_stack), d3.max(Madagascar_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Madagascar_stack), d3.max(Madagascar_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool035.selectAll("rect")
            .data(Madagascar_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool035.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool035.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool035.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip035").classed("hidden035", false);
            }
        else if (d.name == "Algeria"){

            d3.select("#tooltip036")
                .select("#value036")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Algeria_stack), d3.max(Algeria_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Algeria_stack), d3.max(Algeria_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool036.selectAll("rect")
            .data(Algeria_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool036.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool036.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool036.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip036").classed("hidden036", false);
            }
        else if (d.name == "Ethiopia"){

            d3.select("#tooltip037")
                .select("#value037")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Ethiopia_stack), d3.max(Ethiopia_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Ethiopia_stack), d3.max(Ethiopia_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool037.selectAll("rect")
            .data(Ethiopia_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool037.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool037.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool037.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip037").classed("hidden037", false);
            }
        else if (d.name == "Mali"){

            d3.select("#tooltip038")
                .select("#value038")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Mali_stack), d3.max(Mali_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Mali_stack), d3.max(Mali_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool038.selectAll("rect")
            .data(Mali_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool038.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool038.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool038.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip038").classed("hidden038", false);
            }
        else if (d.name == "Kenya"){

            d3.select("#tooltip039")
                .select("#value039")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Kenya_stack), d3.max(Kenya_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Kenya_stack), d3.max(Kenya_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool039.selectAll("rect")
            .data(Kenya_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool039.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool039.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool039.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip039").classed("hidden039", false);
            }
        else if (d.name == "South Africa"){

            d3.select("#tooltip040")
                .select("#value040")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(South_Africa_stack), d3.max(South_Africa_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(South_Africa_stack), d3.max(South_Africa_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool040.selectAll("rect")
            .data(South_Africa_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool040.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool040.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool040.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip040").classed("hidden040", false);
            }

        else if (d.name == "Pakistan"){

            d3.select("#tooltip041")
                .select("#value041")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Pakistan_stack), d3.max(Pakistan_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Pakistan_stack), d3.max(Pakistan_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool041.selectAll("rect")
            .data(Pakistan_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool041.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool041.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool041.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip041").classed("hidden041", false);
            }
        else if (d.name == "Yemen"){

            d3.select("#tooltip042")
                .select("#value042")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Yemen_stack), d3.max(Yemen_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Yemen_stack), d3.max(Yemen_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool042.selectAll("rect")
            .data(Yemen_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool042.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool042.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool042.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip042").classed("hidden042", false);
            }
        else if (d.name == "Turkey"){

            d3.select("#tooltip043")
                .select("#value043")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Turkey_stack), d3.max(Turkey_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Turkey_stack), d3.max(Turkey_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool043.selectAll("rect")
            .data(Turkey_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool043.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool043.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool043.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip043").classed("hidden043", false);
            }
        else if (d.name == "Azerbaijan"){

            d3.select("#tooltip044")
                .select("#value044")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Azerbaijan_stack), d3.max(Azerbaijan_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Azerbaijan_stack), d3.max(Azerbaijan_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool044.selectAll("rect")
            .data(Azerbaijan_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool044.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool044.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool044.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip044").classed("hidden044", false);
            }
        else if (d.name == "Israel"){

            d3.select("#tooltip045")
                .select("#value045")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Israel_stack), d3.max(Israel_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Israel_stack), d3.max(Israel_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool045.selectAll("rect")
            .data(Israel_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool045.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool045.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool045.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip045").classed("hidden045", false);
            }
        else if (d.name == "Russia"){

            d3.select("#tooltip046")
                .select("#value046")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Russia_stack), d3.max(Russia_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Russia_stack), d3.max(Russia_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool046.selectAll("rect")
            .data(Russia_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool046.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool046.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool046.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip046").classed("hidden046", false);
            }
        else if (d.name == "Iran"){

            d3.select("#tooltip047")
                .select("#value047")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Iran_stack), d3.max(Iran_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Iran_stack), d3.max(Iran_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool047.selectAll("rect")
            .data(Iran_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool047.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool047.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool047.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip047").classed("hidden047", false);
            }
        else if (d.name == "Bangladesh"){

            d3.select("#tooltip048")
                .select("#value048")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Bangladesh_stack), d3.max(Bangladesh_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Bangladesh_stack), d3.max(Bangladesh_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool048.selectAll("rect")
            .data(Bangladesh_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool048.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool048.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool048.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip048").classed("hidden048", false);
            }
        else if (d.name == "Jordan"){

            d3.select("#tooltip049")
                .select("#value049")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Jordan_stack), d3.max(Jordan_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Jordan_stack), d3.max(Jordan_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool049.selectAll("rect")
            .data(Jordan_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool049.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool049.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool049.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip049").classed("hidden049", false);
            }
        else if (d.name == "United Arab Emirates"){

            d3.select("#tooltip050")
                .select("#value050")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(United_Arab_Emirates_stack), d3.max(United_Arab_Emirates_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(United_Arab_Emirates_stack), d3.max(United_Arab_Emirates_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool050.selectAll("rect")
            .data(United_Arab_Emirates_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool050.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool050.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool050.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip050").classed("hidden050", false);
            }
        else if (d.name == "Australia"){

            d3.select("#tooltip051")
                .select("#value051")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(Australia_stack), d3.max(Australia_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(Australia_stack), d3.max(Australia_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool051.selectAll("rect")
            .data(Australia_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool051.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool051.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool051.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip051").classed("hidden051", false);
            }
        else if (d.name == "New Zealand"){

            d3.select("#tooltip052")
                .select("#value052")
                .text(d.name);

            var yScale = d3.scale.linear()
                .domain([d3.min(New_Zealand_stack), d3.max(New_Zealand_stack)])
                .range([0,height-padding ]);


            var yScalee = d3.scale.linear()
                .domain([d3.min(New_Zealand_stack), d3.max(New_Zealand_stack)])
                .range([height-padding,0 ]);



            var yAxis = d3.svg.axis()
                  		  .scale(yScalee)
                 		  .orient("left")            // vertical axis with the labels on the left
                  		  .ticks(5);



            myTool052.selectAll("rect")
            .data(New_Zealand_stack)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                 return xScale(i);
            })
            .attr("y", function(d) {
                return (height-padding) - (yScale(d));
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function(d) {
                            return yScale(d);
            })
            .attr("fill","#ff7f0e")

            myTool052.append("k")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + padding + ",0)")  // shift the axis to right
    		   .call(yAxis);

            myTool052.append("g")
                    .attr("class", "axis")
                    .attr("id", "axiiiis")
                    .attr("transform", "translate(0," + (height-padding) + ")")
                    .call(xAxis);

            myTool052.append("g")
    		   .attr("class", "axis")
    		   .attr("transform", "translate(" + (padding+370) + ",0)")  // shift the axis to right
    		   .call(yAxis);


            d3.select("#tooltip052").classed("hidden052", false);
            }


        d.children = d._children;
        d._children = null;

    }

    //update links

    nodes.forEach(function(element) {
        element._x=element.x
        element._y=element.y
    });
    nodes = tree.nodes(dataset2000);
    nodes.forEach(function(element) {
        element.x=element._x
        element.y=element._y
    });
    links = tree.links(nodes);
    // Restart the force layout.
    force.nodes(nodes)
        .links(links)
        .start();

    edges = svg.selectAll("line.link")
        .data(links);

    //Create new edges
    edges.enter()
        .append("line")
        .attr("class", "link");
    //Delete edges
    edges.exit()
        .remove();
    node = svg.selectAll("circle")
        .data(nodes)
        .style("fill", color)
        .attr("r", function(d) { return d.children ? 10 : Math.sqrt(d.value) / 500; });
    //Create new nodes
    node.enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", function(d) { return d.children ? 10 : Math.sqrt(d.value) / 500; })
        .style("fill", color)
        .on("click", click)
        .call(force.drag);
    // hovering
    node.on("mouseover", hovering)
    .on("mouseout", unhovering);
    //remove nodes
    node.exit()
        .remove();
};
function unhovering(){
    d3.select(this).transition()
            .duration(250);
        //Hide the tooltip
    d3.select("#tooltip").classed("hidden", true);
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

    d3.select("#tooltip011").classed("hidden011", true);
    d3.select("#tooltip012").classed("hidden012", true);
    d3.select("#tooltip013").classed("hidden013", true);
    d3.select("#tooltip014").classed("hidden014", true);
    d3.select("#tooltip015").classed("hidden015", true);
    d3.select("#tooltip016").classed("hidden016", true);
    d3.select("#tooltip017").classed("hidden017", true);
    d3.select("#tooltip018").classed("hidden018", true);
    d3.select("#tooltip019").classed("hidden019", true);
    d3.select("#tooltip020").classed("hidden020", true);

    d3.select("#tooltip021").classed("hidden021", true);
    d3.select("#tooltip022").classed("hidden022", true);
    d3.select("#tooltip023").classed("hidden023", true);
    d3.select("#tooltip024").classed("hidden024", true);
    d3.select("#tooltip025").classed("hidden025", true);
    d3.select("#tooltip026").classed("hidden026", true);
    d3.select("#tooltip027").classed("hidden027", true);
    d3.select("#tooltip028").classed("hidden028", true);
    d3.select("#tooltip029").classed("hidden029", true);
    d3.select("#tooltip030").classed("hidden030", true);

    d3.select("#tooltip031").classed("hidden031", true);
    d3.select("#tooltip032").classed("hidden032", true);
    d3.select("#tooltip033").classed("hidden033", true);
    d3.select("#tooltip034").classed("hidden034", true);
    d3.select("#tooltip035").classed("hidden035", true);
    d3.select("#tooltip036").classed("hidden036", true);
    d3.select("#tooltip037").classed("hidden037", true);
    d3.select("#tooltip038").classed("hidden038", true);
    d3.select("#tooltip039").classed("hidden039", true);
    d3.select("#tooltip040").classed("hidden040", true);

    d3.select("#tooltip041").classed("hidden041", true);
    d3.select("#tooltip042").classed("hidden042", true);
    d3.select("#tooltip043").classed("hidden043", true);
    d3.select("#tooltip044").classed("hidden044", true);
    d3.select("#tooltip045").classed("hidden045", true);
    d3.select("#tooltip046").classed("hidden046", true);
    d3.select("#tooltip047").classed("hidden047", true);
    d3.select("#tooltip048").classed("hidden048", true);
    d3.select("#tooltip049").classed("hidden049", true);
    d3.select("#tooltip050").classed("hidden050", true);

    d3.select("#tooltip051").classed("hidden051", true);
    d3.select("#tooltip052").classed("hidden052", true);
};

