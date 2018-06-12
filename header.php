<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php wp_head(); ?>
</head>

  <body <?php body_class(); ?>>
  <div id="page" class="site">
    <div class="header-container fixed-top">
      <nav class="navbar navbar-inverse">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">
              <img class="nav-logo-image" src="<?php bloginfo('template_url'); ?>/../metatavu-wordpress/inc/assets/gfx/metatavu-logo.png"/>
            </a>
          </div>
          
          <a href="#" class="navigation-toggle"><i class="fa fa-bars fa-lg"></i></a>


          <ul class="nav navbar-nav navbar-right closed" id="navigation">
            <?php 
              if (is_front_page()) {
                $rootClass = 'root';
                $baseUrl = '';
              } else {
                $rootClass = '';
                $baseUrl = get_home_url() . '/';
              }
            ?>
            <li>
              <a href="<?php echo $baseUrl . '#frontpage' ?>" class="custom-page-scroller <?php echo $rootClass ?>">Etusivu</a>
            </li>
            <li>
              <a href="<?php echo $baseUrl . '#clients' ?>" class="custom-page-scroller <?php echo $rootClass ?>">Asiakkaat</a>
            </li>
            <li>
              <a href="<?php echo $baseUrl . '#services' ?>" class="custom-page-scroller <?php echo $rootClass ?>">Palvelut</a>
            </li>
            <li>
              <a href="<?php echo $baseUrl . '#products' ?>" class="custom-page-scroller <?php echo $rootClass ?>">Ratkaisut</a>
            </li>
            <li><a href="#" class="custom-page-scroller <?php echo $rootClass ?>">Ajankohtaista</a></li>
            <li><a href="<?php echo $baseUrl . '#workers' ?>" class="custom-page-scroller <?php echo $rootClass ?>">Ota yhteyttä</a></li>
            <li><a href="<?php echo $baseUrl . '#frontpage_english' ?>" class="custom-page-scroller <?php echo $rootClass ?>">In english</a></li>
          </ul>
      </nav>
    </div>
    
    <?php if(!is_page_template( 'blank-page.php' ) && !is_page_template( 'blank-page-with-container.php' )): ?>
      <div id="masthead" class="site-header navbar-static-top <?php echo wp_bootstrap_starter_bg_class(); ?>" role="banner">
        <div class="container">
          
        </div>
      </div>
        
  <div id="content" class="site-content">  
    <?php endif; ?>
