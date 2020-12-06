function getSearchParams () {
  let obj = {}
  if (!location.search) return obj
  let searchStrArr = location.search.replace('?','').split('&')
  searchStrArr.forEach(r =>{
    let arr = r.split('=')
    obj[arr[0]] = arr[1]
  })
  return obj
}