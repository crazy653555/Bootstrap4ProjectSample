$(document).ready(function(){

  $('.loading').remove();

  $('[data-toggle="tooltip"]').tooltip();

  $('.round-chart').easyPieChart({
    'scaleColor':false,
    'lineWidth':20,
    'lineCap':'butt',
    'barColor':'#6d5cae',
    'trackColor':'#e5e9ec',
    'size':190
  });


  $('#performance-eval .spider-chart').highcharts({
    chart:{
      polar:true,
      type:'area'
    },

    title:{
      text:''
    },

    xAxis:{
      categories:['Taming','Acessory','Development','Grooming','Awareness','Ration'],
      tickmarkPlacement:'on',
      lineWidth:0
    },

    yAxis:{
      gridLineInterpolation:'polygon',
      lineWidth:0,
      min:0
    },

    tooltip:{
      shared:true,
      pointFormat:'<span style="color:{series.color}">{series.name}:<b>${point.y:,.Of}</b><br/>'
    },

    legend:{
      align:'right',
      verticalAlign:'top',
      y:70,
      layout:'vertical'
    },

    series:[{
      name:'Allocated resources',
      data:[45000,39000,58000,63000,38000,93000],
      pointPlacement:'on',
      color:'#676F84'
    },
    {
      name:'Spent resources',
      data:[83000,49000,60000,35000,77000,90000],
      pointPlacement:'on',
      color:'#f35958' 
    }]
  });



});