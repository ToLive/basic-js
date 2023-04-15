const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split('~~').length;
  },
  addLink(value) {
    if (this.getLength() > 0 && this.chain !== '') {
      this.chain += `~~`;
    }

    this.chain += `( ${value} )`;

    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.getLength()) {
      this.chain = '';

      throw Error(`You can't remove incorrect link!`);
    }

    const chainArray = this.chain.split('~~');
    const head = chainArray.slice(0, position - 1);
    const tail = chainArray.slice(position, chainArray.length);

    this.chain = head.concat(tail).join('~~');

    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');

    return this;
  },
  finishChain() {
    const readyChain = this.chain;
    this.chain = '';

    return readyChain;
  }
};

module.exports = {
  chainMaker
};
