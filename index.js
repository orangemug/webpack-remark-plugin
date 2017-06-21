var loaderUtils = require("loader-utils");
var remark = require('remark');


module.exports = function (markdown) {
	var options = loaderUtils.getOptions(this);

	this.cacheable();

	var chain = remark()

  options.use
    .map(function(item) {
      chain = chain.use(item.module, item.options || {});
    });

  let html = chain
		.processSync(markdown)

  var obj = JSON.stringify(html.contents)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return obj;
};
