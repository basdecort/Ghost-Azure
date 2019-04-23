/**
 * Main JS file for BlogInn behaviours
 */

/*globals jQuery, document */
(function ($) {
	"use strict";

	$(document).ready(function(){
		// Responsive video embeds
		$('.entry-content').fitVids();

		// Navigation
		$('#menu-toggle').click(function(){
			var _this = $(this);
			_this.toggleClass('toggled-on').attr('aria-expanded', _this.attr('aria-expanded') === 'false' ? 'true' : 'false');
			$('.nav-menu').slideToggle();
		});
		$(window).bind('resize orientationchange', function() {
			if ( $('#menu-toggle').is(':hidden') ) {
				$('#menu-toggle').removeClass('toggled-on').attr('aria-expanded', 'false');
				$('.nav-menu').removeAttr('style');
			}
		});

		// Gallery adjustments
		$( '.kg-gallery-image > img' ).each( function() {
			var _this = $(this),
				$container = _this.closest('.kg-gallery-image'),
				width = _this.attr('width'),
				height = _this.attr('height'),
				ratio = width / height;
			$container.css({'flex' : ratio + ' 1 0%' });
		});

		// Scroll to top
		$('.site-footer .top-link').on('click', function(e) {
			$('html, body').animate({'scrollTop': 0});
			e.preventDefault();
		});

	});

}(jQuery));