const multiplyAll = (a, b) => {
    let result = 1;
    for(let i = a; i<=b; i++){
        result *= i;
    }

    return result;
}


console.log(multiplyAll(1,2))
console.log(multiplyAll(1,3))

// const max = (array) => {
//     let result = array[0];
//     for(let i = 0; i<array.length; i++){
//         if(result < array[i]){
//             result = array[i];
//         }
//     }

//     return result;
// }

 //console.log(max([1,2,3,4]))

// const max = (a, ...b) => {
//     let result = a;
//     for(let i = 0; i<b.length; i++){
//         if(result < b[i]){
//             result = b[i];
//         }
//     }

//     return result;
// }

// console.log(max(1,2,3,4))

// const max = (a, ...b) => {
//     let result = Array.isArray(a) ? a[0] : a ;

//     if(Array.isArray(a)){
//         for(let i = 0; i<a.length; i++){
//             if(result < a[i]){
//                 result = a[i];
//             }
//         }
//     }else {
//         for(let i = 0; i<b.length; i++){
//             if(result < b[i]){
//                 result = b[i];
//             }
//         }
//     }
    

//     return result;
// }

// console.log(`max(배열): ${max([1,2,3,4])}`)
// console.log(`max(숫자, ...): ${max(1,2,3,4)}`)
