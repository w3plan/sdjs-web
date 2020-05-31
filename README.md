<p align="center">
  <img width="100" height="60" src="/sdjs-logo.jpg">
</p>

## SDJS(Self Description JSON Schema) for web browsers

SDJS is a tool that validates JSON members matched with the descriptions of data presence, type, and constraint.

SDJS includes a group of rules and notations which describe data presence, data type and data constraints to a JSON data, the rules and notations don't change any key-value pairs in JSON, they are some extra members to JSON.

SDJS-Web is a version of SDJS specified for web browsers. To access [SDJS-Web repository](https://github.com/w3plan/sdjs-web "SDJS-Web") for the details.

The URL of SDJS-Web CDN is https://cdn.jsdelivr.net/gh/w3plan/sdjs-web/

## Documentation

To see [Self Description JSON Schema](https://www.w3plan.net/pfsdjs/ "SDJS documentation")


## Installation

Downloads sdjs-web from [sdjs-web repository](https://github.com/w3plan/sdjs-web "sdjs-web repository") to the directory of web server, or includes sdjs.js via CDN with https://cdn.jsdelivr.net/gh/w3plan/sdjs-web@master/sdjs.js in web pages.


## Usage

Adding &lt;script src="https://cdn.jsdelivr.net/gh/w3plan/sdjs-web@master/sdjs.js"&gt;&lt;/script&gt; or &lt;script src="/directory-to-sdjs/sdjs.js"&gt;&lt;/script&gt; to web pages then doing data validation:

```javascript
  // supposing that sdjsObj is a JSON object with Self Description JSON Schema
  if ( sdjs.valiSdjs(sdjsObj) ) {
    console.log("validation failed");
  } else {
    console.log("validation succeeded");
  }  
  
```


## Tests

Accessing /test/index.html from web server.


## License

MIT


## Keywords

> presence, type, constraint, schema, sdjs, sdjs-web, json

