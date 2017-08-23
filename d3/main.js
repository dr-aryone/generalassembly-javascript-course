$(function() {

    var data = [{
        label: "Happy",
        value: 30
    }, {
        label: "OK",
        value: 20
    }, {
        label: "Sad",
        value: 10
    }];

    //Regular pie chart example
    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) {
                return d.label
            })
            .y(function(d) {
                return d.value
            })
            .showLabels(true);

        d3.select("#graph svg")
            .datum(data)
            .transition().duration(350)
            .call(chart);

        return chart;
    });



});
