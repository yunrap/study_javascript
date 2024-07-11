export const createElemWithClassNames = (name, className) => {
  const $dom = document.createElement(name);
  $dom.className = className;
  return $dom;
};
