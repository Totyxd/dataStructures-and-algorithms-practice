const { use } = require("chai");

// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  };

  addUser(name) {
    let id = Object.keys(this.users).length + 1;
    this.users[id] = {"id" : id, "name" : name};
    this.follows[id] = new Set();
    return id;
  };

  getUser(userID) {
    if (this.users[userID]) {
      return this.users[userID];
    };

    return null;
  };

  follow(userID1, userID2) {
    if (this.users[userID1] && this.users[userID2]) {
      this.follows[userID1].add(this.getUser(userID2).id);
      return true;
    };

    return false;
  };

  getFollows(userID) {
    return this.follows[userID];
  };

  getFollowers(userID) {
    /*const followers = new Set();

    for (const key in this.follows) {
      const follows = this.follows[key];
      if (follows.has(userID)) followers.add(Number(key));    //More traditional solution with focus on OOP.
    };

    return followers;*/

    return _breadthFirstFollowers(this.follows, 1, userID);   //Solution related directly with graph theory. Uses the helper below the class.
  };

  getRecommendedFollows(userID, degrees) {
    // Create a queue and enqueue a path to the starting node
    const queue = [[userID]];

    // Create a set to store visited nodes
    const visited = new Set();

    const friends = [];

    // While the queue is not empty...
    while (queue.length > 0) {
      // Dequeue the first path
      let path = queue.shift();

      // grab the last node from the path
      let currentNode = path[path.length - 1];

      // and check if it's been visited
      if (!visited.has(currentNode)) {
        // If not, mark it as visited
        visited.add(currentNode);

        // Add to the friends array if the path is within the number of degrees
        if (path.length > 1 && path.length <= degrees + 2) {
          friends.push(currentNode);
        };

        // Put paths to all its neighbors in the back of the queue
        let neighbors = this.getFollows(currentNode);
        neighbors.forEach(function (el) {
          let pathCopy = [...path];
          pathCopy.push(el);
          queue.push(pathCopy);
        });
      };
    };

    return friends.slice(1);
  };
};

module.exports = SocialNetwork;



function _breadthFirstFollowers(adjList, start, target) {
  let queue = [start];
  let visited = new Set();
  visited.add(start);
  let followers = new Set();

  while (queue.length > 0) {
      const currentNode = queue.shift();
      const list = adjList[currentNode];

      if (list.has(target)) {
        followers.add(currentNode);
      };

      list.forEach(function (el) {
        if (!visited.has(el)) {
          queue.push(el);
          visited.add(el);
        };
      });
  };

  return followers;
};
