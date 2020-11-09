const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const gallery = document.getElementById("gallery");



// Without insertAdjacentHTML() method 


const galleryItems2 = images.map(el => {
    const { url, alt } = el;

    const item = document.createElement('li');
    item.classList.add("gallery-item");

    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;
    img.classList.add("item-img");

    item.appendChild(img);

    return item;
});

gallery.append(...galleryItems2);

// With insertAdjacentHTML() method 

const galleryItems = images.reverse().map(el => {
    const { url, alt } = el;
    return gallery.insertAdjacentHTML('afterbegin',
        `<li class = "gallery-item"><img src = ${url} alt="${alt}" class = 'item-img'></li>`);
});



