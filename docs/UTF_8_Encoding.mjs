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
        if (!(chunk instanceof ArrayBuffer)) {
          throw new Error("Invalid Chunk Type: " + chunk.constructor);
        }
        encoder.encode(chunk);
      },
      flush: function (controller) {
      }
    };
    const readableStrategy = {
      highWaterMark: 1,
      size: function (chunk) {
        if (!(chunk instanceof ArrayBuffer)) {
          throw new Error("Invalid Chunk Type: " + chunk.constructor);
        }
        return chunk.length;
      },
    };
    const writeableStrategy = {
      highWaterMark: 1,
      size: function (chunk) {
        if (!(chunk instanceof ArrayBuffer)) {
          throw new Error("Invalid Chunk Type: " + chunk.constructor);
        }
        return chunk.byteLength;
      },
    };
    super(transformer, readableStrategy, writeableStrategy);
  }
};

export class DecoderStream extends TransformStream {
  #decoder;
  constructor() {
    const transformer = {
      start: function (controller) {
        #decoder = new TextDecoder("utf-8");
      },
      transform: function (chunk, controller) {
        if (!(chunk instanceof String)) {
          throw new Error("Invalid Chunk Type: " + chunk.constructor);
        }
        const str = #decoder.decode(chunk, { stream: true } );
        for (const char of str) {
          controller.enqueue(char);
        }
      },
      flush: function (controller) {
      }
    };
    const readableStrategy = {
      highWaterMark: 1,
      size: function (chunk) {
        if (!(chunk instanceof String)) {
          throw new Error("Invalid Chunk Type: " + chunk.constructor);
        }
        return chunk.byteLength;
      },
    };
    const writeableStrategy = {
      highWaterMark: 1,
      size: function (chunk) {
        if (!(chunk instanceof String)) {
          throw new Error("Invalid Chunk Type: " + chunk.constructor);
        }
        return chunk.length;
      },
    };
    super(transformer, readableStrategy, writeableStrategy);
  }
};
