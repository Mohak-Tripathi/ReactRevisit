
function sum(a){
    return function(b){
        return function(c){
            return function(){
return a+ b + c
            }
        }
    }
}

let result = sum(1)(2)(3)()
console.log(result)



const arr = [1, [2, [3,4]], 5, [6]]

// const newarr= []
// function flattenArr(arr){

//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             flattenArr(arr[i])
//         }
//         else{
//             newarr.push(arr[i])
//         }
//     }
// }




console.log(arr.flat(Infinity))
