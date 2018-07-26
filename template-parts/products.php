<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

?>

<article data-index="<?php echo $index ?>" style="display:<?php echo $index > 4 ? 'none' : 'flex' ?>" id="product-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div 
    class="product-thumbnail" 
    style="background-image: url(<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID) ) ?>)"> 
  </div>
  
  <div class="product-content">
      <header class="entry-header">
        <?php
          the_title( '<h1 class="entry-title">', '</h1>' );
        ?>
      </header>
      <div class="entry-content">

        <?php
          $str = wpautop( get_the_content() );
          echo $str;
        ?>
      </div>
    
    <div>
      <a href="<?php the_permalink(); ?>" id="product-<?php the_ID(); ?>" class="btn btn-primary">Lue lisää</a>
    </div>
  </div>

</article>


