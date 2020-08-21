const $imgElement = document.querySelector('img');
const _container = document.querySelector('.__container');
const _imgCollection = [
  './source/assets/images/__back.png',
  './source/assets/images/img2.svg',
  './source/assets/images/img3.svg',
  './source/assets/images/img4.svg',
  './source/assets/images/img5.svg',
  './source/assets/images/img6.svg',
];
let index = 0;

// ===DYNAMIC EVENT LISTENER TO IMAGES=== //
$imgElement.addEventListener('click', e => {
  const imgPopupDivElement = document.createElement('div');

  imgPopupDivElement.setAttribute('class', '__popup__wrapper');
  const imgPopupMessageParagraphElement = document.createElement('p');
  const imgPopupImgElement = document.createElement('img');

  imgPopupImgElement.setAttribute('src', e.target.src);
  imgPopupMessageParagraphElement.textContent = `I APPARENTLY JUST CLICKED ${e.target.src} IMage NOW....LOOK DOWN BELOW  👇`;
  imgPopupDivElement.appendChild(imgPopupMessageParagraphElement);
  imgPopupDivElement.appendChild(imgPopupImgElement);

  //append the new created div (Element_Node with some innerElement which have Text_Node) to the _container through DOM node which is a live structural representation of our document and its connection to external servers
  // _container.insertBefore(imgPopupDivElement, _container.childNodes[0]);
  _container.appendChild(imgPopupDivElement);
});

// ===ARROW FUNCTION DEFINITION=== //
const schoolImgChanger = _ => {
  const timeout = 3000;
  $imgElement.src = _imgCollection[index];

  if (index < _imgCollection.length - 1) index++;
  else index = 0;
  setTimeout('schoolImgChanger()', timeout);
};
window.onload = schoolImgChanger;
