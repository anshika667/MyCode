<script>

let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

Array.from(currentWord.children).forEach((letter,i)=>{
   setTimeout(()=>{
     letter.className = "letter out";
   }, i * 80);
});
nextWord.style.opacity="1";
Array.from(nextWord.children).forEach((letter,i)=>{
  setTimeout(()=>{
    letter.className = "letter in";
  }, 340 + i * 80);
});
currentWordIndex = currentWordIndex === maxWordIndex ? 0: currentWordIndex + 1;
);

changeText();
setInterval(changeText,3000)

const circle = document.querySelectorAll('.circle');
circles.forEach(elem=>{
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360 / dots;

  for(let i=0; i<dots; i++){
    points += '<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>';

  }
  const pointsMarked = elem.querySelectorAll('.points');
  for( let i=0; i<PerformanceEntry; i++){
    pointsMarked[i] = classList.add('marked')
  }
})

// mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');

// active menu ///////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
  let len = section.lenght;
  while(--len && window.scrolly + 97 < section[len].offsetTop){}
    
    
  }

</script>