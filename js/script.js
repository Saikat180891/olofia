



var myString = "Hi my name is Saikat and I love to code.";
let i = 0;
function typeWriter() {

  if (i < myString.length) {
    document.getElementById("template-h3").innerHTML += myString.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }

}
typeWriter();

$("#dash-button").click(function(){
	$(this).removeClass("attach");
	$(this).addClass("dettach");

	$("#close-button").removeClass("dettach");
	$("#close-button").addClass("attach");

	$("#menu-bar").removeClass("dettach");
	$("#menu-bar").addClass("attach");

	let counter = 0;
	
	let setIntervalID = setInterval(function(){
		$("#menu-bar").css("height", ""+counter+"%");
		counter+=1;
		if(counter===101){
			clearInterval(setIntervalID);
		}
	}, 1);

	$("#custom-navbar-brand").css("color" , "black");
	$("#custom-navbar").css("background-color" , "white");

});


$("#cls").click(function(){
	$("#myModal").removeClass("attach");
	$("#myModal").addClass("dettach");
})


$("#close-button").click(function(){
	$(this).removeClass("attach");
	$(this).addClass("dettach");

	$("#dash-button").removeClass("dettach");
	$("#dash-button").addClass("attach");

	let counter = 100;
	
	let setIntervalID = setInterval(function(){
		$("#menu-bar").css("height", ""+counter+"%");
		counter-=1;
		if(counter===-1){
			clearInterval(setIntervalID);
			$("#custom-navbar").css("background-color" , "transparent");
			$("#menu-bar").removeClass("attach");
			$("#menu-bar").addClass("dettach");
			$("#custom-navbar-brand").css("color" , "white");
		}
	}, 1);
});

function moveIn(){
	let count = 40;
	let setIntervalID = setInterval(function(){
		count -=1;
		$("#custom-navbar-brand").css("font-size" , ""+count+"px");
		if(count===29){
			clearInterval(setIntervalID);
		}
	}, 1);
}
function moveOut(){
	let count = 30;
	let setIntervalID = setInterval(function(){
		count +=1;
		$("#custom-navbar-brand").css("font-size" , ""+count+"px");
		if(count===41){
			clearInterval(setIntervalID);
		}
	}, 1);
}
$(window).scroll(function(){
	if($(window).scrollTop() > 200){
		$("#custom-navbar").css("background-color" , "white");
		$("#custom-navbar-brand").css("color" , "black");
		$(".dash").css("background-color" , "#616161");
		
	}
	if($(window).scrollTop() < 200){
		$("#custom-navbar").css("background-color" , "transparent");
		$("#custom-navbar-brand").css("color" , "white");
		$(".dash").css("background-color" , "#ede7f6");
		
	}

	if($(window).scrollTop() > 2400){
		$("#custom-navbar").hide();
	}
	if($(window).scrollTop() > 3200){
		$("#custom-navbar").show();
		$("#custom-navbar-button").css("margin-right" , "30px");
	}
	 if($(window).scrollTop() < 3200){
	 	$("#custom-navbar-button").css("margin-right" , "100px");
	 }
	if($(window).scrollTop() > 4000){
		$("#custom-navbar-button").css("margin-right" , "100px");
	}
	if($(window).scrollTop() < 2400){
		$("#custom-navbar").show();
	}
});


//////dashboard functions/////
function projects(){
	alert("hello")
}
function gallery(){
	alert("gallery")
}
function gallery(){
	var galleryHTML = "";

	galleryHTML += `<div id='gallery' class='attach'>
				<div id='slideshow'>
				
				</div>
				<div id='image-content'>
					<div id='left-arrow' onclick='clickLeft()'><i class='fas fa-arrow-circle-left'></i></div>
					<div id='prev1' class='preview'></div>
					<div id='prev2' class='preview'></div>
					<div id='prev3' class='preview'></div>
					<div id='right-arrow' onclick='clickRight()'><i class='fas fa-arrow-circle-right'></i></div>
				</div>
			</div>`;


	$("#blog-main-content").html("");
	$("#blog-main-content").html(galleryHTML);
}
function games(){
	$("#blog-main-content").html("");
	$("#blog-main-content").append("<div id='game' class='attach'></div>");
}

function olodash(){
	$("#blog-main-content").html("");
	$("#blog-main-content").append("<div id='olodash'><div>OloDash</div><p>The new way to view things</p></div>");
}


function blog(){
	$("#blog-main-content").html("");


	var blogContent = "";

	blogContent +=`<div id='blog' class='attach'>
						<a href='#spinner'>
							<div id='spinner-1' class='spinner' onclick='spinner(this.id)'>
								<h5>What is Lorem Ipsum?</h5>
							</div>
						</a>
				
						<div id='spinner-details-1' class='spinner-details dettach'>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						</div>
					</div>`;
					
						$("#blog-main-content").append(blogContent);
					
}























/////////dashboard sub functions//////
function spinner(selectedID){
	let str = selectedID[8];
	let newStr = "#spinner-details-"+str;
	$(newStr).slideToggle(500);

}
/////////image gallery control////////////


function count(x){
    var cplus = 0;
    var cminus =31;

    function update(x){
    	if(x===1){
    		cplus+=1;
        	if(cplus===31){
        		cplus=1;
        	}
        	this.cplus = cplus;
        	return cplus;
    	}
    	if(x===0){
    		cplus-=1;
    		if(cplus===1){
    			cplus=31;
    		}
    		return cplus;
    	}
        
    }
    return update;
}

//"url('../gallery/'"+imageNumber+".jpg)"
var counterGallery = count();

function clickRight(){
	let imageNumber = counterGallery(1);
	let arr = Array(imageNumber-1, imageNumber, imageNumber+1);
	previewIMG(arr);
	$("#slideshow").css("background-image" , "url('gallery/"+imageNumber+".jpg')");
}

function clickLeft(){
	let imageNumber = counterGallery(0);
	let arr = Array(imageNumber-1, imageNumber, imageNumber+1);
	previewIMG(arr);
	$("#slideshow").css("background-image" , "url('gallery/"+imageNumber+".jpg')");
}

function closeMenu(){
	$("#menu-bar").removeClass("attach");
	$("#menu-bar").addClass("dettach")
}

function login(){
	$("#myModal").show();
}


function previewIMG(arr){
	$("#prev1").css("background-image" , "url('gallery/"+arr[0]+".jpg')");
	$("#prev2").css("background-image" , "url('gallery/"+arr[1]+".jpg')");
	$("#prev2").css("border" , "2px solid #c60055");
	$("#prev3").css("background-image" , "url('gallery/"+arr[2]+".jpg')");
}




// var x = window.matchMedia("(min-width: 200px) and (max-width: 500px)");

// x.addListener(onChange);

// function onChange(){
// 	x.matches ? forPc() : mobile();
// }

// function forPc(){

// 	console.log("mobile")
// }

// function mobile(){

// 	console.log("pc")
// }












