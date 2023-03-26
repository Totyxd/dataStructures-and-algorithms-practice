class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  };

  read(index) {
    return this.data[index];
  };

  unshift(val) {
    if (!this.data[0]) {
      this.data[0] = val;
      this.length++;
      return;
    };

    for (let index = this.data.length; index >= 1; index--) {
      this.data[index] = this.data[index - 1];
    };

    this.data[0] = val;
    this.length += 1;
  };

};

module.exports = DynamicArray;
