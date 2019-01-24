$(document).ready(function(){
	
	var posts = [];
	$.get('http://jsonplaceholder.typicode.com/posts', function(response){
		posts = response;	  
		$(document).trigger('posts_geted', [posts])
	});
	
	$(document).on('posts_geted', function(event, posts){
		posts.forEach(function(data, index){
			console.log(data.title, index);
			
			var $h1 = $("h1");
			$h1.text = (data.title);
			
			var $wrapper = $("div").append($h1);
			
			$('.posts').append( $wrapper );
		});
	});
	
	
	$('.btn').on('click',function(event){
		
		event.preventDefault();
		
		var name  = $("input[name=nameName]").val();
		var phone = $("input[name=phoneName]").val();
		var email = $("input[name=emailName]").val();
		
		console.log(name, phone, email);
		function funcSuccess (data) {
			
			alert(data);
			
		}
		
		$.ajax({
			url  : "form.php",
			type : "POST",
			data : ({name : name, phone : phone, email: email}),
			dataType : "html",
			success : funcSuccess
		});		
	});
	
});

