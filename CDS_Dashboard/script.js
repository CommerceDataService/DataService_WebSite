var chart;
var chart2;
$('#exampleModal').modal('hide');


$(document).ready( function() {
 var mq = window.matchMedia("(max-width: 600px)");
 var desktopMq = window.matchMedia("(max-width: 800px)");
 var desktopMq2 = window.matchMedia('(max-width: 1290px)');
 mq.addListener(widthChange);
 desktopMq.addListener(widthChange);
 desktopMq2.addListener(widthChange);
 
 widthChange(mq, desktopMq, desktopMq2);

function widthChange(mq, desktopMq, desktopMq2) {
    if (mq.matches) {
        console.log('should be mobile');
        $('.container').css('width', '550px')
        $('#secondContainer').css("height", "250px");
        $('#secondContainer').css('width', '300px');
        $('#secondContainer').css('display', 'block');
        $('#chartContainer').css("height", "250px");
        $('#chartContainer').css("width", '300px');
    } else if (desktopMq.matches) {
        console.log('should be desktop');
        $('#secondContainer').css("height", "500px");
        $('#secondContainer').css('width', '300px');
        $('#chartContainer').css("height", "500px");
        $('#chartContainer').css('width', '350px');
    } else if (desktopMq2.matches) {
        $('#secondContainer').css("height", "500px");
        $('#secondContainer').css('width', '350px');
        $('#chartContainer').css("height", "500px");
        $('#chartContainer').css('width', '400px'); 
    } 
    else {
        $('#secondContainer').css('width', '500px');
        $('#chartContainer').css('width', '500px');
    }
}

var title = 'Projects';
    chartType = 'pie';
    subtitle = 'Click on a section to view more';
    colors = Highcharts.getOptions().colors;
    categories = ['Pre-Discovery', 'Discovery']; // category name matches 'name' property
    name = 'Groups';
    subtitle2 = 'Click section to Learn More';
    data = [{
        y: 2, // this is to determine how big the slice of the pie you want for this item
        name: 'Pre-Discovery', // this is the top group - used in  328, 339 for tool tip and resetting
        color: '#6bad50', // decide color for the slice
        list: 'DOC, BEA',
        // THIS BEGINS THE NEXT DRILLDOWN - for deeper drilldowns you create another object in the 'data' property
        drilldown: {
            title: 'Pre-Discovery Clients', // title at top of drill down
            subtitle: subtitle2, // can set subtitle here or you can use the one made above
            name: 'Users', // Way to organize your drilldowns based on info, doesn't show up in graph
            categories: ['DOC'], // Line 227 uses this category to make X Axis
            data: [{
                y: 1, // setting this to 0 makes it disappear
                name: 'DOC',
                color: '#6bad50',
                initiative: 'Commerce Data Academy',
                services: 'UI/UX',
                objective: 'Delivering Data Services',
                modal: '#exampleModal',
                picture: 'bureauLogos/DOC.png'
            }]
        }},
            {
        y: 1,
        name: 'Discovery',
        color: '#dee58c',
        list: 'BEA',
        drilldown: {
            title: 'Discovery Clients',
            subtitle: subtitle2,
            name: 'Users',
            categories: ['BEA'],
            data: [{
                y: 1,
                name: 'BEA',
                color: '#C5CB7C',
                initiative: 'BEA RIMS II',
                services: 'UI/UX',
                objective: 'Delivering Data Services',
                modal: '#exampleModal',
                picture: 'bureauLogos/BEA.jpg'
            }]
        }
            }, {
        y: 5,
        name: 'In-Progress',
        color: '#006c79',
        list: 'ITA, NIST, PTO, ESA',
        drilldown: {
            title: 'In-Progress Clients',
            subtitle: subtitle2,
            //name: 'Users',
            categories: ['NIST', 'PTO', 'ESA', 'ITA'],
            data: [{
                y: 1,
                name: 'NIST',
                color: '#00555f',
                initiative: 'Commerce Interoperability Project',
                services: 'Data Science, Back-End',
                objective: 'Creating Data-Driven Government',
                modal: '#exampleModal',
                picture: 'bureauLogos/NIST.jpg'
            },  {
                y: 1,
                name: 'PTO',
                color: '#007786',
                initiative: 'Open Data Roadmap',
                services: 'General',
                objective: 'Fueling Economic Growth',
                modal: '#exampleModal',
                picture: 'bureauLogos/USPTO.jpg'
            }, {
                y: 1,
                name: 'ESA',
                color: '#00b0c5',
                initiative: 'Commerce Data Advisory Council',
                services: 'General',
                objective: 'Fueling Economic Growth',
                modal: 'exampleModal',
                picture: 'bureauLogos/ESA.jpg'
            }, {
                y: 1,
                name: 'ITA',
                color: '#003339',
                initiative: 'Principal Tracker',
                services: 'UI/UX, Back-End',
                objective: 'Delivering Data Services',
                modal: '#exampleModal',
                picture: 'bureauLogos/ITA.jpg'
            }, {
                y: 1,
                name: 'ITA',
                color: '#00D8F2',
                initiative: 'New Exporters Project',
                services: 'Data Science',
                objective: 'Fueling Economic Growth',
                picture: 'bureauLogos/ITA.jpg'
            }]
        }
    }, {
        y: 4,
        name: 'Complete',
        color: '#00305d',
        list: 'DOC, CENSUS',
        drilldown: {
            title: 'Complete Projects',
            subtitle: subtitle2,
            name: 'Users',
            categories: ['DOC, CENSUS'],
            data: [{
                y: 1,
                name: 'CENSUS',
                color: '#00376a',
                initiative: 'Income Inequality',
                services: 'General',
                objective: 'Fueling Economic Growth',
                picture: 'bureauLogos/CENSUS.jpg'
            }, {
                y: 1,
                name: 'DOC',
                color: '#0057a9',
                initiative: 'Commerce Data Usability Project',
                services: 'UX/UI, Data Science, Back-End',
                objective: 'Delivering Data Services',
                picture: 'bureauLogos/DOC.png'
            }, {
                y: 1,
                name: 'DOC',
                color: '#0078e9',
                initiative: 'Data.Commerce.Gov',
                services: 'General',
                objective: 'Fueling Economic Growth',
                picture: 'bureauLogos/DOC.png'
            }, {
                y: 1, 
                name: 'DOC',
                color: '#0057a9',
                initiative: 'White House Council of Women and Girls',
                services: 'Data Science, UX/UI',
                objective: 'Delivering Data Services',
                picture: 'bureauLogos/DOC.png'
            }]
        }
    }];  // end of data property

function setChart(options) {
    chart.setTitle({
        text: options.title
    }, {
        text: options.subtitle
    });
    chart.series[0].remove(false); //boolean decides if it needs to redraw immediately, sinc we are doing more we do not set it to true, we remove the series
    chart.xAxis[0].setCategories(options.categories, false);
    chart.addSeries({
        type: options.type,
        name: options.name,
        data: options.data,
        color: options.color || 'white'
    }, false); // adds the series (which contains the data) - we pass it a new object and tell it false so it doesn't automatically re-render
     // xAxis[0] since there is only 1 axis - setCategory sets categories from the array you pass it (options.categories - you use false so it doesn't automatically redraw THUS you use chart.redraw() after)
    chart.redraw() // redraws chart
}

var secondChart = $('#secondContainer'); 
var firstChart = $('#chartContainer');

function moveChart() {
    if (mq.matches) {
        return 0
    } else if (desktopMq.matches) {
        firstChart.animate({'marginLeft' : '-=200px'}, 100);
        firstChart.css('display', 'inline-block');
    } else if (desktopMq2) {
        firstChart.animate({'marginLeft' : "-=250px"}, 100);
        firstChart.css("display", "inline-block");

        console.log('moveChart running');
    } else {
        firstChart.animate({'marginLeft' : "-=300px"}, 100);
        firstChart.css("display", "inline-block");
        console.log('moveChart running');
    }   
}

function setSecondChart(options) {
    chart2.setTitle({
        text: options.title
    }, {
        text: options.subtitle
    });
    chart2.series[0].remove(false); //boolean decides if it needs to redraw immediately, sinc we are doing more we do not set it to true, we remove the series
    chart2.xAxis[0].setCategories(options.categories, false);
    chart2.addSeries({
        type: options.type,
        name: options.name,
        data: options.data,
        color: options.color || 'white'
    }, false); // adds the series (which contains the data) - we pass it a new object and tell it false so it doesn't automatically re-render
     // xAxis[0] since there is only 1 axis - setCategory sets categories from the array you pass it (options.categories - you use false so it doesn't automatically redraw THUS you use chart.redraw() after)
    chart2.redraw() // redraws chart
    
    //firstChart.css("marginLeft", "auto");
    //chart.redraw();
    //console.log('this is running');
    //console.log(firstChart.position())
    secondChart.css("visibility","visible");
}

//Used to create the modals rather than 
function createModal(series) {              
    $('#modalName').prepend('<p>' + "Bureau: " + series.name + '</p>');
    $('#modalInitiative').prepend('<p>' + "Initiative: " + series.initiative + '</p>');
    $('#modalServices').prepend('<p>' + "Services: " + series.services + '</p>');
    $('#modalObjective').prepend('<p>' + "Objective: " + series.objective + '</p>');
    $('#modalPicture').attr('src', series.picture);
    //$('#exampleModal p').css("color", "blue");
    $('#exampleModal').modal('show');
    clearModal();
}

//Clears the modal so if double-clicked the information won't show up twice
function clearModal() {
    $('.close-modal').click(function() {
        //console.log('hi');
        $('#modalName').empty();
        $('#modalInitiative').empty();
        $('#modalServices').empty();
        $('#modalObjective').empty();
    });
}

var counter = 0;

chart = new Highcharts.Chart({
    credits: {
        enabled: false
    },
    chart: {
        style: {
            fontFamily: 'SourceSansProRegular, Open Sans, Helvetica Neue, Arial, sans-serif'
        },
        renderTo: 'chartContainer'
    }, // end of chart property
    title: {
        text: title,
        style: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    },
    subtitle: {
        text: subtitle
    },
    xAxis: {
        categories: categories
    },
    yAxis: { // i don't know get this
        title: {
            text: 'Assignments'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                color: 'black',
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        series: {
            cursor: 'pointer', // cursor set to pointer since we have 'click' events
            point: {
                events: {
                    click: function () {
                        var drilldown = this.drilldown; // uses keyword 'this'
                        var options; 
                        mq.addListener(responsiveHighCharts);
                        responsiveHighCharts(mq);
                        
                        
                        function responsiveHighCharts(mq) {
                            if (mq.matches) {
                                   // create variable to passed into setChart function
                                    setTimeout(function() {
                                        setSecondChart(options)
                                    },700);
                                    if (drilldown) { // drill down
                                        options = {
                                                'title': drilldown.title,
                                                'subtitle': drilldown.subtitle,
                                                'name': drilldown.name,
                                                'categories': drilldown.categories,
                                                'data': drilldown.data,
                                                'type': chartType
                                        };
                                    } else { // restore to first level
                                        options = {
                                                'title': title,
                                                'subtitle': subtitle,
                                                'name': name,
                                                'categories': categories,
                                                'data': data,
                                                'type': chartType
                                            // return options;
                                        };
                                    }

                            } else {
                                if (counter == 0) {
                                    counter++;
                                    moveChart();
                                    //var drilldown = this.drilldown; // uses keyword 'this'
                                    //var options; // create variable to passed into setChart function
                                    setTimeout(function() {
                                        setSecondChart(options)
                                    },700);
                                    if (drilldown) { // drill down
                                        options = {
                                                'title': drilldown.title,
                                                'subtitle': drilldown.subtitle,
                                                'name': drilldown.name,
                                                'categories': drilldown.categories,
                                                'data': drilldown.data,
                                                'type': chartType
                                        };
                                    } else { // restore to first level
                                        options = {
                                                'title': title,
                                                'subtitle': subtitle,
                                                'name': name,
                                                'categories': categories,
                                                'data': data,
                                                'type': chartType
                                            // return options;
                                        };
                                    }
                                } else {
                                    //var drilldown = this.drilldown; // uses keyword 'this'
                                    //var options; // create variable to passed into setChart function
                                    if (drilldown) { // drill down
                                        options = {
                                                'title': drilldown.title,
                                                'subtitle': drilldown.subtitle,
                                                'name': drilldown.name,
                                                'categories': drilldown.categories,
                                                'data': drilldown.data,
                                                'type': chartType
                                        };
                                    } else { // restore to first level
                                        options = {
                                                'title': title,
                                                'subtitle': subtitle,
                                                'name': name,
                                                'categories': categories,
                                                'data': data,
                                                'type': chartType
                                            // return options;
                                        };
                                    }
                                    setSecondChart(options);
                                }
                            } //end of responsive else statement
                        }

                    } //end of click
                } // end of events
            }
        } //end of series
    }, //end of plotOptions
    tooltip: {
        formatter: function () {
            var point = this.point, // sets keyword 'this' -- this.point is really series.data
                s = point.name + ': ' + point.list + '. '; //formats pointer
            if (point.deepDrill) {
                s = point.name + '<br/>' + 
                    'Services: ' + point.services + '<br/>' +
                    'Objective: ' + point.objective + '<br/>' + '<br/>' +
                    '<em>' + 'Click to return home' + '</em>';
            } else if (point.objective == 'Numerous Objectives') { 
                s = point.name + '<br/>' + 
                    '<em>' + 'Click Here to Learn More About ' + point.name + ' Projects' + '</em>';
            } else if (point.drilldown){
                s = 'Click to view ' + point.name;
            } else {
                s = point.name + '<br/>' + 
                    'Initiative: ' + point.initiative + '<br/>' +
                    'Services: ' + point.services + '<br/>' +
                    'Objective: ' + point.objective + '<br/>' + '<br/>' +
                    '<em>' + 'Click to Learn More' + '</em>';
            }
            return s;
        }
    },
    series: [{  // sets chart series here 
        type: chartType,
        name: name,
        data: data,
        color: 'white' // don't know why you set this to white
    }],
    exporting: {
        enabled: false // can't print chart
    }
}); // end of chart = new Highcharts.Chart()



chart2 = new Highcharts.Chart({
    credits: {
        enabled: false
    },
    chart: {
        style: {
            fontFamily: 'SourceSansProRegular, Open Sans, Helvetica Neue, Arial, sans-serif'
        },
        renderTo: 'secondContainer', // passing it where to put it on the HTML - there is a div with ID 'chartContainer'

    }, // end of chart property
    title: {
        text: title,
        style: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    },
    subtitle: {
        text: 'Click on Pie Graph Above to Learn More'
    },
    xAxis: {
        categories: categories
    },
    yAxis: { // i don't know get this
        title: {
            text: 'Assignments'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                //distance: -10,
                color: 'black',
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        series: {
            cursor: 'pointer', // cursor set to pointer since we have 'click' events
            point: {
                events: {
                    click: function () {
                        var drilldown = this.drilldown; // uses keyword 'this'
                        var options; // create variable to passed into setChart function
                        createModal(this);
                        $(this.modal).modal('show');
                    }
                }
            },
        } //end of series
    }, //end of plotOptions
    tooltip: {
        formatter: function () {
            if (mq.matches) {
                s = 'Please learn more from our pop-up'
            } else {
            var point = this.point, // sets keyword 'this' -- this.point is really series.data
                s = point.name + ': ' + point.list + '. '; //formats pointer
            if (point.deepDrill) {
                s = point.name + '<br/>' + 
                    'Services: ' + point.services + '<br/>' +
                    'Objective: ' + point.objective + '<br/>' + '<br/>' +
                    '<em>' + 'Click to return home' + '</em>';
            } else if (point.objective == 'Numerous Objectives') { 
                s = point.name + '<br/>' + 
                    '<em>' + 'Click Here to Learn More About ' + point.name + ' Projects' + '</em>';
            } else if (point.drilldown){
                s = 'Click to view ' + point.name;
            } else {
                s = point.name + '<br/>' + 
                    'Initiative: ' + point.initiative + '<br/>' +
                    'Services: ' + point.services + '<br/>' +
                    'Objective: ' + point.objective + '<br/>' + '<br/>' +
                    '<em>' + 'Click to Learn More' + '</em>';
                }
            
            }
            return s;
        }
    },
    series: [{  // sets chart series here 
        type: chartType,
        name: name,
        data: [{y:1}],
        color: 'white' // don't know why you set this to white
    }],
    exporting: {
        enabled: false // can't print chart
    },
}); // end of chart = new Highcharts.Chart()

}); // end of document.ready()