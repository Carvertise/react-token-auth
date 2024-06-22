/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base64 encode / decode
 * http://www.webtoolkit.info/
 **/
var Base64 = {
    // private property
    _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

    // public method for encoding
    encode: function (input) {
        const output = btoa(input);
        return output;
    },

    // public method for decoding
    decode: function (input) {
        const output = atob(input);
        return output;
    },
};

module.exports = { Base64 };
