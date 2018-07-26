<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

?>

<article data-index="<?php echo $index ?>" style="display:<?php echo $index > 6 ? 'none' : 'block' ?>" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <a href="<?php the_permalink(); ?>">  
    <div class="project-post-thumbnail" style="background-image: url('<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>')">
    </div>
  </a>
  
  <div class="projects-container">
    
    <a href="<?php the_permalink(); ?>">  
      <header class="project-entry-header">
        <?php
          the_title( '<h1 class="project-title">', '</h1>' );
        ?>
      </header>
    </a>
      
    <div class="project-entry-content">
      <?php
          $str = wpautop( get_the_content() );
          echo $str;
        ?>
    </div>

  </div>
</article>

