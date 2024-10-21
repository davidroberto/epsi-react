const createDomElement = (tagName, text, className = null) => {
  const domElement = document.createElement(tagName);
  domElement.textContent = text;

  if (className) {
    domElement.classList.add(className);
  }

  return domElement;
};

const title = createDomElement("p", "mon super titre", "head-title");
const div = createDomElement("div", "Bonjour div", "article-container");
