function loadOneImage(src){
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = () => {
        resolve(img);
    }
    img.src = src;
    
    img.onerror = (e) => {
        reject(e)
    }
  });
}

function loadAllImages(imgList){
  return new Promise((resolve, reject) => {
    if(!imageList || !imgList.length){
      reject('imgList is not valid');
    }
    
    let promises = imgList.map(item => {
      return loadOneImage(item);
    });
    
    return Promises.all(promises)
  }); 
}
