window.onload = function () {

    $("#button").click(clicked);
    $("#word").on("keyup", action);

}
function action(e) {
    if ($(this).val().length > 0) {
        $("#button").prop("disabled", false);
        $("#button").css("background-color","#55cbff");
    }
    else {
        $("#button").prop("disabled", true);
        $("#button").css("background-color","#a9ddf4");
        $(".SG").empty();
    }
    e.preventDefault();

}
function clicked(e) {
    alert("clicked");
    let wordToBeSearched = $("#word").val();
    $.ajax({
        url: "http://localhost:3000/action?action=fetch",
        method: "GET",
        dataType: "json",
        "success": function (data) {
            alert("hey")
            let html = "";
            let count = 1;
            for (let i = 0; i < data.length; i++) {
                if (data[i].word.toLowerCase() == wordToBeSearched.toLowerCase()) {
                    let classOfList = "s"+String(count);
                    html += `<li class="sgLi">
                                <div class="box">
                                   <h3>${data[i].wordtype}</h3>
                                   <ul class=${classOfList}>
                                        <li>${data[i].definition}</li> 
                                     </ul>
                                </div>
                            </li>`
                    count = count + 1;
                }
                
            }
            $(".SG").html(html);
        },
        "error": function (err) {
            alert(err.responseText);
        }
    })
    e.preventDefault();


}

