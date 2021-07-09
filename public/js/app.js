// const { data } = require("jquery");


window.onscroll = function (ev) {

    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // you're at the bottom of the page
        console.log("scrolled to the bottom of the page")



        addPhotos()

    }
};



function myGreatFunction(val) {
    console.log(val)
    $("#img-details").remove()
    $.post("/template/photo-details",
        {
            name: "Donald Duck",
            city: "Duckburg"
        },
        function (data, status) {
            $(".flex-container")[0].innerHTML = data + $(".flex-container")[0].innerHTML
            // Initiate zoom effect:
imageZoom("myimage", "myresult");
        });
    // $.ajax({
    //     url: ""
    // }).done(data => {

    //     $(".flex-container")[0].innerHTML += data
    //     // $(".loader").remove()
    // })
}

function addPhotos() {
    // $(".flex-container")[0].innerHTML += `<div class="loader"></div>`
    setTimeout(() => {

        $.ajax({
            url: "/img?amount=24"
        }).done(data => {

            $(".flex-container")[0].innerHTML += data
            // $(".loader").remove()
        })
    }, 2000)
}









