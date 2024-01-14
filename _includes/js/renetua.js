
$(document).ready(function(){
$("body").tooltip({selector:'[data-toggle="tooltip"]'});
$('.nav-tabs>li>a.nav-link').on('click', function(){ $('.navbar-collapse').collapse('hide'); })
$(document).on('click', function (e) { if ($(e.target).closest(".card").length === 0) { $('.collapse').collapse('hide'); } });
$(document).ready(function(){ $('.toast').toast('show'); $('.alert').alert(); });
new TomSelect('#rehiony', {create: false,maxOptions: 10,maxItems: 1,valueField: 'url',labelField: 'title',searchField: 'title',sortField: 'title',options: [{%- for r in site.data.realestate -%}{%- if r.slug and r.slug != '' and r.url contains 'https' -%}{%- assign d = r.url | remove: 'https://www.realestate.' | remove: '.ua' -%}{%- if site.data[d] -%}{%- for o in site.data[d] -%}{url:"{{ o.url }}",title:"{{ o.title }}"},{%- endfor -%}{%- endif -%}{%- else -%}{url:"{{ r.url }}",title:"{{ r.small }}"}{%- if forloop.last -%}{%- else -%},{%- endif -%}{%- endif -%}{%- endfor -%}], render: { no_results: function(data, escape) { return '<div class="no-results">За цим запитом "' + escape(data.input) + '" нічого не знайдено</div>'; } }, onChange: function(value) { if (value !== '' ) { window.location = value; } } });
//var settings = { create: false, maxOptions: 10, maxItems: 1, sortField: 'text', render: {	no_results:function( data,escape ) { return '<div class="no-results">За цим запитом "'+escape(data.input)+'" нічого не знайдено</div>'; } }, onChange: function(value) { if (value !== '') { window.location = value; } } }; new TomSelect('#areaSelect',settings);
});
