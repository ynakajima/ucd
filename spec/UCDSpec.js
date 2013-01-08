/**
 * @license Released under the MIT license.
 *
 * <pre>
 * Copyright (c) 2013 ynakajima <yuhta.nakajima@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * </pre>
 *
 * @fileoverview Spec of UCD.
 * @author yuhta.nakajima@gmail.com (ynakajima)
 */
(function(global) {

  // require
  var UCD = (typeof require !== 'undefined') ?
    require('../src/UCD.js') :
    global.UCD;
  var UnicodeData = (typeof require !== 'undefined') ?
    require('../data/unicodedata.js') :
    global.UnicodeData;

  // spec
  describe('UCD', function() {

    it('is Object', function() {
      expect(UCD).toEqual(jasmine.any(Object));
    });

    it('has readUnicodeData Class method', function() {
      expect(UCD.readUnicodeData).toEqual(jasmine.any(Function));
    });

    it('has getCharName Class method', function() {
      expect(UCD.getCharName).toEqual(jasmine.any(Function));
    });

    it('has getUnicodeVersion Class method', function() {
      expect(UCD.getUnicodeVersion).toEqual(jasmine.any(Function));
      expect(UCD.getUnicodeVersion()).toEqual(UnicodeData.unicodeVersion);
    });

  });

  describe('UCD.getCharName Class method', function() {

    it('returns the unicode name of the given character', function() {
      expect(UCD.getCharName('@')).toEqual('COMMERCIAL AT');
      expect(UCD.getCharName('A')).toEqual('LATIN CAPITAL LETTER A');
      expect(UCD.getCharName('7')).toEqual('DIGIT SEVEN');
      expect(UCD.getCharName('u')).toEqual('LATIN SMALL LETTER U');
      expect(UCD.getCharName('つ')).toEqual('HIRAGANA LETTER TU');
      expect(UCD.getCharName('ゟ')).toEqual('HIRAGANA DIGRAPH YORI');
      expect(UCD.getCharName('ガ')).toEqual('KATAKANA LETTER GA');
      expect(UCD.getCharName('〴')).toEqual('VERTICAL KANA REPEAT WITH VOICED SOUND MARK UPPER HALF');
      expect(UCD.getCharName('㋀')).toEqual('IDEOGRAPHIC TELEGRAPH SYMBOL FOR JANUARY');
      expect(UCD.getCharName('吉')).toEqual('CJK Ideograph-5409');
      expect(UCD.getCharName('邉')).toEqual('CJK Ideograph-9089');
      expect(UCD.getCharName('鸙')).toEqual('CJK Ideograph-9E19');
      expect(UCD.getCharName('㐅')).toEqual('CJK Ideograph Extension A-3405');
      expect(UCD.getCharName('䷠')).toEqual('HEXAGRAM FOR RETREAT');
      expect(UCD.getCharName('㋒')).toEqual('CIRCLED KATAKANA U');
      expect(UCD.getCharName('ㆡ')).toEqual('BOPOMOFO LETTER ZI');
      expect(UCD.getCharName('⇶')).toEqual('THREE RIGHTWARDS ARROWS');
      expect(UCD.getCharName('【')).toEqual('LEFT BLACK LENTICULAR BRACKET');
      expect(UCD.getCharName('⁈')).toEqual('QUESTION EXCLAMATION MARK');
      expect(UCD.getCharName('㈘')).toEqual('PARENTHESIZED HANGUL KHIEUKH A');
      expect(UCD.getCharName('⅗')).toEqual('VULGAR FRACTION THREE FIFTHS');
      expect(UCD.getCharName('☿')).toEqual('MERCURY');
      expect(UCD.getCharName('◉')).toEqual('FISHEYE');
      expect(UCD.getCharName('÷')).toEqual('DIVISION SIGN');
      expect(UCD.getCharName('㌅')).toEqual('SQUARE INTI');
      expect(UCD.getCharName('€')).toEqual('EURO SIGN');
      expect(UCD.getCharName('☎')).toEqual('BLACK TELEPHONE');
      expect(UCD.getCharName('☣')).toEqual('BIOHAZARD SIGN');
      expect(UCD.getCharName('⍞')).toEqual('APL FUNCTIONAL SYMBOL QUOTE QUAD');
      expect(UCD.getCharName('ῑ')).toEqual('GREEK SMALL LETTER IOTA WITH MACRON');
      expect(UCD.getCharName('כּ')).toEqual('HEBREW LETTER KAF WITH DAGESH');
      expect(UCD.getCharName('ﭻ')).toEqual('ARABIC LETTER TCHEH FINAL FORM');
      expect(UCD.getCharName('益')).toEqual('CJK COMPATIBILITY IDEOGRAPH-FA17');
      expect(UCD.getCharName('ﬅ')).toEqual('LATIN SMALL LIGATURE LONG S T');
      expect(UCD.getCharName('ꬋ')).toEqual('ETHIOPIC SYLLABLE DDHAA');
      expect(UCD.getCharName('ℱ')).toEqual('SCRIPT CAPITAL F');
      expect(UCD.getCharName('✱')).toEqual('HEAVY ASTERISK');
      expect(UCD.getCharName('ⁿ')).toEqual('SUPERSCRIPT LATIN SMALL LETTER N');
      expect(UCD.getCharName('Ø')).toEqual('LATIN CAPITAL LETTER O WITH STROKE');
      expect(UCD.getCharName('ü')).toEqual('LATIN SMALL LETTER U WITH DIAERESIS');
      expect(UCD.getCharName('Ğ')).toEqual('LATIN CAPITAL LETTER G WITH BREVE');
      expect(UCD.getCharName('̄')).toEqual('COMBINING MACRON');
      expect(UCD.getCharName('ʬ')).toEqual('LATIN LETTER BILABIAL PERCUSSIVE');
      expect(UCD.getCharName('˿')).toEqual('MODIFIER LETTER LOW LEFT ARROW');
      expect(UCD.getCharName('͜')).toEqual('COMBINING DOUBLE BREVE BELOW');
      expect(UCD.getCharName('Ҋ')).toEqual('CYRILLIC CAPITAL LETTER SHORT I WITH TAIL');
      expect(UCD.getCharName('Ց')).toEqual('ARMENIAN CAPITAL LETTER CO');
      expect(UCD.getCharName('צ')).toEqual('HEBREW LETTER TSADI');
      expect(UCD.getCharName('֮')).toEqual('HEBREW ACCENT ZINOR');
      expect(UCD.getCharName('ق')).toEqual('ARABIC LETTER QAF');
      expect(UCD.getCharName('ࠋ')).toEqual('SAMARITAN LETTER LABAT');
      expect(UCD.getCharName('ख')).toEqual('DEVANAGARI LETTER KHA');
      expect(UCD.getCharName('ੴ')).toEqual('GURMUKHI EK ONKAR');
      expect(UCD.getCharName('ᚡ')).toEqual('RUNIC LETTER V');
      expect(UCD.getCharName('ᜊ')).toEqual('TAGALOG LETTER BA');
      expect(UCD.getCharName('ᜢ')).toEqual('HANUNOO LETTER U');
      expect(UCD.getCharName('ឡ')).toEqual('KHMER LETTER LA');
      expect(UCD.getCharName('ᣐ')).toEqual('CANADIAN SYLLABICS RWII');
      expect(UCD.getCharName('Ẃ')).toEqual('LATIN CAPITAL LETTER W WITH ACUTE');
      expect(UCD.getCharName('⌚')).toEqual('WATCH');
      expect(UCD.getCharName('┏')).toEqual('BOX DRAWINGS HEAVY DOWN AND RIGHT');
      expect(UCD.getCharName('⨋')).toEqual('SUMMATION WITH INTEGRAL');
      expect(UCD.getCharName('ⰰ')).toEqual('GLAGOLITIC SMALL LETTER AZU');
      expect(UCD.getCharName('ㄜ')).toEqual('BOPOMOFO LETTER E');
      expect(UCD.getCharName('〽')).toEqual('PART ALTERNATION MARK');
      expect(UCD.getCharName('⻣')).toEqual('CJK RADICAL BONE');
      expect(UCD.getCharName('⺠')).toEqual('CJK RADICAL CIVILIAN');
      expect(UCD.getCharName('⻞')).toEqual('CJK RADICAL EAT TWO');
      expect(UCD.getCharName('⿒')).toEqual('KANGXI RADICAL TOOTH');
      expect(UCD.getCharName('⿶')).toEqual('IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM BELOW');
      expect(UCD.getCharName('ㅀ')).toEqual('HANGUL LETTER RIEUL-HIEUH');
      expect(UCD.getCharName('㆝')).toEqual('IDEOGRAPHIC ANNOTATION HEAVEN MARK');
      expect(UCD.getCharName('㇏')).toEqual('CJK STROKE N');
      expect(UCD.getCharName('ㇼ')).toEqual('KATAKANA LETTER SMALL RI');
      expect(UCD.getCharName('㉀')).toEqual('PARENTHESIZED IDEOGRAPH FESTIVAL');
      expect(UCD.getCharName('㐦')).toEqual('CJK Ideograph Extension A-3426');
      expect(UCD.getCharName('ꁽ')).toEqual('YI SYLLABLE NBAT');
      expect(UCD.getCharName('ꔞ')).toEqual('VAI SYLLABLE KEE');
      expect(UCD.getCharName('걟')).toEqual('Hangul Syllable-AC5F');
      expect(UCD.getCharName('龜')).toEqual('CJK COMPATIBILITY IDEOGRAPH-F908');
      expect(UCD.getCharName('תּ')).toEqual('HEBREW LETTER TAV WITH DAGESH');
      expect(UCD.getCharName('︑')).toEqual('PRESENTATION FORM FOR VERTICAL IDEOGRAPHIC COMMA');
      expect(UCD.getCharName('︻')).toEqual('PRESENTATION FORM FOR VERTICAL LEFT BLACK LENTICULAR BRACKET');
      expect(UCD.getCharName('ｻ')).toEqual('HALFWIDTH KATAKANA LETTER SA');
      // expect(UCD.getCharName('🂩')).toEqual('PLAYING CARD NINE OF SPADES'); // TODO:(ynakajima) 調査!
    });

  });

})(this);
