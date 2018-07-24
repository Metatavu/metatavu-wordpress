<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_Starter
 */

?>
<?php if(!is_page_template( 'blank-page.php' ) && !is_page_template( 'blank-page-with-container.php' )): ?>
  </div><!-- #content -->
    <footer id="colophon" class="site-footer <?php echo wp_bootstrap_starter_bg_class(); ?>" role="contentinfo">

      <div class="metatavu-section metatavu-section-footer-blue">
        <div class="icons">
          <div class="icon-wrapper">
            <div class="metatavu-white metatavu-icon"></div>
          </div>

          <div class="icon-wrapper">
            <div class="metatavu-address metatavu-icon"></div>
            <div class="icon-text">
              <p>Hallituskatu 7</p>
              <p>50100 Mikkeli</p>
            </div>
          </div>

          <div class="icon-wrapper">
            <div class="metatavu-contact-info metatavu-icon"></div>
            <div class="icon-text">
              <p>info@metatavu.fi</p>
              <p>+358 44 290 9201</p>
            </div>
          </div>
        </div>
        
        <div class="copyright-container">
          <p class="copyright">&copy; Metatavu Oy. All rights Reserved</p>
        </div>
      </div>
    </footer><!-- #colophon -->
<?php endif; ?>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>