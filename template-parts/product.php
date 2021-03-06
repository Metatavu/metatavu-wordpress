
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
    
    <div class="jumbotron" style="height:400px;width:100%;background-position:center;background-size:cover;background-image: url(<?php echo wp_get_attachment_url( get_post_thumbnail_id($post->ID) ) ?>)">
     
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

        addSocialShareButtons(get_permalink());
      ?>

      <div class="metatavu-workers">
        <?php
          $postId = get_the_id();
          $contactPerson = get_post_meta($postId, 'contact-person', true);
          if ($contactPerson != "null" && !empty($contactPerson)) {
            ?>
              <article style="width: 250px;" id="post-<?php echo $contactPerson; ?>" class="<?php echo join(" ", get_post_class('', $contactPerson)); ?>">
              <h2 class="contact-person-title" style="margin-bottom: 15px;">Lisätietoja antaa</h2>
                
                <div class="post-thumbnail">
                  <?php echo get_the_post_thumbnail($contactPerson); ?>
                </div>
                
                <header class="entry-header">
                  <?php
                    $title = get_the_title($contactPerson);
                    echo '<h1 class="entry-title">' . $title . '</h1>';
                  ?>
                </header>
                <div class="entry-content">
                  
                  <?php
                    echo get_post_field('post_content', $contactPerson);
                  ?>
                </div>

              </article>
            <?php
          }
        ?>
      </div>
    </div><!-- .entry-content -->

  </div>

</article><!-- #post-## -->
