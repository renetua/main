
$(document).ready(function(){
  $("body").tooltip({selector:'[data-toggle="tooltip"]'});
  $('.nav-tabs>li>a.nav-link').on('click', function(){ $('.navbar-collapse').collapse('hide'); })
  $(document).on('click', function (e) { if ($(e.target).closest(".card").length === 0) { $('.collapse').collapse('hide'); } });
  $(document).ready(function(){ $('.toast').toast('show'); $('.alert').alert(); });
});

window.onload = function() {

  const rssifua = new RSS(
    document.querySelector("#if-ua-news"),
    "https://www.realestate.if.ua/feed.xml",
    {
      layoutTemplate: '{entries}',
      entryTemplate: '<div class="card mb-2"><div class="card-body"><p class="card-text mb-1"><span class="small text-muted">{date}</span></p><h5 class="card-title h6 mb-1"><a href="{url}">{title}</a></h5><p class="card-text mb-0">{shortBodyPlain}</div></div></div>'
    }
  );

  rssifua.render().then(() => console.log("cool"));

};

{%- comment -%}
  {%- assign srs = site.data.realestate -%}
  const RSS = require('vanilla-rss');
  {%- for sr in srs -%}
    {%- assign region = sr.url | split: "." | slice: 2, 4 | join: "." | replace: ".", "-" -%}
    {%- assign loc = region | remove: "-" -%}
    {%- if sr.slug and sr.slug != '' -%}
      const rss{{ loc }} = new RSS(
        document.querySelector("#{{ region }}-news"),
        "{{ sr.url }}/feed.xml",
        {ssl: true, host: '{{ sr.url | remove: "https://www." }}', layoutTemplate: '{entries}', entryTemplate: '<div class="card mb-2"><div class="card-body"><p class="card-text mb-1"><span class="small text-muted">{date}</span></p><h5 class="card-title h6 mb-1"><a href="{url}">{title}</a></h5><p class="card-text mb-0">{shortBodyPlain}</div></div></div>'}
      );
      rss{{ loc }}.render();
    {%- else -%}
      document.getElementById("{{ region }}-news").innerHTML = '<div class="alert alert-success mb-0" role="alert">Новин про {{ sr.title | replace_first: 'Н', 'н' }} ще немає...</div>';
    {%- endif -%}
  {%- endfor -%}
{%- endcomment -%}
