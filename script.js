const removeTransition=function(e){
    if(e.propertyName!=='transform')return;//just to see transform
    // console.log(e);
    console.log(e.propertyName);
    console.log(this);//this will point to calling object i.e. key query(div element)
    this.classList.remove('playing');
}


const playSound=function(e){
  const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key=document.querySelector(`div[data-key="${e.keyCode}"]`);

 if(!audio)
 return;

    key.classList.add('playing');
    audio.currentTime=0;//in case its already playing and is played again, it does not play again until rewinded(set to 0)
    audio.play();
   
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);
