'use strict';

define(['util/btc'], function(BtcUtils) {
  describe('Bitcoin Utils', function() {
    
    var pubkeys = [
      [ 4, 207, 46, 91, 2, 214, 240, 35, 64, 245, 169, 222, 251, 191, 113, 12, 56, 139, 132, 81, 200, 33, 69, 177, 65, 159, 233, 105, 104, 55, 177, 205, 239, 197,
        105, 162, 167, 155, 170, 109, 162, 247, 71, 195, 178, 90, 16, 42, 8, 29, 253, 94, 121, 154, 188, 65, 38, 33, 3, 224, 209, 113, 20, 119, 11 ],
      [ 4, 233, 211, 239, 39, 245, 241, 19, 229, 89, 231, 193, 118, 137, 231, 232, 85, 125, 107, 10, 66, 48, 180, 19, 53, 33, 177, 148, 145, 225, 57, 204, 230, 77,
        9, 80, 205, 197, 42, 18, 11, 217, 204, 163, 231, 209, 255, 250, 25, 186, 93, 192, 118, 104, 113, 12, 246, 128, 167, 140, 183, 166, 32, 247, 215 ],
      [ 4, 113, 172, 59, 24, 68, 128, 80, 109, 61, 92, 135, 13, 181, 27, 8, 85, 225, 106, 8, 219, 251, 154, 154, 251, 31, 13, 247, 158, 20, 184, 116, 114, 19, 255,
        178, 167, 250, 216, 177, 150, 82, 32, 141, 81, 137, 5, 226, 90, 197, 155, 156, 180, 176, 58, 160, 95, 28, 82, 157, 58, 231, 212, 241, 174 ],
      [ 4, 169, 111, 78, 193, 167, 99, 128, 231, 10, 252, 9, 12, 126, 35, 92, 73, 190, 153, 160, 202, 24, 222, 249, 26, 170, 165, 233, 141, 175, 215, 178, 161, 103,
        216, 166, 131, 4, 218, 63, 222, 37, 186, 85, 41, 194, 255, 14, 68, 230, 56, 22, 190, 123, 26, 42, 40, 131, 23, 196, 21, 110, 243, 193, 29 ],
      [ 4, 98, 191, 146, 220, 35, 209, 0, 198, 201, 247, 127, 51, 82, 1, 81, 60, 226, 155, 42, 110, 163, 25, 219, 222, 249, 110, 85, 19, 157, 115, 19, 72, 126, 167,
        21, 211, 8, 238, 160, 31, 80, 246, 141, 114, 52, 41, 78, 91, 254, 57, 196, 248, 29, 18, 211, 83, 52, 129, 220, 97, 121, 126, 207, 87 ]
    ];
    
    var script = '53410471ac3b184480506d3d5c870db51b0855e16a08dbfb9a9afb1f0df79e14b8747213ffb2a7fad8b19652208d518905e25ac59b9cb4b03aa05f1c529d3ae7d4f1ae4104a96f4ec1' +
            'a76380e70afc090c7e235c49be99a0ca18def91aaaa5e98dafd7b2a167d8a68304da3fde25ba5529c2ff0e44e63816be7b1a2a288317c4156ef3c11d4104cf2e5b02d6f02340f5a9defbbf7' +
            '10c388b8451c82145b1419fe9696837b1cdefc569a2a79baa6da2f747c3b25a102a081dfd5e799abc41262103e0d17114770b4104e9d3ef27f5f113e559e7c17689e7e8557d6b0a4230b413' +
            '3521b19491e139cce64d0950cdc52a120bd9cca3e7d1fffa19ba5dc07668710cf680a78cb7a620f7d7410462bf92dc23d100c6c9f77f335201513ce29b2a6ea319dbdef96e55139d7313487' +
            'ea715d308eea01f50f68d7234294e5bfe39c4f81d12d3533481dc61797ecf5755ae';

    // Hex uncompressed address
    var address1 = '0478d430274f8c5ec1321338151e9f27f4c676a008bdf8638d07c0b6be9ab35c71a1518063243acd4dfe96b66e3f2ec8013c8e072cd09b3834a19f81f659cc3455';
    // Hex compressed address
    var address2 = '0378d430274f8c5ec1321338151e9f27f4c676a008bdf8638d07c0b6be9ab35c71';
    // Stealth address
    var address3 = 'vJmuN2YqducEXDVX9EAu5HFNfnfDv1fCBhKmhUPTcvaykpM1mvyRXhHFVsJwWa47kGiZU14JrsxgCPsW1bd3pT8arAiTYRd9zhRPAT';
    // Master public key
    var address4 = 'xpub6BckLqjjDDbTBLH22dh73dJYDPV1HCyfTJL3TstPkPKLSK44Y7Ah49CjZ1rkRo5YU3zci6xVjd4pg187LUpL9SjUw6Pnk897B24LEwKStsQ';
    // Pubkey hash
    var address5 = '13i6nM6iauwi3H4cDk77Nu4NY5Y1bKk3Wd';

    it('create multisig', function() {
      var multisig = BtcUtils.multiSig(3, pubkeys);
      expect(multisig.address).toEqual('3CQdsxAmuaC2kHvHwKxKJ4kXn1qELrc6iM');
      expect(multisig.script).toEqual(script);
      expect(multisig.m).toEqual(3);
      expect(multisig.pubKeys).toEqual(pubkeys);
    });
    
    it('import multisig', function() {
      
      var multisig = BtcUtils.importMultiSig(script);

      expect(multisig.address).toEqual('3CQdsxAmuaC2kHvHwKxKJ4kXn1qELrc6iM');
      expect(multisig.script).toEqual(script);
      expect(multisig.m).toEqual(3);
      expect(multisig.pubKeys).toEqual(pubkeys); 
    });
    
    it('Uncompresses and compresses a public key', function() {
      var _address1 = BtcUtils.compressPublicKey(pubkeys[0]);
      var _address2 = BtcUtils.compressPublicKey(pubkeys[1]);
      var _address3 = BtcUtils.compressPublicKey(pubkeys[2]);
      var _address4 = BtcUtils.compressPublicKey(pubkeys[3]);

      _address1 = BtcUtils.uncompressPublicKey(_address1);
      _address2 = BtcUtils.uncompressPublicKey(_address2);
      _address3 = BtcUtils.uncompressPublicKey(_address3);
      _address4 = BtcUtils.uncompressPublicKey(_address4);
      
      expect(_address1).toEqual(pubkeys[0])
      expect(_address2).toEqual(pubkeys[1])
      expect(_address3).toEqual(pubkeys[2])
      expect(_address4).toEqual(pubkeys[3])
    });
    
    it('Decode an address from string to bytes', function() {
      
      var _address1 = BtcUtils.extractPublicKey(address1, false);
      var _address2 = BtcUtils.extractPublicKey(address2, false);
      var _address3 = BtcUtils.extractPublicKey(address3, false);
      var _address4 = BtcUtils.extractPublicKey(address4, false);
      
      expect(_address1).toEqual([ 4, 120, 212, 48, 39, 79, 140, 94, 193, 50, 19, 56, 21, 30, 159, 39, 244, 198, 118, 160, 8, 189, 248, 99, 141, 7,
        192, 182, 190, 154, 179, 92, 113, 161, 81, 128, 99, 36, 58, 205, 77, 254, 150, 182, 110, 63, 46, 200, 1, 60, 142, 7, 44, 208, 155, 56, 52,
        161, 159, 129, 246, 89, 204, 52, 85 ]);
      expect(_address2).toEqual([ 4, 120, 212, 48, 39, 79, 140, 94, 193, 50, 19, 56, 21, 30, 159, 39, 244, 198, 118, 160, 8, 189, 248, 99, 141, 7,
        192, 182, 190, 154, 179, 92, 113, 161, 81, 128, 99, 36, 58, 205, 77, 254, 150, 182, 110, 63, 46, 200, 1, 60, 142, 7, 44, 208, 155, 56, 52,
        161, 159, 129, 246, 89, 204, 52, 85 ]);
      expect(_address3).toEqual([ 4, 159, 232, 217, 203, 3, 194, 39, 63, 147, 143, 84, 79, 107, 13, 189, 71, 126, 12, 131, 188, 2, 154, 242, 76, 126,
        37, 119, 160, 45, 224, 171, 125, 93, 199, 93, 143, 248, 39, 96, 186, 238, 67, 124, 166, 116, 147, 39, 103, 104, 85, 43, 245, 241, 228, 37, 123,
        122, 10, 83, 83, 241, 179, 214, 230 ]);
      expect(_address4).toEqual([ 4, 159, 232, 217, 203, 3, 194, 39, 63, 147, 143, 84, 79, 107, 13, 189, 71, 126, 12, 131, 188, 2, 154, 242, 76, 126,
        37, 119, 160, 45, 224, 171, 125, 93, 199, 93, 143, 248, 39, 96, 186, 238, 67, 124, 166, 116, 147, 39, 103, 104, 85, 43, 245, 241, 228, 37, 123,
        122, 10, 83, 83, 241, 179, 214, 230 ]);
    });

    it('Convert height to js timestamp', function() {
      expect(BtcUtils.heightToTimestamp(5000)).toEqual(1233819755000);
      expect(BtcUtils.heightToTimestamp(5000, 600)).toEqual(1234006505000);
    });

    it('Sets the last timestamp', function() {
      BtcUtils.setLastTimestamp(296406, 1397790085);
      expect(BtcUtils.lastBlock).toEqual(296406);
      expect(BtcUtils.lastTimestamp).toEqual(1397790085);
      expect(BtcUtils.blockDiff).toEqual(562.6862479167088);
    });

    it('Decodes a block header', function() {
      var headerHex = "02000000d8aaf32c2bd344a921245b1e675381a5ccfccc397d68614300000000000000008c0e88fa16e068f881ad613f764e03018873e51a5e52c0db432b461365b7d77f4e565b538c9d001985c7aa6e";
      var header = BtcUtils.decodeBlockHeader(headerHex);
      expect(header.version).toEqual(2);
      expect(header.prevBlock).toEqual([ 216, 170, 243, 44, 43, 211, 68, 169, 33, 36, 91, 30, 103, 83, 129, 165, 204, 252, 204, 57, 125, 104, 97, 67, 0, 0, 0, 0, 0, 0, 0, 0 ]);
      expect(header.merkleRoot).toEqual([ 140, 14, 136, 250, 22, 224, 104, 248, 129, 173, 97, 63, 118, 78, 3, 1, 136, 115, 229, 26, 94, 82, 192, 219, 67, 43, 70, 19, 101, 183, 215, 127 ]);
      expect(header.timestamp).toEqual(1398494798);
      expect(header.difficulty).toEqual([ 140, 157, 0, 25 ]);
      expect(header.nonce).toEqual(1856685957);
    });

    it('Derives from mpk', function() {
      var mpk = "xpub6AANPpdT4JoeTLrgN159eHQXT4X1YiCtXnAJLV5zF48K2iDWWc1S7eYNFGe3oT2W5vDeFYHpWS8Y3Jr3xXeXFn18W6jMU9DhE3VG9mhyayG";
      var derived = BtcUtils.deriveMpk(mpk, 2);
      expect(derived).toEqual("xpub6BmQ54gaEjchEAjgdhtGcLm8fJMt6ksqcWsPacXzrL4vLK4qKsNnXouRHLXpkSBdQNjjvfefW334YzSzjL3uxLaXZWYsW8hVLZM7wwNqSxb");
    });


    it('Validates addresses', function() {
      expect(BtcUtils.isAddress(address1)).toBeUndefined();
      expect(BtcUtils.isAddress(address2)).toBeUndefined();
      expect(BtcUtils.isAddress(address3)).toEqual(true);
      expect(BtcUtils.isAddress(address4)).toBeUndefined();
      expect(BtcUtils.isAddress(address5)).toEqual(true);
      expect(BtcUtils.isAddress('foo')).toBeUndefined();
    });

    it('Validates addresses and public keys', function() {
      expect(BtcUtils.validateAddress(address1)).toEqual(true);
      expect(BtcUtils.validateAddress(address2)).toEqual(true);
      expect(BtcUtils.validateAddress(address3)).toEqual(true);
      expect(BtcUtils.validateAddress(address4)).toEqual(true);
      expect(BtcUtils.validateAddress(address5)).toEqual(true);
      expect(BtcUtils.validateAddress('foo')).toBeUndefined();
    });
  });
});
