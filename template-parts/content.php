
<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="projectpage-content">
    
    <div class="jumbotron">
      <?php the_post_thumbnail(); ?>
    </div>
    
    <header class="entry-header">
      <?php
      if ( is_single() ) :
        the_title( '<h1 class="entry-title">', '</h1>' );
      else :
        the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
      endif;
      ?>
    </header><!-- .entry-header -->
    
    <div class="entry-content">    
      <?php
        if ( is_single() ) :
          the_content();
        else :
          the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'wp-bootstrap-starter' ) );
        endif;
      ?>

      <h2 class="contact-person-title">Lisätietoja antaa</h2>
      <div class="metatavu-workers">
        <?php
          $query = new WP_Query(array('category_name' => 'contact_person', 'posts_per_page' => 1));
          $query->the_post();
          get_template_part( 'template-parts/worker', get_post_format() );
        ?>
      </div>
    </div><!-- .entry-content -->

  </div>

</article><!-- #post-## -->
