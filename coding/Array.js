// Print a simple array

// 1.Using for of
const arr = [20,30,40,50]
for(let item of arr){
    console.log(item)
}

// 2.using for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}


//print FIrst largest no
function printLArgestNumber(arr){
    let larNo = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>larNo){
            larNo = arr[i]
        }
    }
    return larNo
}

console.log(printLArgestNumber([2,3,4,5,6]))


//print second largest no




//reverse a arr
function reverseArr(arr){
    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i])
    }
}
console.log(reverseArr([1,2,3,4,5,6,7]))

//print even odd number
function printEvenOdd(arr){
    let even = [];
    let odd = [];
    for (let i = 0 ; i<arr.length;i++){
        if(arr[i]%2 === 0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
    return {
        even:even,
        odd:odd
    }
}

console.log(printEvenOdd([2,3,4,5,6,7]))

//print count of even odd

function countEvenOdd(arr){
    let even = 0;
    let odd = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 ===0){
            even++
        }else{
            odd++
        }
    }
    return{
        even,odd
    }
}

console.log(countEvenOdd([1,2,3,4,5,6,7,8,9]))