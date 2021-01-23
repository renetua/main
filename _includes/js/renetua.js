
$(document).ready(function(){
  $("body").tooltip({selector:'[data-toggle="tooltip"]'});
  $('.nav-tabs>li>a.nav-link').on('click', function(){ $('.navbar-collapse').collapse('hide'); })
  $(document).on('click', function (e) { if ($(e.target).closest(".card").length === 0) { $('.collapse').collapse('hide'); } });
  $(document).ready(function(){ $('.toast').toast('show'); $('.alert').alert(); });

  {%- assign srs = site.data.realestate -%}
  const RSS = require('vanilla-rss');
  {%- for sr in srs -%}
    {%- assign region = sr.url | split: "." | slice: 2, 4 | join: "." | replace: ".", "-" -%}
    {%- assign loc = region | remove: "-" -%}
    {%- if sr.slug and sr.slug != '' -%}
      const rss{{ loc }} = new RSS(
        document.querySelector("#{{ region }}-news"),
        "{{ sr.title }}/feed.xml",
        {}
      );
      rss{{ loc }}.render();
    {%- else -%}
      document.getElementById("{{ region }}-news").innerHTML = '<div class="alert alert-success mb-0" role="alert">Новин про {{ sr.title | replace_first: 'Н', 'н' }} ще немає...</div>';
    {%- endif -%}
  {%- endfor -%}

});
