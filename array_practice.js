// 1. Write a JS code to print numbers from 1 to 10

/* let arr =()=>{
    for(i=1; i<=11; i++){
        console.log('this is the value ' + i);
    }
}
arr();
 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Write a JS code to print a 2D array

/* let arr = [[1, 2],
           [3, 4],
           [5, 6]];

           function myFunction(arr){

            for(i = 0; i<arr.length; i++)//output will be [1, 2], [3, 4], [5, 6];
            {
                
                for(j=0; j<arr[2].length; j++)
                {
                    console.log(arr[i][j])  //output will be 
                }
                
            }

           }
           myFunction(arr); */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3. Write a JS code to print Even numbers in given array

/* var arr = [13,23,12,45,22,48,66,100];

function myFunction(arr){

    for(i=0; i<arr.length; i++){
        if(arr[i]%2 != 0){
            console.log('the odd numbers are '+ arr[i]);
        }
    }

}
myFunction(arr); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//4. Write a JS code to delete all occurrence of element in given array







// 6. Write a JS code to find the power of a number using for loop






//removing duplicates

fruits = ['a','a','b','b','c','c','c'];

let emp=[];
for(f=0; f<fruits.length; f++){
    if(emp.includes(fruits[f]) == false)
    emp.push(fruits[f]);
}
console.log(emp);
 
