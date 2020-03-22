IsElementInViewport = (elem,btestCenteredOnly=false,centerOffset=25)=>
{
  var elementTop = elem.offset().top;
  var elementBottom = elementTop + elem.outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
   // console.log('elementBottom: ',elementBottom,', viewPortTop: ', viewportTop);
   // console.log('elementTop: ',elementTop,', viewportBottom: ', viewportBottom);
    if(elementBottom > viewportTop && elementTop < viewportBottom)
    {
      if(btestCenteredOnly)
      {
      return (viewportTop < ((elementTop/2) + centerOffset) && viewportTop > ((elementTop/2) - centerOffset))
    }else return true;
  }else return false;
}
$(document).ready(function() {

const about_me = $(document.querySelector('div.about-me'));
console.log(about_me);
$(window).on('scroll',()=>
{
  if(IsElementInViewport(about_me,true,100))
  {
    about_me.addClass('centered');
  }else about_me.removeClass('centered');
})
});
