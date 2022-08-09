/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import * as "stringModule" from "https://scotwatson.github.io/UnicodeString/UnicodeString.mjs";

const encoder = new TextEncoder("utf-8");
const decoder = new TextDecoder("utf-8");

export function encode(text) {
  encoder.encode(text);
}

export function decode(buffer) {
  decoder.decode(buffer);
}

export class EncoderStream extends TransformStream {
  constructor() {
    const transformer = {
      start: function (controller) {
      },
      transform: function (chunk, controller) {
        controller.enqueue(encoder.encode(chunk));
      },
      flush: function (controller) {
      }
    };
    const readableStrategy = {
      highWaterMark: 1,
      size: function (chunk) {
        return chunk.length;
      },
    };
    const writeableStrategy = {
      highWaterMark: 1,
      size: function (chunk) {
        return chunk.byteLength;
      },
    };
    super(transformer, readableStrategy, writeableStrategy);
  }
};

export class DecoderStream extends TransformStream {
  constructor() {
    const transformer = {
      start: function (controller) {
      },
      transform: function (chunk, controller) {
        controller.enqueue(decoder.decode(chunk), { stream: true } );
      },
      flush: function (controller) {
      }
    };
    const readableStrategy = {
      highWaterMark: 1,
      size: function (chunk) {
        return chunk.byteLength;
      },
    };
    const writeableStrategy = {
      highWaterMark: 1,
      size: function (chunk) {
        return chunk.length;
      },
    };
    super(transformer, readableStrategy, writeableStrategy);
  }
};


