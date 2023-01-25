const modalBTN = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBTN = document.querySelector('.close-btn');
const luck = document.getElementById('luck');

const luckList = [`you'll achieve your dreams.`,`you'll achieve your dreams.`,`you'll not achieve your dreams!`,`you'll achieve your dreams.`,`you'll not achieve your dreams!`,`you'll achieve your dreams.`,`I can't tell...`,`you'll achieve your dreams.`,`I can't tell...`,`you'll not achieve your dreams!`,`you'll not achieve your dreams!`,`you'll not achieve your dreams!`]

modalBTN.addEventListener('click', function(){
    index = Math.floor(Math.random() * luckList.length);
    modalOverlay.classList.add('open-modal');
    luck.textContent = luckList[index];
});

closeBTN.addEventListener('click', function(){
modalOverlay.classList.remove('open-modal');
});