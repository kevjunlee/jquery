var image = $("img")

for (let i = 0; i < image.length;i++){
	$(image[i]).mouseover(function(){
		var alt = $(this).attr('alt');
		$('div').html(alt);
		console.log('this is alt text:' + alt)
		var img = $(this).attr('src');
		console.log('this is the source:' + img);
		$('div').css('background-image', "url('"+img+"')");
	$(image[i]).mouseleave(function(){
		$('div').html('Hover over an image below.');
		console.log('changes back')
		$('div').css('background-image', 'none');
	})
})

};
// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }
