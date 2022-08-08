/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import * as "sequenceModule" from "https://scotwatson.github.io/Sequence/Sequence.mjs";
import * as "unicodeModule" from "https://scotwatson.github.io/Unicode/Unicode.mjs";

export class UnicodeSequence extends sequenceModule.Sequence {
  constructor() {
    super(unicodeModule.UnicodeCodePoint);
  }
};

export class UnicodeString extends sequenceModule.Sequence {
  constructor() {
    super(unicodeModule.UnicodeCharacter);
  }
  toUpperCase() {
  }
  toLowerCase() {
  }
};

const mapEncoding = new Map();
mapEncoding.set("unicode-1-1-utf-8", "UTF_8");
mapEncoding.set("utf-8", "UTF_8");
mapEncoding.set("utf8", "UTF_8");
mapEncoding.set("866", "IBM866");
mapEncoding.set("cp866", "IBM866");
mapEncoding.set("csibm866", "IBM866");
mapEncoding.set("ibm866", "IBM866");
mapEncoding.set("csisolatin2", "ISO_8859_2");
mapEncoding.set("iso-8859-2", "ISO_8859_2");
mapEncoding.set("iso-ir-101", "ISO_8859_2");
mapEncoding.set("iso8859-2", "ISO_8859_2");
mapEncoding.set("iso88592", "ISO_8859_2");
mapEncoding.set("iso_8859-2", "ISO_8859_2");
mapEncoding.set("iso_8859-2:1987", "ISO_8859_2");
mapEncoding.set("l2", "ISO_8859_2");
mapEncoding.set("latin2", "ISO_8859_2");
mapEncoding.set("csisolatin3", "ISO_8859_3");
mapEncoding.set("iso-8859-3", "ISO_8859_3");
mapEncoding.set("iso-ir-109", "ISO_8859_3");
mapEncoding.set("iso8859-3", "ISO_8859_3");
mapEncoding.set("iso88593", "ISO_8859_3");
mapEncoding.set("iso_8859-3", "ISO_8859_3");
mapEncoding.set("iso_8859-3:1988", "ISO_8859_3");
mapEncoding.set("l3", "ISO_8859_3");
mapEncoding.set("latin3", "ISO_8859_3");
mapEncoding.set("csisolatin4", "ISO_8859_4");
mapEncoding.set("iso-8859-4", "ISO_8859_4");
mapEncoding.set("iso-ir-110", "ISO_8859_4");
mapEncoding.set("iso8859-4", "ISO_8859_4");
mapEncoding.set("iso88594", "ISO_8859_4");
mapEncoding.set("iso_8859-4", "ISO_8859_4");
mapEncoding.set("iso_8859-4:1988", "ISO_8859_4");
mapEncoding.set("l4", "ISO_8859_4");
mapEncoding.set("latin4", "ISO_8859_4");
mapEncoding.set("csisolatincyrillic", "ISO_8859_5");
mapEncoding.set("cyrillic", "ISO_8859_5");
mapEncoding.set("iso-8859-5", "ISO_8859_5");
mapEncoding.set("iso-ir-144", "ISO_8859_5");
mapEncoding.set("iso88595", "ISO_8859_5");
mapEncoding.set("iso_8859-5", "ISO_8859_5");
mapEncoding.set("iso_8859-5:1988", "ISO_8859_5");
mapEncoding.set("arabic", "ISO_8859_6");
mapEncoding.set("asmo-708", "ISO_8859_6");
mapEncoding.set("csiso88596e", "ISO_8859_6");
mapEncoding.set("csiso88596i", "ISO_8859_6");
mapEncoding.set("csisolatinarabic", "ISO_8859_6");
mapEncoding.set("ecma-114", "ISO_8859_6");
mapEncoding.set("iso-8859-6", "ISO_8859_6");
mapEncoding.set("iso-8859-6-e", "ISO_8859_6");
mapEncoding.set("iso-8859-6-i", "ISO_8859_6");
mapEncoding.set("iso-ir-127", "ISO_8859_6");
mapEncoding.set("iso8859-6", "ISO_8859_6");
mapEncoding.set("iso88596", "ISO_8859_6");
mapEncoding.set("iso_8859-6", "ISO_8859_6");
mapEncoding.set("iso_8859-6:1987", "ISO_8859_6");

mapEncoding.set("csisolatingreek", "ISO_8859_7");
mapEncoding.set("ecma-118", "ISO_8859_7");
mapEncoding.set("elot_928", "ISO_8859_7");
mapEncoding.set("greek", "ISO_8859_7");
mapEncoding.set("greek8", "ISO_8859_7");
mapEncoding.set("iso-8859-7", "ISO_8859_7");
mapEncoding.set("iso-ir-126", "ISO_8859_7");
mapEncoding.set("iso8859-7", "ISO_8859_7");
mapEncoding.set("iso88597", "ISO_8859_7");
mapEncoding.set("iso_8859-7", "ISO_8859_7");
mapEncoding.set("iso_8859-7:1987", "ISO_8859_7");
mapEncoding.set("sun_eu_greek", "ISO_8859_7");

"csiso88598e", "csisolatinhebrew", "hebrew", "iso-8859-8", "iso-8859-8-e", "iso-ir-138", "iso8859-8", "iso88598", "iso_8859-8", "iso_8859-8:1988", "visual" 	iso-8859-8

"csiso88598i", "iso-8859-8-i", "logical" 	iso-8859-8i

"csisolatin6", "iso-8859-10", "iso-ir-157", "iso8859-10", "iso885910", "l6", "latin6" 	iso-8859-10

"iso-8859-13", "iso8859-13", "iso885913" 	iso-8859-13

"iso-8859-14", "iso8859-14", "iso885914" 	iso-8859-14

"csisolatin9", "iso-8859-15", "iso8859-15", "iso885915", "l9", "latin9" 	iso-8859-15

"iso-8859-16" 	iso-8859-16

"cskoi8r", "koi", "koi8", "koi8-r", "koi8_r" 	koi8-r

"koi8-u" 	koi8-u

"csmacintosh", "mac", "macintosh", "x-mac-roman" 	macintosh

"dos-874", "iso-8859-11", "iso8859-11", "iso885911", "tis-620", "windows-874" 	windows-874

"cp1250", "windows-1250", "x-cp1250" 	windows-1250

"cp1251", "windows-1251", "x-cp1251" 	windows-1251

"ansi_x3.4-1968", "ascii", "cp1252", "cp819", "csisolatin1", "ibm819", "iso-8859-1", "iso-ir-100", "iso8859-1", "iso88591", "iso_8859-1", "iso_8859-1:1987", "l1", "latin1", "us-ascii", "windows-1252", "x-cp1252" 	windows-1252

"cp1253", "windows-1253", "x-cp1253" 	windows-1253

"cp1254", "csisolatin5", "iso-8859-9", "iso-ir-148", "iso8859-9", "iso88599", "iso_8859-9", "iso_8859-9:1989", "l5", "latin5", "windows-1254", "x-cp1254" 	windows-1254

"cp1255", "windows-1255", "x-cp1255" 	windows-1255

"cp1256", "windows-1256", "x-cp1256" 	windows-1256

"cp1257", "windows-1257", "x-cp1257" 	windows-1257

"cp1258", "windows-1258", "x-cp1258" 	windows-1258

"x-mac-cyrillic", "x-mac-ukrainian" 	x-mac-cyrillic

"chinese", "csgb2312", "csiso58gb231280", "gb2312", "gb_2312", "gb_2312-80", "gbk", "iso-ir-58", "x-gbk" 	gbk

"gb18030" 	gb18030

"hz-gb-2312" 	hz-gb-2312

"big5", "big5-hkscs", "cn-big5", "csbig5", "x-x-big5" 	big5

"cseucpkdfmtjapanese", "euc-jp", "x-euc-jp" 	euc-jp

"csiso2022jp", "iso-2022-jp" 	iso-2022-jp

"csshiftjis", "ms_kanji", "shift-jis", "shift_jis", "sjis", "windows-31j", "x-sjis" 	shift-jis

"cseuckr", "csksc56011987", "euc-kr", "iso-ir-149", "korean", "ks_c_5601-1987", "ks_c_5601-1989", "ksc5601", "ksc_5601", "windows-949" 	euc-kr

"csiso2022kr", "iso-2022-kr" 	iso-2022-kr

"utf-16be" 	utf-16be

"utf-16", "utf-16le" 	utf-16le


function importEncodingModule(name) {
  if (mapEncoding.has(name)) {
    return import("https://scotwatson.github.io/UnicodeString/" + mapEncoding.get(name) + "_Encoding.mjs");
  } else {
    return Promise.reject(new Error("Encoding not found: " + name));
  }
}
