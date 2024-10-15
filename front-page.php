<?php get_header() ?>

<main>
    <section class="project-menu">
        <header>
            <nav>
                <?php
                wp_nav_menu([
                    'theme_location' => 'main',
                    'container' => false,
                    'menu_class' => 'main-menu-link-list'
                ]) ?>
            </nav>
            <h2>NEUER LOOK ZUM SIEBZIGTEN</h2>
        </header>
        <div class="accordion">
            <header>
                <h3>Noch mehr Infos gefällig?</h3>
            </header>
            <div class="accordion-body">
                <div class="accordion-grid">

                    <article class="accordion-grid-cell cell1">
                        <header>
                            <h3><?php the_field('info_field_title_1'); ?></h3>
                        </header>
                        <p><?php the_field('info_field_text_1'); ?></p>
                    </article>

                    <article class="accordion-grid-cell cell2">
                        <header>
                            <h3><?php the_field('info_field_title_2'); ?></h3>
                        </header>
                        <p><?php the_field('info_field_text_2'); ?></p>
                    </article>

                    <article class="accordion-grid-cell cell3">
                        <header>
                            <h3><?php the_field('info_field_title_3'); ?></h3>
                        </header>
                        <p><?php the_field('info_field_text_3'); ?></p>
                    </article>

                </div>
            </div>
        </div>
    </section>

    <div class="spacing"></div>
    <section class="corpo-design">
        <header class="big-title">
            CORPORATE <br> DESIGN
        </header>
        <div class="spacing"></div>
        <div class="card-wrapper">
            <div class="card card1">
                <img src="<?php echo get_template_directory_uri(); ?>/asset/svg/r-klaser.svg">
            </div>
            <div class="card card2">
                <img src="<?php echo get_template_directory_uri(); ?>/asset\img\w-klaser.png">
            </div>
        </div>

        <div class="spacing"></div>
        <div class="bnr-wrapper">
            <div class="bnr bnr1">
            </div>
        </div>

        <div class="spacing"></div>
        <div class="card-wrapper">
            <div class="card card3">
                <img src="<?php echo get_template_directory_uri(); ?>/asset/img/70_Jahrfeier_Klaeser-342.png">
            </div>
            <div class="card card4">
                <img src="<?php echo get_template_directory_uri(); ?>/asset/img/70_Jahrfeier_Klaeser-340.png">
            </div>
        </div>
        <div class="spacing"></div>
        <div class="card-wrapper">
            <div class="card card5">
                <img src="<?php echo get_template_directory_uri(); ?>/asset/svg/card-headline.svg" alt="">
            </div>
            <div class="card card6">
                <img src="<?php echo get_template_directory_uri(); ?>/asset/img/r2-card.jpg" alt="">
            </div>
        </div>
    </section>

    <div class="spacing"></div>
    <section class="website">
        <div class="big-title">
            WEBSITE
        </div>
        <div class="bnr-wrapper">
            <div class="bnr bnr2">
            </div>
        </div>
        <div class="spacing"></div>
        <div class="card-wrapper">
            <div class="card card7">
                <img src="<?php echo get_template_directory_uri(); ?>/asset/img/b-card.jpg">
            </div>
            <div class="card card8">
                <img src="<?php echo get_template_directory_uri(); ?>/asset/img/b-card.jpg">
            </div>
        </div>
    </section>

    <div class="spacing"></div>
    <section class="print">
        <div class="big-title">
            PRINT
        </div>
        <div class="bnr-wrapper">
            <div class="bnr bnr3">
            </div>
        </div>
        <div class="spacing"></div>
        <div class="card-wrapper">
            <div class="card card10">
                <img src="<?php echo get_template_directory_uri(); ?>/asset/img/b2-card.jpg">
            </div>
            <div class="card card11">
                <img src="<?php echo get_template_directory_uri(); ?>/asset/img/g-card.jpg">
            </div>
        </div>
    </section>

    <!-- <div class="spacing"></div> -->
    <section class="news">
        <div class="spacing"></div>
        <p class="title">ENTDECKE <span>WEITERE PROJEKTE</span></p>
        <div class="carousel" data-flickity='{"autoPlay": true }'>
            <div class="carousel-cell" style="background-image: url(<?php echo get_template_directory_uri(); ?>/asset/img/caro1.png)"></div>
            <div class="carousel-cell" style="background-image: url(<?php echo get_template_directory_uri(); ?>/asset/img/caro2.png)"></div>
            <div class="carousel-cell" style="background-image: url(<?php echo get_template_directory_uri(); ?>/asset/img/caro3.jpg)"></div>
            <div class="carousel-cell" style="background-image: url(<?php echo get_template_directory_uri(); ?>/asset/img/caro1.png)"></div>
            <div class="carousel-cell" style="background-image: url(<?php echo get_template_directory_uri(); ?>/asset/img/caro2.png)"></div>
            <div class="carousel-cell" style="background-image: url(<?php echo get_template_directory_uri(); ?>/asset/img/caro3.jpg)"></div>
        </div>

        <div class="searchbar-ctn">
            <form action="/action_page.php">
                <label for="searchbar">Wir halten sie <span>auf dem laufenden</span></label><br><br>
                <input type="text" id="searchbar" name="searchbar">
                <input type="submit" value="Anmelden"><br><br>
                <input type="checkbox" id="agb" name="agb" value="Search" size="50">
                <label for="agb" style="font-size: 1rem;">Ich habe die Datenschutzerklärung gelesen und
                    akzeptiert.</label><br>
            </form>
        </div>
        <div class="spacing"></div>
        </div>
    </section>
</main>

<?php get_footer() ?>