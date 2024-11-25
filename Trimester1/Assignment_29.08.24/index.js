var buttonEl = document.getElementById("read-more-btn") 
var moreText = document.getElementById("more-text")

function readMore(){
    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        buttonEl.textContent = 'Read Less';
    } else {
        moreText.classList.add('hidden');
        buttonEl.textContent = 'Read More';
    }
}