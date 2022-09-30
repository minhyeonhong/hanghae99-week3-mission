// //-------1번 문제------
// function solution(arr1){
// 	let answer=0;
//     //비교할 번호 배열
//     let numbers = [0,1,2,3,4,5,6,7,8,9];
//     //없는 번호 넣을 배열
//     let noneNums = [];

//     //없는 번호 찾아서 없는 번호 배열에 넣기
//     numbers.forEach((number) => {
//         if(!arr1.includes(number)){
//             noneNums.push(number);
//         }
//     });

//     //없는번호 배열을 돌며 더해주기
//     for(let i=noneNums[0]; i<=noneNums[1]; i++){
//         answer += i; 
//     }

// 	return answer;
// }
// let arr1=[1,3,5,9,2,4,8,0];
// console.log(solution(arr1))

//-------2번 문제------
function solution(s){
	let answer="";
    //문자열 배열로
    let strArr = [...s];
    //공백 제거 문자열
    let trimS = s.replace(/ /g,'');
    //공백 제거 문자열 배열로
    let trimSArr = [...trimS];
    
    //짝수는 대문자 홀수는 소문자
    for(let i = 0; i<trimSArr.length; i++){
        if( i % 2 == 0) {
            trimSArr[i] = trimSArr[i].toUpperCase();
        }else {
            trimSArr[i] = trimSArr[i].toLowerCase();
        }
    }

    //공백 위치
    strArr.forEach((val,i,arr) => {
        if(val === ' ') {
            trimSArr.splice(i,0,' ');
        }
    });

    //문자열로 바꿔서 리턴
	return trimSArr.join('');
}
let s="hang hae ninety nine";
console.log(solution(s))


//-------3번 문제------
// function solution(arr, n){  
//     //중복요소 찾기
//     let duplicateArr = arr.filter((element, index) => {
//         return arr.indexOf(element) !== index;
//     });
//     //중복요소 중복 제거
//     let noneDuplicateArr = duplicateArr.filter((element, index) => {
//         return duplicateArr.indexOf(element) === index;
//     });

//     let resultArr = [];
    
//     for(let i=0; i<noneDuplicateArr.length; i++){
//         arr.forEach((val,j,arr) => {
//             if(noneDuplicateArr[i] != val){
//                 resultArr.push(val);
//             }
//         });
//     }

//     return resultArr.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }
// let arr=["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
// let n=2;
// console.log(solution(arr, n))


