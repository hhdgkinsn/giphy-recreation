
function getData(d) {
    var imgWrapper = $(".img-wrapper");
    imgWrapper.empty();
    for(var i=0; i<d.data.length; i++) {
        let gif = d.data[i].images.downsized_large.url;
        let alt = d.data[i].title;
        let img = `<img class="gif" src="${gif}" alt="${alt}" width="250px">`;
        imgWrapper.append(img);
    }

 }

$(function() {

    let input = $(".input-wrapper > form input:nth-child(1)");
    let form = $(".input-wrapper > form");

    const apiKey = "eaZVFJJ4z2644PFaNnUoN2W6gQOypjFW";
    let url;

    function ajax() {
        var search = input.val();
        console.log(search);
        url = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + apiKey;

        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            contentType: "application/json",
            success: getData,
            error: _ => console.log("error")
        });
    }

    form.on("submit", function(e) {
        e.preventDefault();
        if(input.val() !== "") {
            ajax();
        }
    });
    
});