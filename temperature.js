function convertFahrToCelsius(fahrenheit){
  if(typeof fahrenheit === "number" || !isNaN(fahrenheit) === true){//check 'typeof' of fahrenheit then combine with "not true function isNaN" 
      Celsius = (fahrenheit - 32) * 5/9;//calculate the celsisus value
      Celsius = Celsius.toFixed(4)
      console.log(Celsius);
  }else{
      console.log(`${fahrenheit} is not a valid number but a/an ${typeof(fahrenheit)}.`)
  }
}
convertFahrToCelsius(fahrenheit)
