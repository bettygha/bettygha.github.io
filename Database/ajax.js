window.onload=function(){
  $("#result").click(clicked);
}
function clicked(){
    $.ajax({
        url:"http://localhost:3000/action?action=fetch",
        method:"GET",
        dataType:"json",
        "success":function(data){
            alert("hey")
            $("#result2").text(data[0].first_name); 
        },
        "error":function(err){
            alert(err.responseText);
        }
    })
    
    
}

