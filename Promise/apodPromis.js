/*function Clicked(){
    let Date = $("#date").val();
    buttonClicked(Date).then(data=>{
        $("#pic").attr("src", data.url);
        $("#titile").text(`Title is ${data.title}`);

    }).catch(error=>console.log(error));
}

let buttonClicked = async(date) => {
    const photoResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=rVOKDC7cWT8yLcKp6WyuZfMpsU2KDK4Y60ESoIKp&date=${date}`)
    const photo = await photoResponse.json();
    return photo;
} */

function Clicked(){
    let Date = $("#date").val();
    buttonClicked(Date);

}
function buttonClicked(date){
     fetch(`https://api.nasa.gov/planetary/apod?api_key=rVOKDC7cWT8yLcKp6WyuZfMpsU2KDK4Y60ESoIKp&date=${date}`).
     then(data=>data.json()).
     then(data=>{
         $("#pic").attr("src", data.url);
        $("#titile").text(`Title is ${data.title}`);
     }).
     catch(error=>console.log(error));

    
}