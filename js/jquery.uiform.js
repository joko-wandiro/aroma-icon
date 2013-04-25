/*
uiform ( Jquery uiform ) by Joko Wandiro
Description: Change your radio button and checkbox into your style
Version: 1.0.0
License: http://creativecommons.org/licenses/by-nc-sa/3.0/
Free for Private and Commercial Project
*/
( function($){
UiFormObj= {
	setter: function(){
		
	}
}

$.fn.uiform= function(options){
//	console.log(this);	
	$obj= this;
	$obj.each( function(){
		$el= $(this);
		type= $el.attr('type');
		// Adding class to radio and checkbox
		if( $el.is(':radio, :checkbox') ){
			html= '<span class="input '+type+'" />';
			$parentEl= $el.wrap(html).parent();
			if( $el.is(':checked') ){
				$parentEl.addClass('checked');
			}
			console.log($el);
		}
	}).click( function(){
		$el= $(this);				
		if( $el.is(':radio') ){
			name= $el.attr('name');
			$('input[name="' + name + '"]').parent().removeClass('checked');
			$el.parent().addClass('checked');
		}
		
		if( $el.is(':checkbox') ){
			if( ! $el.is(':checked') ){
				$el.parent().removeClass('checked');
			}else{
				$el.parent().addClass('checked');
			}
		}		
	})
}
}(jQuery))