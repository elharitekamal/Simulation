//calcule prix
function calcule(){
    let tauxMensuel = (7 / 12) / 100;
    let montant= document.getElementById('montant').value;
    let dure= document.getElementById('dure').value;
    let mensualite = (montant * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -dure));
    document.getElementById('mensualite').value=mensualite.toFixed(2);
    document.getElementById('confirmPrix').style.display='block';
}


//change divs
let simulate=document.getElementById('simulate');
let search=document.getElementById('search');
let info=document.getElementById('info');

function confirmprix(){

    simulate.style.display='none';
    search.style.display='block';
    info.style.display='none';
}

document.getElementById('simulate_tab').addEventListener("click",function (){
    simulate.style.display='block';
    search.style.display='none';
    info.style.display='none';
})

document.getElementById('search_tab').addEventListener("click",function (){
    simulate.style.display='none';
    search.style.display='block';
    info.style.display='none';
})

document.getElementById('info_tab').addEventListener("click",function (){
    simulate.style.display='none';
    search.style.display='none';
    info.style.display='block';
})

$(document).ready(function () {
    $("#searchButton").on("click", function () {

        simulate.style.display='none';
        search.style.display='none';
        info.style.display='block';

        var clienId = $("#find").val();
        $.ajax({
            url: "/client-search-simulation",
            type: "GET",
            data: { find : clienId },

            success: function (data) {
                $("#fname").val(data.firstName);
                $("#lname").val(data.lastName);
                $("#birthday").val(data.birthday);
                $("#adresse").val(data.adresse);
                $("#phone").val(data.phone);
             },
            error: function (error) {
                window.location.href = "/client-create";
            }
        });


    });
});