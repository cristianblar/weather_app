var traverseDomAndCollectElements = function (matchFunc, startEl) {
  // matchFunc será T o F
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  let queue = [startEl];

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  let recursiveBFS = function () {
    if (!queue.length) return;

    let currentElement = queue.shift();

    queue.push(...currentElement.children);

    if (matchFunc(currentElement)) {
      resultSet.push(currentElement);
    }

    return recursiveBFS();
  };

  recursiveBFS();

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // Ej: "#id"
  // tu código aquí
  if (selector.startsWith("#")) return "id";
  if (selector.startsWith(".")) return "class";
  if (/\w+\.\w+/.test(selector)) return "tag.class";
  if (/^\w+$/.test(selector)) return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (elementoHTML) {
      return elementoHTML.id === selector.slice(1);
    };
  } else if (selectorType === "class") {
    matchFunction = function (elementoHTML) {
      return elementoHTML.classList.contains(selector.slice(1));
    };
  } else if (selectorType === "tag.class") {
    matchFunction = function (elementoHTML) {
      let arreglo = selector.split(".");
      return (
        arreglo[0].toLowerCase() === elementoHTML.tagName.toLowerCase() &&
        elementoHTML.classList.contains(arreglo[1])
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = function (elementoHTML) {
      return elementoHTML.tagName.toLowerCase() === selector.toLowerCase();
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
