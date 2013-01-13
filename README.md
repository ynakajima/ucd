# UCD - Unicode Character Database for JavaScript

UCD offers a series of functions that provide a simple interface to the Unicode Character Database.


# Supported Platforms

* Node.js
* Modern Web Browsers


## Install for Node.js
```sh
npm install ucd
```

## How to load a UCD module

### Node.js
```javascript
// load UCD
var UCD = require('ucd');
```


### Web Browser
```html
<!-- laod UCD -->
<script type="text/javascript" src="ucd-0.1.0.js"></script>
```

## Usage

### Get Unicode Name
`.getName()` method returns a Unicode Name of character given as argument.

```javascript
UCD.getName('@'); // "COMMERCIAL AT"
UCD.getName('2'); // "DIGIT TWO"
UCD.getName('L'); // "LATIN CAPITAL LETTER L"
UCD.getName('m'); // "LATIN SMALL LETTER M"
UCD.getName('ü'); // "LATIN SMALL LETTER U WITH DIAERESIS"
UCD.getName('ﬅ'); // "LATIN SMALL LIGATURE LONG S T"
UCD.getName('ق'); // "ARABIC LETTER QAF"
UCD.getName('תּ'); // "HEBREW LETTER TAV WITH DAGESH"
UCD.getName('あ'); // "HIRAGANA LETTER A"
UCD.getName('か'); // "HIRAGANA LETTER KA"
UCD.getName('ヨ'); // "KATAKANA LETTER YO"
UCD.getName('）'); // "FULLWIDTH RIGHT PARENTHESIS"
UCD.getName('漢'); // "CJK UNIFIED IDEOGRAPH-6F22"
UCD.getName('⿒'); // "KANGXI RADICAL TOOTH"
UCD.getName('㉀'); // "PARENTHESIZED IDEOGRAPH FESTIVAL"
UCD.getName('☣'); // "BIOHAZARD SIGN"
```

## License
Released under the MIT license.

Copyright (c) 2013 ynakajima
