var playing = true, count = 0;

const button_pause = document.getElementById('pause');
const button_plus = document.getElementById('plus');

const timer = () => {
  return setInterval(function () {
    count += 1;
    counter.textContent = count;
  }, 1000);
}

let interval = timer();

document.addEventListener('click', (event)=>{
  if(event.target.id === 'plus'){
    console.log('plus');
  }else if (event.target.id === 'minus'){
    console.log('plus1');
  }else if (event.target.id === 'pause'){
    if(playing){
      button_pause.textContent = 'resume';
      playing = false;
    }else{
      button_pause.textContent = 'pause';
      playing = true;
    }
  }else if (event.target.id === 'heart'){
    console.log('plus3');
  }
});
