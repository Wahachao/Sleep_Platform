


! function (e) {
    "use strict";
    var a = function () {};
    // a.prototype.createLineChart = function (e, a, r, t, i, o, b, n, y) {
    //     Morris.Line({
    //         element: e,
    //         data: a,
    //         xkey: r,
    //         ykeys: t,
    //         labels: i,
    //         fillOpacity: o,
    //         pointFillColors: b,
    //         pointStrokeColors: n,
    //         behaveLikeLine: !0,
    //         gridLineColor: "rgba(108, 120, 151, 0.1)",
    //         hideHover: "auto",
    //         lineWidth: "3px",
    //         pointSize: 0,
    //         preUnits: "$",
    //         resize: !0,
    //         lineColors: y
    //     })
    // }, 
    
    a.prototype.createDonutChart=function(e,a,r){
        Morris.Donut({
            element:e,
            data:a,
            resize:!0,
            colors:r
        })
    },
    
    a.prototype.createStackedChart = function (e, a, r, t, i, o) {
        Morris.Bar({
            element: e,
            data: a,
            xkey: r,
            ykeys: t,
            stacked: !0,
            labels: i,
            hideHover: "auto",
            resize: !0,
            gridLineColor: "rgba(108, 120, 151, 0.1)",
            barColors: o
        })
    }, 
    
    a.prototype.init = function () {
        // this.createLineChart("dashboard-line-chart", [{
        //     y: "2008",
        //     a: 50,
        //     b: 0
        // }, {
        //     y: "2009",
        //     a: 75,
        //     b: 50
        // }, {
        //     y: "2010",
        //     a: 30,
        //     b: 80
        // }, {
        //     y: "2011",
        //     a: 50,
        //     b: 50
        // }, {
        //     y: "2012",
        //     a: 75,
        //     b: 10
        // }, {
        //     y: "2013",
        //     a: 50,
        //     b: 40
        // }, {
        //     y: "2014",
        //     a: 75,
        //     b: 50
        // }, {
        //     y: "2015",
        //     a: 100,
        //     b: 70
        // }], "y", ["a", "b"], ["Mobiles", "Tablets"], ["0.1"], ["#ffffff"], ["#999999"], ["#458bc4", "#23b195"]);

        

        this.createStackedChart("dashboard-bar-stacked", [{
            y: "4月",
            a: 45,
            b: 180
        }, {
            y: "5月",
            a: 75,
            b: 65
        }, {
            y: "6月",
            a: 100,
            b: 90
        }, {
            y: "7月",
            a: 75,
            b: 65
        }, {
            y: "8月",
            a: 100,
            b: 90
        }, {
            y: "9月",
            a: 75,
            b: 65
        }, {
            y: "10月",
            a: 50,
            b: 40
        }, {
            y: "11月",
            a: 75,
            b: 65
        }, {
            y: "12月",
            a: 50,
            b: 40
        }, {
            y: "1月",
            a: 75,
            b: 65
        }, {
            y: "2月",
            a: 100,
            b: 90
        }], "y", ["a", "b"], ["已提交", "已完成"], ["#458bc4", "#7A7D84"]);

        this.createDonutChart("dashboard-donut", [{
            label: "Wake",
            value: 99
        }, {
            label: "N1",
            value: 30
        }, {
            label: "N2",
            value: 20
        },{
            label: "N3",
            value: 40
        },{
            label: "REM",
            value: 20
        }], ["#458bc4", "#ebeff2", "#3db9dc", "#3d22dc", "#2db9dc"])
    }, e.Dashboard = new a, e.Dashboard.Constructor = a
}(window.jQuery),
function (e) {
    "use strict";
    window.jQuery.Dashboard.init()
}();