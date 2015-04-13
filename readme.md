# Xmljson

Simple and lightweight XML to JSON converter.

Just be sure that your argument is a valid DOM Document, and your done.

```javascript
var parser = new DOMParser();
var xml = parser.parseFromString(string, 'text/xml'); // Where 'string' is your xml data collected by any kind
var json = xmljson(string);
```