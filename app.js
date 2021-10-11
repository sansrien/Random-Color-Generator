const button= document.querySelector('#thisbutton');
const color = document.querySelector('#color-name')
const colorBox = document.querySelector('#color')
const h1 =document.querySelector('h1')
button.addEventListener('click', function(){
   const randomColor = colorGenerator()
   document.body.style.backgroundColor = randomColor;
   color.innerText = randomColor;
   colorBox.style.backgroundColor =randomColor;
})

const colorGenerator = () => {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);
   return `rgb(${r},${g},${b})`;
}