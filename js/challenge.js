let playing = true, count = 0;

const button_pause = document.getElementById('pause');
const button_plus = document.getElementById('plus');
const button_minus = document.getElementById('minus');
const button_likes = document.getElementById('likes');
const button_heart = document.getElementById('heart');

const timer = () => {
  return setInterval(function () {
    count += 1;
    counter.textContent = count;
  }, 1000);
}

interval = timer();

document.addEventListener('click', (event)=>{
  if(event.target.id === 'plus'){
    console.log('plus');
  }else if (event.target.id === 'minus'){
    console.log('plus1');
  }else if (event.target.id === 'pause'){
    if(playing){
      button_pause.textContent = 'resume';
      button_pause.disable;
      // buttons_disable();
      playing = false;
    }else{
      button_pause.textContent = 'pause';
      playing = false;
    }
  }else if (event.target.id === 'heart'){
    console.log('plus3');
  }
});

function buttons_disable(){
  button_pause.disable = playing? true : false;
  button_plus.disable = playing? true : false;
  button_minus.disable = playing? true : false;
  button_likes.disable = playing? true : false;
  button_heart.disable = playing? true : false;
}
