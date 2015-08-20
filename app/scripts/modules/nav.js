define(['jquery'], function($){
  $(document).ready( function() {

    $('[data-nav-search-btn]').on('click', function() {
      $(this).toggleClass('is-active');
      $('[data-nav-search]').toggleClass('is-active');
    });

    $('[data-nav-btn]').on('click', function() {
      $('[data-nav-overlay]').addClass('is-active');
      $('[data-nav]').addClass('is-active');
    });

    $('[data-nav-close]').on('click', function() {
      $('[data-nav-overlay]').removeClass('is-active');
      $('[data-nav]').removeClass('is-active');
    });

    $('.nav-list__item.has-subnav').on('click', function() {
      var expanded = $(this).prop('aria-expanded') === 'true';
      if (expanded) {
        $(this).prop('aria-expanded', 'false');
        $(this).find('[data-subnav-btn]').removeClass('is-open');
        $(this).find('[data-subnav]').removeClass('is-open');
      } else {
        $(this).prop('aria-expanded', 'true');
        $(this).find('[data-subnav-btn]').addClass('is-open');
        $(this).find('[data-subnav]').addClass('is-open');
      }
    });

  });
});
