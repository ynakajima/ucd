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
 * @fileoverview Spec of UnicodeCharName.
 * @author yuhta.nakajima@gmail.com (ynakajima)
 */
(function(global) {

  // require
  var UnicodeCharName = (typeof require !== 'undefined') ?
    require('../src/UnicodeCharName.js') :
    global.UnicodeCharName;

  // spec
  describe('UnicodeCharName', function() {

    it('is Constructor', function() {
      expect(UnicodeCharName).toEqual(jasmine.any(Function));
    });

    it('has readUnicodeData Class method', function() {
      expect(UnicodeCharName.readUnicodeData).toEqual(jasmine.any(Function));
    });

    it('has getCharName Class method', function() {
      expect(UnicodeCharName.getCharName).toEqual(jasmine.any(Function));
    });

  });

  describe('UnicodeCharName.getCharName Class method', function() {

    it('returns the unicode name of the given character', function() {
      expect(UnicodeCharName.getCharName('@')).toEqual('COMMERCIAL AT');
      expect(UnicodeCharName.getCharName('A')).toEqual('LATIN CAPITAL LETTER A');
      expect(UnicodeCharName.getCharName('7')).toEqual('DIGIT SEVEN');
      expect(UnicodeCharName.getCharName('u')).toEqual('LATIN SMALL LETTER U');
      expect(UnicodeCharName.getCharName('つ')).toEqual('HIRAGANA LETTER TU');
      expect(UnicodeCharName.getCharName('ゟ')).toEqual('HIRAGANA DIGRAPH YORI');
      expect(UnicodeCharName.getCharName('ガ')).toEqual('KATAKANA LETTER GA');
      expect(UnicodeCharName.getCharName('〴')).toEqual('VERTICAL KANA REPEAT WITH VOICED SOUND MARK UPPER HALF');
      expect(UnicodeCharName.getCharName('㋀')).toEqual('IDEOGRAPHIC TELEGRAPH SYMBOL FOR JANUARY');
      expect(UnicodeCharName.getCharName('吉')).toEqual('CJK Ideograph-5409');
      expect(UnicodeCharName.getCharName('邉')).toEqual('CJK Ideograph-9089');
      expect(UnicodeCharName.getCharName('鸙')).toEqual('CJK Ideograph-9E19');
      expect(UnicodeCharName.getCharName('㐅')).toEqual('CJK Ideograph Extension A-3405');
      expect(UnicodeCharName.getCharName('䷠')).toEqual('HEXAGRAM FOR RETREAT');
      expect(UnicodeCharName.getCharName('㋒')).toEqual('CIRCLED KATAKANA U');
      expect(UnicodeCharName.getCharName('ㆡ')).toEqual('BOPOMOFO LETTER ZI');
      expect(UnicodeCharName.getCharName('⇶')).toEqual('THREE RIGHTWARDS ARROWS');
      expect(UnicodeCharName.getCharName('【')).toEqual('LEFT BLACK LENTICULAR BRACKET');
      expect(UnicodeCharName.getCharName('⁈')).toEqual('QUESTION EXCLAMATION MARK');
      expect(UnicodeCharName.getCharName('㈘')).toEqual('PARENTHESIZED HANGUL KHIEUKH A');
      expect(UnicodeCharName.getCharName('⅗')).toEqual('VULGAR FRACTION THREE FIFTHS');
      expect(UnicodeCharName.getCharName('☿')).toEqual('MERCURY');
      expect(UnicodeCharName.getCharName('◉')).toEqual('FISHEYE');
      expect(UnicodeCharName.getCharName('÷')).toEqual('DIVISION SIGN');
      expect(UnicodeCharName.getCharName('㌅')).toEqual('SQUARE INTI');
      expect(UnicodeCharName.getCharName('€')).toEqual('EURO SIGN');
      expect(UnicodeCharName.getCharName('☎')).toEqual('BLACK TELEPHONE');
      expect(UnicodeCharName.getCharName('☣')).toEqual('BIOHAZARD SIGN');
      expect(UnicodeCharName.getCharName('⍞')).toEqual('APL FUNCTIONAL SYMBOL QUOTE QUAD');
      expect(UnicodeCharName.getCharName('ῑ')).toEqual('GREEK SMALL LETTER IOTA WITH MACRON');
      expect(UnicodeCharName.getCharName('כּ')).toEqual('HEBREW LETTER KAF WITH DAGESH');
      expect(UnicodeCharName.getCharName('ﭻ')).toEqual('ARABIC LETTER TCHEH FINAL FORM');
      expect(UnicodeCharName.getCharName('益')).toEqual('CJK COMPATIBILITY IDEOGRAPH-FA17');
      expect(UnicodeCharName.getCharName('ﬅ')).toEqual('LATIN SMALL LIGATURE LONG S T');
      expect(UnicodeCharName.getCharName('ꬋ')).toEqual('ETHIOPIC SYLLABLE DDHAA');
      expect(UnicodeCharName.getCharName('ℱ')).toEqual('SCRIPT CAPITAL F');
      expect(UnicodeCharName.getCharName('✱')).toEqual('HEAVY ASTERISK');
      expect(UnicodeCharName.getCharName('ⁿ')).toEqual('SUPERSCRIPT LATIN SMALL LETTER N');
      expect(UnicodeCharName.getCharName('Ø')).toEqual('LATIN CAPITAL LETTER O WITH STROKE');
      expect(UnicodeCharName.getCharName('ü')).toEqual('LATIN SMALL LETTER U WITH DIAERESIS');
      expect(UnicodeCharName.getCharName('Ğ')).toEqual('LATIN CAPITAL LETTER G WITH BREVE');
      expect(UnicodeCharName.getCharName('̄')).toEqual('COMBINING MACRON');
      expect(UnicodeCharName.getCharName('ʬ')).toEqual('LATIN LETTER BILABIAL PERCUSSIVE');
      expect(UnicodeCharName.getCharName('˿')).toEqual('MODIFIER LETTER LOW LEFT ARROW');
      expect(UnicodeCharName.getCharName('͜')).toEqual('COMBINING DOUBLE BREVE BELOW');
      expect(UnicodeCharName.getCharName('Ҋ')).toEqual('CYRILLIC CAPITAL LETTER SHORT I WITH TAIL');
      expect(UnicodeCharName.getCharName('Ց')).toEqual('ARMENIAN CAPITAL LETTER CO');
      expect(UnicodeCharName.getCharName('צ')).toEqual('HEBREW LETTER TSADI');
      expect(UnicodeCharName.getCharName('֮')).toEqual('HEBREW ACCENT ZINOR');
      expect(UnicodeCharName.getCharName('ق')).toEqual('ARABIC LETTER QAF');
      expect(UnicodeCharName.getCharName('ࠋ')).toEqual('SAMARITAN LETTER LABAT');
      expect(UnicodeCharName.getCharName('ख')).toEqual('DEVANAGARI LETTER KHA');
      expect(UnicodeCharName.getCharName('ੴ')).toEqual('GURMUKHI EK ONKAR');
      expect(UnicodeCharName.getCharName('ᚡ')).toEqual('RUNIC LETTER V');
      expect(UnicodeCharName.getCharName('ᜊ')).toEqual('TAGALOG LETTER BA');
      expect(UnicodeCharName.getCharName('ᜢ')).toEqual('HANUNOO LETTER U');
      expect(UnicodeCharName.getCharName('ឡ')).toEqual('KHMER LETTER LA');
      expect(UnicodeCharName.getCharName('ᣐ')).toEqual('CANADIAN SYLLABICS RWII');
      expect(UnicodeCharName.getCharName('Ẃ')).toEqual('LATIN CAPITAL LETTER W WITH ACUTE');
      expect(UnicodeCharName.getCharName('⌚')).toEqual('WATCH');
      expect(UnicodeCharName.getCharName('┏')).toEqual('BOX DRAWINGS HEAVY DOWN AND RIGHT');
      expect(UnicodeCharName.getCharName('⨋')).toEqual('SUMMATION WITH INTEGRAL');
      expect(UnicodeCharName.getCharName('ⰰ')).toEqual('GLAGOLITIC SMALL LETTER AZU');
      expect(UnicodeCharName.getCharName('ㄜ')).toEqual('BOPOMOFO LETTER E');
      expect(UnicodeCharName.getCharName('〽')).toEqual('PART ALTERNATION MARK');
      expect(UnicodeCharName.getCharName('⻣')).toEqual('CJK RADICAL BONE');
      expect(UnicodeCharName.getCharName('⺠')).toEqual('CJK RADICAL CIVILIAN');
      expect(UnicodeCharName.getCharName('⻞')).toEqual('CJK RADICAL EAT TWO');
      expect(UnicodeCharName.getCharName('⿒')).toEqual('KANGXI RADICAL TOOTH');
      expect(UnicodeCharName.getCharName('⿶')).toEqual('IDEOGRAPHIC DESCRIPTION CHARACTER SURROUND FROM BELOW');
      expect(UnicodeCharName.getCharName('ㅀ')).toEqual('HANGUL LETTER RIEUL-HIEUH');
      expect(UnicodeCharName.getCharName('㆝')).toEqual('IDEOGRAPHIC ANNOTATION HEAVEN MARK');
      expect(UnicodeCharName.getCharName('㇏')).toEqual('CJK STROKE N');
      expect(UnicodeCharName.getCharName('ㇼ')).toEqual('KATAKANA LETTER SMALL RI');
      expect(UnicodeCharName.getCharName('㉀')).toEqual('PARENTHESIZED IDEOGRAPH FESTIVAL');
      expect(UnicodeCharName.getCharName('㐦')).toEqual('CJK Ideograph Extension A-3426');
      expect(UnicodeCharName.getCharName('ꁽ')).toEqual('YI SYLLABLE NBAT');
      expect(UnicodeCharName.getCharName('ꔞ')).toEqual('VAI SYLLABLE KEE');
      expect(UnicodeCharName.getCharName('걟')).toEqual('Hangul Syllable-AC5F');
      expect(UnicodeCharName.getCharName('龜')).toEqual('CJK COMPATIBILITY IDEOGRAPH-F908');
      expect(UnicodeCharName.getCharName('תּ')).toEqual('HEBREW LETTER TAV WITH DAGESH');
      expect(UnicodeCharName.getCharName('︑')).toEqual('PRESENTATION FORM FOR VERTICAL IDEOGRAPHIC COMMA');
      expect(UnicodeCharName.getCharName('︻')).toEqual('PRESENTATION FORM FOR VERTICAL LEFT BLACK LENTICULAR BRACKET');
      expect(UnicodeCharName.getCharName('ｻ')).toEqual('HALFWIDTH KATAKANA LETTER SA');
      // expect(UnicodeCharName.getCharName('🂩')).toEqual('PLAYING CARD NINE OF SPADES'); // TODO:(ynakajima) 調査!
    });

  });

})(this);
