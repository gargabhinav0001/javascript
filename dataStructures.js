// level {1/2/3}
//===========================================================

function removeEvenNumbers = ( val )=>{
    //remove even numbers form array 

    const arr= val;
					
//declare new array
    const newArray = [];

	//loop array

    for(let i=0; i<arr.length(); i++){
					
        if(arr[i]%2!=0){
        //push to new array
        newArray.push(arr[i]);
        }
	}

//return new array
return newArray;
}


/=======replce vowel => upper case

function replaceVowels( val ){
    let str = val;
    
    for(int i=0; i<str.length; i++){
        if(str[i] == 'a' || 
        str[i] == 'e' || 
        str[i] == 'i' || 
        str[i] == 'o' ||
        str[i] == 'u' ||
        ){
            str[i].toUpperCase();
        }
    }
        
    //return modified string
    return str;
}

//===========================

function findMaximum(val){
    const arr =  val;

    let max = arr[0];
    
    for(int i = 1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

