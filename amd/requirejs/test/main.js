require.config({
	baseUrl : "./",
	paths : {
		"JQuery" : ["https://code.jquery.com/jquery-3.0.0.min"],
		"aJS" : "a"
	}
})

require(["JQuery","aJS",'b'],function($,a,b) {
	alert(b.add(1,2));
});


