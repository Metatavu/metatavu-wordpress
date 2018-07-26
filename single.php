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

<?php get_template_part( 'template-parts/chat'); ?>

<?php
get_footer();

