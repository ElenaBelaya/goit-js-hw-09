import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector(`.form`),
  btn: document.querySelector(`button`),
  delayEl: document.querySelector(`input[name = "delay"]`),
  delayStepEl: document.querySelector(`input[name = "step"]`),
  amountEl: document.querySelector(`input[name = "amount"]`),

}


refs.btn.addEventListener(`click`, onCreatePromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } 
        reject({position, delay});      
    }, delay);  
  });
}
  
function onCreatePromises() {
  
  for(let i = 1; i <= refs.amountEl.value; i += 1){
    let step = refs.delayStepEl.value;
    
   
    let position = i;
    let delay = refs.delayEl.value * i;  
     
    createPromise(position, delay)
  .then(({position, delay}) => Notify.success(`Fulfilled promise ${position} in ${delay}ms`))
  .catch(({position, delay}) => Notify.failure(`Rejected promise ${position} in ${delay}ms`));

 
     
 
} 
}
