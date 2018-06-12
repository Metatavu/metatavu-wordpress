<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

?>

<article id="product-<?php the_ID(); ?>" <?php post_class(); ?>>

  <div class="productpage-content">
    <header class="entry-header">
      <?php
        the_title( '<h1 class="entry-title">', '</h1>' );
      ?>
    </header>
    <div class="entry-content">
      <?php the_post_thumbnail(); ?>

      <?php
        the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'wp-bootstrap-starter' ) );
      ?>

      <h2 class="contact-person-title">Lisätietoja antaa</h2>
      <div class="metatavu-workers">
        <?php
          $query = new WP_Query(array('category_name' => 'contact_person', 'posts_per_page' => 1));
          $query->the_post();
          get_template_part( 'template-parts/worker', get_post_format() );
        ?>
      </div>
    </div>
  </div>

</article>



