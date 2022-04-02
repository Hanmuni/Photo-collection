let image = ['img/skyline.jpg', 'img/streettown.jpg', 'img/streetroad.jpg', 'img/outdoor-work.jpg', 'img/working.jpg', 'img/streetfood.jpg', 'img/market.jpg', 'img/eating.jpg', 'img/boat-restaurant.jpg', 'img/duck.jpg', 'img/pho.jpg', 'img/ribs.jpg', 'img/springroll.jpg'];

function render() {

    hidePhoto();

    document.getElementById('headline').innerHTML = generateHeadLine();

    for (let i = 0; i < image.length; i++) {

        document.getElementById('photos').innerHTML += generatePhotos(i);
    }

    for (let i = 0; i < image.length; i++) {

        document.getElementById('single-photo').innerHTML = generateSinglePhoto(i);

    }

}

function generateHeadLine() {
    return `
    <div class="headline"> 
    
    <h1> Fotogalerie </h1>
    
    <h2> Vietnam 2022 </h2>
    </div>
    
    `;
}

function generatePhotos(i) {
    return `
    
    <img onclick="showPhoto(${i})" class="photos" src="${image[i]}">
    
    `;
}

function generateSinglePhoto(i) {

    return `
    
    <div class="photo-box"> 
    
    <button class="return-icon" onclick="hidePhoto()"></button>
    
    <button class="arrow-icon-left" onclick="previousPhoto(${i})"></button>
    
    <img class="single-photo" src="${image[i]}">
    
    <button class="arrow-icon-right" onclick="nextPhoto(${i})"></button>
    
    </div>
    
    `;
}

function hidePhoto() {

    document.getElementById('single-photo').classList.add('d-none');

}

function showPhoto(i) {

    document.getElementById('single-photo').classList.remove('d-none');
    document.getElementById('single-photo').innerHTML = generateSinglePhoto(i);

}

function nextPhoto(i) {
    i++;

    if (i == image.length) {
        i = 0;
    }

    showPhoto(i);
}

function previousPhoto(i) {

    i--;

    if (i < 0) {
        i = image.length - 1;
    }

    showPhoto(i);
}