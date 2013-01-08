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

    it('has getName Class method', function() {
      expect(UCD.getName).toEqual(jasmine.any(Function));
    });

    it('has getUnicodeVersion Class method', function() {
      expect(UCD.getUnicodeVersion).toEqual(jasmine.any(Function));
      expect(UCD.getUnicodeVersion()).toEqual(UnicodeData.unicodeVersion);
    });

  });

  describe('UCD.getName Class method', function() {

    it('returns the unicode name of the given character', function() {
      expect(UCD.getName('@')).toEqual('COMMERCIAL AT');
      expect(UCD.getName('A')).toEqual('LATIN CAPITAL LETTER A');
      expect(UCD.getName('7')).toEqual('DIGIT SEVEN');
      expect(UCD.getName('u')).toEqual('LATIN SMALL LETTER U');
      expect(UCD.getName('つ')).toEqual('HIRAGANA LETTER TU');
      expect(UCD.getName('ゟ')).toEqual('HIRAGANA DIGRAPH YORI');
      expect(UCD.getName('ガ')).toEqual('KATAKANA LETTER GA');
      expect(UCD.getName('〴')).toEqual('VERTICAL KANA REPEAT WITH VOICED SOUND MARK UPPER HALF');
      expect(UCD.getName('㋀')).toEqual('IDEOGRAPHIC TELEGRAPH SYMBOL FOR JANUARY');
      expect(UCD.getName('吉')).toEqual('CJK Ideograph-5409');
      expect(UCD.getName('邉')).toEqual('CJK Ideograph-9089');
      expect(UCD.getName('鸙')).toEqual('CJK Ideograph-9E19');
      expect(UCD.getName('㐅')).toEqual('CJK Ideograph Extension A-3405');
      expect(UCD.getName('䷠')).toEqual('HEXAGRAM FOR RETREAT');
      expect(UCD.getName('㋒')).toEqual('CIRCLED KATAKANA U');
      expect(UCD.getName('ㆡ')).toEqual('BOPOMOFO LETTER ZI');
      expect(UCD.getName('⇶')).toEqual('THREE RIGHTWARDS ARROWS');
      expect(UCD.getName('【')).toEqual('LEFT BLACK LENTICULAR BRACKET');
      expect(UCD.getName('⁈')).toEqual('QUESTION EXCLAMATION MARK');
      expect(UCD.getName('㈘')).toEqual('PARENTHESIZED HANGUL KHIEUKH A');
      expect(UCD.getName('⅗')).toEqual('VULGAR FRACTION THREE FIFTHS');
      expect(UCD.getName('☿')).toEqual('MERCURY');
      expect(UCD.getName('◉')).toEqual('FISHEYE');
      expect(UCD.getName('÷')).toEqual('DIVISION SIGN');
      expect(UCD.getName('㌅')).toEqual('SQUARE INTI');
      expect(UCD.getName('€')).toEqual('EURO SIGN');
      expect(UCD.getName('☎')).toEqual('BLACK TELEPHONE');
      expect(UCD.getName('☣')).toEqual('BIOHAZARD SIGN');
      expect(UCD.getName('⍞')).toEqual('APL FUNCTIONAL SYMBOL QUOTE QUAD');
      expect(UCD.getName('ῑ')).toEqual('GREEK SMALL LETTER IOTA WITH MACRON');
      expect(UCD.getName('כּ')).toEqual('HEBREW LETTER KAF WITH DAGESH');
      expect(UCD.getName('ﭻ')).toEqual('ARABIC LETTER TCHEH FINAL FORM');
      expect(UCD.getName('益')).toEqual('CJK COMPATIBILITY IDEOGRAPH-FA17');
      expect(UCD.getName('ﬅ')).toEqual('LATIN SMALL LIGATURE LONG S T');
      expect(UCD.getName('ꬋ')).toEqual('ETHIOPIC SYLLABLE DDHAA');
      expect(UCD.getName('ℱ')).toEqual('SCRIPT CAPITAL F');
      expect(UCD.getName('✱')).toEqual('HEAVY ASTERISK');
      expect(UCD.getName('ⁿ')).toEqual('SUPERSCRIPT LATIN SMALL LETTER N');
      expect(UCD.getName('Ø')).toEqual('LATIN CAPITAL LETTER O WITH STROKE');
      expect(UCD.getName('ü')).toEqual('LATIN SMALL LETTER U WITH DIAERESIS');
      expect(UCD.getName('Ğ')).toEqual('LATIN CAPITAL LETTER G WITH BREVE');
      expect(UCD.getName('̄')).toEqual('COMBINING MACRON');
      expect(UCD.getName('ʬ')).toEqual('LATIN LETTER BILABIAL PERCUSSIVE');
      expect(UCD.getName('˿')).toEqual('MODIFIER LETTER LOW LEFT ARROW');
      expect(UCD.getName('͜')).toEqual('COMBINING DOUBLE BREVE BELOW');
      expect(UCD.getName('Ҋ')).toEqual('CYRILLIC CAPITAL LETTER SHORT I WITH TAIL');
      expect(UCD.getName('Ց')).toEqual('ARMENIAN CAPITAL LETTER CO');
      expect(UCD.getName('צ')).toEqual('HEBREW LETTER TSADI');
      expect(UCD.getName('֮')).toEqual('HEBREW ACCENT ZINOR');
      expect(UCD.getName('ق')).toEqual('ARABIC LETTER QAF');
      expect(UCD.getName('ࠋ')).toEqual('SAMARITAN LETTER LABAT');
      expect(UCD.getName('ख')).toEqual('DEVANAGARI LETTER KHA');
      expect(UCD.getName('ੴ')).toEqual('GURMUKHI EK ONKAR');
      expect(UCD.getName('ᚡ')).toEqual('RUNIC LETTER V');
      expect(UCD.getName('ᜊ')).toEqual('TAGALOG LETTER BA');
      expect(UCD.getName('ᜢ')).toEqual('HANUNOO LETTER U');
      expect(UCD.getName('ឡ')).toEqual('KHMER LETTER LA');
      expect(UCD.getName('ᣐ')).toEqual('CANADIAN SYLLABICS RWII');
      expect(UCD.getName('Ẃ')).toEqual('LATIN CAPITAL LETTER W WITH ACUTE');
      expect(UCD.getName('⌚')).toEqual('WATCH');
      expect(UCD.getName('┏')).toEqual('BOX DRAWINGS HEAVY DOWN AND RIGHT');
      expect(UCD.getName('⨋')).toEqual('SUMMATION WITH INTEGRAL');
      expect(UCD.getName('ⰰ')).toEqual('GLAGOLITIC SMALL LETTER AZU');
      expect(UCD.getName('ㄜ')).toEqual('BOPOMOFO LETTER E');
      expect(UCD.getName('〽')).toEqual('PART ALTERNATION MARK');
      expect(UCD.getName('⻣')).toEqual('CJK RADICAL BONE');
      expect(UCD.getName('⺠')).toEqual('CJK RADICAL CIVILIAN');
      expect(UCD.getName('⻞')).toEqual('CJK RADICAL EAT TWO');
      expect(UCD.getName('⿒')).toEqual('KANGXI RADICAL TOOTH');
      expect(UCD.getName('⿶')).toEqual('IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM BELOW');
      expect(UCD.getName('ㅀ')).toEqual('HANGUL LETTER RIEUL-HIEUH');
      expect(UCD.getName('㆝')).toEqual('IDEOGRAPHIC ANNOTATION HEAVEN MARK');
      expect(UCD.getName('㇏')).toEqual('CJK STROKE N');
      expect(UCD.getName('ㇼ')).toEqual('KATAKANA LETTER SMALL RI');
      expect(UCD.getName('㉀')).toEqual('PARENTHESIZED IDEOGRAPH FESTIVAL');
      expect(UCD.getName('㐦')).toEqual('CJK Ideograph Extension A-3426');
      expect(UCD.getName('ꁽ')).toEqual('YI SYLLABLE NBAT');
      expect(UCD.getName('ꔞ')).toEqual('VAI SYLLABLE KEE');
      expect(UCD.getName('걟')).toEqual('Hangul Syllable-AC5F');
      expect(UCD.getName('龜')).toEqual('CJK COMPATIBILITY IDEOGRAPH-F908');
      expect(UCD.getName('תּ')).toEqual('HEBREW LETTER TAV WITH DAGESH');
      expect(UCD.getName('︑')).toEqual('PRESENTATION FORM FOR VERTICAL IDEOGRAPHIC COMMA');
      expect(UCD.getName('︻')).toEqual('PRESENTATION FORM FOR VERTICAL LEFT BLACK LENTICULAR BRACKET');
      expect(UCD.getName('ｻ')).toEqual('HALFWIDTH KATAKANA LETTER SA');
      // expect(UCD.getName('🂩')).toEqual('PLAYING CARD NINE OF SPADES'); // TODO:(ynakajima) 調査!
    });

  });

})(this);
