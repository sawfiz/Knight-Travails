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

const Node = (x = null, y = null, parent = null, children = []) => ({
  parent,
  x,
  y,
  children,
});

const Tree = (root = null) => {
  const queue = [];
  const path = [];

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
      if (moveX >= 0 && moveX < 8 && moveY >= 0 && moveY < 8) {
        const child = Node(moveX, moveY, node);
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
        if (child.x === end.x && child.y === end.y) {
          let node = child;
          while (node.parent) {
            path.unshift(node);
            node = node.parent;
          }
          path.unshift(start);
          return path;
        } else {
          buildChildren(queue[i]);
          queue[i].children.forEach((child) => {
            queue.push(child);
          });
        }
      }
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
// const start = Node(4, 4);
// const end = Node(4, 4);
// const path = tree.searchNode(start, end);

// const start = Node(4, 4);
// const end = Node(6, 5);
// const path = tree.searchNode(start, end);

// const start = Node(4, 4);
// const end = Node(7, 7);
// const path = tree.searchNode(start, end);

// const start = Node(3, 4);
// const end = Node(0, 5);
// const path = tree.searchNode(start, end);

// const start = Node(0, 0);
// const end = Node(1, 1);
// const path = tree.searchNode(start, end);

const start = Node(0, 0);
const end = Node(7, 7);
const path = tree.searchNode(start, end);

console.log('The path is: ');
path.forEach((node) => {
  console.log(node.x, node.y);
});
