let arr = [2, 6, 3, 7, 0, 15, 17] ;
let arr1 =[];
let arr2 = [];
let j = 0;
let k = 0;
for (let i = 0; i < arr.length; i++) {
    if ( ((arr[i] % 2 == 0 && arr[i] != 2) || (arr[i] % 3 == 0 && arr[i] != 3)) && arr[i] != 0) {
        arr1[j] = arr[i];
        j++;
    } else if (arr[i] != 0){
        arr2[k] = arr[i];
        k++;
    }
};
console.log(arr1);
console.log(arr2);