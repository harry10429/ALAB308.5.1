
let arrayNumber =[1,3,5,9,10];

function Sum(arrayNumber){
    let sum=0;
    for(let i=0;i<arrayNumber.length;i++){
    sum+=arrayNumber[i];
    
}  
    return sum;
}

console.log(Sum(arrayNumber));


function Average(arrayNumber){
   return Sum(arrayNumber)*1.0/arrayNumber.length;

}

console.log(Average(arrayNumber));

let strArray= ['Morning','evening','afternoon','do']

function strLong(strArray){
    let indexLong =0;
    for(let i =1; i<strArray.length;i++){
    if(strArray[i].length>strArray[indexLong].length){
        indexLong =i;
        console.log(indexLong);
    }
    
    }
    return strArray[indexLong];
}

console.log(strLong(strArray));


function strlonger(strArray,leastLength){
    let arrayNew =[];
    let count=0;
    for(let i=0;i<strArray.length;i++){
       if(strArray[i].length>leastLength){
        arrayNew[count]=strArray[i];
        count++;
       }
    }
    return arrayNew;
}

console.log(strlonger(strArray,3));


function Count(n){
    if(n>0){
    console.log(n);
    Count(n-1);
    }

}

Count(10);



let DATA = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

function sortByAge(){
    //This function sorts the age from the smaller number to higher number.
    //The parameter 'a' will have the age key value of the first object in the array and will compare it to the second one.
    //Then the second one will become a which will be compared to the third. and So on.
    return DATA.sort((a,b) => a.age - b.age);
    //DATA.sort(function(a, b){return a.age - b.age});
};



function filterArrayByAge(){
    //putting a plus infront of object converts string value to integer (i.e "40" = 40).
    return DATA.filter((object) => +object.age < 50);
}
console.log(filterArrayByAge());

function change(){
    return DATA.map((object) => {
        //Make a new key value with a key being "Job" and value being object.occupation.
        object["Job"] = object.occupation;
        //Then we will delete exsisting occupation key value.
        delete object.occupation;
        object.age = ((+object.age)+1).toString();
        return object;
    })
}

console.log(change());



 
    
    const SumAge= DATA.reduce((accumulator,currentValue)=> {return accumulator + +currentValue.age;},0);

    
   console.log("Sum of age in array object is: " + SumAge);
   console.log("Average is: " + SumAge/DATA.length);
   
let ObjectTry = {age:3};
let objectEmpty={};


function ObjectIncrement(ObjectName,increment){
    if(ObjectName.age==undefined){
        ObjectName['age'] =0;
    }
      return ObjectName.age+=increment;

}


console.log(`${ObjectIncrement(ObjectTry,5)}`);
console.log(ObjectTry);


function ObjectIncrCopy(ObjectName,increment){
    if(ObjectName.age==undefined){
        ObjectName['age'] =0;
    }
    let objectTemp = {...ObjectName};
    objectTemp.age += increment;
    return objectTemp;
}

console.log(ObjectIncrCopy(objectEmpty,5));
console.log(objectEmpty);