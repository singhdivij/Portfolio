// Script for tabs in about me section
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-content');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab");
}

// Script for side menu in phone layout
var sidemenu = document.getElementById("menulist");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

//Script for form to google sheets 
const scriptURL = 'https://script.google.com/macros/s/AKfycbx2hOJ8NVbSDc2owydnraoZfLcVY1EsFPATgr_PnSPCrTrBHICETTll11RWHqGlFJYM/exec'
const form = document.forms['submit-to-google-sheet']
const submitMsg = document.getElementById("submit-msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            submitMsg.innerHTML = "Message sent successfully."
            form.reset();
            setTimeout(function(){
                submitMsg.innerHTML = "";
            }, 3000)
        })
        .catch(error => console.error('Error!', error.message))
})