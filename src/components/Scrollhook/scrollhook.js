import $ from "jquery";

//обработка якоря для historyscroll
$(document).ready(function(){
    $('a[href^="#history"]').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({
        scrollTop: $(target).offset().top
       }, 500);
    });
   });

//обработка якоря для contacts
$(document).ready(function(){
    $('a[href^="#contacts"]').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({
        scrollTop: $(target).offset().top
       }, 500);
    });
   });
