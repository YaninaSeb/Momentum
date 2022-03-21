async function getLinkToImage() {  
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=vPyliAhk71SVKwXHD9LsEMPdZcnTh0OEjqej-urq9ng';
    const res = await fetch(url);
    const data = await res.json(); 

    //console.log(data.urls.regular)
  }
  //getLinkToImage()

  async function getLinkToImageFlickr() {  
    const random = Math.floor(Math.random()*99);
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fa09194f6cc2128894b4dbd907d4ffe4&tags=nature&extras=url_l&format=json&nojsoncallback=1';
    const res = await fetch(url);
    const data = await res.json(); 

    console.log(data.photos.photo[random].url_l)
  }
  //getLinkToImageFlickr()

