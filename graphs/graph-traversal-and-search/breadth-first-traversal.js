const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
};


function printBreadthFirst(start) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        const list = adjList[currentNode];
        console.log(currentNode);

        for (let i = 0; i < list.length; i++) {
            if (!visited.has(list[i])) {
                queue.push(list[i]);
                visited.add(list[i]);
            };
        };
    };
};

console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                      // One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                      // One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                      // One possible solution:  4, 3, 5, 6, 2, 1


function breadthFirstSearch(start, end) {
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        const list = adjList[currentNode];

        for (let i = 0; i < list.length; i++) {
            if (list[i] === end) {
                return true;
            };

            if (!visited.has(list[i])) {
                queue.push(list[i]);
                visited.add(list[i]);
            };
        };
    };

    return false;
};


console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false


function aShortestPath(start, end) {
    let queue = [[start]];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        const currentPath = queue.shift();
        const currentNode = currentPath[currentPath.length - 1];
        const list = adjList[currentNode];

        for (let i = 0; i < list.length; i++) {
            if (currentNode === end) {
                return currentPath;
            };

            if (!visited.has(list[i])) {
                queue.push(currentPath.concat([list[i]]));          //NEVER MODIFY the current path!!
                visited.add(list[i]);
            };
        };
    };

    return false;
};

  console.log("First Test:");
  console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
  console.log("Second Test:");
  console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
  console.log("Third Test:");
  console.log(aShortestPath(6, 1)); // -> [ 6, 4, 5, 1 ]
