import { CONTAINER, SLIDE_DATA, CURRENT_INDEX, SLIDE_TO } from "./constants.js";
import { createElemWithClassNames as create } from "./utilities.js";

const Slide = (() => {
  return class {
    constructor($target, slideData) {
      const frag = document.createDocumentFragment();
      const $slide = create("div", "slide");
      this[CONTAINER] = document.createElement("ul");
      this[CURRENT_INDEX] = 0;
      this[SLIDE_DATA] = slideData;
      this[CONTAINER].className = "slide__container";
      this[CONTAINER].style.width = this[SLIDE_DATA].length * 100 + "px";
      slideData.forEach((v, i) => {
        const $li = create("li", "slide__item");
        $li.innerText = v;
        this[CONTAINER].appendChild($li);
      });
      $slide.appendChild(this[CONTAINER]);
      $slide.addEventListener("click", this.triggerClick.bind(this));
      frag.appendChild($slide);
      $target.appendChild(frag);
    }
    [SLIDE_TO](index) {
      this[CURRENT_INDEX] = index;
      this[CONTAINER].style.left = -100 * index + "px";
    }
    set index(index) {
      index = index % this[SLIDE_DATA].length;
      this[SLIDE_TO](index);
    }
    triggerClick(e) {
      e && e.preventDefault();
      this.index = this[CURRENT_INDEX] + 1;
    }
  };
})();

export default Slide;
