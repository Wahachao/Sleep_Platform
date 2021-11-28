! function (e) {
    "use strict";
    var a = function () {};

    a.prototype.createDonutChart=function(e,a,r){
        Morris.Donut(
            {
            element:e,
            data:a,
            resize:!0,
            colors:r
            }
        )
    },


        a.prototype.init = function () {
            this.createDonutChart
            (
                "sleep-donut",
                [
                        {
                            label: "Wake",
                            value: 10
                        },
                        {
                            label: "N1",
                            value: 6
                        },
                        {
                            label: "N2",
                            value: 53
                        },
                        {
                            label: "N3",
                            value: 11
                        },
                        {
                            label: "REM",
                            value: 20
                        }
                    ],
                ["#458bc4", "#ebeff2", "#3db9dc", "#3d22dc", "#2db9dc"]
            )
        },

        e.Sleep = new a, e.Sleep.Constructor = a
}(window.jQuery),
    function (e) {
        "use strict";
        window.jQuery.Sleep.init()
    }();