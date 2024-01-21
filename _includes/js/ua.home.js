
{%- assign srs = site.data.realestate -%}
{%- for sr in srs -%}
  {%- assign region = sr.url | split: '.' | slice: 2, 4 | join: '.' | replace: '.', '-' -%}
  {%- assign d = region | remove: '-' -%}
  {%- if sr.slug and sr.slug != '' -%}
    {%- if site.data[d].size > 0 -%}
    {%- else -%}
    function {{ d }}Random() {
      $.getJSON("{{ sr.url }}/region/{{ sr.slug }}/data/all.json", function(data) {
        var count = data.length; var random = []; var counter = 0; var number = 3; var div = $("#{{ region }}"); var usd = {{ site.usd }}; var eur = {{ site.eur }};
        function reAdsLocation() { return (data[i].location && data[i].location !== '') ? ', ' + data[i].location : ''; };
        function reAdsRegion() { return (data[i].region && data[i].region !== '') ? ', ' + data[i].region : ''; };
        function reAdsPrice() { if (data[i].price !== '' && data[i].price.indexOf('$') !== -1) { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price + '">' + (data[i].price.replace('$','') * usd).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } else if (data[i].price !== '' && data[i].price.indexOf('€') !== -1) { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price + '">' + (data[i].price.replace('€','') * eur).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } else if (data[i].price !== '') { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price + '">' + (data[i].price * 1).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } }
        function reAdsRent() { if (data[i].rent === '1') { return '<div class="card mb-2"><div class="card-body p-2"><strong>Здається в оренду <span class="text-lowercase">' + data[i].type +  '</span></strong> загальною площею ' + data[i].surface + '&nbsp;м<sup>2</sup>, на ' + data[i].floor + '-му поверсі за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ' за місяць, ' + reAdsTel() + '</div></div>'; } }
        function reAdsPriceSqmt() { if (data[i].price_sqmt !== '' && data[i].price_sqmt.indexOf('$') !== -1) { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price_sqmt + '">' + (data[i].price_sqmt.replace('$','') * usd).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } else if (data[i].price_sqmt !== '' && data[i].price_sqmt.indexOf('€') !== -1) { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price_sqmt + '">' + (data[i].price_sqmt.replace('€','') * eur).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } else if (data[i].price_sqmt !== '') { return '{{ site.data.lang-uk.re_cost }} <span class="mark" data-toggle="tooltip" title="' + data[i].price_sqmt + '">' + (data[i].price_sqmt * 1).toFixed(0) + '</span>&nbsp;{{ site.data.lang-uk.re_uah }}'; } }
        function reAdsTel() { return '<span class="phone" data-toggle="tooltip" title="' + data[i].seller + '"><details><summary></summary><a href="tel:+' + data[i].phone + '">+' + data[i].phone.substr(0, 2) + '&nbsp;' + data[i].phone.substr(2, 3) + '&nbsp;' + data[i].phone.substr(5, 3) + '&nbsp;' + data[i].phone.substr(8, 2) + '&nbsp;' + data[i].phone.substr(10, 2) + '</a></details></span>'; }
        function reAdsType() {
          if (count > 0) {
            if (data[i].type === '{{ site.data.lang-uk.re_apartment }}' && data[i].rent === '' && data[i].price !== '') {
              div.append('<div class="card mb-2"><div class="card-body p-2"><strong>{{ site.data.lang-uk.re_sell_apartment }}</strong> загальною площею ' + data[i].surface + '&nbsp;м<sup>2</sup>, кімнат ' + data[i].rooms + ', на ' + data[i].floor + '-му поверсі за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>');
            } else if (data[i].rent === '1' && data[i].price !== '' && data[i].price_sqmt === '' && data[i].type.indexOf('приміщення') !== -1) {
              div.append('' + reAdsRent() + '');
            } else if (data[i].rent === '1' && data[i].price !== '' && data[i].price_sqmt === '' && data[i].type === 'Магазин') {
              div.append('' + reAdsRent() + '');
            } else if (data[i].rent === '1' && data[i].price !== '' && data[i].price_sqmt === '' && data[i].type === '{{ site.data.lang-uk.re_house }}') {
              div.append('<div class="card mb-2"><div class="card-body p-2"><strong>Здається в оренду <span class="text-lowercase">' + data[i].type +  '</span></strong> загальною площею ' + data[i].surface + '&nbsp;м<sup>2</sup>, кімнат ' + data[i].rooms + ', поверхів ' + data[i].floors + ' за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ' за місяць, ' + reAdsTel() + '</div></div>');
            } else if (data[i].rent === '1' && data[i].price !== '' && data[i].price_sqmt === '') {
              div.append('<div class="card mb-2"><div class="card-body p-2"><strong>Здається в оренду <span class="text-lowercase">' + data[i].type +  '</span></strong> загальною площею ' + data[i].surface + '&nbsp;м<sup>2</sup>, кімнат ' + data[i].rooms + ', на ' + data[i].floor + '-му поверсі за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ' за місяць, ' + reAdsTel() + '</div></div>');
            } else if (data[i].rent === '1' && data[i].price === '' && data[i].price_sqmt !== '') {
              div.append('<div class="card mb-2"><div class="card-body p-2"><strong>Здається в оренду на не тривалий термін <span class="text-lowercase">' + data[i].type + '</span></strong> загальною площею ' + data[i].surface + '&nbsp;м<sup>2</sup>, кімнат ' + data[i].rooms + ', на ' + data[i].floor + '-му поверсі за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPriceSqmt() + ' за день ' + reAdsTel() + '</div></div>');
            } else if (data[i].type.indexOf('будинок') !== -1 || data[i].type.indexOf('Будинок') !== -1) {
              div.append('<div class="card mb-2"><div class="card-body p-2"><strong>{{ site.data.lang-uk.re_sell }} <span class="text-lowercase">' + data[i].type + '</span></strong> загальною площею ' + data[i].surface + '&nbsp;м<sup>2</sup>, кімнат ' + data[i].rooms + ', поверхів ' + data[i].floors + ' за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>');
            } else if (data[i].type === 'Частина будинку') {
              div.append('<div class="card mb-2"><div class="card-body p-2"><strong>Продаю частину будинку</strong> загальною площею ' + data[i].surface + '&nbsp;м<sup>2</sup>, кімнат ' + data[i].rooms + ', на ' + data[i].floor + '-му поверсі за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>');
            } else if (data[i].type === '{{ site.data.lang-uk.re_land }}') {
              div.append('<div class="card mb-2"><div class="card-body p-2"><strong>{{ site.data.lang-uk.re_sell_land }}</strong> площею ' + data[i].surface_land + '&nbsp;м<sup>2</sup> за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>');
            } else if (data[i].type === 'Гараж' || data[i].type === 'Магазин') {
              div.append('<div class="card mb-2"><div class="card-body p-2"><strong>{{ site.data.lang-uk.re_sell }} <span class="text-lowercase">' + data[i].type + '</span></strong> площею ' + data[i].surface + '&nbsp;м<sup>2</sup> за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>');
            } else if (data[i].type.indexOf('приміщення') !== -1) {
              div.append('<div class="card mb-2"><div class="card-body p-2"><strong>{{ site.data.lang-uk.re_sell }} <span class="text-lowercase">' + data[i].type + '</span></strong> загальною площею ' + data[i].surface + '&nbsp;м<sup>2</sup> на ' + data[i].floor + '-му поверсі за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>');
            } else {
              div.append('<div class="card mb-2"><div class="card-body p-2"><strong>{{ site.data.lang-uk.re_sell }} <span class="text-lowercase">' + data[i].type + '</span></strong> загальною площею ' + data[i].surface + '&nbsp;м<sup>2</sup>, кімнат ' + data[i].rooms + ', поверхів ' + data[i].floor + ' за адресою ' + data[i].address + '' + reAdsLocation() + '' + reAdsRegion() + ', ' + reAdsPrice() + ', ' + reAdsTel() + '</div></div>');
            }
          } else {
            div.append('<div class="alert alert-success mb-0" role="alert"><a href="{{ sr.url }}" class="alert-link">Додати&nbsp;оголошення</a>  про {{ sr.title | replace_first: "Н", "н" }}</div>');
          }
        }
        div.append();
        document.getElementById("{{ region }}").insertAdjacentHTML('afterend', '<div class="row"><div class="col-auto ml-auto"><a class="btn btn-primary btn-sm" href="{{ sr.url }}/region/{{ sr.slug }}/">Інші ' + count + ' пропозиції нерухомості </a></div></div>');
        while (counter < number) { var i = Math.floor(Math.random() * count); if (random.indexOf(i) == "-1") { if (counter == (number - 1)) { reAdsType(); } else { reAdsType(); } random.push(i); counter++; } }
      }).fail(function() {
        var div = $("#{{ region }}");
        div.append('<div class="alert alert-success mb-0" role="alert"><a href="{{ sr.url }}" class="alert-link">Додати&nbsp;оголошення</a>  про {{ sr.title | replace_first: "Н", "н" }}</div>');
      });
    }
    $(document).ready(function() { {{ region | remove: "-" }}Random(); });
    {%- endif -%}
  {%- else -%}
    {%- if site.data[d].size > 0 -%}
    {%- else -%}
    document.getElementById("{{ region }}").innerHTML = '<div class="alert alert-success mb-0" role="alert"><a href="{{ sr.url }}" class="alert-link">Додати&nbsp;оголошення</a> про {{ sr.title | replace_first: "Н", "н" }}</div>';
    {%- endif -%}
  {%- endif -%}
{%- endfor -%}
