(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _tools = require("./tools");

var Tools = _interopRequireWildcard(_tools);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

document.addEventListener("DOMContentLoaded", function () {
	scrollBtnInit();
	document.body.style.overflow = "hidden";
});

function scrollBtnInit() {
	var btn = document.querySelector('#move-to-top');
	btn.addEventListener('click', Tools.scrollPageToTop);
}

window.addEventListener("load", onWindowLoad);

function onWindowLoad() {
	var preloader = document.querySelector("#preloader");
	preloader.classList.add("end");
	var body = document.body;
	body.style.overflow = "";
	body.classList.add("loaded");
}

},{"./tools":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _onWindowResize = require('./onWindowResize');

Object.defineProperty(exports, 'onWindowResize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_onWindowResize).default;
  }
});

var _scrollPageToTop = require('./scrollPageToTop');

Object.defineProperty(exports, 'scrollPageToTop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollPageToTop).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./onWindowResize":3,"./scrollPageToTop":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Олеживает изменение размеров окна браузера и вызывает cb если привысело время указанное в duration
 * @param {function} cb каллбэк
 * @param {number} [duration=300] интервал в миллисикундах
 */
function onWindowResize(cb) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

	var timeout = void 0;
	window.addEventListener('resize', function () {
		clearTimeout(timeout);
		timeout = setTimeout(cb, duration);
	});
}

exports.default = onWindowResize;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function scrollPageToTop() {
	function getScroll() {
		return document.documentElement.scrollTop;
	}
	function run() {
		if (getScroll() > 0) {
			window.scrollBy(0, -Math.max(getScroll() / 6, 1));
			requestAnimationFrame(run);
		}
	}
	run();
}
exports.default = scrollPageToTop;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFBLFNBQUEsUUFBQSxTQUFBLENBQUE7O0lBQVksUTs7Ozs7Ozs7Ozs7Ozs7QUFFWixTQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBOEMsWUFBTTtBQUNuRDtBQUNBLFVBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBLEdBQUEsUUFBQTtBQUZELENBQUE7O0FBS0EsU0FBQSxhQUFBLEdBQXlCO0FBQ3hCLEtBQU0sTUFBTSxTQUFBLGFBQUEsQ0FBWixjQUFZLENBQVo7QUFDQSxLQUFBLGdCQUFBLENBQUEsT0FBQSxFQUE4QixNQUE5QixlQUFBO0FBQ0E7O0FBRUQsT0FBQSxnQkFBQSxDQUFBLE1BQUEsRUFBQSxZQUFBOztBQUVBLFNBQUEsWUFBQSxHQUF3QjtBQUN2QixLQUFNLFlBQVksU0FBQSxhQUFBLENBQWxCLFlBQWtCLENBQWxCO0FBQ0EsV0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLEtBQUE7QUFDQSxLQUFNLE9BQU8sU0FBYixJQUFBO0FBQ0EsTUFBQSxLQUFBLENBQUEsUUFBQSxHQUFBLEVBQUE7QUFDQSxNQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsUUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OzttRENwQlEsTzs7Ozs7Ozs7O29EQUNBLE87Ozs7Ozs7Ozs7Ozs7O0FDRFQ7Ozs7O0FBS0EsU0FBQSxjQUFBLENBQUEsRUFBQSxFQUE0QztBQUFBLEtBQWhCLFdBQWdCLFVBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsR0FBTCxHQUFLOztBQUMzQyxLQUFJLFVBQUEsS0FBSixDQUFBO0FBQ0EsUUFBQSxnQkFBQSxDQUFBLFFBQUEsRUFBa0MsWUFBVztBQUM1QyxlQUFBLE9BQUE7QUFDQSxZQUFVLFdBQUEsRUFBQSxFQUFWLFFBQVUsQ0FBVjtBQUZELEVBQUE7QUFJQTs7a0JBRWMsYzs7Ozs7Ozs7QUNiZixTQUFBLGVBQUEsR0FBMkI7QUFDMUIsVUFBQSxTQUFBLEdBQXFCO0FBQ3BCLFNBQU8sU0FBQSxlQUFBLENBQVAsU0FBQTtBQUNBO0FBQ0QsVUFBQSxHQUFBLEdBQWU7QUFDZCxNQUFJLGNBQUosQ0FBQSxFQUFxQjtBQUNwQixVQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQW1CLENBQUMsS0FBQSxHQUFBLENBQVUsY0FBVixDQUFBLEVBQXBCLENBQW9CLENBQXBCO0FBQ0EseUJBQUEsR0FBQTtBQUNBO0FBQ0Q7QUFDRDtBQUNBO2tCQUNjLGUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgKiBhcyBUb29scyBmcm9tICcuL3Rvb2xzJ1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cdHNjcm9sbEJ0bkluaXQoKTtcclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxCdG5Jbml0KCkge1xyXG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZlLXRvLXRvcCcpO1xyXG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFRvb2xzLnNjcm9sbFBhZ2VUb1RvcCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbldpbmRvd0xvYWQpO1xyXG5cclxuZnVuY3Rpb24gb25XaW5kb3dMb2FkKCkge1xyXG5cdGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlbG9hZGVyXCIpO1xyXG5cdHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKFwiZW5kXCIpO1xyXG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cdGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xyXG5cdGJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRlZFwiKTtcclxufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgb25XaW5kb3dSZXNpemUgfSBmcm9tICcuL29uV2luZG93UmVzaXplJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxQYWdlVG9Ub3AgfSBmcm9tICcuL3Njcm9sbFBhZ2VUb1RvcCc7IiwiLyoqXHJcbiAqINCe0LvQtdC20LjQstCw0LXRgiDQuNC30LzQtdC90LXQvdC40LUg0YDQsNC30LzQtdGA0L7QsiDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwINC4INCy0YvQt9GL0LLQsNC10YIgY2Ig0LXRgdC70Lgg0L/RgNC40LLRi9GB0LXQu9C+INCy0YDQtdC80Y8g0YPQutCw0LfQsNC90L3QvtC1INCyIGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiINC60LDQu9C70LHRjdC6XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MzAwXSDQuNC90YLQtdGA0LLQsNC7INCyINC80LjQu9C70LjRgdC40LrRg9C90LTQsNGFXHJcbiAqL1xyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZShjYiwgZHVyYXRpb24gPSAzMDApIHtcclxuXHRsZXQgdGltZW91dDtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChjYiwgZHVyYXRpb24pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbldpbmRvd1Jlc2l6ZTsiLCJmdW5jdGlvbiBzY3JvbGxQYWdlVG9Ub3AoKSB7XHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHJ1bigpIHtcclxuXHRcdGlmIChnZXRTY3JvbGwoKSA+IDApIHtcclxuXHRcdFx0d2luZG93LnNjcm9sbEJ5KDAsIC1NYXRoLm1heCgoZ2V0U2Nyb2xsKCkgLyA2KSwgMSkpO1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cnVuKCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsUGFnZVRvVG9wOyJdfQ==
