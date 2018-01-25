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
