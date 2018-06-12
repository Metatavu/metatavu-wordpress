<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

get_header(); ?>
<div id="primary" class="container">
  <section id="primary">
    <main id="main" class="site-main" role="main">
      <?php
        while ( have_posts() ) : the_post();
          get_template_part( 'template-parts/product', 'page' );

        endwhile; // End of the loop.
      ?>
    </main><!-- #main -->
  </section><!-- #primary -->
</div>

<div class="chatbot-container">
  <div class="bubble">
    <span class="close-bubble"><i class="fa fa-close"></i></span>
    Tule juttelemaan!
  </div>
  <div class="chatbot" style="background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/inc/assets/gfx/robot.png);"></div>
</div>

<?php get_template_part( 'template-parts/chat'); ?>

<?php
get_footer();
