var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  //   cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  freeScroll: true,
  freeScrollFriction: 0.03,
  autoPlay: 1000,
});
