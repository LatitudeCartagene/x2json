(function () {
  'use strict';

  function x2json(xml) {
    // Create the return object
    var obj = {};

    if (xml.nodeType === 1) { // element
      // do attributes
      if (xml.attributes.length) {
        obj.attrs = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj.attrs[attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) { // text
      obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
      for(var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);

        if (item.nodeType === 3) { // text
          obj = item.nodeValue;
          break;
        }

        var nodeName = item.nodeName;

        if (typeof(obj[nodeName]) === 'undefined') {
          obj[nodeName] = x2json(item);
        } else {
          if (typeof(obj[nodeName].push) === 'undefined') {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(x2json(item));
        }
      }
    }

    return obj;
  }

  // Export module
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = x2json;
  } else {
    window.x2json = x2json;
  }
})();
