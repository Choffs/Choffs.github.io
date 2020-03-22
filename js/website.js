var websites =
[
  {
    title: 'Restaurant',
    description: '',
    url: 'https://stackblitz.com/edit/angular-fbuqwm?embed=1&file=src/app/app.component.html&hideNavigation=1&view=preview',
    technologies: ['']
  },
  {
    title: 'Banker',
    description: '',
    url: 'https://stackblitz.com/edit/angular-yudntd?ctl=1&embed=1&file=src/app/app.component.ts&hideExplorer=1&hideNavigation=1&view=preview',
    visit_url: '',
    technologies: ['']
  },
  {
    title: 'BarSite',
    description: '',
    url: 'https://stackblitz.com/edit/bar-site?embed=1&file=src/app/app.component.ts&hideNavigation=1&view=preview',
    visit_url: '',
    technologies: ['']
  }
];
const web_obj_ref = [];

const mainWebContainer = $('.web-wrapper-main');

ToggleWebObjectOpen = (web_obj,site_btn)=>
{
  if(site_btn.hasClass('collapsed'))
  {
    web_obj.addClass('open');
    web_obj.removeClass('collapsed');
  }
  else
    {
      web_obj.addClass('collapsed');
      web_obj.removeClass('open');
    }

  web_obj_ref.forEach((ref, i) => {
    // if(site_collapse.hasClass('collapsing'))
    // {
    //   return;
    // }
    if(ref != web_obj)
    {
      ref.toggleClass('hidecollapse');
    }

  });
}

CreateSiteHeader = (web_obj,site_btn,item)=>
{
  site_btn.addClass('collapsed site-btn');
  web_obj.append(site_btn);
  site_btn.attr('data-toggle','collapse');
  site_btn.attr('data-target','#' + item.title);


  site_btn.on('click',()=>
  {
    ToggleWebObjectOpen(web_obj,site_btn);
    web_obj_ref.forEach((ref, i) => {
      if(ref !== web_obj)
      {

      }
    });
  });

  var h1 = $(document.createElement('h1'));
  site_btn.append(h1);
  h1.text(item.title);

  var span = $(document.createElement('span'));
  h1.append(span);

  var icon = $(document.createElement('i'));
  icon.addClass('fas fa-chevron-up');
  span.append(icon);
}
CreateCollapseObject = (web_obj,site_collapse,item)=>
{
  site_collapse.addClass('collapse site-collapsable');
  site_collapse.attr('id',item.title);
  web_obj.append(site_collapse);
  var btn_wrapper = $(document.createElement('div'));
  btn_wrapper.addClass('button-wrapper');
  site_collapse.append(btn_wrapper);

  var visit_btn = $(document.createElement('div'));
  visit_btn.addClass('button visit-button');
  visit_btn.attr('id','view_' + item.title);
  visit_btn.append($(document.createElement('h3')).text('Visit Site'));
  visit_btn.on('click',()=>
  {
    window.open(item.url);
  });


  btn_wrapper.append([visit_btn]);
  // var iFrame = $(document.createElement('iframe'));
  // iFrame.attr('src',item.url);
  // site_collapse.append(iFrame);
}

CreateSiteObject = (item)=>
{
  var web_obj = $(document.createElement('div'));
  var site_btn = $(document.createElement('div'));
  mainWebContainer.append(web_obj);
  web_obj_ref.push(web_obj);
  web_obj.addClass('collapsed web-object');

  CreateSiteHeader(web_obj,site_btn,item)


  var site_collapse = $(document.createElement('div'));
  CreateCollapseObject(web_obj,site_collapse,item);

}


$(document).ready(()=>{


  websites.forEach((item, i) => {
    CreateSiteObject(item);

    console.log(item.title);
  });

});
