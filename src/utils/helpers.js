export const randomImage = (arrSize = 3) => {
  const arr = Array.from(Array(arrSize).keys())
  // return random image number
  return arr[Math.floor(Math.random() * arr.length)]
}

export const getPostsYears = (posts) => {
  const dic = {};
  const years = [];

  posts.map(post => {
    let year = post.name?.split("-")[0];
    if (dic.hasOwnProperty(year)) {
      dic[year] += dic[year]      
    } else {
      dic[year] = 1;
      years.push(year);
    }
  })
  return years;
}