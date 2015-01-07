<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php wp_title( '|', true, 'right' ); ?></title>
        <meta name="description" content="">
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
        <meta name="viewport" content="width=device-width">
        
        <?php
            wp_enqueue_style('screen', get_template_directory_uri().'/css/screen.css', null, '1.0.0', 'screen, projection');
            wp_enqueue_style('print', get_template_directory_uri().'/css/print.css', null, '1.0.0', 'print');
            
            wp_enqueue_script('jquery', get_template_directory_uri()."/js/vendor/jquery-1.11.2.min.js", array('jquery'), '1.11.2', true);
            wp_enqueue_script('modernizr', get_template_directory_uri()."/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js", array('jquery'), '2.6.2', true);
            wp_enqueue_script('bxslider', get_template_directory_uri()."/js/vendor/jquery.bxslider.min.js", array('jquery'), '4.1', true);
            wp_enqueue_script('main', get_template_directory_uri()."/js/main.min.js", array('jquery'), '1.0.0', true);
        ?>

        <?php wp_head(); ?>
        
        <!--[if IE]>
            <link href="<?php echo get_template_directory_uri(); ?>/css/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <![endif]-->
    </head>
    <body <?php body_class(); ?>>

        <div class="header-container">
            <header class="wrapper clearfix">
                <h1 class="title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                <nav id="site-navigation" class="main-navigation" role="navigation">
			<h3 class="menu-toggle"><?php _e( 'Menu', 'twentytwelve' ); ?></h3>
			<a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentytwelve' ); ?>"><?php _e( 'Skip to content', 'twentytwelve' ); ?></a>
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
		</nav><!-- #site-navigation -->
            </header>
        </div>

        <div class="main-container">
            <div class="main wrapper clearfix">