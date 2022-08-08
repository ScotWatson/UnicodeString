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
mapEncoding.set("csiso88598e", "ISO_8859_8");
mapEncoding.set("csisolatinhebrew", "ISO_8859_8");
mapEncoding.set("hebrew", "ISO_8859_8");
mapEncoding.set("iso-8859-8", "ISO_8859_8");
mapEncoding.set("iso-8859-8-e", "ISO_8859_8");
mapEncoding.set("iso-ir-138", "ISO_8859_8");
mapEncoding.set("iso8859-8", "ISO_8859_8");
mapEncoding.set("iso88598", "ISO_8859_8");
mapEncoding.set("iso_8859-8", "ISO_8859_8");
mapEncoding.set("iso_8859-8:1988", "ISO_8859_8");
mapEncoding.set("visual", "ISO_8859_8");
mapEncoding.set("csiso88598i", "ISO_8859_8i");
mapEncoding.set("iso-8859-8-i", "ISO_8859_8i");
mapEncoding.set("logical", "ISO_8859_8i");
mapEncoding.set("csisolatin6", "ISO_8859_10");
mapEncoding.set("iso-8859-10", "ISO_8859_10");
mapEncoding.set("iso-ir-157", "ISO_8859_10");
mapEncoding.set("iso8859-10", "ISO_8859_10");
mapEncoding.set("iso885910", "ISO_8859_10");
mapEncoding.set("l6", "ISO_8859_10");
mapEncoding.set("latin6", "ISO_8859_10");
mapEncoding.set("iso-8859-13", "ISO_8859_13");
mapEncoding.set("iso8859-13", "ISO_8859_13");
mapEncoding.set("iso885913", "ISO_8859_13");
mapEncoding.set("iso-8859-14", "ISO_8859_14");
mapEncoding.set("iso8859-14", "ISO_8859_14");
mapEncoding.set("iso885914", "ISO_8859_14");
mapEncoding.set("csisolatin9", "ISO_8859_15");
mapEncoding.set("iso-8859-15", "ISO_8859_15");
mapEncoding.set("iso8859-15", "ISO_8859_15");
mapEncoding.set("iso885915", "ISO_8859_15");
mapEncoding.set("l9", "ISO_8859_15");
mapEncoding.set("latin9", "ISO_8859_15");
mapEncoding.set("iso-8859-16", "ISO_8859_16");
mapEncoding.set("cskoi8r", "koi8_r");
mapEncoding.set("koi", "koi8_r");
mapEncoding.set("koi8", "koi8_r");
mapEncoding.set("koi8-r", "koi8_r");
mapEncoding.set("koi8_r", "koi8_r");
mapEncoding.set("koi8-u", "koi8_u");
mapEncoding.set("csmacintosh", "macintosh");
mapEncoding.set("mac", "macintosh");
mapEncoding.set("macintosh", "macintosh");
mapEncoding.set("x-mac-roman", "macintosh");
mapEncoding.set("dos-874", "windows_874");
mapEncoding.set("iso-8859-11", "windows_874");
mapEncoding.set("iso8859-11", "windows_874");
mapEncoding.set("iso885911", "windows_874");
mapEncoding.set("tis-620", "windows_874");
mapEncoding.set("windows-874", "windows_874");
mapEncoding.set("cp1250", "windows_1250");
mapEncoding.set("windows-1250", "windows_1250");
mapEncoding.set("x-cp1250", "windows_1250");
mapEncoding.set("cp1251", "windows_1251");
mapEncoding.set("windows-1251", "windows_1251");
mapEncoding.set("x-cp1251", "windows_1251");
mapEncoding.set("ansi_x3.4-1968", "windows_1252");
mapEncoding.set("ascii", "windows_1252");
mapEncoding.set("cp1252", "windows_1252");
mapEncoding.set("cp819", "windows_1252");
mapEncoding.set("csisolatin1", "windows_1252");
mapEncoding.set("ibm819", "windows_1252");
mapEncoding.set("iso-8859-1", "windows_1252");
mapEncoding.set("iso-ir-100", "windows_1252");
mapEncoding.set("iso8859-1", "windows_1252");
mapEncoding.set("iso88591", "windows_1252");
mapEncoding.set("iso_8859-1", "windows_1252");
mapEncoding.set("iso_8859-1:1987", "windows_1252");
mapEncoding.set("l1", "windows_1252");
mapEncoding.set("latin1", "windows_1252");
mapEncoding.set("us-ascii", "windows_1252");
mapEncoding.set("windows-1252", "windows_1252");
mapEncoding.set("x-cp1252", "windows_1252");
mapEncoding.set("cp1253", "windows_1253");
mapEncoding.set("windows-1253", "windows_1253");
mapEncoding.set("x-cp1253", "windows_1253");
mapEncoding.set("cp1254", "windows_1254");
mapEncoding.set("csisolatin5", "windows_1254");
mapEncoding.set("iso-8859-9", "windows_1254");
mapEncoding.set("iso-ir-148", "windows_1254");
mapEncoding.set("iso8859-9", "windows_1254");
mapEncoding.set("iso88599", "windows_1254");
mapEncoding.set("iso_8859-9", "windows_1254");
mapEncoding.set("iso_8859-9:1989", "windows_1254");
mapEncoding.set("l5", "windows_1254");
mapEncoding.set("latin5", "windows_1254");
mapEncoding.set("windows-1254", "windows_1254");
mapEncoding.set("x-cp1254", "windows_1254");
mapEncoding.set("cp1255", "windows_1255");
mapEncoding.set("windows-1255", "windows_1255");
mapEncoding.set("x-cp1255", "windows_1255");
mapEncoding.set("cp1256", "windows_1256");
mapEncoding.set("windows-1256", "windows_1256");
mapEncoding.set("x-cp1256", "windows_1256");
mapEncoding.set("cp1257", "windows_1257");
mapEncoding.set("windows-1257", "windows_1257");
mapEncoding.set("x-cp1257", "windows_1257");
mapEncoding.set("cp1258", "windows_1258");
mapEncoding.set("windows-1258", "windows_1258");
mapEncoding.set("x-cp1258", "windows_1258");
mapEncoding.set("x-mac-cyrillic", "x_mac_cyrillic");
mapEncoding.set("x-mac-ukrainian", "x_mac_cyrillic");
mapEncoding.set("chinese", "gbk");
mapEncoding.set("csgb2312", "gbk");
mapEncoding.set("csiso58gb231280", "gbk");
mapEncoding.set("gb2312", "gbk");
mapEncoding.set("gb_2312", "gbk");
mapEncoding.set("gb_2312-80", "gbk");
mapEncoding.set("gbk", "gbk");
mapEncoding.set("iso-ir-58", "gbk");
mapEncoding.set("x-gbk", "gbk");
mapEncoding.set("gb18030", "gb18030");
mapEncoding.set("hz-gb-2312", "hz_gb_2312");
mapEncoding.set("big5", "big5");
mapEncoding.set("big5-hkscs", "big5");
mapEncoding.set("cn-big5", "big5");
mapEncoding.set("csbig5", "big5");
mapEncoding.set("x-x-big5", "big5");
mapEncoding.set("cseucpkdfmtjapanese", "euc_jp");
mapEncoding.set("euc-jp", "euc_jp");
mapEncoding.set("x-euc-jp", "euc_jp");
mapEncoding.set("csiso2022jp", "ISO_2022_jp");
mapEncoding.set("iso-2022-jp", "ISO_2022_jp");
mapEncoding.set("csshiftjis", "shift_jis");
mapEncoding.set("ms_kanji", "shift_jis");
mapEncoding.set("shift-jis", "shift_jis");
mapEncoding.set("shift_jis", "shift_jis");
mapEncoding.set("sjis", "shift_jis");
mapEncoding.set("windows-31j", "shift_jis");
mapEncoding.set("x-sjis", "shift_jis");
mapEncoding.set("cseuckr", "euc_kr");
mapEncoding.set("csksc56011987", "euc_kr");
mapEncoding.set("euc-kr", "euc_kr");
mapEncoding.set("iso-ir-149", "euc_kr");
mapEncoding.set("korean", "euc_kr");
mapEncoding.set("ks_c_5601-1987", "euc_kr");
mapEncoding.set("ks_c_5601-1989", "euc_kr");
mapEncoding.set("ksc5601", "euc_kr");
mapEncoding.set("ksc_5601", "euc_kr");
mapEncoding.set("windows-949", "euc_kr");
mapEncoding.set("csiso2022kr", "ISO_2022_kr");
mapEncoding.set("iso-2022-kr", "ISO_2022_kr");
mapEncoding.set("utf-16be", "UTF_16be");
mapEncoding.set("utf-16", "UTF_16le");
mapEncoding.set("utf-16le", "UTF_16le");


function importEncodingModule(name) {
  if (mapEncoding.has(name)) {
    return import("https://scotwatson.github.io/UnicodeString/" + mapEncoding.get(name) + "_Encoding.mjs");
  } else {
    return Promise.reject(new Error("Encoding not found: " + name));
  }
}
