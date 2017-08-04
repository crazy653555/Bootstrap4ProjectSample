$(document).ready(function () {

  $('.loading').remove();

  $('[data-toggle="tooltip"]').tooltip();

  /*switchery*/
  var elems, switcheryOpts;
  elems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));

  switcheryOpts = {
    color: '#1bc98e'
  };

  elems.forEach(function (el) {
    var switchery = new Switchery(el, switcheryOpts);
  });

  $('#ration-stock .stacked-area').highcharts({
    chart: {
      type: 'area'
    },
    title: {
      text: ''
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        pointFormat: function () {
          return this.value;
        }
      }
    },
    yAxis: {
      title: {
        text: '配給庫存'
      },
      labels: {
        formatter: function () {
          return this.value / 1000 + 'k';
        }
      }
    },
    tooltip: {
      pointFormat: '{series.name}產稱<b>{point.y.,.Of}</b><br/>彈頭在{point.x}'
    },
    plotOptions: {
      area: {
        pointStart: 100,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: '大徐配給給庫存',
      data: [null, null, null, null, null, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2064, 3057, 4618, 6444, 9822, 15458, 20434, 24126,
      ],
      color: '#1bc98e'
    },
    {
      name: '大徐配給給庫存',
      data: [1005, 1436, 2064, 3057, 4618, 6444, 9822, 15458, 20434, 24126, 32, 110, 235, 369, 640,
        1005, 1436, 2064, 3057, 4618, 6444, 9822, 15458, 20434, 24126,
      ],
      color: '#676f84'
    }]
  });

  /*switchery end*/


  $('.round-chart').easyPieChart({
    'scaleColor': false,
    'lineWidth': 20,
    'lineCap': 'butt',
    'barColor': '#6d5cae',
    'trackColor': '#e5e9ec',
    'size': 190
  });


  $('#performance-eval .spider-chart').highcharts({
    chart: {
      polar: true,
      type: 'area'
    },

    title: {
      text: ''
    },

    xAxis: {
      categories: ['Taming', 'Acessory', 'Development', 'Grooming', 'Awareness', 'Ration'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
    },

    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}:<b>${point.y:,.Of}</b><br/>'
    },

    legend: {
      align: 'right',
      verticalAlign: 'top',
      y: 70,
      layout: 'vertical'
    },

    series: [{
      name: 'Allocated resources',
      data: [45000, 39000, 58000, 63000, 38000, 93000],
      pointPlacement: 'on',
      color: '#676F84'
    },
    {
      name: 'Spent resources',
      data: [83000, 49000, 60000, 35000, 77000, 90000],
      pointPlacement: 'on',
      color: '#f35958'
    }]
  });


  changeMultiplier=0.2;
  window.setInterval(function(){
    var freeSpacePercentage;

    freeSpacePercentage = $('#free-space').text();
    freeSpacePercentage = parseFloat(freeSpacePercentage);

    delta = changeMultiplier * (Math.random() < 0.5 ? -1.0 : 1.0 );

    freeSpacePercentage = freeSpacePercentage + freeSpacePercentage * delta;
    freeSpacePercentage = parseInt(freeSpacePercentage);

    $('#free-space').text(freeSpacePercentage + '%');
  },2000);

});