/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

import computer from '../../assets/carousel/computer.jpeg'
import mountains from '../../assets/carousel/mountains.jpeg';
import trees from '../../assets/carousel/trees.jpeg';
import turntable from '../../assets/carousel/turntable.jpeg';



imagesArray = [ mountains, computer, trees, turntable ]


function makeCarousel(img) {
  const newCarousel = document.createElement('div'),
        leftBtn = document.createElement('div'),
        imgOne = document.createElement('img'),
        imgTwo = document.createElement('img'),
        imgThree = document.createElement('img'),
        imgFour = document.createElement('img'),
        rightBtn = document.createElement('div');

  NewCarousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  imgOne.src = im.mountains;
  imgTwo.src = img.computer;
  imgThree.src = img.trees;
  imgFour.src = img.turntable;
  leftBtn.textContent = 'left';
  rightBtn.textContent = 'right';

  newCarousel.appendChild(LeftBtn);
  newCarousel.appendChild(imgOne);
  newCarousel.appendChild(imgTwo);
  newCarousel.appendChild(imgThree);
  newCarousel.appendChild(imgFour);
  newCarousel.appendChild(rightBtn);

  // leftBtn.addEventListener('click', event => {
  //   panelOpenButton.classList.toggle('hide-btn')
  //   panelCloseButton.classList.toggle('hide-btn')
  //   panelContent.classList.toggle('toggle-on')
//  })

  return newCarousel;

}  

const funCarousel = document.querySelector('.carousel-container')


const slideshowPictures = imagesArray.map( obj => {
  return makeCarousel(obj)
})

slideshowPictures.forEach(imgElement => {
  funCarousel.appendChild(imgElement)
})

console.log(funCarousel);