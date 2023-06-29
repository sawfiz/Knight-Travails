// import './style.css';

const moves = {
  a: [1, 2],
  b: [2, 1],
  c: [2, -1],
  d: [1, -2],
  e: [-1, -2],
  f: [-2, -1],
  g: [-2, 1],
  h: [-1, 2],
};

const createNode = (x = null, y = null, parent = null, children = []) => ({
  parent,
  x,
  y,
  children,
});

const Tree = (root = null) => {
  const queue = [];
  const path = [];
  const visited = [];
  let count = 0;

  const printNode = (node = root) => {
    console.log('Base ', node.x, node.y);
    console.log('Children:');
    node.children.forEach((child) => {
      console.log(child.x, child.y);
    });
  };

  const buildChildren = (node = root) => {
    for (const move in moves) {
      const moveX = node.x + moves[move][0];
      const moveY = node.y + moves[move][1];
      // Make sure child is within the board boundaries
      if (moveX >= 0 && moveX < 8 && moveY >= 0 && moveY < 8) {
        // Only push if child is not already visited
        let isPairFound = false;
        for (const obj of visited) {
          if (obj.x === moveX && obj.y === moveY) {
            isPairFound = true;
            break;
          }
        }
        if (!isPairFound) {
          const child = createNode(moveX, moveY, node);
          node.children.push(child);
        }
        const child = createNode(moveX, moveY, node);
        node.children.push(child);
      }
    }
  };

  const searchNode = (start, end) => {
    if (!start || !end) return null;

    queue.push(start);

    while (queue.length) {
      let length = queue.length;

      for (let i = 0; i < length; i++) {
        const child = queue[i];
        // If found the end
        if (child.x === end.x && child.y === end.y) {
          let node = child;
          // Build the path towards the root of the tree
          while (node.parent) {
            // Insert node at the beginning of the path
            path.unshift(node);
            node = node.parent;
          }
          path.unshift(start);
          console.log(`Took ${count} tries`);
          console.log(`Number of tried cells: ${visited.length}`);
          console.log('Tried cells: ');
          visited.forEach((node) => {
            console.log(node.x, node.y);
          });
          return path;
        } else {
          // The node is not the end
          count++;
          // Add node to visited cells, if not already visited
          const foundNode = visited.find(
            (cell) => cell.x === child.x && cell.y === child.y
          );
          if (!foundNode) {
            visited.push(child);
          }
          // Push children of this node to the queue
          buildChildren(queue[i]);
          queue[i].children.forEach((child) => {
            queue.push(child);
          });
        }
      }
      // empty the queue
      for (let i = 0; i < length; i++) {
        queue.shift();
      }
    }
  };

  return {
    searchNode,
  };
};

const tree = Tree();

// const start = createNode(4, 4);
// const end = createNode(4, 4);
// const path = tree.searchNode(start, end);
// 0 tries

// const start = createNode(4, 4);
// const end = createNode(6, 5);
// const path = tree.searchNode(start, end);
// 2 tries

// const start = createNode(4, 4);
// const end = createNode(7, 7);
// const path = tree.searchNode(start, end);
// 9 tries

// const start = createNode(3, 4);
// const end = createNode(0, 5);
// const path = tree.searchNode(start, end);
// 52 tries; 46 tries, 33 tried cells

// const start = createNode(0, 0);
// const end = createNode(1, 1);
// const path = tree.searchNode(start, end);
// 106 tries; 81 tries, 46 tried cells

const start = createNode(0, 0);
const end = createNode(7, 7);
const path = tree.searchNode(start, end);
// 2838 tries; 583 tries, 63 tried cells

console.log('The path is: ');
path.forEach((node) => {
  console.log(node.x, node.y);
});
