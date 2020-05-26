'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@emotion/core');
var PropTypes = _interopDefault(require('prop-types'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var testOmitPropsOnStringTag = index;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser$1 = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (process.env.NODE_ENV !== 'production' && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = core.withEmotionCache(function (props, context, ref) {
      return React.createElement(core.ThemeContext.Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = getRegisteredStyles(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = insertStyles(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if (process.env.NODE_ENV !== 'production' && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = React.createElement(finalTag, newProps);

        if (!isBrowser$1 && rules !== undefined) {
          var _ref;

          var serializedNames = serialized.name;
          var next = serialized.next;

          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }

          return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = context.sheet.nonce, _ref)), ele);
        }

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && process.env.NODE_ENV !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

var orange = {
  _300: '#FFB534',
  _500: '#FF9F1C',
  _800: '#C56F14'
};
var gray = {
  _100: '#E0EFF1',
  _200: '#C0CED6',
  _500: '#A0AEBA',
  _600: '#6f7d91',
  _800: '#282F48',
  _900: '#10132D'
};
var theme = {
  primary: {
    light: orange._300,
    main: orange._500,
    dark: orange._800
  },
  bg: {
    light: gray._200,
    main: gray._500,
    dark: gray._600
  },
  font: {
    main: gray._800
  },
  border: {
    main: gray._900
  }
};
var font = /*#__PURE__*/core.css("font-family:helvetica,arial;font-size:12px;color:", theme.font.main, ";;label:font;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0N1QiIsImZpbGUiOiJ2YXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IG9yYW5nZSA9IHtcblx0XzMwMDogJyNGRkI1MzQnLFxuXHRfNTAwOiAnI0ZGOUYxQycsXG5cdF84MDA6ICcjQzU2RjE0Jyxcbn07XG5jb25zdCBncmF5ID0ge1xuXHRfMTAwOiAnI0UwRUZGMScsXG5cdF8yMDA6ICcjQzBDRUQ2Jyxcblx0XzUwMDogJyNBMEFFQkEnLFxuXHRfNjAwOiAnIzZmN2Q5MScsXG5cdF84MDA6ICcjMjgyRjQ4Jyxcblx0XzkwMDogJyMxMDEzMkQnLFxufTtcblxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG5cdHByaW1hcnk6IHtcblx0XHRsaWdodDogb3JhbmdlLl8zMDAsXG5cdFx0bWFpbjogb3JhbmdlLl81MDAsXG5cdFx0ZGFyazogb3JhbmdlLl84MDAsXG5cdH0sXG5cdGJnOiB7XG5cdFx0bGlnaHQ6IGdyYXkuXzIwMCxcblx0XHRtYWluOiBncmF5Ll81MDAsXG5cdFx0ZGFyazogZ3JheS5fNjAwLFx0XHRcblx0fSxcblx0Zm9udDoge1xuXHRcdG1haW46IGdyYXkuXzgwMCxcblx0fSxcblx0Ym9yZGVyOiB7XG5cdFx0bWFpbjogZ3JheS5fOTAwLFxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZm9udCA9IGNzc2Bcblx0Zm9udC1mYW1pbHk6IGhlbHZldGljYSwgYXJpYWw7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICR7dGhlbWUuZm9udC5tYWlufTtcbmA7XG5cbmV4cG9ydCBjb25zdCBiYXNlQmxvY2sgPSBjc3NgXG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5iZy5kYXJrfTtcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJnLm1haW59O1xuYDtcbmV4cG9ydCBjb25zdCBidXR0b24gPSBjc3NgXG5cdCR7YmFzZUJsb2NrfVxuXHRwYWRkaW5nOiAycHggM3B4O1xuXHQ6YWN0aXZlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnkubWFpbn07XG5cdH1cblx0OmZvY3VzIHtcblx0XHRvdXRsaW5lOiAycHggc29saWQgJHt0aGVtZS5iZy5saWdodH07XG5cdH1cbmA7XG4iXX0= */"));
var baseBlock = /*#__PURE__*/core.css("padding:5px;border:1px solid ", theme.bg.dark, ";border-radius:0px;background-color:", theme.bg.main, ";;label:baseBlock;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEM0QiIsImZpbGUiOiJ2YXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IG9yYW5nZSA9IHtcblx0XzMwMDogJyNGRkI1MzQnLFxuXHRfNTAwOiAnI0ZGOUYxQycsXG5cdF84MDA6ICcjQzU2RjE0Jyxcbn07XG5jb25zdCBncmF5ID0ge1xuXHRfMTAwOiAnI0UwRUZGMScsXG5cdF8yMDA6ICcjQzBDRUQ2Jyxcblx0XzUwMDogJyNBMEFFQkEnLFxuXHRfNjAwOiAnIzZmN2Q5MScsXG5cdF84MDA6ICcjMjgyRjQ4Jyxcblx0XzkwMDogJyMxMDEzMkQnLFxufTtcblxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG5cdHByaW1hcnk6IHtcblx0XHRsaWdodDogb3JhbmdlLl8zMDAsXG5cdFx0bWFpbjogb3JhbmdlLl81MDAsXG5cdFx0ZGFyazogb3JhbmdlLl84MDAsXG5cdH0sXG5cdGJnOiB7XG5cdFx0bGlnaHQ6IGdyYXkuXzIwMCxcblx0XHRtYWluOiBncmF5Ll81MDAsXG5cdFx0ZGFyazogZ3JheS5fNjAwLFx0XHRcblx0fSxcblx0Zm9udDoge1xuXHRcdG1haW46IGdyYXkuXzgwMCxcblx0fSxcblx0Ym9yZGVyOiB7XG5cdFx0bWFpbjogZ3JheS5fOTAwLFxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZm9udCA9IGNzc2Bcblx0Zm9udC1mYW1pbHk6IGhlbHZldGljYSwgYXJpYWw7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICR7dGhlbWUuZm9udC5tYWlufTtcbmA7XG5cbmV4cG9ydCBjb25zdCBiYXNlQmxvY2sgPSBjc3NgXG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5iZy5kYXJrfTtcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJnLm1haW59O1xuYDtcbmV4cG9ydCBjb25zdCBidXR0b24gPSBjc3NgXG5cdCR7YmFzZUJsb2NrfVxuXHRwYWRkaW5nOiAycHggM3B4O1xuXHQ6YWN0aXZlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnkubWFpbn07XG5cdH1cblx0OmZvY3VzIHtcblx0XHRvdXRsaW5lOiAycHggc29saWQgJHt0aGVtZS5iZy5saWdodH07XG5cdH1cbmA7XG4iXX0= */"));
var button = /*#__PURE__*/core.css(baseBlock, " padding:2px 3px;:active{background-color:", theme.primary.main, ";}:focus{outline:2px solid ", theme.bg.light, ";};label:button;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0R5QiIsImZpbGUiOiJ2YXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IG9yYW5nZSA9IHtcblx0XzMwMDogJyNGRkI1MzQnLFxuXHRfNTAwOiAnI0ZGOUYxQycsXG5cdF84MDA6ICcjQzU2RjE0Jyxcbn07XG5jb25zdCBncmF5ID0ge1xuXHRfMTAwOiAnI0UwRUZGMScsXG5cdF8yMDA6ICcjQzBDRUQ2Jyxcblx0XzUwMDogJyNBMEFFQkEnLFxuXHRfNjAwOiAnIzZmN2Q5MScsXG5cdF84MDA6ICcjMjgyRjQ4Jyxcblx0XzkwMDogJyMxMDEzMkQnLFxufTtcblxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG5cdHByaW1hcnk6IHtcblx0XHRsaWdodDogb3JhbmdlLl8zMDAsXG5cdFx0bWFpbjogb3JhbmdlLl81MDAsXG5cdFx0ZGFyazogb3JhbmdlLl84MDAsXG5cdH0sXG5cdGJnOiB7XG5cdFx0bGlnaHQ6IGdyYXkuXzIwMCxcblx0XHRtYWluOiBncmF5Ll81MDAsXG5cdFx0ZGFyazogZ3JheS5fNjAwLFx0XHRcblx0fSxcblx0Zm9udDoge1xuXHRcdG1haW46IGdyYXkuXzgwMCxcblx0fSxcblx0Ym9yZGVyOiB7XG5cdFx0bWFpbjogZ3JheS5fOTAwLFxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZm9udCA9IGNzc2Bcblx0Zm9udC1mYW1pbHk6IGhlbHZldGljYSwgYXJpYWw7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICR7dGhlbWUuZm9udC5tYWlufTtcbmA7XG5cbmV4cG9ydCBjb25zdCBiYXNlQmxvY2sgPSBjc3NgXG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5iZy5kYXJrfTtcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJnLm1haW59O1xuYDtcbmV4cG9ydCBjb25zdCBidXR0b24gPSBjc3NgXG5cdCR7YmFzZUJsb2NrfVxuXHRwYWRkaW5nOiAycHggM3B4O1xuXHQ6YWN0aXZlIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnkubWFpbn07XG5cdH1cblx0OmZvY3VzIHtcblx0XHRvdXRsaW5lOiAycHggc29saWQgJHt0aGVtZS5iZy5saWdodH07XG5cdH1cbmA7XG4iXX0= */"));

var Wrapper = createStyled("button", {
  target: "ewlf0ji0",
  label: "Wrapper"
})(font, " ", button, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJNkIiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgZm9udCwgYnV0dG9uIH0gZnJvbSAnc3R5bGUvdmFycyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuYnV0dG9uYFxuXHQke2ZvbnR9XG5cdCR7YnV0dG9ufVxuYDtcbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG5cdGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7fTtcblx0cmV0dXJuIDxXcmFwcGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57Y2hpbGRyZW59PC9XcmFwcGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ== */");

var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var handleClick = function handleClick() {};

  return /*#__PURE__*/React__default.createElement(Wrapper, {
    onClick: handleClick
  }, children);
};

var Wrapper$1 = createStyled("select", {
  target: "eljvfqn0",
  label: "Wrapper"
})(font, " ", button, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJNkIiLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGZvbnQsIGJ1dHRvbiB9IGZyb20gJ3N0eWxlL3ZhcnMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlbGVjdGBcblx0JHtmb250fVxuXHQke2J1dHRvbn1cbmA7XG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuXHRjb25zb2xlLndhcm4ocHJvcHMpO1xuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHt9O1xuXHRyZXR1cm4gPFdyYXBwZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9PntjaGlsZHJlbn08L1dyYXBwZXI+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */");

var Button$1 = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  console.warn(props);

  var handleClick = function handleClick() {};

  return /*#__PURE__*/React__default.createElement(Wrapper$1, {
    onClick: handleClick
  }, children);
};

var POINTER_HEIGHT = 10;
var SLIDER_HEIGHT = 130;

var pixelToValue = function pixelToValue(pixelValue, maxHeight, max) {
  var percent = pixelValue / maxHeight;
  return Math.round(max * percent);
};

var valueToPixel = function valueToPixel(value, maxHeight, max) {
  var percent = value / max;
  return percent * maxHeight;
};

var buildTicks = function buildTicks(nbr) {
  var arr = Array(Math.floor(nbr / 2)).fill().map(function (el, i) {
    return i % 2 === 0 ? 'long' : 'short';
  });
  return nbr % 2 === 0 ? [].concat(_toConsumableArray(arr), _toConsumableArray(arr.reverse())) : [].concat(_toConsumableArray(arr), ['short'], _toConsumableArray(arr.reverse()));
};

var basePointer = createStyled("div", {
  target: "e1utnk6q0",
  label: "basePointer"
})("width:0px;height:0px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:", POINTER_HEIGHT, "px solid grey;position:absolute;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvaW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSThCIiwiZmlsZSI6IlBvaW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgUE9JTlRFUl9IRUlHSFQgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgYmFzZVBvaW50ZXIgPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMHB4O1xuXHRoZWlnaHQ6IDBweDtcblx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yaWdodDogJHtQT0lOVEVSX0hFSUdIVH1weCBzb2xpZCBncmV5O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5gO1xuXG5jb25zdCBQb2ludGVyID0gKHsgdG9wLCAuLi5wcm9wcyB9KSA9PiB7XG5cdGNvbnN0IFBvaW50ID0gc3R5bGVkKGJhc2VQb2ludGVyKWBcblx0XHR0b3A6ICR7dG9wfXB4O1xuXHRgO1xuXHRyZXR1cm4gPFBvaW50IHsuLi5wcm9wc30gLz47XG59O1xuZXhwb3J0IGRlZmF1bHQgUG9pbnRlcjtcbiJdfQ== */"));

var Pointer = function Pointer(_ref) {
  var top = _ref.top,
      props = _objectWithoutProperties(_ref, ["top"]);

  var Point = /*#__PURE__*/createStyled(basePointer, {
    target: "e1utnk6q1",
    label: "Point"
  })("top:", top, "px;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvaW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tDIiwiZmlsZSI6IlBvaW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgUE9JTlRFUl9IRUlHSFQgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgYmFzZVBvaW50ZXIgPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMHB4O1xuXHRoZWlnaHQ6IDBweDtcblx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yaWdodDogJHtQT0lOVEVSX0hFSUdIVH1weCBzb2xpZCBncmV5O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5gO1xuXG5jb25zdCBQb2ludGVyID0gKHsgdG9wLCAuLi5wcm9wcyB9KSA9PiB7XG5cdGNvbnN0IFBvaW50ID0gc3R5bGVkKGJhc2VQb2ludGVyKWBcblx0XHR0b3A6ICR7dG9wfXB4O1xuXHRgO1xuXHRyZXR1cm4gPFBvaW50IHsuLi5wcm9wc30gLz47XG59O1xuZXhwb3J0IGRlZmF1bHQgUG9pbnRlcjtcbiJdfQ== */"));

  return /*#__PURE__*/React__default.createElement(Point, props);
};

var style = "\n\t.slider {\n\t\tdisplay: flex;\n\t\theight: ".concat(SLIDER_HEIGHT, "px;\n\t\tposition:relative;\n\t\twidth: 40px;\n\t\tmargin: auto;\n\t\tjustify-content: space-between;\n\t}\n\t.slider:focus {\n\t\toutline: 1px dashed black;\n\t\tpadding: 0 5px;\n\t}\n\t.section {\n\t\tflex: 1 1 35%;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin: ").concat(POINTER_HEIGHT / 2, "px 0; \n\t}\n\t.bar{\n\t\theight: 100%;\n\t\tflex-basis: 47%;\n\t\tbackground-color: black;\n\t}\n\t.scale{\n\t\twidth: 5px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tflex-direction: column;\n\t\tmargin: ").concat(POINTER_HEIGHT / 2, "px 0; \n\t}\n\t.tick {\n\t\tmargin-left: 2px;\n\t\theight: 1px;\n\t\tbackground: black;\n\t}\n\t.tick.short{\n\t\twidth: 60%;\n\t}\n\t.tick.long{\n\t\twidth: 100%;\n\t}\n\t.number{\n\t\tflex-direction: column;\n\t\tfont-size: 10px;\n\t\tline-height: 10px;\n\t\tfont-family: helvetica;\n\t\ttext-align: end;\n\t}\n");

var Slider = function Slider(_ref) {
  var min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      nbrTick = _ref.nbrTick,
      measures = _ref.measures,
      onChange = _ref.onChange,
      lazy = _ref.lazy,
      props = _objectWithoutProperties(_ref, ["min", "max", "value", "nbrTick", "measures", "onChange", "lazy"]);

  var ticks = function (nbr) {
    return buildTicks(nbr).map(function (el, i) {
      return /*#__PURE__*/React__default.createElement("div", {
        key: i,
        className: "tick ".concat(el)
      });
    });
  }(nbrTick);

  var measuresList = measures.map(function (el, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: i
    }, el);
  });

  var _useState = React.useState(valueToPixel(value, SLIDER_HEIGHT - POINTER_HEIGHT, max)),
      _useState2 = _slicedToArray(_useState, 2),
      pointerVal = _useState2[0],
      setPointerVal = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPressed = _useState4[0],
      setIsPressed = _useState4[1];

  var _useState5 = React.useState(value),
      _useState6 = _slicedToArray(_useState5, 2),
      sliderValue = _useState6[0],
      setSliderValue = _useState6[1];

  var updateCusor = function updateCusor(evt) {
    if (isPressed) {
      var posY = evt.clientY - evt.currentTarget.offsetTop;

      if (posY <= evt.currentTarget.clientHeight - POINTER_HEIGHT) {
        setPointerVal(posY);
      }
    }
  };

  React.useEffect(function () {
    var value = pixelToValue(pointerVal, SLIDER_HEIGHT - POINTER_HEIGHT, max);
    if (value < min) value = min;
    if (value > max) value = max;
    setSliderValue(value);
  }, [pointerVal]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("style", null, style), /*#__PURE__*/React__default.createElement("div", _extends({
    onMouseDown: function onMouseDown() {
      return setIsPressed(true);
    },
    onMouseUp: function onMouseUp(evt) {
      evt.persist();
      updateCusor(evt);
      setIsPressed(false);
      onChange && onChange(sliderValue);
    },
    onMouseMove: function onMouseMove(evt) {
      evt.persist();
      updateCusor(evt);
      onChange && isPressed && !lazy && onChange("".concat(sliderValue));
    },
    onMouseLeave: function onMouseLeave() {
      if (isPressed) {
        setIsPressed(false);
        onChange && onChange(sliderValue);
      }
    },
    role: "slider",
    tabIndex: "0",
    className: "slider",
    "aria-label": "slider",
    "aria-valuenow": sliderValue,
    "aria-valuemin": min,
    "aria-valuemax": max
  }, props), /*#__PURE__*/React__default.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "bar"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "bar"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "scale"
  }, /*#__PURE__*/React__default.createElement(Pointer, {
    top: pointerVal
  }), ticks), /*#__PURE__*/React__default.createElement("div", {
    className: "section number"
  }, measuresList)));
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  nbrTick: PropTypes.number,
  onChange: PropTypes.func,
  // callback function returning slider value
  measures: PropTypes.array,
  // values list displayed on the slider
  lazy: PropTypes.bool // if true, trigger onChange hanlder only when mouse release OR leaves

};
Slider.defaultProps = {
  min: 0,
  max: 100,
  value: 90,
  nbrTick: 5,
  measures: [100, 0],
  lazy: undefined,
  onChange: function onChange() {}
};

var Wrapper$2 = createStyled("div", {
  target: "e14hw9va0",
  label: "Wrapper"
})(baseBlock, " width:100px;height:200px;display:flex;flex-direction:column;justify-content:space-between;> div{display:flex;justify-content:space-between;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU8wQiIsImZpbGUiOiJCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAnLi9Wb2x1bWVTbGlkZXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgYmFzZUJsb2NrIH0gZnJvbSAnc3R5bGUvdmFycyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHQke2Jhc2VCbG9ja31cblx0d2lkdGg6IDEwMHB4O1xuXHRoZWlnaHQ6IDIwMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdD4gZGl2IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuYDtcblxuY29uc3QgQnV0dG9uU2VsZWN0ID0gKCkgPT4gKFxuXHQ8V3JhcHBlcj5cblx0XHQ8U2VsZWN0PlxuXHRcdFx0PG9wdGlvbj52YWx1ZTwvb3B0aW9uPlxuXHRcdDwvU2VsZWN0PlxuXHRcdDxTbGlkZXJcblx0XHRcdG1pbj17MH1cblx0XHRcdG1heD17MTAwfVxuXHRcdFx0dmFsdWU9ezc1fVxuXHRcdFx0bmJyVGljaz17MTV9XG5cdFx0XHRsYXp5XG5cdFx0XHRtZWFzdXJlcz17WzAsIDUwLCAxMDBdfVxuXHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IGNvbnNvbGUubG9nKHZhbCl9XG5cdFx0Lz5cblx0XHQ8ZGl2PlxuXHRcdFx0PEJ1dHRvbiB0ZXh0PVwiT25cIj5vbjwvQnV0dG9uPlxuXHRcdFx0PEJ1dHRvbiB0ZXh0PVwiT25cIj5vcHRpb248L0J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0PC9XcmFwcGVyPlxuKTtcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblNlbGVjdDtcbiJdfQ== */"));

var ButtonSelect = function ButtonSelect() {
  return /*#__PURE__*/React__default.createElement(Wrapper$2, null, /*#__PURE__*/React__default.createElement(Button$1, null, /*#__PURE__*/React__default.createElement("option", null, "value")), /*#__PURE__*/React__default.createElement(Slider, {
    min: 0,
    max: 100,
    value: 75,
    nbrTick: 15,
    lazy: true,
    measures: [0, 50, 100],
    onChange: function onChange(val) {
      return console.log(val);
    }
  }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Button, {
    text: "On"
  }, "on"), /*#__PURE__*/React__default.createElement(Button, {
    text: "On"
  }, "option")));
};

exports.Block = ButtonSelect;
exports.Button = Button;
exports.Select = Button$1;
exports.Slider = Slider;
