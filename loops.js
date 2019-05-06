function makeArray() {
  const array = []
  const t = 25

  for (let i = 1; i <2; i++) {
    console.log("I am a strange loop.")
  }

  return [array, t]
}

     const [array, t] = makeArray()
      const strangeArray = forLoop(array)
      const testArray = strangeArray.slice(array.length)

      let first = "I am 1 strange loop."
      let rest = "I am 24 strange loops."