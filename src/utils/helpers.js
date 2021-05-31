export const randomImage = (arrSize = 3) => {
  const arr = Array.from(Array(arrSize).keys())
  // return random image number
  return arr[Math.floor(Math.random() * arr.length)]
}