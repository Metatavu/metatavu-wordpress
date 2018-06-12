<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WP_Bootstrap_Starter
 */

get_header(); ?>

  <section id="primary">
    <main id="main" class="site-main" role="main">

    <?php
    while ( have_posts() ) : the_post();
      get_template_part( 'template-parts/content', get_post_format() );

    endwhile; // End of the loop.
    ?>

    </main><!-- #main -->
  </section><!-- #primary -->
  
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

