window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  const visual = document.querySelector(".visual");
 
  const titles = [
    {
      title: "779",
      color: "#02066F",
    },
    {
      title: "night terrors",
      color: " #FF073A",
    },
    {
      title: "infected mushroom",
      color: " #00022E",
    },
    {
      title: "violin uplifts",
      color: "#343837",
    },
    {
      title: "ambience",
      color: "#062E03",
    },
  ];

  titles.forEach(createTitle);

  function createTitle(item, index) {
    const titleDisplayed = document.createElement("p");

    const { title, color } = item;

    titleDisplayed.innerHTML = `
  <p>${title}</p>
  
  
  `;
  titleDisplayed.style.backgroundColor=color;
  titleDisplayed.style.color='white';

    visual.appendChild(titleDisplayed);
  }

  // Play song
  function playSong(index) {
    
   
  
    const bubble=document.createElement('div');
    
    visual.classList.add("play");
    visual.appendChild(bubble);
   
    bubble.style.backgroundColor='orange';
   
    bubble.style.animation=`jump 1s ease`;
    bubble.addEventListener('animationend', function(){
      visual.removeChild(this);
     
  })
    sounds[index].play();
   
  }
  //
  function pauseSong(index) {
    visual.classList.remove("play");

    sounds[index].pause();
  }

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      pad.classList.add('active');
      setTimeout(() => pad.classList.remove('active'), 2000);
  
     
      const isPlaying = visual.classList.contains("play");
     
      if (isPlaying) {
        pauseSong(index);
       
      } else {
        playSong(index);
       
        
      }
    });
  });


});
