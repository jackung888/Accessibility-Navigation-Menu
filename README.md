# Accessibility-Navigation-Menu
version 2018.24.01 by Jack Ung  https://github.com/jackung888
Liscence: free to use.

Navigate the menu bar with tab and arrow keys (up, down, left, right)

remember to include the jquery script into your html.
as the menu I am using a button for the dropdown menu, because it was a requirement challenge from my school assignment.
You can change it to an tag or list item. just remember to the name your main nav that have dropdown (sub menu) with "dropdown-toggle". Plus change the jquery file from 	$( '.dropdown-toggle' ).click( function( e ) to hover or 	$( '.dropdown-toggle' ).focusin( function( e ) if you want the dropdown  to show when it is hover is focus in.

html mark up and class assign.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Accessibility Menu Navigation With Arrow Keys Press</title>
    <link rel="stylesheet" href="style.css" type="text/css" media="all">
    <script src="JS/libs/jquery-2.1.3.min.js"></script>
    <script src="JS/menu-toggle.js" defer></script>
</head>
<body>
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
</body>
</html>

//style sheet



.screen-reader-text {
	clip: rect(1px, 1px, 1px, 1px);
	position: absolute !important;
	height: 1px;
	width: 1px;
	overflow: hidden;
}

.screen-reader-text:hover,
.screen-reader-text:active,
.screen-reader-text:focus {
	background-color: #f1f1f1;
	border-radius: 3px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
	clip: auto !important;
	color: #21759b;
	display: block;
	font-size: 14px;
	font-weight: bold;
	height: auto;
	left: 5px;
	line-height: normal;
	padding: 15px 23px 14px;
	text-decoration: none;
	top: 5px;
	width: auto;
	z-index: 100000;
}
body {
	margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
	display: block;
}

audio,
canvas,
progress,
video {
	display: inline-block;
	vertical-align: baseline;
}

audio:not([controls]) {
	display: none;
	height: 0;
}

[hidden],
template {
	display: none;
}

a {
	background-color: transparent;
	text-decoration: none;
	color: #000000;
	font-weight: bold;
}

a:active,
a:hover {
	outline: 1.3px dotted;
	background-color: transparent;
	text-decoration: underline;
}
a:visited{
	color: #051167;
}
*:focus {
	outline: 1.3px dotted;
	text-decoration: underline;
	background: transparent;
}
/*added to make all ul li anchor/attr the same with all attr*/
ul li a:focus{
	outline: 1px dotted;
	text-decoration: none;
	background: transparent;
}
abbr[title] {
	border-bottom: 1px dotted;
}

b,
strong {
	font-weight: bold;
}

dfn {
	font-style: italic;
}

h1,
.entry-title {
	font-size: 2em;
	margin: 0.67em 0;
	font-weight: bold;
}

mark {
	background: #ff0;
	color: #000;
}

small {
	font-size: 80%;
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sup {
	top: -0.5em;
}

sub {
	bottom: -0.25em;
}

img {
	display: block;
	border: 0;
	width: 100%;
	height: auto;
}

svg:not(:root) {
	overflow: hidden;
}

figure {
	margin: 1em 40px;
}

hr {
	box-sizing: content-box;
	height: 0;
}

pre {
	overflow: auto;
}

code,
kbd,
pre,
samp {
	font-family: monospace, monospace;
	font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
	color: inherit;
	font: inherit;
	margin: 0;
}

button {
	overflow: visible;
}

button,
select {
	text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
	-webkit-appearance: button;
	cursor: pointer;
}

button[disabled],
html input[disabled] {
	cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
	border: 0;
	padding: 0;
}

input {
	line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
	box-sizing: border-box;
	padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	height: auto;
}

input[type="search"] {
	-webkit-appearance: textfield;
	box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
}

fieldset {
	border: 1px solid #c0c0c0;
	margin: 0 2px;
	padding: 0.35em 0.625em 0.75em;
}

legend {
	border: 0;
	padding: 0;

}

textarea {
	overflow: auto;
}

optgroup {
	font-weight: bold;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

td,
th {
	padding: 0;
}



/*--------------------------------------------------------------
Layouts
--------------------------------------------------------------*/
/*added*/
.author{
	font-weight: bold;
}
.centered {
    margin: 0 auto;
    padding: 0 1em;
}
.continue-reading {
	font-weight: bolder;
}
@media screen and (min-width: 52em) {
    .centered {
        max-width: 52em;
    }
}

/*--------------------------------------------------------------
Typography
--------------------------------------------------------------*/
body,
button,
input,
select,
textarea {
	color: #404040;
	font-family: 'Helvetica', Arial, sans-serif;
	font-size: 18px;
	line-height: 1.5;
}


h1,
h2,
h3,
h4,
h5,
h6 {
	clear: both;
}

p {
	margin-bottom: 1.5em;
}

b,
strong {
	font-weight: bold;
}

dfn,
cite,
em,
i {
	font-style: italic;
}

blockquote {
	margin: 0 1.5em;
}

address {
	margin: 0 0 1.5em;
}

pre {
	background: #eee;
	font-family: "Courier 10 Pitch", Courier, monospace;
	font-size: 15px;
	font-size: 1.5rem;
	line-height: 1.6;
	margin-bottom: 1.6em;
	max-width: 100%;
	overflow: auto;
	padding: 1.6em;
}

code,
kbd,
tt,
var {
	font: 15px Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
}

abbr,
acronym {
	border-bottom: 1px dotted #666;
	cursor: help;
}

mark,
ins {
	background: #fff9c0;
	text-decoration: none;
}

sup,
sub {
	font-size: 75%;
	height: 0;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sup {
	bottom: 1ex;
}

sub {
	top: .5ex;
}

small {
	font-size: 75%;
}

big {
	font-size: 125%;
}

.index-entry-meta,
.entry-meta {
	color: hsl(0, 0%, 25%);
}

figcaption {
	margin: 2em 4em;
	color: #555353;
	font-style: italic;
}
	.dropdown-toggle:hover, .dropdown-toggle:focus {
		background: hsl(0, 0%, 25%);
	}
	.about-dropdown-toggle:hover, .dropdown-toggle:focus {
		background: hsl(0, 0%, 25%);
	}


/*.multi-level-nav ul li a:focus + ul*/
/*.multi-level-nav ul li a:focus + ul{
		display: flex;
	}*/
/*--------------------------------------------------------------
Header styles minus menu
--------------------------------------------------------------*/
footer {
	margin: 0 2em;
	padding: 0;
	height: 3em;
	width: auto;
}


.masthead {
		padding-top: 1em;
    padding-bottom: 1em;
    background: hsl(0, 0%, 90%);
}

.site-title {
    margin: 0;
    padding: 1em 0;
    font-size: 2em;
    font-weight: 300;
    text-align: center;
    color: black;
}

@media screen and (min-width: 44.44em) {
    .site-title {
        font-size: 2em;
    }
}

@media screen and (min-width: 50em) {
    .site-title {
        font-size: 2.5em;
    }
}

.site-title a {
    color: hsl(5, 45%, 95%);
    text-decoration: none;
}

.site-title a:hover {
    text-decoration: underline;
}

/* Base styles that apply to all menus */
.menu-section {
	padding-bottom: 2em;
	margin-bottom: 2em;
	border-bottom: 1px solid hsl(0, 0%, );
}

.menu ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
	background: hsl(0, 0%, 15%);
	display: flex;
}

/*.menu li a {
	display: block;
	text-decoration: none;
	color: white;
	padding: .6em 1em;
}*/
.menu li a {
	display: block;
	text-decoration: none;
	color: white;
	padding: .6em 2em;

}
.menu li a:hover, .menu li a:focus{
	background: hsl(0, 0%, 25%);
	text-decoration: none;
}


/* Styles for Multi-Level Menu */
@media screen and (max-width: 30em){
	.multi-level-nav ul ul li a {
		padding-left: 2em;
	}

	.dropdown-toggle {
		display: none;
	}
}

@media screen and (min-width: 30em){
	.multi-level-nav ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
	}

	.multi-level-nav li {
        flex: 1 1 auto;
		position: relative;


	}

	li.has-children > a {
		padding-right: 0;
		display: inline-flex;
		position: relative;
	}

	.multi-level-nav ul ul {
		display: none;
		position: absolute;
		z-index:100;
	}

	.multi-level-nav ul ul li {
        flex: 1 1 auto;
        position: relative;
	}

	.multi-level-nav ul .toggled-on {
		display: block;
	}

	.dropdown-toggle {
		margin: 0 8px;
		padding: 0 .3em;
		border: solid 1px white;
		font-family: 'FontAwesome';
		content: "";
		text-transform: lowercase;  /*Stop screen readers to read the text as capital letters*/
		background-color: transparent;
	}

	.dropdown-toggle:after {
		font-size: 18px;
		position: relative;
		top: 0;
		left: 0;
		width: 42px;
		color: white;
		content: "\f107"/*"Wordpress +"+*/;
		line-height: 1em;
	}

	.dropdown-toggle:hover, .dropdown-toggle:focus {
		background: hsl(0, 0%, 25%);
	}

	.dropdown-toggle.toggle-on:after {
		content: "\f106"/*"Wordpress -"*/;
	}
}
.about-dropdown-toggle {
		margin: 0 5px;
		padding: 0 .3em;
		border: solid 1px white;
		font-family: 'FontAwesome';
		content: "";
		text-transform: lowercase;  /*Stop screen readers to read the text as capital letters */
		background-color: transparent;
	}

	.about-dropdown-toggle:after {
		font-size: 18px;
		position: relative;
		top: 0;
		left: 0;
		width: 42px;
		color: white;
		content: "\f107";/**/
		line-height: 1em;
	}

	.about-dropdown-toggle:hover, .about-dropdown-toggle:focus {
		background: hsl(0, 0%, 25%);
	}

	.about-dropdown-toggle.toggle-on:after {
		content: "\f106";/**/
	}
}


//script for the navigation menu
jquery file...dont forget to link this file in your hmtl or copy and paste this into your javascript file.

// Copyright Jacky Ung
// version 2018.01.24
// free to use lisence
// navigation menu accessibility with arrow on key press
// easy navigation for menu and sub menu


( function( $ ) {
// toggle drop down menu open and close ->focus and unfocus or when click or press enter key
	$( '.dropdown-toggle' ).click( function( e ) {
		var _this = $( this );
		e.preventDefault();
		_this.toggleClass( 'toggle-on' );
		_this.next( '.sub-menu' ).toggleClass( 'toggled-on' );
		_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
		_this.html( _this.html() === '<span class="screen-reader-text">Expand child menu</span>' ? '<span class="screen-reader-text">Collapse child menu</span>' : '<span class="screen-reader-text">Expand child menu</span>' );


// if  class= 'close-menu-if-focus' is in focus -> close the drop down menu
		$('.close-menu-if-focus').focusin( function(){
		_this.removeClass( 'toggle-on' );
		_this.next( '.sub-menu' ).removeClass( 'toggled-on' );
		_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
		// change the screen reader text to whatever that you think best fit for yourself.
		_this.html( _this.html() === '<span class="screen-reader-text">Expand child menu</span>' ? '<span class="screen-reader-text">Collapse child menu</span>' : '<span class="screen-reader-text">Expand child menu</span>' );

		});

// auto focus the first <a> child  of the drop down list
		$('.sub-menu').find('li > a:first').focus();

	} );// end of dropdown click function

// move through naviagtion with left and right up and down (use to skip the long lists dropdown menu)
$(document).keydown( function(e){


    	// right arrow  key
	            if (e.keyCode == 39) {
	        $(".move:focus").closest('li').next().find('a.move').focus();
					$(".move-up-down:focus").closest('li').closest('ul').closest('li').next().find('a.move').focus();
	    }

	    // left arrow key
	    if (e.keyCode == 37) {
	        $(".move:focus").closest('li').prev().find('a.move').focus();
	        $(".move-up-down:focus").closest('li').closest('ul').closest('li').prev().find('a.move').focus();


	    }
	    // move focus up and down the dropdown menu items
	    // up arrow key
	    if (e.keyCode == 38) {
	        $(".move-up-down:focus").closest('li').prev().find('a.move-up-down').focus();
	    }
	    //  down arrow key
	    if (e.keyCode == 40) {

	        $(".move-up-down:focus").closest('li').next().find('a.move-up-down').focus();


	    }
    }// end of keydown function

);


})( jQuery );
