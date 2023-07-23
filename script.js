const body = document.querySelector("body"),
sidebar = body.querySelector("nav"),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
sidebar.classList.remove("close");
});

// Apex charts 

var options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'sales',
      data: [30,40,45,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
chart.render();
  
// round chart

var options = {
    series: [78],
    chart: {
    height: 150,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Average'],
  };

  var chart = new ApexCharts(document.querySelector("#chart-1"), options);
  chart.render();

var options = {
    series: [95],
    chart: {
    height: 150,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Top'],
  };

  var chart = new ApexCharts(document.querySelector("#chart-2"), options);
  chart.render();

var options = {
    series: [59],
    chart: {
    height: 150,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Me'],
  };

  var chart = new ApexCharts(document.querySelector("#chart-3"), options);
  chart.render();

