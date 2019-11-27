var fruit = false;
var standing = false;
console.log('this is the type for fruit', fruit)

$("input[name='standing']").click(function(){
  console.log('standing is selected')
  standing = true;
  console.log('this is the type for standing', standing)
});

$("input[name='fruit']").click(function(){
  console.log('fruit is selected')
  fruit = true;
  console.log('this is the type for fruit', fruit)
});

$('#ch3form').submit(function (e){
  console.log('hello')
    if (standing == false && fruit == true){
      e.preventDefault();
      alert('stop!')
    }
    if (standing == true && fruit == false){
      e.preventDefault();
      alert('stop!')
    }
    if (standing == false && fruit == false){
      e.preventDefault();
      alert('stop!')
    }
});
// ch3form.onsubmit = function() {
//     var fruit =
//     document.querySelectorAll('input[name="fruit"]')
//
//
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//
//     alert("You must pick a fruit!")
//     return false;
//
//
//
//
//
//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;
//
//     // alert("You must pick a fruit!")
//     // return false;


  // $(document).ready(function (){
  // 			$('#ch3form').submit(function (){
  // 				console.log("selected");
  // 				// $('#home').toggle();
  // 				if $('input[name="fruit"]').attr('check',!this.checked);
  //
  // 			});
  // 		});
