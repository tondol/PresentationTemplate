/* TexUtil */
(function (window, $) {
	var module = {};
	module.insert = function (selector, formula, size) {
		var a = "http://chart.apis.google.com/chart?cht=tx&chl=";
		var b = encodeURIComponent(formula);
		var c = size == void 0 ? "" : "&chs=" + size;
		var d = $("<img>").attr('src', a + b + c);
		$(selector).append(d);
	};
	module.heredoc = function (func) {
		var a = /\/\*([^]*)\*\//;
		return func.toString().match(a)[1];
	};
	window.TexUtil = module;
})(window, jQuery);