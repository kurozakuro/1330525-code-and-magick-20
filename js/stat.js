'use strict';

window.renderStatistics = function (ctx, names, times) {
  var dataCloud = {
    startX: 100,
    startY: 10,
    widthRect: 420,
    heightRect: 270,
    lenghtShadow: 10,
    margin: 40,

    colorRect: ['rgba(0, 0, 0, 0.7)', 'rgb(256, 256, 256)'],
    text: ['Ура вы победили!', 'Список результатов: ']
  };

  drawRect(dataCloud.startX + dataCloud.lenghtShadow, dataCloud.startY + dataCloud.lenghtShadow, dataCloud.widthRect, dataCloud.heightRect, dataCloud.colorRect[0]);
  drawRect(dataCloud.startX, dataCloud.startY, dataCloud.widthRect, dataCloud.heightRect, dataCloud.colorRect[1]);

  // Прямоугольник
  function drawRect(axisX, axisY, width, height, fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(axisX, axisY, width, height);
  }

  var printText = function (data, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillText(data, width, height);
  };

  var drawHisto = function (x1, y1, x2, y2) {
    ctx.fillRect(x1, y1, x2, y2);
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  drawRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];

    var height = step * time;

    // Цвета

    if (name === 'Вы') {
      ctx.fillStyle = '#ff0000';
    } else {
      ctx.fillStyle = ['rgb(0, 0,', ((Math.random() * 5) * 50).toFixed(0), ')'].join('');
    }
    drawHisto((histoX + columnIndent * i), (245 - height), 40, height);
    printText(time.toFixed(0), (histoX + columnIndent * i), (240 - height), '#000');
    printText(name, (histoX + columnIndent * i), 260, '#000');
  }
};
