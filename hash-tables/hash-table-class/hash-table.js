const crypto = require("crypto");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  };
};

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets);

    for (let index = 0; index < this.data.length; index++) {
      this.data[index] = null;
    };
  };

  hash(key) {
    //Calcular el hash con sha256.
    const hash = crypto.createHash('sha256').update(key).digest('hex');
    // Toma los primeros 8 caracteres del hash y los convierte en un entero
    const intHash = parseInt(hash.substring(0, 8), 16);
    // Devolver el entero resultante
    return intHash;
  };

  hashMod(key) {
    return this.hash(key) % this.capacity;
  };

  insertNoCollisions(key, value) {
    if (this.data[this.hashMod(key)]) {
      throw new Error('hash collision or same key/value pair already exists!');
    };

    this.data[this.hashMod(key)] = new KeyValuePair(key, value);
    this.count++;
  };

  insertWithHashCollisions(key, value) {
    const bucket = this.hashMod(key);
    if (this.data[bucket]) {
      this.data[bucket].next = new KeyValuePair(key, value);  //Implementation with no overwriting at all.
      this.count++;
      return;

      /*const overWritten = this.data[bucket];
      this.data[bucket] = new KeyValuePair(key, value);
      this.data[bucket].next = overWritten;
      this.count++;
      return;*/
    };

    this.insertNoCollisions(key, value);
  };

  insert(key, value) {
    const bucket = this.hashMod(key);
    if (this.data[bucket] && this.data[bucket].key === key) {
        this.data[bucket].value = value;
        return;
    };

    this.insertWithHashCollisions(key, value);
  };

};

  let hashTable = new HashTable(2);

  hashTable.insert("key-1", "val-1");
  hashTable.insert("key-2", "val-2");
  hashTable.insert("key-3", "val-3");
  hashTable.insert("key-1", "val-100000");

  const pairC = hashTable.data[0];
  const pairB = hashTable.data[1];
  const pairA = hashTable.data[0].next;

  console.log(hashTable);
  console.log(pairA);

module.exports = HashTable;
