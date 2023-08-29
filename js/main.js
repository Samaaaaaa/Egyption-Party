// for auto complate in JQuery
/// <reference types="../@types/jquery" />


$('.openItem').on('click', function(){
    $('.side').css("left", "0");
})

$('.close').on('click', function(){
    $('.side').css("left", "-270px");
})

$('.accordi h3').on('click', function(){
    $(this).next().slideToggle();

    $(".accordi div").not($(this).next()).slideUp();
})

$('textarea').on('keyup', function(){
    let myLength = $(this).val().length
    $('#num').text(
        100 - myLength <= 0 ? "enta kda 5last l available characters It's 0" : 100 -myLength
    )
})

function getTime(){
    let currentDate = new Date()
let targetDate = new Date(2025, 2, 25, 15, 0)
let diffrent = targetDate - currentDate
let day = Math.trunc(diffrent / (1000*60*60*24))
let hours = Math.trunc( (diffrent% (1000*60*60*24)) / (1000*60*60)                 )
let minutes = Math.trunc(diffrent %(1000*60*60) / (1000*60))
let seconds = Math.trunc(diffrent %(1000*60)  / (1000))

$('p').eq(0).text(` - ${day} D`)
$('p').eq(1).text(`  ${hours} H`)
$('p').eq(2).text(` ${minutes}M`)
$('p').eq(3).text(`  ${seconds}S`)

}

setInterval(getTime, 1000)