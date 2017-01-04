$(function() {
    FastClick.attach(document.body);
});
$( document ).ready(function() {
	$("#submit-button").on('click', function(){
   	$("#submit-button").attr("disabled", "disabled");

    	var subscriber_number = $("#subscriber-number").val();
	    if(subscriber_number){	
		    $.post("http://jeffreyabelflores.com/taddlecreek/info/submit.php", {subscriber_number: subscriber_number},
		    function(data) {
		    	if( data === 'success'){
		    		var error_msg = "<div id='error-dialog' class='dialog-container'><div class='black-bg'></div><div class='vert-fix'><div class='dialog'><div class='message'>Thanks for signing in! Please enjoy the app.</div><div class='errorbuttons close-button'>OK</div></div></div></div>";
					$("#response").append(error_msg);
					$(".close-button").on('click', function(){
						$("#error-dialog").addClass("dialog-close");
						$("#submit-button").removeAttr("disabled");
						setTimeout(function(){
								$("#error-dialog").remove();
						}, 500);
					});
		    	}else if( data === 'connection_not_made'){
			    	var error_msg = "<div id='error-dialog' class='dialog-container'><div class='black-bg'></div><div class='vert-fix'><div class='dialog'><div class='message'>Your connection to the internet seems to have been lost, please try again.</div><div class='errorbuttons close-button'>OK</div></div></div></div>";
					$("#response").append(error_msg);
					$(".close-button").on('click', function(){
						$("#error-dialog").addClass("dialog-close");
						$("#submit-button").removeAttr("disabled");
						setTimeout(function(){
								$("#error-dialog").remove();
						}, 500);
					});
				}else{
			    	var error_msg = "<div id='error-dialog' class='dialog-container'><div class='black-bg'></div><div class='vert-fix'><div class='dialog'><div class='message'>Sorry, that user was not found in our subscription list.</div><div class='errorbuttons close-button'>OK</div></div></div></div>";
					$("#response").append(error_msg);
					$(".close-button").on('click', function(){
						$("#error-dialog").addClass("dialog-close");
						$("#submit-button").removeAttr("disabled");
						setTimeout(function(){
								$("#error-dialog").remove();
						}, 500);
					});
				}
			});
	    }else{
	    	var error_msg = "<div id='error-dialog' class='dialog-container'><div class='black-bg'></div><div class='vert-fix'><div class='dialog'><div class='message'>Your subscriber number appears to be incomplete. Please try again.</div><div class='errorbuttons close-button'>OK</div></div></div></div>";
			$("#response").append(error_msg);
			$(".close-button").on('click', function(){
				$("#submit-button").removeAttr("disabled");
				$("#error-dialog").addClass("dialog-close");
				setTimeout(function(){
						$("#error-dialog").remove();
				}, 500);
			});
	    }
		
	});
});