window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  const visual=document.querySelector('.visual');

  //get the sounds

  const colors=[

    '#60d394',
   " #d36060",
   "red",
    "black",
   "yellow"
  ]
 
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
       
       
        sounds[index].currentTime=0;
        sounds[index].play();

       

        createBubbles(index);
        
    });
  });

  //create a func that makes bubbles

  const createBubbles=(index)=>{
      const bubble=document.createElement('div');
      visual.appendChild(bubble);
      bubble.style.backgroundColor=colors[index];
      bubble.style.animation=`jump 1s ease`;
      bubble.addEventListener('animationend', function(){
          visual.removeChild(this);
      })
  }
});

