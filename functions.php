<?php


function siontheme_support()
{
    add_theme_support('title-tag');
    add_theme_support('thumbnails');
    add_theme_support('menus');
    register_nav_menu('header', 'menu-link');
    register_nav_menu('main', 'main-header');
}

function siontheme_register_assets()
{
    wp_register_style('custom-styles', get_template_directory_uri() . '/css/style.css');
    wp_register_style('custom-stylesreset', get_template_directory_uri() . '/css/reset.css');
    wp_register_style('flickity', 'https://unpkg.com/flickity@2/dist/flickity.min.css');
    wp_register_script('menu', get_template_directory_uri() . '/js/menucarousel.js', array(), null, true);
    wp_register_script('myaccordion', get_template_directory_uri() . '/js/accordion.js', array(), null, true);
    wp_register_script('flickity', 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js');

    wp_enqueue_style('custom-stylesreset');
    wp_enqueue_style('custom-styles');
    wp_enqueue_style('flickity');
    wp_enqueue_script('menu');
    wp_enqueue_script('myaccordion');
    wp_enqueue_script('flickity');
}


function sionthem_theme_separator()
{
    return '|';
}

function hide_admin_bar_from_front_end()
{
    if (is_blog_admin()) {
        return true;
    }
    return false;
}

add_action('after_setup_theme', 'siontheme_support');
add_action('wp_enqueue_scripts', 'siontheme_register_assets');
add_filter('show_admin_bar', 'hide_admin_bar_from_front_end');
add_filter('document_title_separator', 'sionthem_theme_separator');
