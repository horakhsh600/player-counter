
let countEl = document.getElementById("numberofplayer")
console.log(numberofplayer)
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}



const restBtn = document.getElementById('restbtn');

restBtn.addEventListener('click', () => {
  location.reload();
});


const increaseBtn = document.getElementById('increaseBtn');
        const imageContainer = document.getElementById('imageContainer');
        let imageCount = 0;
        function increaseImageCount() {
          imageCount++;
          const imageElement = document.createElement('img');
          imageElement.src = 'images.jpeg';
          imageElement.classList.add('thumbnail');
          imageContainer.appendChild(imageElement);
        }
        increaseBtn.addEventListener('click', increaseImageCount);



