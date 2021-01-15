
$(document).ready(function(){
$("body").tooltip({selector:'[data-toggle="tooltip"]'});
$('.nav-tabs>li>a.nav-link').on('click', function(){ $('.navbar-collapse').collapse('hide'); })
$(document).on('click', function (e) { if ($(e.target).closest(".card").length === 0) { $('.collapse').collapse('hide'); } });
$(document).ready(function(){ $('.toast').toast('show'); $('.alert').alert(); });

const isifua = document.getElementById("if-ua").children;
const leifua = isifua.length;
console.log(leifua);

// if (isifua) {
//   document.getElementById("if-ua").innerHTML = "<p>Вебсайт if-ua тільки будується...</p>";
//   document.getElementsByClassName("if-ua-btn")[0].className = "d-none";
// }

const isvnua = document.getElementById("vn-ua").children;
const levnua = isifua.length;
console.log(levnua);
// if (isvnua) {
//   document.getElementById("vn-ua").innerHTML = "<p>Вебсайт vn-ua тільки будується...</p>";
//   document.getElementsByClassName("vn-ua-btn")[0].className = "d-none";
// }

});

{%- comment -%}

{%- assign srs = site.data.realestate -%}
{%- for sr in srs -%}
  {%- assign region = sr.url | split: "." | slice: 2, 4 | join: "." | replace: ".", "-" -%}
  {%- if sr.url != site.url -%}
    var is{{ region | remove: "-" }} = document.getElementById("{{ region }}").innerHTML === "";
    console.log(is{{ region | remove: "-" }});
    if (is{{ region | remove: "-" }} === true) {
      document.getElementById("{{ region }}").innerHTML = "<p>Вебсайт {{ sr.url }} тільки будується...</p>";
      document.getElementsByClassName("{{ region }}-btn")[0].className = "d-none";
    }
  {%- endif -%}
{%- endfor -%}

{%- endcomment -%}
