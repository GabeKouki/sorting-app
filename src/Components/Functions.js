
const SortingAlgorithms = { 
  // fillArray: (arr, length) => {
  //   const newArr = [...arr];
  //   for (let i = 0; i < length; i++) {
  //     const number = Math.floor(Math.random() * 100);
  //     newArr.push(number);
  //   }
  //   return newArr;
  // },
  fillArray: (arr, length) => { 
    const newArr = [...arr];
    for (let i = 0; i < length; i++) {
      newArr.push(i)
    }
    return newArr
  },
  stepOnce: (arr) => {
    const newArr = [...arr];
    console.log("receiving")
    let temp = newArr[0]
    let temp2 = newArr[1]
    newArr[0] = temp2
    newArr[1] = temp
    return newArr;
  },
  flipArray: (arr) => {
    const newArr = [...arr];
    newArr.reverse();
    return newArr;
  },
}



export default SortingAlgorithms