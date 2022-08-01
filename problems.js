let arr = [5, 6, 1, 8, 2, 7, 10, 3, 15, 13, 12];

for(let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1 ; i++) {
        if (arr[i] > arr[i+1]) {
            let a = arr[i];
            arr[i] = arr [i+1] ;
            arr[i+1] = a;
        };
    };
};
 
console.log(arr);