
$(document).ready(function() {
  const main_nav = $(document.createElement('nav'));
  main_nav.addClass('navbar navbar-expand-lg navbar-dark bg-dark');
  main_nav.html(
  '<a href="index.html" class="navbar-brand">Christopher Hoffer</a><ul class="navbar-nav mr-auto"><li id="cert" class="nav-item"><i class="fas fa-certificate"></i><a href=""  class="nav-link">Certifications</a></li><li id="website" class="nav-item"><i class="fas fa-code"></i><a href="websites.html" class="nav-link">Websites</a></li></ul>');
  const body = $(document.querySelector('body'));
  body.prepend(main_nav);
});
