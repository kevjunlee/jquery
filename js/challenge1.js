$(document).ready(function (){
		$('#subscribe').change(function (){
			console.log("selected");
			$('#emailField').toggle();
		});
	});
// subscribe.onchange = function() {
// 	var x = document.querySelector();
// // 	if (this.checked){
// // 		console.log("selected");
// //     	x.style.display = "block";
// //   	} else {
// //   		console.log("Not selected");
// //     	x.style.display = "none";
// //   	}
//   // 	Advanced Option....
//   // 	x.style.display == "block" ?
// 		// x.style.display = "none" :
// 		// x.style.display = "block";
// // }
