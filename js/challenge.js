var playing = true, count = 0;



// let interval = timer();

console.log(document.querySelector('#pause'));

document.addEventListener('click', (event)=>{
  if(event.target.id === 'plus'){
    count += 1;
    counter.textContent = count;
  }else if (event.target.id === 'minus'){
    console.log('plus1');
  }else if (event.target.id === 'pause'){
    if(playing){
      button_pause.textContent = 'resume';
      buttons_disable();
      playing = false;
    }else{
      button_pause.textContent = 'pause';
      playing = true;
    }
  }else if (event.target.id === 'heart'){
    console.log('plus3');
  }
});

function buttons_disable(){
  button_plus.disable = playing? true : false;
  button_minus.disable = playing? true : false;
  button_like.disable = playing? true : false;
  button_submit.disable = playing? true : false;
}
