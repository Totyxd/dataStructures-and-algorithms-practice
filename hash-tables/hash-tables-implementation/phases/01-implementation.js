class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  };
};

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.data = new Array(numBuckets);
    this.count = 0;

    for (let index = 0; index < this.data.length; index++) {
      this.data[index] = null;
    };
  };

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    };

    return hashValue;
  };

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  };


  insert(key, value) {
    if (this.count / this.capacity >= 0.7) this.resize();
    const bucket = this.hashMod(key);

    if (!this.data[bucket]) {
      this.data[bucket] = new KeyValuePair(key, value);
      this.count++;
      return;
    };

    if (this.data[bucket].key === key) {
      this.data[bucket].value = value;
      return;
    };

    if (this.data[bucket].next) {  //Check for possible overwriting.

      let node = this.data[bucket].next;

      while (node) {
        if (node.key === key) {                   //O(n) section only in same bucket cases. Otherwise, O(1).
          node.value = value;
          return;
        };

        node = node.next;
      };

    };

    const oldHead = this.data[bucket];
    this.data[bucket] = new KeyValuePair(key, value);
    this.data[bucket].next = oldHead;
    this.count++;
  };


  read(key) {
    const index = this.hashMod(key);
    const bucket = this.data[index];

    if (!bucket) return;
    if (bucket && bucket.key === key) return bucket.value;
    if (bucket) {

      let node = bucket.next;

      while (node) {
        if (node.key === key) {
          return node.value;
        };

        node = node.next;
      };
    };
  };


  resize() {
    this.capacity *= 2;
    let newHashTab = new HashTable(this.capacity);

    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index]) {

          if (this.data[index].next) {

            let node = this.data[index];

            while (node) {
                newHashTab.insert(node.key, node.value);
                node = node.next;
            };

          } else {
            newHashTab.insert(this.data[index].key, this.data[index].value);
          };
      };
    };

    for (let index = 0; index < newHashTab.data.length; index++) {
      this.data[index] = newHashTab.data[index];
    };
  };


  delete(key) {
    const idx = this.hashMod(key);
    const bucket = this.data[idx];

    if (!bucket) return "Key not found";

    if (bucket.key === key) {
      this.data[idx] = bucket.next;
      this.count--;
      return;
    };

    let node = bucket.next;
    let prevNode = bucket;
    while (node) {
      if (node.key === key) {
        prevNode.next = node.next;
        this.count--;
        return;
      }
      prevNode = node;
      node = node.next;
    };

    return "Key not found";
  };
};


module.exports = HashTable;
