$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $('.round-chart').easyPieChart({
    'scaleColor':false,
    'lineWidth':20,
    'lineCap':'butt',
    'barColor':'#6d5cae',
    'trackColor':'#e5e9ec',
    'size':190
  });
});