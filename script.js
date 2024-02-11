let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
const search = document.querySelector('.js-search-button');

let countItem = items.length;
let itemActive = 0;
//Next Button
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive>=countItem){
        itemActive = 0;
    }
    showSlider();
}
//Previous Button
prev.onclick = function() {
        itemActive = itemActive -1;
    if(itemActive < 0) {
        itemActive = countItem -1;
    }  
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(()=> {
    next.click();
},5000);

function showSlider() {
    //remove its old active
   let itemActiveOld = document.querySelector('.slider .list .item.active');
   itemActiveOld.classList.remove('active');
   let thumbnailActiveOld = document.querySelector('.thumbnail .item.active ');
   thumbnailActiveOld.classList.remove('active');
   items[itemActive].classList.add('active') ;
   thumbnails[itemActive].classList.add('active');

   //clear auto time run slider
   clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {
    next.click();
},5000);

}
//change display to click on thumbnail
thumbnails.forEach((thumbnail , index)=> {
    thumbnail.addEventListener('click' , ()=> {
      itemActive = index; 
      showSlider(); 
    });
});

search.addEventListener('click' , ()=> {
  search.classList.add('search-button');
});

