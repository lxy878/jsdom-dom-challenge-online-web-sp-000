let playing = true, count = 0;

const button_pause = document.getElementById('pause');
const button_plus = document.getElementById('plus');
const button_minus = document.getElementById('minus');
const button_heart = document.getElementById('heart');
const button_submit = document.getElementById('submit');

const timer = () => {
  return setInterval(function () {
    count += 1;
    counter.textContent = count;
  }, 1000);
}

interval = timer();

document.addEventListener('click', (event)=>{
  if(event.target.id === 'plus'){
    count ++;
    counter.textContent = count;
  }else if (event.target.id === 'minus'){
    count --;
    counter.textContent = count;
  }else if (event.target.id === 'pause'){
    if(playing){
      button_pause.textContent = 'resume';
      buttons_disabled();
      playing = false;
    }else{
      button_pause.textContent = 'pause';
      buttons_disabled();
      playing = false;
    }
  }else if (event.target.id === 'heart'){
    console.log('plus3');
  }
});

function buttons_disabled(){
  button_plus.disabled = playing? true : false;
  button_minus.disabled = playing? true : false;
  button_heart.disabled = playing? true : false;
  button_submit.disabled = playing? true : false;
}
