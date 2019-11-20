/* Avoid `console` errors in browsers that lack a console.
-------------------------------------------------------------*/
(function() {
	var method;
	var noop = function noop() {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

/* jQuery placehold class
-------------------------------------------------------------------- */
/**
 * @name jQuery placehold (https://github.com/jgarber623/jquery-placehold)
 * @author Jason Garber
 * @copyright (cc) Jason Garber (https://sixtwothree.org and https://www.viget.com)
 *
 * Licensed under the CC-GNU GPL (https://creativecommons.org/licenses/GPL/2.0/)
 */

;(function($) {
	$.fn.placehold = function( placeholderClassName ) {
		var placeholderClassName = placeholderClassName || "placeholder",
			supported = $.fn.placehold.is_supported();

		function toggle() {
			for ( i = 0; i < arguments.length; i++ ) {
				arguments[i].toggle();
			}
		}

		return supported ? this : this.each( function() {
			var $elem = $( this ),
				placeholder_attr = $elem.attr( "placeholder" );

			if ( placeholder_attr ) {
				if ( $elem.val() === "" || $elem.val() == placeholder_attr ) {
					$elem.addClass( placeholderClassName ).val( placeholder_attr );
				}

				if ( $elem.is( ":password" ) ) {
					var $pwd_shiv = $( "<input />", {
						"class": $elem.attr( "class" ) + " " + placeholderClassName,
						"value": placeholder_attr
					});

					$pwd_shiv.bind( "focus.placehold", function() {
						toggle( $elem, $pwd_shiv );
						$elem.focus();
					});

					$elem.bind( "blur.placehold", function() {
						if ( $elem.val() === "" ) {
							toggle( $elem, $pwd_shiv );
						}
					});

					$elem.hide().after( $pwd_shiv );
				}

				$elem.bind({
					"focus.placehold": function() {
						if ( $elem.val() == placeholder_attr ) {
							$elem.removeClass( placeholderClassName ).val( "" );
						}
					},
					"blur.placehold": function() {
						if ( $elem.val() === "" ) {
							$elem.addClass( placeholderClassName ).val( placeholder_attr );
						}
					}
				});

				$elem.closest( "form" ).bind( "submit.placehold", function() {
					if ( $elem.val() == placeholder_attr ) {
						$elem.val( "" );
					}

					return true;
				});
			}
		});
	};

	$.fn.placehold.is_supported = function() {
		return "placeholder" in document.createElement( "input" );
	};
})(jQuery);
