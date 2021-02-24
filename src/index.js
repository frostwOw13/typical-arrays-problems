
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) {
    let min = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) 
        min = array[i];
    }
    return min;
  } else {
    return 0;
  }
  
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) 
        max = array[i];
    }
    return max;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    const avg = sum / array.length;
    return avg;
  } else {
    return 0;
  }
}
