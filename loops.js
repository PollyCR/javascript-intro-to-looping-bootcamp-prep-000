function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i == 1) {
    array = [...array, 'I am ' + i + ' strange loop.']
  } else {
    array = [...array, 'I am ' + i + ' strange loops.']
  }
}
return array
}

function whileLoop(n) {
  let countdown = 10;
  while (countdown > 9)
  {
    console.log(--
    countdown);
    return("done")
  }
}