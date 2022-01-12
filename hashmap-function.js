const data = 'Factorial';


function getLucasSequence (lk){
  //TO DO compute Lucas sequence
  return lk;
}

const getFibonacciSequence = (lk) =>{
    let sequence = [0,1];
    let last = 0;
    let current = 1;
    if(lk <= 0)
      throw "The value must be a number greater than zero"
    
    for(i = 3; i <= lk; i++){
      let copyOfCurrent = current;
      current = current+last;
      sequence.push(current);
      last = copyOfCurrent;
    }

    return sequence;
}


const computeFactorial = (lk) => {
  let fact = 1;

  for(let i = 1; i <= lk; i++){
    fact = fact * i;
  }

  return fact;
}


const getFactorial = (lk) =>{
 
  let factorial  = lk >= 0 ? computeFactorial(lk): "No se puede calcular el factorial";
  
  return factorial;
}

const DIFERENT_METHODS = {
  'LucasSequence': (lk) => getFibonacciSequence(lk),
  'FibonacciSequence': (lk) => getLucasSequence(lk),
  'Factorial': (lk) => getFactorial(lk)
}
    
const DEFAULT = "error el caso no existe";
    
const result = DIFERENT_METHODS[data] ? (DIFERENT_METHODS[data](15)) : DEFAULT
    
console.log(result)