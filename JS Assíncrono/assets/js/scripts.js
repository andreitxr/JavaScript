const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
//const catImg = document.getElementById('cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.jason();

        return jason.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    //catImg src = await getCats();
    const catImg = document.getElementsById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();

//const btn = document.getElementById('change-cat');
//btn.addEventListener('click', loadImg);