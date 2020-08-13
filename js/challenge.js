'use strict';

let playing = true;
// const timer = () => {
//   return setInterval(function () {
//     count += 1;
//     counter.textContent = count;
//   }, 1000);
// }
//
// interval = timer();

document.addEventListener('click', (event)=>{
  if(event.target.id === 'plus'){
    console.log('plus');
  }else if (event.target.id === 'minus'){
    console.log('plus1');
  }else if (event.target.id === 'pause'){
    const button = document.getElementById('pause');
    if(playing){
      button.textContent = 'resume';
      playing = false;
    }else{
      button.textContent = 'pause';
      playing = false;
    }
  }else if (event.target.id === 'heart'){
    console.log('plus3');
  }
});
