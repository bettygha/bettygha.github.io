$(document).ready(function(){
    $("#view_button").click(getPicture);
});
function getPicture(){
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?",
        type: "GET",
        data: {
            api_key: "rVOKDC7cWT8yLcKp6WyuZfMpsU2KDK4Y60ESoIKp",
            date: $("#date").val()},
        dataType: "json",
        "success":showPicture,
        "error":noPicture
        });
    }
    function showPicture(data){
        $("#pic").attr("src",data.url);
        $("#titile").text(`Title is ${data.title}`);
    }
    function noPicture(error){
        alert(error.resonseText);};