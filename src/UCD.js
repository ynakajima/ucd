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
 * @fileoverview UCD offers a series of functions that provide a simple
 * interface to the Unicode Character Database.
 * @author yuhta.nakajima@gmail.com (ynakajima)
 */
(function(global) {

  // require
  var UnicodeData = (typeof require !== 'undefined') ?
    require('../data/unicodedata.js') :
    global.UnicodeData;

  /**
   * Unicode Charactor Database
   * @type {Object}
   */
  var UCD = {};

  /**
   * Get Unicode Name
   * @param {string} character single string.
   * @return {string} Unicode Name.
   */
  UCD.getCharName = function(character) {

    // 文字コードの取得
    var charCode = character.charCodeAt(0);

    // charNameListが初期化されていない場合は初期化
    if (typeof UCD.charNameList === 'undefined') {
      UCD.readUnicodeData();
    }

    // return Unicode Name
    var unicodeName = UCD.charNameList[charCode];
    return (typeof unicodeName !== 'undefined') ? unicodeName : 'undefined';

  };

  /**
   * Read UnicodeData
   */
  UCD.readUnicodeData = function() {

    var unicodedata = UnicodeData;
    var charNameList = [];

    // UnicodeNameを読み込んで展開
    for (var i = 0, l = unicodedata.length; i < l; i++) {

      // 行を取得
      var line = unicodedata[i];

      // セミコロンで分割
      var charData = line.split(';');

      // データを切り出して charNameList に格納
      if (charData.length >= 2) {
        var charCode = parseInt(charData[0], 16);
        var charName = charData[1];

        // 連続データの場合は連続して処理
        if (charName.indexOf(', First>') !== -1) {
          var lastCharCode = parseInt(unicodedata[++i].split(';')[0], 16);
          charName = charName.replace(/, First>$/, '').replace(/^</, '');
          for (; charCode <= lastCharCode; charCode++) {
            var hexCharCode = charCode.toString(16).toUpperCase();
            charNameList[charCode] = charName + '-' + hexCharCode;
          }
        } else {
          charNameList[charCode] = charName;
        }

      }

    }

    /**
     * @type {Array.<string>}
     * @private
     */
    UCD.charNameList = charNameList;

  };

  // export
  if (typeof module !== 'undefined') {
    module.exports = UCD;
  } else {
    global.UCD = UCD;
  }

})(this);
