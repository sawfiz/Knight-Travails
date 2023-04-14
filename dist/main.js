(self["webpackChunkknight_travails"] = self["webpackChunkknight_travails"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IG1vdmVzID0ge1xuICBhOiBbMSwgMl0sXG4gIGI6IFsyLCAxXSxcbiAgYzogWzIsIC0xXSxcbiAgZDogWzEsIC0yXSxcbiAgZTogWy0xLCAtMl0sXG4gIGY6IFstMiwgLTFdLFxuICBnOiBbLTIsIDFdLFxuICBoOiBbLTEsIDJdLFxufTtcblxuY29uc3QgTm9kZSA9ICh4ID0gbnVsbCwgeSA9IG51bGwsIHBhcmVudCA9IG51bGwsIGNoaWxkcmVuID0gW10pID0+ICh7XG4gIHBhcmVudCxcbiAgeCxcbiAgeSxcbiAgY2hpbGRyZW4sXG59KTtcblxuY29uc3QgVHJlZSA9IChyb290ID0gbnVsbCkgPT4ge1xuICBjb25zdCBxdWV1ZSA9IFtdO1xuICBjb25zdCBwYXRoID0gW107XG5cbiAgY29uc3QgcHJpbnROb2RlID0gKG5vZGUgPSByb290KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Jhc2UgJywgbm9kZS54LCBub2RlLnkpO1xuICAgIGNvbnNvbGUubG9nKCdDaGlsZHJlbjonKTtcbiAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhjaGlsZC54LCBjaGlsZC55KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBidWlsZENoaWxkcmVuID0gKG5vZGUgPSByb290KSA9PiB7XG4gICAgZm9yIChjb25zdCBtb3ZlIGluIG1vdmVzKSB7XG4gICAgICBjb25zdCBtb3ZlWCA9IG5vZGUueCArIG1vdmVzW21vdmVdWzBdO1xuICAgICAgY29uc3QgbW92ZVkgPSBub2RlLnkgKyBtb3Zlc1ttb3ZlXVsxXTtcbiAgICAgIGlmIChtb3ZlWCA+PSAwICYmIG1vdmVYIDwgOCAmJiBtb3ZlWSA+PSAwICYmIG1vdmVZIDwgOCkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IE5vZGUobW92ZVgsIG1vdmVZLCBub2RlKTtcbiAgICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoTm9kZSA9IChzdGFydCwgZW5kKSA9PiB7XG4gICAgaWYgKCFzdGFydCB8fCAhZW5kKSByZXR1cm4gbnVsbDtcblxuICAgIHF1ZXVlLnB1c2goc3RhcnQpO1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgbGV0IGxlbmd0aCA9IHF1ZXVlLmxlbmd0aDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGlsZCA9IHF1ZXVlW2ldO1xuICAgICAgICBpZiAoY2hpbGQueCA9PT0gZW5kLnggJiYgY2hpbGQueSA9PT0gZW5kLnkpIHtcbiAgICAgICAgICBsZXQgbm9kZSA9IGNoaWxkO1xuICAgICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xuICAgICAgICAgICAgcGF0aC51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXRoLnVuc2hpZnQoc3RhcnQpO1xuICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1aWxkQ2hpbGRyZW4ocXVldWVbaV0pO1xuICAgICAgICAgIHF1ZXVlW2ldLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlYXJjaE5vZGUsXG4gIH07XG59O1xuXG5jb25zdCB0cmVlID0gVHJlZSgpO1xuLy8gY29uc3Qgc3RhcnQgPSBOb2RlKDQsIDQpO1xuLy8gY29uc3QgZW5kID0gTm9kZSg0LCA0KTtcbi8vIGNvbnN0IHBhdGggPSB0cmVlLnNlYXJjaE5vZGUoc3RhcnQsIGVuZCk7XG5cbi8vIGNvbnN0IHN0YXJ0ID0gTm9kZSg0LCA0KTtcbi8vIGNvbnN0IGVuZCA9IE5vZGUoNiwgNSk7XG4vLyBjb25zdCBwYXRoID0gdHJlZS5zZWFyY2hOb2RlKHN0YXJ0LCBlbmQpO1xuXG4vLyBjb25zdCBzdGFydCA9IE5vZGUoNCwgNCk7XG4vLyBjb25zdCBlbmQgPSBOb2RlKDcsIDcpO1xuLy8gY29uc3QgcGF0aCA9IHRyZWUuc2VhcmNoTm9kZShzdGFydCwgZW5kKTtcblxuLy8gY29uc3Qgc3RhcnQgPSBOb2RlKDMsIDQpO1xuLy8gY29uc3QgZW5kID0gTm9kZSgwLCA1KTtcbi8vIGNvbnN0IHBhdGggPSB0cmVlLnNlYXJjaE5vZGUoc3RhcnQsIGVuZCk7XG5cbi8vIGNvbnN0IHN0YXJ0ID0gTm9kZSgwLCAwKTtcbi8vIGNvbnN0IGVuZCA9IE5vZGUoMSwgMSk7XG4vLyBjb25zdCBwYXRoID0gdHJlZS5zZWFyY2hOb2RlKHN0YXJ0LCBlbmQpO1xuXG5jb25zdCBzdGFydCA9IE5vZGUoMCwgMCk7XG5jb25zdCBlbmQgPSBOb2RlKDcsIDcpO1xuY29uc3QgcGF0aCA9IHRyZWUuc2VhcmNoTm9kZShzdGFydCwgZW5kKTtcblxuY29uc29sZS5sb2coJ1RoZSBwYXRoIGlzOiAnKTtcbnBhdGguZm9yRWFjaCgobm9kZSkgPT4ge1xuICBjb25zb2xlLmxvZyhub2RlLngsIG5vZGUueSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==