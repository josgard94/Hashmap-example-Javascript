const data = 'LucasSequence';

function getLucasSequence (lk){
  
  const params = {
    type: 'Lucas',
    lk: lk
  };
  if(lk <= 0)
    throw "The value must be a number greater than zero";   
  sequence = computeSequence(params);
  
  return sequence;
}

const getFibonacciSequence = (lk) =>{
  const params = {
   type:'Fibonacci',
    lk: lk
  };
  if(lk <= 0)
    throw "The value must be a number greater than zero";   
  let sequence = computeSequence(params);
  return sequence;
}


const computeSequence = ({type, lk}) => {
  
  const TYPE = {
    'Lucas' : [2, 1],
    'Fibonacci':[0, 1]
  };

  let sequence = TYPE[type];
  let last = sequence[0];
  let current = sequence[1];

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
  let factorial  = lk >= 0 ? computeFactorial(lk): "Unable to calculate factorial";
  return factorial;
}

const DIFERENT_METHODS = {
  'FibonacciSequence': (lk) => getFibonacciSequence(lk),
  'LucasSequence': (lk) => getLucasSequence(lk),
  'Factorial': (lk) => getFactorial(lk)
}
    
const DEFAULT = "Unsupported case";
    
const result = DIFERENT_METHODS[data] ? (DIFERENT_METHODS[data](10)) : DEFAULT
    
console.log(result)