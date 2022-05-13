// GNU General Public License v3.0 © shekharramola
// Node module: @shekharramola
// https://www.npmjs.com/package/react-wheel-of-prizes
// This file is licensed under the GNU General Public License v3.0.
// License text available at https://www.gnu.org/licenses/gpl-3.0.html


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var WheelComponent = function WheelComponent(_ref) {
  var segments = _ref.segments,
      segColors = _ref.segColors,
      winningSegment = _ref.winningSegment,
      onFinished = _ref.onFinished,
      _ref$primaryColor = _ref.primaryColor,
      primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor,
      _ref$contrastColor = _ref.contrastColor,
      contrastColor = _ref$contrastColor === void 0 ? 'black' : _ref$contrastColor,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? 'Spin' : _ref$buttonText,
      _ref$isOnlyOnce = _ref.isOnlyOnce,
      isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 290 : _ref$size,
      _ref$upDuration = _ref.upDuration,
      upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration,
      _ref$downDuration = _ref.downDuration,
      downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;
  var currentSegment = '';
  var isStarted = false;

  var _useState = React.useState(false),
      isFinished = _useState[0],
      setFinished = _useState[1];

  var timerHandle = 0;
  var timerDelay = segments.length;
  var angleCurrent = 0;
  var angleDelta = 0;
  var canvasContext = null;
  var maxSpeed = Math.PI / ("" + segments.length);
  var upTime = segments.length * upDuration;
  var downTime = segments.length * downDuration;
  var spinStart = 0;
  var frames = 0;
  var centerX = 200;
  var centerY = 220;
  React.useEffect(function () {
    wheelInit();
    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 0);
  }, []);

  var wheelInit = function wheelInit() {
    initCanvas();
    wheelDraw();
  };

  var initCanvas = function initCanvas() {
    var canvas = document.getElementById('canvas');
    console.log(navigator);

    if (navigator.userAgent.indexOf('MSIE') !== -1) {
      canvas = document.createElement('canvas');
      canvas.setAttribute('width', 200);
      canvas.setAttribute('height', 1000);
      canvas.setAttribute('id', 'canvas');
      document.getElementById('wheel').appendChild(canvas);
    }

    canvas.addEventListener('click', spin, false);
    canvasContext = canvas.getContext('2d');
  };

  var spin = function spin() {
    isStarted = true;

    if (timerHandle === 0) {
      spinStart = new Date().getTime();
      maxSpeed = Math.PI / segments.length;
      frames = 0;
      timerHandle = setInterval(onTimerTick, timerDelay);
    }
  };

  var onTimerTick = function onTimerTick() {
    frames++;
    draw();
    var duration = new Date().getTime() - spinStart;
    var progress = 0;
    var finished = false;

    if (duration < upTime) {
      progress = duration / upTime;
      angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
          progress = duration / upTime;
          angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
          progress = 1;
        } else {
          progress = duration / downTime;
          angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
        }
      } else {
        progress = duration / downTime;
        angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
      }

      if (progress >= 1) finished = true;
    }

    angleCurrent += angleDelta;

    while (angleCurrent >= Math.PI * 2) {
      angleCurrent -= Math.PI * 2;
    }

    if (finished) {
      setFinished(true);
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
    }
  };

  var wheelDraw = function wheelDraw() {
    clear();
    drawWheel();
    drawNeedle();
  };

  var draw = function draw() {
    clear();
    drawWheel();
    drawNeedle();
  };

  var drawSegment = function drawSegment(key, lastAngle, angle) {
    var ctx = canvasContext;
    var value = segments[key].text;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segColors[key];
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = contrastColor;
    ctx.font = 'bold 10px ' + fontFamily;

    function wrapText(text, x, y, maxWidth, fontSize, fontFace){
      var firstY=y;
      var words = text.split(' ');
      var line = '';
      var lineHeight=fontSize // a good approx for 10-18px sizes
    
      ctx.font=fontSize+" "+fontFace;
      ctx.textBaseline='top';
    
      for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if(testWidth > maxWidth) {
          
          ctx.fillText(line, x, y);
          if(n<words.length-1){
              line = words[n] + ' ';
              y += lineHeight;
          }
        }
        else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, y);
    }

    wrapText(value, size / 2 + 20, -10, 130, 15, fontFamily)
   // ctx.fillText(line, size / 2 + 20, 0);
    ctx.restore();
  };

  var drawWheel = function drawWheel() {
    var ctx = canvasContext;
    var lastAngle = angleCurrent;
    var len = segments.length;
    var PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = '14px ' + fontFamily;

    for (var i = 1; i <= len; i++) {
      var angle = PI2 * (i / len) + angleCurrent;
      drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }

    ctx.beginPath();
    ctx.arc(centerX, centerY, 41, 0, PI2, false);
    ctx.closePath();
    ctx.fillStyle = primaryColor;
    ctx.lineWidth = 4;
    ctx.strokeStyle = contrastColor;
    ctx.fill();
    ctx.font = ' 15px ' + fontFamily;
    ctx.fillStyle = contrastColor;
    ctx.textAlign = 'center';
    ctx.fillText(buttonText, centerX, centerY );
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, PI2, false);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = primaryColor;
    ctx.stroke();
  };

  var drawNeedle = function drawNeedle() {
    
    var ctx = canvasContext;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    ctx.fileStyle = primaryColor;
    ctx.beginPath();
    ctx.moveTo(centerX + 20, centerY - 37.5);
    ctx.lineTo(centerX - 20, centerY - 37.5);
    ctx.lineTo(centerX, centerY - 60);
    ctx.closePath();
    ctx.fill();
    var change = angleCurrent + Math.PI / 2;
    var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;
    if (i < 0) i = i + segments.length;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = getComputedStyle(document.getElementById("canvas")).getPropertyValue("--tg-theme-text-color");
    ctx.font = 'bold 14px ' + fontFamily;
    currentSegment = segments[i];
    isStarted && ctx.fillText(currentSegment.text, centerX + 10, centerY + size + 40);
  };

  var clear = function clear() {
    var ctx = canvasContext;
    ctx.clearRect(0, 0, 1000, 1000);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    id: "wheel"
  }, /*#__PURE__*/React__default.createElement("canvas", {
    id: "canvas",
    width: "400",
    height: "1000",
    style: {
      pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'
    }
  }));
};

module.exports = WheelComponent;

