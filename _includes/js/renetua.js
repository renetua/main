
$(document).ready(function(){
$("body").tooltip({selector:'[data-toggle="tooltip"]'});
$('.nav-tabs>li>a.nav-link').on('click', function(){ $('.navbar-collapse').collapse('hide'); })
$(document).on('click', function (e) { if ($(e.target).closest(".card").length === 0) { $('.collapse').collapse('hide'); } });
$(document).ready(function(){ $('.toast').toast('show'); $('.alert').alert(); });
var isVnUa = document.getElementById('vn-ua').innerHTML === "";
if (isVnUa) {
  document.getElementById('vn-ua').innerHTML = "<p>Вебсайт www.realestate.vn.ua ще тільки будується...</p>";
  document.getElementsByClassName('vn-ua-btn').classList.add("d-none");
}
});
