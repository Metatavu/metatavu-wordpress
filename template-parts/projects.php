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
  
  <div class="project-post-thumbnail">
    <?php the_post_thumbnail(); ?>
  </div>
  
  <div class="projects-container">
    
    <a href="<?php the_permalink(); ?>">
      
    <header class="project-entry-header">
      <?php
        the_title( '<h1 class="project-title">', '</h1>' );
      ?>
    </header>
      
    <div class="project-entry-content">
      <?php
          $str = wpautop( get_the_content() );
          echo $str;
        ?>
    </div>
      
  </a>
  </div>
</article>

