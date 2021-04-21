let albums = [{ name: "Album 1", price: 12.99, addedToCart: false },
{ name: "Album 2", price: 14.99, addedToCart: false}, { name: "Album 3", price: 9.99, addedToCart: false }, { name: "Album 4", price: 19.99, addedToCart: false }];

function updateImages () {
    var image = document.querySelectorAll("img");
    for (let i = 0; i < image.length; i++) {
    let name = image[i].id
        if(name === 'checkout') {
            continue
        }
        else{
            image[i].src = (`Images/${name}.png`)
        }
    }
}

function handleClick(event) {
    if (event.target.nodeName === 'IMG'){
        let albumName = event.target.id
        addCheckout(albumName)
    }
}

function addCheckout (albumName) {
    if (albumName === 'Album1'){
        console.log(albumName)
    }
    else if (albumName === 'Album2'){
        console.log(albumName)
    }
    else if (albumName === 'Album3'){
        console.log(albumName)
    }
    else if (albumName === 'Album4'){
        console.log(albumName)
    }
}

updateImages()
document.body.addEventListener("click", handleClick);