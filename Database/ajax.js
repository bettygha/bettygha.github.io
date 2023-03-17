window.onload=function(){
   
   $("#result").click(clicked);
   $("#word").on("keyup",action);

}
function action(e){
    if($(this).val().length >0){
        $("#result").prop("disabled",false);
    }
    else{
        $("#result").prop("disabled",true);
    }
    e.preventDefault();
    
}
function clicked(e){
    alert("clicked");
    let wordToBeSearched = $("#word").val();
    $.ajax({
        url:"http://localhost:3000/action?action=fetch",
        method:"GET",
        dataType:"json",
        "success":function(data){
            alert("hey")
            let html ="";
            for(let i = 0 ; i <data.length ;i++){
                if(data[i].word.toLowerCase() == wordToBeSearched.toLowerCase()){
                    html +=`<dt>${data[i].wordtype}</dt><dd>${data[i].definition}</dd>`
            }}
            $("#result2").html(html); 
        },
        "error":function(err){
            alert(err.responseText);
        }
    })
    e.preventDefault();
    
    
}

