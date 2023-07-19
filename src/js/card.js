
import Highcharts from 'highcharts'
require("highcharts/modules/exporting")(Highcharts);

const graphListsArray = [
    {
        "title": "",
        "creaditEnable": false,
        "contextButton": false,
        "XaxisLineColor": "transparent",
        "XaxisLabel": false,
        "YAxisVisible": false,
        "color": "#5470de",
        "tooltip": false,
        "points": [
            3.2,
            3.1,
            3.9,
            4.4,
            5.4,
            3.7,
            2.8,
            4.2,
            3.9,
            5.2,
            4.1,
            4.6,
        ]
    },
    {
        "title": "",
        "creaditEnable": false,
        "contextButton": false,
        "XaxisLineColor": "transparent",
        "XaxisLabel": false,
        "YAxisVisible": false,
        "color": "#ffc246",
        "tooltip": false,
        "points": [
            3.2,
            3.1,
            3.9,
            4.4,
            5.4,
            3.7,
            2.8,
            4.2,
            3.9,
            5.2,
            4.1,
            4.6,
        ]
    },
    {
        "title": "",
        "creaditEnable": false,
        "contextButton": false,
        "XaxisLineColor": "transparent",
        "XaxisLabel": false,
        "YAxisVisible": false,
        "color": "#47dfcf",
        "tooltip": false,
        "points": [
            4,
            3,
            3.2,
            2.9,
            5.4,
            3.5,
            4.3,
            4.1,
            4.9,
            3.8,
            2.8,
            3.9,
        ]
    },
    {
        "title": "",
        "creaditEnable": false,
        "contextButton": false,
        "XaxisLineColor": "transparent",
        "XaxisLabel": false,
        "YAxisVisible": false,
        "color": "#93d7fd",
        "tooltip": false,
        "points": [
            3.5,
            3.6,
            3.4,
            2.2,
            3.4,
            3.5,
            4.3,
            4.1,
            5.9,
            3.8,
            4.1,
            4.9,
        ]
    },
    {
        "title": "",
        "creaditEnable": false,
        "contextButton": false,
        "XaxisLineColor": "transparent",
        "XaxisLabel": false,
        "YAxisVisible": false,
        "color": "#5D8BAD",
        "tooltip": false,
        "points": [
            2.5,
            2.1,
            2.4,
            2.2,
            4.4,
            3.5,
            4.3,
            4.1,
            3.9,
            2.8,
            4.1,
            3.9,
        ]
    },
    {
        "title": "",
        "creaditEnable": false,
        "contextButton": false,
        "XaxisLineColor": "transparent",
        "XaxisLabel": false,
        "YAxisVisible": false,
        "color": "#07316A",
        "tooltip": false,
        "points": [
            1.5,
            3.1,
            2.4,
            4.2,
            5.4,
            2.5,
            3.3,
            4.1,
            4.9,
            4.8,
            4.1,
            3.9,
        ]
    },
    {
        "title": "",
        "creaditEnable": false,
        "contextButton": false,
        "XaxisLineColor": "transparent",
        "XaxisLabel": false,
        "YAxisVisible": false,
        "color": "#07BB62",
        "tooltip": false,
        "points": [
            2.5,
            3.1,
            3.2,
            2.2,
            3.4,
            3.5,
            2.3,
            4.1,
            2.9,
            3.8,
            5.1,
            3.9,
        ]
    },
    {
        "title": "",
        "creaditEnable": false,
        "contextButton": false,
        "XaxisLineColor": "transparent",
        "XaxisLabel": false,
        "YAxisVisible": false,
        "color": "#B6B7BA",
        "tooltip": false,
        "points": [
            3.9,
            3.1,
            3.9,
            4.2,
            5.4,
            3.5,
            2.3,
            4.5,
            3.9,
            5.8,
            4.1,
            4.9,
        ]
    },
    {
        "title": "",
        "creaditEnable": false,
        "contextButton": false,
        "XaxisLineColor": "transparent",
        "XaxisLabel": false,
        "YAxisVisible": false,
        "color": "#5470DE",
        "tooltip": false,
        "points": [
            2.5,
            3.1,
            3.9,
            3.6,
            3.4,
            4,
            4.3,
            5.1,
            4.9,
            3.8,
            4.4,
            3.9,
        ]
    }
]

graphListsArray.forEach((data, index) => {
    Highcharts.chart(`graph${index + 1}`, {
        chart: {
            type: "spline",
        },
        title: {
            text: data.title
        },
        credits: {
            enabled: false
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: data.contextButton
                }
            }
        },
        xAxis: {
            lineColor: data.XaxisLineColor,
            labels: {
                enabled: data.XaxisLabel
            },
            tickLength: 0
        },
        yAxis: {
            visible: data.YAxisVisible,
        },
        tooltip: {
            formatter: function (tooltip) {
                debugger;

                return data.tooltip;
            }
        },
        plotOptions: {
            series: {
                shadow: {
                    color: data.color, offsetX: 0, offsetY: 5, opacity: 0.8, width: 10
                }
            },

            spline: {
                lineWidth: 2,
                lineColor: data.color,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                }
            }
        },
        series: [

            {
                data: data.points.map((x, index) => x)
            }
        ]
    }
    );
})


