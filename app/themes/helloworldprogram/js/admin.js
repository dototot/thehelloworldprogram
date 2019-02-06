/**
 * Access wpvars set up in functions.php with wpvars.nameofvar
 * Available variables:
 * ajaxpath, themepath, includespath
 */
jQuery(document).ready(function($){
	if( $('input[name=post_format]').length ) {
		$('input[name=post_format]').on( "change", function(){
			if( 'video' == $(this).val() ) {
				$('#featured-video-metabox').show();
			} else {
				$('#featured-video-metabox').hide();
			}
		});
		$('input[name=post_format]:checked').change();

	}
});
