const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(machineType = true) {
    this.machineType = machineType;
    this.alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 65));
  }

  formatKey(messageLength, keyLength, key) {
    key = key.toUpperCase()

    if (messageLength < keyLength) {
      key = key.slice(0, messageLength);
    }

    if (messageLength >= keyLength) {
      const diffLength = Math.ceil(messageLength / keyLength);

      key = key.repeat(diffLength).slice(0, messageLength);
    }

    return key.split('');
  }

  formatResult(result) {
    return (this.machineType)
      ? result.join('')
      : result.reverse().join('');
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    key = this.formatKey(message.length, key.length, key);

    const result = message.toUpperCase().split('').reduce((acc, char) => {
      const charIndex = this.alphabet.indexOf(char);

      return charIndex < 0
        ? [...acc, char]
        : [...acc, this.alphabet[(charIndex + this.alphabet.indexOf(key.shift())) % this.alphabet.length]];
    }, []);

    return this.formatResult(result);
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    key = this.formatKey(message.length, key.length, key);

    const result = message.toUpperCase().split('').reduce((acc, char) => {
      const charIndex = this.alphabet.indexOf(char);

      return charIndex < 0
        ? [...acc, char]
        : [...acc, this.alphabet[(charIndex + this.alphabet.length - this.alphabet.indexOf(key.shift())) % this.alphabet.length]];
    }, []);

    return this.formatResult(result);
  }
}

module.exports = {
  VigenereCipheringMachine
};
