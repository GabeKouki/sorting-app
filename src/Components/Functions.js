
const SortingAlgorithms = { 
  fillArray: (arr, length) => {
    const newArr = [...arr];
    for (let i = 0; i < length; i++) {
      const number = Math.floor(Math.random() * 100);
      newArr.push(number);
    }
    return newArr;
  }  
}



export default SortingAlgorithms