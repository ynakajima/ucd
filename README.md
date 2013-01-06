# UnicodeCharName
UnicodeCharName is a JavaScript library that returns a Unicode name of a given character.

## Usage
```javascript
UnicodeCharName.getCharName('@'); // "COMMERCIAL AT"
UnicodeCharName.getCharName('2'); // "DIGIT TWO"
UnicodeCharName.getCharName('L'); // "LATIN CAPITAL LETTER L"
UnicodeCharName.getCharName('m'); // "LATIN SMALL LETTER M"
UnicodeCharName.getCharName('ü'); // "LATIN SMALL LETTER U WITH DIAERESIS"
UnicodeCharName.getCharName('ﬅ'); // "LATIN SMALL LIGATURE LONG S T"
UnicodeCharName.getCharName('ق'); // "ARABIC LETTER QAF"
UnicodeCharName.getCharName('תּ'); // "HEBREW LETTER TAV WITH DAGESH"
UnicodeCharName.getCharName('あ'); // "HIRAGANA LETTER A"
UnicodeCharName.getCharName('か'); // "HIRAGANA LETTER KA"
UnicodeCharName.getCharName('ヨ'); // "KATAKANA LETTER YO"
UnicodeCharName.getCharName('）'); // "FULLWIDTH RIGHT PARENTHESIS"
UnicodeCharName.getCharName('漢'); // "CJK Ideograph-6F22"
UnicodeCharName.getCharName('⿒'); // "KANGXI RADICAL TOOTH"
UnicodeCharName.getCharName('㉀'); // "PARENTHESIZED IDEOGRAPH FESTIVAL"
UnicodeCharName.getCharName('☣'); // "BIOHAZARD SIGN"
```

## License
Released under the MIT license.

Copyright (c) 2013 ynakajima
