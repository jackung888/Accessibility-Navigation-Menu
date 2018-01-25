# Accessibility-Navigation-Menu
version 2018.24.01 by Jack Ung  https://github.com/jackung888
Liscence: free to use.

Navigate the menu bar with tab and arrow keys (up, down, left, right)

remember to include the jquery script into your html.
as the menu I am using a button for the dropdown menu, because it was a requirement challenge from my school assignment.
You can change it to an tag or list item. just remember to the name your main nav that have dropdown (sub menu) with "dropdown-toggle". Plus change the jquery file from 	$( '.dropdown-toggle' ).click( function( e ) to hover or 	$( '.dropdown-toggle' ).focusin( function( e ) if you want the dropdown  to show when it is hover is focus in.

html mark up and class assign.

   <header class="masthead clear">
        <div class="centered">
            <div class="site-branding">
                <h1 class="site-title">Accessible Menu Demo</h1>
            </div><!-- .site-title -->
            <nav id="multi-level-nav" class="multi-level-nav menu" aria-label="Main Menu">
                <ul>
                    <li ><a class="close-menu-if-focus move" href="#">Home</a></li>
                    <li class="has-children">
                        <a class="close-menu-if-focus move " href="#">Food</a>
                        <button class="dropdown-toggle move " aria-expanded="false"><span class="screen-reader-text">Expand child menu</span></button>
                        <ul class="sub-menu" role='menu'>
                            <li><a class="move-up-down" href="#">Chef for Hire</a></li>
                            <li><a class="move-up-down" href="#">Catering</a></li>
                            <li><a class="move-up-down" href="#">Restaurant</a></li>
                        </ul>
                    </li>
                    <li class="has-children">
                        <a class="close-menu-if-focus move" href="#">Classes</a>
                        <button class="dropdown-toggle move" aria-expanded="false"><span class="screen-reader-text">Expand child menu</span></button>
                        <ul class="sub-menu" role="menu">
                            <li><a class="move-up-down" href="#">Class Schedule</a></li>
                            <li><a class="move-up-down" href="#">Register</a></li>
                            <li><a class="move-up-down" href="#">Breakfast Class</a></li>
                            <li><a class="move-up-down" href="#">Brunch Class</a></li>
                            <li><a class="move-up-down" href="#">Lunch Class</a></li>
                            <li><a class="move-up-down" href="#">Dinner Class</a></li>
                            <li><a class="move-up-down" href="#">Dessert Class</a></li>
                            <li><a class="move-up-down" href="#">Baking Class</a></li>
                            <li><a class="move-up-down" href="#">Canning Class</a></li>
                            <li><a class="move-up-down" href="#">Shopping Class</a></li>
                            <li><a class="move-up-down" href="#">Tools Class</a></li>
                        </ul>
                    </li>
                    <li class="has-children">
                        <a class="close-menu-if-focus move " href="#">About</a>
                        <button class="dropdown-toggle move " aria-expanded="false"><span class="screen-reader-text">Expand child menu</span></button>
                        <ul class="sub-menu">
                            <li><a class="move-up-down" href="#">The Eat Story</a></li>
                            <li><a class="move-up-down" href="#">Meet the Chef</a></li>
                            <li><a class="move-up-down" href="#">Meet the Team</a></li>
                            <li><a class="move-up-down" href="#">Our Vendors</a></li>
                            <li><a class="move-up-down" href="#">Legal</a></li>
                        </ul>
                    </li>
                    <li ><a class="close-menu-if-focus move" href="#">Contact</a></li>
                </ul>

                </div>
            </li>
        </ul>
            </nav><!-- #multi-level-nav .multi-level-nav -->
        </div><!-- .centered -->

    </header><!-- .masthead -->

