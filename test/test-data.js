/**
 * An object for data types, object properties are the names of JSON member type
 *
 * @public
 */
var typesData = {
  "string": "Self Description JSON Schema",
  "emptyString": "",
  "numberString": "100.25",
  "integerString": "10",
  "floatString": "5.27",
  "fractionString": "3/5",
  "exponentString": "2e+65",
  "asciiString": "83 101 108 102 32 68 101 115 99 114 105 112 116 105 111 110 32 74 83 79 78 32 83 99 104 101 109 97",
  "hexString": "0x53656C66204465736372697074696F6E204A534F4E20536368656D61",
  "octalString": "0123 0145 0154 0146 040",
  "jsonString": '{"menu": {"id": "file", "value": "File" }}',
  "normalizedString": "83, 101, 108, 102, 32, 68, 101, 115",
  "regExpString": "/^-?0x[0-9a-f]+$/i",
  "unicodeString": "\u0053\u0065\u006c\u0066",
  "url": "https://www.w3plan.net/pfsdjs/",
  "email": "contact@w3plan.net",
  "urlEncoded": "Self%20Description%20JSON%20Schema",
  "ipv4": "127.0.0.0",
  "base64": "U2VsZiBEZXNjcmlwdGlvbiBKU09OIFNjaGVtYQ==",
  "uuid": "9624aeef-afac-43b7-aae9-f5278da52d17",
  "country": "CA",
  "language": "en",
  "cssString": 'p{font-family:verdana;font-size:18px;}',
  "hexColor": "#FF4500",
  "rgbColor": "rgb(255,69,0)",
  "cssRatio": "3/2",
  "cssLength": "1.5em",
  "cssAngle": "20deg",
  "cssResolution": "300dpi",
  "cssFrequency": "150KHZ",
  "cssTime": "50s",
  "cssPercentage": "105%",
  "cssPosition": "absolute",
  "date": "2020-05-01",
  "time": "10:25:30.000",
  "dateTime": "2020-05-01 10:25:30",
  "gYear": "2020",
  "gMonth": "05--",
  "gDay": "---01",
  "gYearMonth": "2020-05", 
  "gMonthDay": "--05-01",
  "integer": 5,
  "safeInteger": 1000,
  "float": 7.25,
  "exponent": 2e-12,
  "zero": 0,
  "positiveInteger": 4,
  "nonNegativeInteger": 3, 
  "negativeInteger": -2,
  "nonPositiveInteger": -5, 
  "positiveFloat": 2.67,
  "nonNegativeFloat": 2.8,
  "negativeFloat": -5.32,
  "nonPositiveFloat": -3.67,
  "finiteNumber": 21,
  "number": 53.20,
  "true": true,
  "false": false,
  "boolean": true,
  "null": null,
  "emptyObject": {}, 
  "jsonObject": {"menu": {"id": "file", "value": "File" }},
  "emptyArray": [],
  "stringArray": ['Self', 'Description', 'JSON', 'Schema'],
  "positiveIntegerArray": [8, 6, 3, 2, 5],
  "nonNegativeIntegerArray": [8, 0, 3, 0, 5],
  "negativeIntegerArray":  [-8, -6, -3, -2, -5],
  "integerArray": [8, -6, 3, -2, 5],
  "numberArray": [2.67, -3.66, 8, 0, -100],
  "array": ['Self', 'Description', 'JSON', 'Schema', 2.67, -3.66, 8, 0, -100]
};

/**
 * An object for data constraints, object properties are the names of JSON member constraint
 *
 * @public
 */
var cstrsData = {
  "maxInclusive": 999.99,
  "minInclusive": 100.01,
  "maxExclusive": 1000,
  "minExclusive": 100, 
  "totalDigits": 5,
  "fractionDigits": 2,
  "length": 28,
  "maxLength": 30,
  "minLength": 5,
  "pattern": ["[1-9][0-9]*\/[1-9][0-9]*", "g"],
  "enumeration": ["gif", "jpg", "jpeg", "png"]
};

/**
 * A general JSON object with Self Description JSON Schema
 *
 * @public
 */
var modelData = {
  "description": "PlannerFw modeldata sample",
  "author": "Richard Li <richard.li@w3plan.net>",
  "copyright_default": "Copyright 2018-2020",
  "copyright_pfsch": {"presence": "implied", "type": "string"},
  "licenses": "MIT",
  "pfDataSet": {
    "_pfGlobal": {
      "age_fieldspace": {"type": "positiveInteger", "constraint": {"maxExclusive": 100, "minExclusive": 10}},
      "education_fspace": {"type": "string", "constraint": {"enumeration": ["No College", "Graduate School", "College", "Some College", "University"], "maxLength": 20, "minLength": 6}}
    },
    "title": "NASA satellite spots a weakening Karina, now a tropical storm",
    "caption": "NASA's Terra satellite",
    "grid": {
      "gridRow1": {
        "city": "New York",
        "name": "Jonesy Band",
        "education": "No College",
        "education_pfsch": "fspace",
        "age": 16,
        "age_pfsch": "fieldspace"
      },
      "gridRow2": {
        "city": "Chicago",
        "name": "Mary Kay",
        "education": "Graduate School",
        "education_pfsch": "fspace",
        "age": 35,
        "age_pfsch": "fieldspace"
      },
      "gridRow3": {
        "city": "Los Angeles",
        "name": "James Franco",
        "education": "College",
        "education_pfsch": "fspace",
        "age": 28,
        "age_pfsch": "fieldspace"
      },
      "gridRow4": {
        "city": "San Diego",
        "name": "Ellen Compell",
        "education": "Some College",
        "education_pfsch": "fspace",
        "age": 20,
        "age_pfsch": "fieldspace"
      }
    },
    "imageType": ["gif", "jpg", "jpeg", "png", "tif"],
    "imageType_pfidx": {
                        "i1": {"type": "string"},
                        "i3": {"type": "string"}
    },
    "image": {
      "src": "/img/pf/karina_storm1.jpg",
      "altSrc": "http://media.eurekalert.org/multimedia_prod/pub/web/77823_web.jpg",
      "altSrc_pfsch": {"type": "url"}
    }
  }
};
