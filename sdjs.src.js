/**
 * SDJS(Self Description JSON Schema) for web browsers
 *  
 * (c) Copyright 2018-present Richard Li <richard.li@w3plan.net>
 * License: MIT
 */

(function(){
"use strict";

/**
 * Base function
 * @private
 *
 */
var main = function() {
  /**
   * Library
   * @private
   *
   */
  return {
    isNumber: function(val) {
      return typeof val === "number" && 
             !isNaN(val);
    },
    isInteger: function(val) {
      return this.isNumber(val) &&
             Number.isInteger(val);
    },
    isFloat: function(val) {
      return this.isNumber(val) &&
             val % 1 !== 0;
    },
    isString: function(val) {
      return typeof val === "string";
    },
    isEmptyString: function(val) {
      return this.isString(val) &&
             val.length == 0;
    },
    isNumberString: function(val) {
      return this.isString(val) &&
             !isNaN(val) && 
             val == +val;
    },
    isNormalizedString: function(val) {
      return this.isString(val) &&
             val.replace(/[\t\r\n]/g, "") == val;
    },
    isIntegerString: function(val) {
      return this.isString(val) &&
             this.isInteger(+val);
    },
    isFloatString: function(val) {
      return this.isString(val) &&
             this.isFloat(+val);
    },
    isFractionString: function(val) {
      return this.isString(val) &&
             /^[1-9][0-9]*\/[1-9][0-9]*$/.test(val);
    },
    isExponentString: function(val) {
      return this.isNumberString(val) &&
             /e\+|-/gi.test(val);
    },
    isHexString: function(val) {
      return this.isString(val) &&
             /^-?0x[0-9a-f]+$/i.test(val);
    },
    isOctalString: function(val) {
      return this.isString(val) &&
             /^(-?0[0-7]+ ?)+$/.test(val);
    },
    isDateString: function(val) {
      return this.isString(val) &&
             (new Date(val)).toString() !== "Invalid Date" && 
             !isNaN(new Date(val));
    },
    isAsciiString: function(val) {
      return this.isString(val) &&
             /^[\x00-\xFF]+$/.test(val);
    },
    isUnicodeString: function(val) {
      return this.isString(val) &&
             /^[\u0000-\u10FFFF]+$/.test(val);
    },
    isEmail: function(val) {
      var pattern = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
      return this.isString(val) && pattern.test(val);
    },
    isUrl: function(val) {
      var pattern =  /^(ftp:|ftps:|ws:|wss:|http:|https:)?(\/\/)((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+=]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
      return this.isString(val) && pattern.test(val);
    },
    isIpv4: function(val) {
      var pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      return this.isString(val) && pattern.test(val);
    },
    isUuid: function(val) {
      var pattern = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/;
      return this.isString(val) && pattern.test(val);
    },
    isCountry: function(val) {
      var pattern = "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW";
      return this.isString(val) && pattern.split("|").indexOf(val.trim().toUpperCase()) !== -1;
    },
    isLanguage: function(val) {
      return this.isString(val) &&
             /^[a-z]{2,3}(?:-[A-Z]{2,3}(?:-[a-zA-Z]{4})?)?$/.test(val);
    },
    isCssLength: function(val) {
      var pattern = ['ch', 'em', 'ex', 'rem', 'vh', 'vw', 'px', 'mm', 'cm', 'in', 'pt', 'pc'];
      return this.isString(val) && 
             pattern.indexOf(val.trim().slice(-2).toLowerCase()) !== -1 || 
             ['vmin', 'vmax'].indexOf(val.trim().slice(-4).toLowerCase()) !== -1 ;
    },
    isJsonString: function(val) {
      try {
            JSON.parse(val);
          } catch(e) {
            return false;
          }
      return  true;
    },
    isRegExpString: function(val) {
      return this.isString(val) && this.isRegExp(new RegExp(val));
    },
    isUrlEncoded: function(val) {
      return encodeURIComponent(decodeURIComponent(val)) === val;
    },
    isBase64: function(val) {
      try {
        return btoa(atob(val)) == val;
      } catch(e) {
        return false;
      }
    },
    isCssAngle: function(val) {
      return this.isString(val) && 
             ( ['deg', 'rad'].indexOf(val.trim().slice(-3).toLowerCase()) !== -1 || 
               ['grad', 'turn'].indexOf(val.trim().slice(-4).toLowerCase()) !== -1 );
    },
    isCssResolution: function(val) {
      return this.isString(val) && 
             ( ['dpcm', 'dppx'].indexOf(val.trim().slice(-4).toLowerCase()) !== -1 || 
               val.trim().slice(-3).toLowerCase() === 'dpi' );
    },
    isCssFrequency: function(val) {
      return this.isString(val) && 
             ( val.trim().slice(-2).toLowerCase() === 'hz' || 
               val.trim().slice(-3).toLowerCase() === 'khz' );
    },
    isCssTime: function(val) {
      return this.isString(val) && 
             ( val.trim().slice(-1).toLowerCase() === 's' || 
               val.trim().slice(-2).toLowerCase() === 'ms' );
    },
    isCssPercentage: function(val) {
      return this.isString(val) && 
             val.trim().slice(-1).toLowerCase() === '%';
    },
    isCssPosition: function(val) {
      return ["static", "relative", "absolute", "sticky", "fixed"].indexOf(val.trim().toLowerCase()) !== -1;
    },
    isDate: function(val) {
      return this.isDateString(val) &&
             /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(val);
    },
    isTime: function(val) {
      return this.isString(val) &&
             /^([0-1][0-9]|2[0-4]):([0-5][0-9]):[0-5][0-9](.\d{3})?$/.test(val);
    },
    isDateTime: function(val) {
      return this.isString(val) &&
             /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-4]):([0-5][0-9]):[0-5][0-9](.\d{3})?$/.test(val);
    },
    isGYear: function(val) {
      return this.isString(val) &&
             /^\d{4}$/.test(val);
    },
    isGMonth: function(val) {
      return this.isString(val) &&
             /^(0[1-9]|1[012])--$/.test(val);
    },
    isGDay: function(val) {
      return this.isString(val) &&
             /^---(0[1-9]|[12][0-9]|3[01])$/.test(val);
    },
    isGYearMonth: function(val) {
      return this.isString(val) &&
             /^\d{4}-(0[1-9]|1[012])$/.test(val);
    },
    isGMonthDay: function(val) {
      return this.isString(val) &&
             /^--(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(val);
    },
    isExponent: function(val) {
      return this.isNumber(val) &&
             /^e\+|-/i.test(val);
    },  
    isZero: function(val) {
      return this.isInteger(val) &&
             val === 0;
    },
    isPositiveInteger: function(val) {
      return this.isInteger(val) &&
             val > 0;
    },
    isNonNegativeInteger: function(val) {
      return this.isInteger(val) &&
             val >= 0;
    },
    isNegativeInteger: function(val) {
      return this.isInteger(val) &&
             val < 0;
    },
    isNonPositiveInteger: function(val) {
      return this.isInteger(val) &&
             val <= 0;
    },
    isPositiveFloat: function(val) {
      return this.isFloat(val) &&
             val > 0;
    },
    isNonNegativeFloat: function(val) {
      return this.isFloat(val) &&
             val >= 0;
    },
    isNegativeFloat: function(val) {
      return this.isFloat(val) &&
             val < 0;
    },
    isNonPositiveFloat: function(val) {
      return this.isFloat(val) &&
             val <= 0;
    },
    isTrue: function(val) {
      return this.isBoolean(val) &&
             val === true;
    },
    isFalse: function(val) {
      return this.isBoolean(val) &&
             val === false;
    },
    isFiniteNumber: function(val) {
      return isFinite(val);
    },
    isBoolean: function(val) {
      return typeof val === "boolean";
    },
    isUndefined: function(val) {
      return val === undefined;
    },
    isNull: function(val) {
      return val === null;
    },
    isRegExp: function(val) {
      return val instanceof RegExp &&
             Object.prototype.toString.call(val).slice(8, -1) === 'RegExp';
    },
    isArray: function(val) {
      return Array.isArray(val);
    },
    isEmptyArray: function(val) {
      return Array.isArray(val) && 
             val.length === 0;
    },
    isStringArray: function(val) {
      var prefix = this;
      return Array.isArray(val) && 
             val.every( function (i){ return prefix.isString(i); } );
    },
    isNumberArray: function(val) {
      var prefix = this;
      return Array.isArray(val) && 
             val.every( function (i){ return prefix.isNumber(i); } );
    },
    isIntegerArray: function(val) {
      var prefix = this;
      return Array.isArray(val) && 
             val.every( function (i){ return prefix.isInteger(i); } );
    },
    isPositiveIntegerArray: function(val) {
      var prefix = this;
      return Array.isArray(val) && 
             val.every( function (i){ return prefix.isInteger(i) && i > 0 } );
    },
    isNonNegativeIntegerArray: function(val) {
      var prefix = this;
      return Array.isArray(val) && 
             val.every( function (i){ return prefix.isInteger(i) && i >= 0 } );
    },
    isNegativeIntegerArray: function(val) {
      var prefix = this;
      return Array.isArray(val) && 
             val.every( function (i){ return prefix.isInteger(i) && i < 0 } );
    },
    isCssString: function(val) {
      return this.isString(val) && 
             /^(?:\s*[\S ]+\s*{[^}]*})+/.test(val);
    },
    isHexColor: function(val) {
      return this.isString(val) && 
             /^#([a-f0-9]{3}){1,2}$/i.test(val);
    },
    isRgbColor: function(val) {
      return this.isString(val) && 
             /^rgb(a)?\(\d{1,3},\s?\d{1,3},\s?\d{1,3}\)$/i.test(val);
    },
    isCssRatio: function(val) {
      return this.isString(val) && 
             /^[1-9][0-9]*\/[1-9][0-9]*$/.test(val);
    },
    isJsonObject: function(val) { 
      return typeof val === 'object' && 
             Object.prototype.toString.call(val).slice(8, -1) === 'Object';
    },
    isEmptyObject: function(val) {
      for (var key in val) {
        if (val.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    },
    isSafeInteger: function(val) {
      return this.isInteger(val) &&
             Number.isSafeInteger(val);           
    },
    isEnumeration: function(val, constraint) {
      return Array.isArray(constraint) &&
             constraint.indexOf(val) !== -1;
    },
    isPattern: function(val, constraint) {
      if (Array.isArray(constraint)) {

        if (constraint.length == 1) {
          return new RegExp(constraint[0]).test(val);
        } else if (constraint.length > 1) {
          return new RegExp(constraint[0], constraint[1]).test(val);
        }

        return false;
      }
    },
    isLength: function(val, constraint) {
      return this.isNonNegativeInteger(constraint) &&
             this.isString(val) &&
             constraint === val.length;
    },
    isMaxLength: function(val, constraint) {
      return this.isNonNegativeInteger(constraint) &&
             this.isString(val) &&
             constraint >= val.length;
    },
    isMinLength: function(val, constraint) {
      return this.isNonNegativeInteger(constraint) &&
             this.isString(val) &&
             constraint <= val.length;
    },
    isTotalDigits: function(val, constraint) {
      return this.isNumber(val) &&
             constraint === val.toString().replace(".", "").length;
    },
    isFractionDigits: function(val, constraint) {
      return this.isFloat(val) &&
             constraint === val.toString().split('.')[1].length;
    },
    isMinExclusive: function(val, constraint) {
      return this.isNumber(val) &&
             constraint < val ;
    },
    isMaxExclusive: function(val, constraint) {
      return this.isNumber(val) &&
             constraint > val ;
    },
    isMinInclusive: function(val, constraint) {
      return this.isNumber(val) &&
             constraint <= val ;
    },
    isMaxInclusive: function(val, constraint) {
      return this.isNumber(val) &&
             constraint >= val ;
    }
  };
};

/**
 * Derived function
 * @private
 */
var sdjs = function(version) {
  this.NAME = "SDJS";
  this.DESCRIPTION = "SDJS for web browser " + version;
  
  var typeCheck = main();
  
  /**
   * Checks that data is matched by data type
   * 
   * @public 
   * @param {string} type                data type
   * @param {string|number} name         an array index or to be same with property parameter
   * @param {string|number|boolean|null} the value to the name
   * @param {string|number} property     the name of data member
   * @return {boolean}                   Returns false and prints the message if check failed, otherwise returns true
   */
  this.valiType = function (type, name, val, property) {

    if ( !typeCheck['is' + type.charAt(0).toUpperCase() + type.slice(1)] ) {
      console.log(type + " is an invalid data type.");

      return false;
    }
    
    if ( !typeCheck['is' + type.charAt(0).toUpperCase() + type.slice(1)](val) ) {

      if ( typeCheck.isPositiveInteger(name) ) {
        console.log("The value: " + val + " to index: " + name + " of property: " + property + " isn't the type: " + type );
      } else {
        console.log("The value: " + val + " to property: " + property + " isn't the type: " + type );
      }

      return false;
    }

    return true;
  };

  /**
   * Checks that data is constrainted by the constraint conditions
   * 
   * @public
   * @param {object} cstr                constraint object
   * @param {string|number} name         an array index or to be same with property parameter
   * @param {string|number|boolean|null} the value to the name
   * @param {string|number} property     the name of data member
   * @return {boolean}                   Returns false and prints the message if check failed, otherwise returns true
   */
  this.valiConstraint = function (cstr, name, val, property) {
    var flag = true;

    for ( var key in cstr ) {
    
      if ( cstr.hasOwnProperty(key) ) {

        if ( !typeCheck['is' + key.charAt(0).toUpperCase() + key.slice(1)] ) {
          console.log(key + " is an invalid constraint.");

          flag = false;
        }
        
        if ( !typeCheck['is' + key.charAt(0).toUpperCase() + key.slice(1)](val, cstr[key]) ) {
          
          if ( typeCheck.isPositiveInteger(name) ) {
            console.log("The constaint: " + key + " is invalid to the index: " + name + " of property: " + property + " with the value: " + val);
          } else {
            console.log("The constaint: " + key + " is invalid to the property: " + property + " with the value: " + val);
          }

          flag = false;
        }
      }
    }
    
    return flag;
  };
  
  /**
   * Validates JSON members are matched by the descriptions of data presence, type, and constraint.
   * 
   * @public 
   * @param {object} jdata      A JSON object which should be validated  
   * @param {object|null} glb   Object for _pfGlobal or null
   * @return {boolean}          Returns false and prints the message if validation failed, otherwise returns true
   */
  this.valiSdjs = function (jdata, glb) {
    glb = glb || {};
    
    var vResult = true;
    
    for ( var prop in jdata ) {

      if ( jdata.hasOwnProperty(prop) ) {
        
        if ( prop === "_pfGlobal" && typeCheck.isJsonObject(jdata._pfGlobal) ) {
          glb = jdata._pfGlobal;
        }
        
        if ( typeCheck.isJsonObject(jdata[prop]) ) {
          vResult = this.valiSdjs(jdata[prop], glb);

          if (!vResult) window.flag = 1;
        } else if ( Array.isArray(jdata[prop]) ) {

          for ( var i = 0, len = jdata[prop].length; i < len; i++ ) {
            
            if ( typeCheck.isJsonObject(jdata[prop][i]) || 
                 Array.isArray(jdata[prop][i]) ) 
            {
              vResult = this.valiSdjs(jdata[prop][i], glb);

              if (!vResult) window.flag = 1;
            } else if ( jdata.hasOwnProperty(prop + "_pfidx") ) {
              var pfk = null;
              
              if ( jdata[prop + "_pfidx"].hasOwnProperty("all") && 
                   typeof jdata[prop + "_pfidx"].all.type !== 'undefined' ) 
              {
                pfk = "all";
              } else if ( jdata[prop + "_pfidx"].hasOwnProperty("i" + i) && 
                          typeof jdata[prop + "_pfidx"]["i" + i].type !== 'undefined' ) 
              {
                pfk = "i" + i;
              }
              
              if (pfk !== null) {
                vResult = this.valiType(jdata[prop + "_pfidx"][pfk].type, i, jdata[prop][i], prop);

                if (!vResult) window.flag = 1;

                if ( typeof jdata[prop + "_pfidx"][pfk].constraint !== 'undefined' ) {
                  vResult = this.valiConstraint(jdata[prop + "_pfidx"][pfk].constraint, i, jdata[prop][i], prop);

                  if (!vResult) window.flag = 1;
                }
              }
            }
          }
        } else if ( jdata.hasOwnProperty(prop + "_pfsch") && 
                    typeof jdata[prop + "_pfsch"] === "string" &&
                    jdata[prop + "_pfsch"] !== "" &&
                    glb.hasOwnProperty(prop + "_" + jdata[prop + "_pfsch"]) &&
                    typeof glb[prop + "_" + jdata[prop + "_pfsch"]].type !== 'undefined' ) 
        { 
          // the presence value is 'required' to all members of _pfGlobal value
          vResult = this.valiType(glb[prop + "_" + jdata[prop + "_pfsch"]].type, prop, jdata[prop], prop);
          
          if (!vResult) window.flag = 1;

          if ( typeof glb[prop + "_" + jdata[prop + "_pfsch"]].constraint !== 'undefined' ) {
            vResult = this.valiConstraint(glb[prop + "_" + jdata[prop + "_pfsch"]].constraint, prop, jdata[prop], prop);

            if (!vResult) window.flag = 1;
          }
        } else if ( jdata.hasOwnProperty(prop + "_pfsch") && 
                    typeof jdata[prop + "_pfsch"].type !== 'undefined' )
        { 
          // presence value is either 'required' or 'implied'
          vResult = this.valiType(jdata[prop + "_pfsch"].type, prop, jdata[prop], prop);

          if (!vResult) window.flag = 1;

          if ( typeof jdata[prop + "_pfsch"].constraint !== 'undefined' ) {
            vResult = this.valiConstraint(jdata[prop + "_pfsch"].constraint, prop, jdata[prop], prop);

            if (!vResult) window.flag = 1;
          }
        } else if ( prop.length > 6 &&
                    prop.slice(-6) === "_pfsch" &&
                    jdata[prop].presence === 'implied' &&
                    typeof jdata[prop].type !== 'undefined' &&
                    !jdata.hasOwnProperty(prop.slice(0, -6)) )
        {
          var pfn = "";
          var pfv = null;
          
          if ( jdata.hasOwnProperty(prop.slice(0, -6) + "_default") ) {
            pfn = prop.slice(0, -6) + "_default";
            pfv = jdata[pfn];
          } else if ( jdata.hasOwnProperty(prop.slice(0, -6) + "_fixed") ) {
            pfn = prop.slice(0, -6) + "_fixed";
            pfv = jdata[pfn];
          }
          
          if ( pfv !== null ) {
            vResult = this.valiType(jdata[prop].type, pfn, pfv, prop);
            
            if (!vResult) window.flag = 1;

            if ( typeof jdata[prop].constraint !== 'undefined' ) {
              vResult = this.valiConstraint(jdata[prop].constraint, pfn, pfv, prop);

              if (!vResult) window.flag = 1;
            }
          }
        }
      }
    }

    if (window.flag !== undefined && window.flag === 1) {
      window.flag = 0;

      return false;
    }
    
    return true;
  };
};

/**
 *
 * Create global object: sdjs
 * @public
 */
window.sdjs = new sdjs("Version 1.2.0");

})();
