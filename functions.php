<?php

  function replace_core_jquery_version() {
    wp_deregister_script( 'jquery-core' );
    wp_register_script( 'jquery-core', "https://code.jquery.com/jquery-3.1.1.min.js", array(), '3.1.1' );
    wp_deregister_script( 'jquery-migrate' );
    wp_register_script( 'jquery-migrate', "https://code.jquery.com/jquery-migrate-3.0.0.min.js", array(), '3.0.0' );
  }
  
  add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style( 'montserrat', 'https://fonts.googleapis.com/css?family=Montserrat' );
    wp_deregister_script( 'jquery-core' );
    wp_register_script( 'jquery-core', "https://code.jquery.com/jquery-3.1.1.min.js", array(), '3.1.1' );
    wp_deregister_script( 'jquery-migrate' );
    wp_register_script( 'jquery-migrate', "https://code.jquery.com/jquery-migrate-3.0.0.min.js", array(), '3.0.0' );
    wp_register_script( 'flatpickr', 'https://cdn.metatavu.io/libs/flatpickr/4.0.6/flatpickr.min.js', null, null, true );
    wp_enqueue_script('flatpickr');

    wp_register_script( 'bot-init', get_stylesheet_directory_uri() . '/inc/assets/build/bot-init.js', array() );
    wp_enqueue_script( 'bot-init' );
    $translation_array = array( 'styleSheetUri' => get_stylesheet_directory_uri() );
    wp_localize_script( 'bot-init', 'metamindwp', $translation_array );
    wp_enqueue_script('theme-script', get_stylesheet_directory_uri() . '/inc/assets/build/theme-script.js', ['bot-init']);
    wp_enqueue_script('bot-main', get_stylesheet_directory_uri() . '/inc/assets/build/bot-main.js', ['bot-init']);
    wp_enqueue_script('bot', get_stylesheet_directory_uri() . '/inc/assets/build/bot.js', ['bot-init']);
  } , 99);

  function image_tag_class($class) {
    $class .= ' wp-content-image';
    return $class;
  }
  add_filter('get_image_tag_class', 'image_tag_class' );

?>
