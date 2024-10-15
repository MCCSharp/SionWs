<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?><?php wp_title('|'); ?></title>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
    <?php wp_head() ?>
</head>

<body>
    <header>
        <nav class="nav-menu-btn">
            <div class="sdbtn">SD</div>
            <div class="burger-menu"><img src="<?php echo get_template_directory_uri(); ?>/asset/svg/menu.svg" alt="menu"></div>
        </nav>
        <div class="menu-ctn-bckg">
            <div class="menu-ctn">
                <div class="close-ctn">
                    <img src="<?php echo get_template_directory_uri(); ?>/asset/svg/close.svg" alt="schliessen">
                </div>
                <div id="menu-grid">
                    <div class="menu_img_ctn">

                        <div class="menu-img">
                            <img src="<?php echo get_template_directory_uri(); ?>/asset/img/gros_chaton.jpg" alt="" hidden>
                        </div>

                        <div class="menu-img">
                            <img src="<?php echo get_template_directory_uri(); ?>/asset/img/homer.jpg" alt="" hidden>
                        </div>

                        <div class="menu-img">
                            <img src="<?php echo get_template_directory_uri(); ?>/asset/img/patrick.jpg" alt="" hidden>
                        </div>

                        <div class="menu-img">
                            <img src="<?php echo get_template_directory_uri(); ?>/asset/img/squirrel_dream.jpg" alt="" hidden>
                        </div>

                        <div class="menu-img">
                            <img src="<?php echo get_template_directory_uri(); ?>/asset/img/stfu_its_magic.jpg" alt="" hidden>
                        </div>

                    </div>

                    <div class="menu-link_ctn">

                        <?php
                        wp_nav_menu([
                            'theme_location' => 'header',
                            'container' => false,
                            'menu_class' => 'menu-link-list'
                        ]) ?>
                    </div>
                </div>
            </div>
        </div>
    </header>