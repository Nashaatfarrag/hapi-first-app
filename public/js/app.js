// const { data } = require("jquery");


window.onscroll = function (ev) {

    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // you're at the bottom of the page
        console.log("scrolled to the bottom of the page")



        setTimeout(addPhotos(), 5000)

    }
};





function addPhotos() {
    let sum = ""
    for (let i = 0; i < 20; i++) {
        $.ajax({
            url: "/img"
        }).done(data => {
            sum += data
        })


    }
    console.log(sum)
    $(".flex-container")[0].innerHTML += sum
}







