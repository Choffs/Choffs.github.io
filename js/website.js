var websites =
[
  {
    title: 'Test',
    url: 'https://stackblitz.com/edit/angular-yudntd?ctl=1&embed=1&file=src/app/app.component.ts&hideExplorer=1&hideNavigation=1&view=preview'
  }
]

$(document).ready(function() {
var mainWebContainer = $('.web-wrapper-main');

  websites.forEach((item, i) => {
    var web_obj = $(document.createElement('div'));
    mainWebContainer.append(web_obj);
    web_obj.addClass('web-object');
    var site_btn = $(document.createElement('div'));
    site_btn.addClass('site-btn');
    web_obj.append(site_btn);
    site_btn.attr('data-toggle','collapse');
    site_btn.attr('data-target','#' + item.title);
    var h1 = $(document.createElement('h1'));
    site_btn.append(h1);
    h1.text(item.title);
    var span = $(document.createElement('span'));
    h1.append(span);
    var icon = $(document.createElement('i'));
    icon.addClass('fas fa-chevron-up');
    span.append(icon);
    var site_collapse = $(document.createElement('div'))
    site_collapse.addClass('collapse site-collapsable');
    site_collapse.attr('id',item.title);
    web_obj.append(site_collapse);
    var iFrame = $(document.createElement('iframe'));
    iFrame.attr('src',item.url);
    site_collapse.append(iFrame)

    console.log(item.title);
  });




});
