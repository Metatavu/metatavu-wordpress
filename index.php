<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Bootstrap_Starter
 */

get_header(); ?>

<div id="primary" class="content-area">
  
  <div id="frontpage" class="metatavu-section metatavu-section-frontpage">
    <div class="metatavu-frontpage">
      <h1>Metatavu</h1>
      <h2>Uutta älyä ohjelmistokehitykseen</h2>
      <p>Toteutamme open source-pohjaisia ohjelmistoprojekteja sekä älykkäitä digitaalisia ratkaisuja ja palveluita yritysten todelliseen tarpeeseen.</p>
    </div>
  </div>
  
    <div id="clients" class="metatavu-section metatavu-section-projects">
      <h3 class="metatavu-projects-header"> Asiakkaat <span class="orange">/</span> Projektit </h3> 
      <div class="metatavu-projects">
        <?php
        if ( have_posts() ) :
          if ( is_home() && ! is_front_page() ) : ?>       
            <?php
            endif;
            
            global $query_string;
            query_posts ('category_name=projekti');
            
            $index = 1;
            while ( have_posts() ) : the_post();
              set_query_var( 'index', $index );
              get_template_part( 'template-parts/projects', get_post_format() );
              $index++;
            endwhile;
          ?>
          <div style="display: flex; justify-content: center; width: 100%;cursor:pointer;">
            <p class="more-projects" style="clear: both;">Lisää projekteja</p>
          </div>
          <?php
            
        else :
          get_template_part( 'template-parts/content', 'none' );
        endif; ?>
      </div>
    </div>
  
    <div id="services" class="metatavu-section metatavu-section-services">
      <h3 class="metatavu-projects-header"> Palvelut </h3>
      <div class="metatavu-services">
        <?php
          query_posts ('category_name=palvelut&post_type=post&showposts=8');
          while(have_posts()) : the_post();
            get_template_part( 'template-parts/service', get_post_format() );
          endwhile;
        ?>
      </div>
    </div>
  
    <div id="products" class="metatavu-section metatavu-section-products">
      <h3 class="metatavu-projects-header"> Tuotteet </h3>
      <div class="metatavu-products">
        <?php
          query_posts ('post_type=page&orderby=menu_order&order=ASC');

          $index = 1;
          while(have_posts()) : the_post();
            set_query_var( 'index', $index );
            get_template_part( 'template-parts/products', get_post_format() );
            $index++;
          endwhile;
        ?>

        <div style="display: flex; justify-content: center; width: 100%;cursor:pointer;" >
          <p class="more-products" style="clear: both;">Lisää tuotteita</p>
        </div>
      </div>
      
    </div>
  
    <div id="workers" class="metatavu-section metatavu-section-workers">
      <h3 class="metatavu-projects-header"> Metatavun tiimi </h3>
      <p class="workers-description">Nakkaa viestiä tai soita. Myös kahville saa tulla.</p>  
      <div class="metatavu-workers">
        <?php
        query_posts ('category_name=tyontekija');
          while(have_posts()) : the_post();
            get_template_part( 'template-parts/worker', get_post_format() );
          endwhile;
        ?>
      </div>
    </div>

    <footer id="colophon" class="site-footer <?php echo wp_bootstrap_starter_bg_class(); ?>" role="contentinfo">
      <div class="metatavu-section metatavu-section-footer-orange">
        <a href="https://www.facebook.com/metatavu/" target="_blank" class="social-icon"><i class="fa fa-linkedin-square" style="font-size:36px;color:#fff;"></i></a>
        <a href="https://www.linkedin.com/company/metatavu/" target="_blank" class="social-icon"><i class="fa fa-facebook-f" style="font-size:32px;color:#fff;"></i></a>
        <a href="https://twitter.com/MetatavuOy" target="_blank" class="social-icon"><i class="fa fa-twitter-square" style="font-size:32px;color:#fff;"></i></a>
        <a href="https://www.youtube.com/channel/UC7lY7oRjqVsAEIxsSph_ySA" target="_blank" class="social-icon"><i class="fa fa-youtube" style="font-size:32px;color:#fff;"></i></a>
        <a href="https://www.instagram.com/metatavu/?hl=en" target="_blank" class="social-icon"><i class="fa fa-instagram" style="font-size:32px;color:#fff;"></i></a>
        <a href="https://github.com/Metatavu" target="_blank" class="social-icon"><i class="fa fa-github" style="font-size:32px;color:#fff;"></i></a>
      </div>
    </footer>

    <div id="frontpage_english" class="metatavu-section metatavu-section-english">
      <div class="metatavu-english">
        <h1>Metatavu in english</h1>

        <p>
          Metatavu is a Finnish software company and we are specialized high quality software and open source
          solutions. At Metatavu we believe that software development should be fair. We provide high quality
          open source solutions and our clients get their products, on schedule and with reasonable costs.
          We would love to hear about your next project, so don't hesitate to contact us.
        </p>

        <p>info@metatavu.fi</p>
        <p>+358 44 290 9201</p>
      </div>
    </div>
  
    <?php
      get_footer();
    ?>
  
    <div class="metatavu-section metatavu-section-footer-black">
      <div class="haaja"></div>
    </div>
</div><!-- #primary -->

<?php
  $args = array( 'posts_per_page' => 1, 'name' => 'metamind-chat' );
  $metamind = get_posts( $args );

foreach ( $metamind as $post ) : setup_postdata( $post ); ?>
  <?php the_content(); ?>
<?php endforeach; ?>
