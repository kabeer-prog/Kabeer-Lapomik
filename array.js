function checkYuGiOh(n){
    if(isNaN(n)){
       console.log(`invalid parameter.`) //return `invalid parameter: ${parameter}` if an invalid parameter is passed
     }
    const myArray = Array.from({length: n}, (_, m) => m + 1);// create an array and start from 1 by passing map function to Array from(), with an object with a length property:
    for (i = 0; i < myArray.length; i++) {
       if( (myArray[i] % 2 == 0 ) && (myArray[i] % 3 != 0) &&  ( myArray[i] % 5 != 0 )){// returns "yu" for  2 and multiple of 2
          console.log("yu")
       }
 
       else if( (myArray[i] % 3 == 0 ) && (myArray[i] % 2 != 0) &&  ( myArray[i] % 5 != 0 )){//returns "gi" for  3 and multiple of 3
       console.log("gi")
       }
 
      else if( (myArray[i] % 5 == 0 ) && (myArray[i] % 2 != 0) &&  ( myArray[i] % 3 != 0 )){//returns "oh" for 5 and  multiple of 5
       console.log("oh")
      }
 
      else if(  (myArray[i] % 2 == 0)  &&  (myArray[i] % 3 == 0) &&  ( myArray[i] % 5 != 0 ) ){//returns "yu-gi" for multiple of 2 and 3 e.g 6
          console.log('yu-gi')
      }  
 
      else if(  (myArray[i] % 2 == 0)  &&  (myArray[i] % 5 == 0) &&  ( myArray[i] % 3 != 0 ) ){//returns "yu-oh" for multiple of 2 and 5 e.g 10
       console.log('yu-oh')
      }
      else if(  (myArray[i] % 3 == 0)  &&  (myArray[i] % 5 == 0) &&  ( myArray[i] % 2 != 0 ) ){//returns "gi-oh" for multiple of 3 and 5 e.g 15
      console.log('gi-oh')
      }
      else if( ( myArray[i] % 2 == 0 ) && (myArray[i] % 3 == 0 ) && ( myArray[i] % 5 == 0 ) ){////returns "yu-gi-oh" for multiple of 2 , 3 and 5 e.g 30
       console.log('yu-gi-oh')
      }                             
      else if( ( myArray % 2 != 0 ) && (myArray[i] % 3 != 0 ) && ( myArray[i] % 5 != 0 ) ){////else return the number if the above conditions doesn not apply
      console.log(myArray[i])
      }
     
    }
    
 
 }
 checkYuGiOh(n)