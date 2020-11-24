let position = 0;
const slideToShow = 3;
const slideToScroll = 1;

const conteiner = document.querySelector('.slider-conteiner');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');

const itemsCount = document.querySelectorAll('.sliderItem').length;
const itemWidth = conteiner.clientWidth / slidesToShow;
const movePosition = slideToScroll * itemWidth;