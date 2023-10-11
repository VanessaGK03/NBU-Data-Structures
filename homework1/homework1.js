function sortingMethods(){
    let numberOfRandomNumbers = 10000;
    let randomNumbers = [];

    for (let i = 0; i < numberOfRandomNumbers; i++) {
        let randomInteger = Math.floor(Math.random() * numberOfRandomNumbers ); // Adjust the range as needed
        randomNumbers.push(randomInteger);
      }

    //selectionSort(randomNumbers);
    //bubbleSort(randomNumbers);
    //insertionSort(randomNumbers);
    let start, end;

    start = Date.now();
    insertionSort(randomNumbers.slice());
    end = Date.now();
    console.log("insertionSort execution time:", end - start, "ms");
  
    start = Date.now();
    bubbleSort(randomNumbers.slice());
    end = Date.now();
    console.log("bubbleSort execution time:", end - start, "ms");
  
    start = Date.now();
    selectionSort(randomNumbers.slice());
    end = Date.now();
    console.log("selectionSort execution time:", end - start, "ms")

}

function insertionSort(array){
    let buff;

    for(let i = 1; i < array.length; i++){
        buff = array[i];
        let j = i - 1;
        while(buff < array[j] && j >= 0){
            array[j + 1] = array[j];
            --j;
        }
        array[j + 1] = buff;
    }

    return array;
}

function bubbleSort(array){
    let invertion = true;
    let temp;

    while(invertion == true){
        invertion = false;
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < array.length - i - 1; j++){
                if(array[j + 1] < array[j]){
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    invertion = true;
                }
            }
        }
    }
    return array;
}


function selectionSort(array){
    let min = 0;
    let flag = 0;

    for(let i = 0; i < array.length; i++){
        min = array[i];
        flag = i;
        let counter = 0;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < min){
                min = array[j];
                flag = j;
                counter++;
            }
        }
        array[flag] = array[i];
        array[i] = min;
    }
    return array.join(' ');
}

sortingMethods();