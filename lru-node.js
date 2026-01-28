class LRUNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    if (capacity <= 0) {
      throw new Error("Capacity must be greater than 0");
    }

    this.capacity = capacity;
    this.map = new Map();

    this.head = new LRUNode(null, null); // Most Recently Used side
    this.tail = new LRUNode(null, null); // Least Recently Used side

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return undefined;

    // Move node to MRU position
    this._remove(node);
    this._insertAfterHead(node);

    return node.value;
  }

  set(key, value) {
    // If key already exists → update & move to MRU
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;

      this._remove(node);
      this._insertAfterHead(node);
      return;
    }

    // If cache is full → evict LRU
    if (this.map.size >= this.capacity) {
      const lru = this.tail.prev; // least recently used
      this._remove(lru);
      this.map.delete(lru.key);
    }

    // Insert new node as MRU
    const node = new LRUNode(key, value);
    this._insertAfterHead(node);
    this.map.set(key, node);
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _insertAfterHead(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }

  print() {
    let curr = this.head.next;
    const result = [];
    while (curr !== this.tail) {
      result.push(`${curr.key}:${curr.value}`);
      curr = curr.next;
    }
    console.log("MRU →", result.join(" -> "), "← LRU");
  }
}
const lru = new LRUCache(3);
lru.set("a", 1);
lru.set("b", 2);
lru.set("c", 3);

lru.print();
// MRU → c:3 -> b:2 -> a:1 ← LRU
console.log(lru.get("a")); // 1
lru.print();
// MRU → a:1 -> c:3 -> b:2 ← LRU
lru.set("d", 4); // evicts "b"
lru.print();
// MRU → d:4 -> a:1 -> c:3 ← LRU
console.log(lru.get("b")); // undefined
console.log(lru.get("c")); // 3
console.log(lru.get("d")); // 4
