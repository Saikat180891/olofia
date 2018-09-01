$("li").removeClass("big-card");
var imageLinks = [];
var headLines = [];
var paraLinksSite = [];

for(i=0;i<15;i++){
 imageLinks[i] = $("ul .parent_section_trending_counter_" + i + " figure a img").attr("src");
 headLines[i] = $("ul .parent_section_trending_counter_" + i +" figure figcaption .caption").html()
 paraLinksSite[i] = $("ul .parent_section_trending_counter_" + i + " figure .card-big").attr("href");
}


function xyz(){
		console.log("hello");
}

setInterval(xyz, 2000);



function count(x){
    var cplus = 0;
    var cminus =31;

    function update(x){
    	if(x===1){
    		cplus+=1;
        	if(cplus===32){
        		cplus=0;
        	}
        	this.cplus = cplus;
        	return cplus;
    	}
    	if(x===0){
    		cplus-=1;
    		if(cplus===0){
    			cplus=31;
    		}
    		return cplus;
    	}
        
    }
    return update;
}


var x = count(y);

x(1);