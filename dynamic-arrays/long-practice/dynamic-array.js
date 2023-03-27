class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  };

  read(index) {
    return this.data[index];
  };

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    };
    this.data[this.length] = val;
    this.length++;
  };


  pop() {
    const popped = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    if (this.length > 0) {
      this.length--;
    };
    return popped;
  };

  shift() {
    if (this.length <= 0) return undefined;
    const shifted = this.data[0];
    for (let index = 0; index < this.length; index++) {
      this.data[index] = this.data[index + 1];
    };
    this.length--;
    return shifted;
  };

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    };

    if (!this.data[0]) {
      this.data[0] = val;
      this.length++;
      return this.length;
    };

    for (let index = this.data.length; index >= 1; index--) {
      this.data[index] = this.data[index - 1];
    };

    this.data[0] = val;
    this.length += 1;

    return this.length;
  };

  indexOf(val) {
    for (let index = 0; index < this.length; index++) {
      const element = this.data[index];
      if (element === val) return index;
    };

    return -1;
  };

  resize() {
    this.capacity *= 2;
    let newArr = new Array(this.capacity);
    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];
      newArr[index] = element;
    };
    this.data = newArr;
  };
};


module.exports = DynamicArray;
