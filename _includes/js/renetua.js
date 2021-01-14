
$(document).ready(function(){
$("body").tooltip({selector:'[data-toggle="tooltip"]'});
$('.nav-tabs>li>a.nav-link').on('click', function(){ $('.navbar-collapse').collapse('hide'); })
$(document).on('click', function (e) { if ($(e.target).closest(".card").length === 0) { $('.collapse').collapse('hide'); } });
$(document).ready(function(){ $('.toast').toast('show'); $('.alert').alert(); });

var ifUa = document.querySelector('div#if-ua');
var vnUa = document.querySelector('div#vn-ua');
var isVnUa = document.getElementById('vn-ua').innerHTML === "";

console.log(isVnUa);

if (isVnUa) {
  document.getElementById('vn-ua').innerHTML = "<p>Вебсайт ще тільки будується...</p>";
}

});
