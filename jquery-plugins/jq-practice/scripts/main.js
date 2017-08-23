$(function(){

/* Add hinge to Add Class Button */
  var $addClassButton = $('#add-class-control');
  var $classer = $('#classer');

  $addClassButton.on('click.addClass', function(){
    $classer.addClass('hinge');
    return false;

  });

/* Remove hinge using Remove class button */
  var $removeClassButton = $('#remove-class-control');
  var $classer = $('#classer');

  $removeClassButton.on('click.removeClass', function(){
    $classer.removeClass('hinge');
    return false;

  });

/* Toggle Class button */
  var $classToggleButton = $('#class-toggle-control');
  var $classer = $('#classer');

  $classToggleButton.on('click.toggleClass', function(){
    $classer.toggleClass('hinge');
    return false;

  });


/* Add hide control */
  var $hideControlButton = $('#hide-control');
  var $hider = $('#hider');

  $hideControlButton.on('click.hide', function(){
    $hider.hide();
    return false;

  });

/* Show Control */
  var $showControlButton = $('#show-control');
  var $hider = $('#hider');

  $showControlButton.on('click.show', function(){
    $hider.show();
    return false;

  });

  /* Toggle Control */
    var $hideToggleButton = $('#hide-toggle-control');
    var $hider = $('#hider');

    $hideToggleButton.on('click.toggle', function(){
      $hider.toggle();
      return false;

    });

/* Fade Out Control */
    var $fadeOutButton = $('#fade-out-control');
    var $fader = $('#fader');

    $fadeOutButton.on('click.fadeOut', function(){
      $fader.fadeOut();
      return false;
    });

/* Fade In Control */
    var $fadeInButton = $('#fade-in-control');
    var $fader = $('#fader');

    $fadeInButton.on('click.fadeIn', function(){
      $fader.fadeIn();
      return false;
    });

/* Toggle Fade Control */
    var $fadeToggleButton = $('#fade-toggle-control');
    var $fader = $('#fader');

    $fadeToggleButton.on('click.fadeToggle', function(){
      $fader.fadeToggle();
      return false;
    });


/* Slide Up Control */
    var $slideUpButton = $('#slide-up-control');
    var $slider = $('#slider');

    $slideUpButton.on('click.slideUp', function(){
      $slider.slideUp();
      return false;
    });


/* Slide Down Control */
    var $slideDownButton = $('#slide-down-control');
    var $slider = $('#slider');

    $slideDownButton.on('click.slideDown', function(){
      $slider.slideDown();
      return false;
    });

/* Toggle Slide Control */
    var $slideToggleButton = $('#slide-toggle-control');
    var $slider = $('#slider');

    $slideToggleButton.on('click.slideToggle', function(){
      $slider.slideToggle();
      return false;
    });

});
