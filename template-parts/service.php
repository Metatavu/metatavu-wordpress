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
  
  <?php $postId = get_the_ID(); ?>
  <a href="<?php echo get_permalink($postId); ?>">
    <div class="post-thumbnail">
        <?php the_post_thumbnail(); ?>
    </div>
  </a>
  
  <header class="entry-header">
    <a href="<?php echo get_permalink($postId); ?>">
      <?php
        the_title( '<h1 class="entry-title">', '</h1>' );
      ?>
    </a>
  </header>
  <div class="entry-content">
    
    <?php
      the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'wp-bootstrap-starter' ) );
    ?>
  </div>

</article>



