
var list=[];

list[0]=["2 Hours 40 mins"];
list[1]=["2 Hours 30 mins"];
list[2]=["2 Hours 30 mins"];
list[3]=["2 Hours 50 Mins"];
list[4]=["2 Hours"];
list[5]=["2 Hours 40 mins"];
list[6]=["2 Hours"];
list[7]=["3 Hours"];
list[8]=["3 hours"];
list[9]=["2 Hours"];
list[10]=["3 Hours"];
list[11]=["2 Hours"];
list[12]=["2 Hours 10 mins"];
list[13]=["2 Hours 10 mins"];
list[14]=["3 Hours"];
list[15]=["3 Hours"];
list[16]=["3 Hours"];
list[17]=["3 Hours 5 mins"];
list[18]=["2 Hours 20 mins"];
list[19]=["2 Hours 50 mins"];


var src=[0,1,2,3,2,1,2,3,0,1,3,2,1,0,3,0,2,3,1,0];
var des=[3,2,1,0,1,2,1,0,3,2,0,1,2,3,0,3,1,0,2,3];
var dep=["5:00 PM","9:40 PM","7:00 AM","12:30 PM","5:00 PM","9:30 PM","6:00 PM","3:00 AM","2:00 AM","5:50 AM","12:20 PM","3:00 AM","5:50 AM","4:50 PM","3:00 AM","5:00 AM","6:00 PM","3:00 AM","2:30 AM","5:00 PM"];
var arr=["7:40 PM","12:10 AM","9:30 AM","3:20 PM","7:00 PM","12:10 AM","8:00 PM","6:00 AM","5:00 AM","7:50 AM","3:20 PM","5:00 AM","8:00 AM","7:00 PM","6:00 AM","8:00 AM","9:00 PM","6:05 AM","4:50 AM","7:50 PM"];
var price=[6900,7500,4000,9000,10000,6300,6000,8000,7000,5699,9000,6500,5700,5750,7999,8000,5000,7500,4500,4800];
var availSeats=[1,1,2,3,3,3,5,7,10,12,12,21,21,24,25,26,27,29,36,56];
var dur=[160,150,150,170,120,160,120,180,180,120,180,120,130,130,180,180,180,185,140,170];
var names=["Chennai","Kolkata","Bangalore","Delhi"];
var airline_names=["Jet Airways","Air India","Indigo"];
var airline=[0,1,0,1,1,0,2,1,1,1,1,2,2,1,2,1,1,0,1,2];
var param=[];
var fil_dur1=[];
var fil_dur2=[];
var fil_airline=[];
var fil_arrival1=[];
var fil_arrival2=[];
var fil_departure1=[];
var fil_departure2=[];
var lower_limit=1000;
var upper_limit=10000;


var getUrlParameter = function getUrlParameter() {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        param=[],
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        param[i] = sURLVariables[i].split('=');
    }
    return param
};


var reduce = function reduce(rsrc,rdes,rseats){
	var temp=[];
	var count=0;
	for(var i=0;i<src.length;i++){
		if(src[i]==rsrc && des[i]==rdes && availSeats[i]>=rseats){
			temp[count]=i;
			count++;
		}
	}
	return temp;
}
// $("#ex2").slider({});
// console.log($("#ex2").val());
$( "#ex2" ).slider();
param=getUrlParameter();
$('#source').text("  "+names[param[0][1]-1]);
$('#destination').text("  "+names[param[1][1]-1]);
$('#seats').text("  "+ param[2][1]);
var fillArray=reduce(param[0][1]-1,param[1][1]-1,param[2][1]);

var populate= function populate(){
	var html = '';
	$('#flightTableBody').not(':first').not(':last').remove();

	if(fillArray.length==0){
		$('#notfound').css('visibility', 'visible');
	}else{
		
		for(var i = 0; i < fillArray.length; i++){
			var j=fillArray[i];
	        html += '<tr><td class="indexing">' + j + 
	        		'</td><td>' + names[src[j]] + 
	                '</td><td>' + names[des[j]] + 
	                '</td><td>' + dep[j] + 
	                '</td><td>' + arr[j] + 
	                '</td><td>' + list[j][0] + 
	                '</td><td><img src="img/'+airline_names[airline[j]]+'.png" width="32px" height="32px" alt="1"><br>' + airline_names[airline[j]] + 
	                '</td><td>' + availSeats[j] + 
	                '</td><td>' + price[j] + 
	                '</td></tr>';
		}
		$('#flightTableBody').html(html);
		$('#flightTable').tablesorter();
		$(".indexing").hide();
	}
}

populate();
// console.log(Date.parse('01/01/2011 10:20 PM'));
// console.log(Date.parse('01/01/2011 4:59 PM')-Date.parse('01/01/2011 2:00 PM'));
// 10800000
var fil_reduce= function fil_reduce(x){
	if(fil_dur1.length!=0){
		var flag=false;
		for (var i=0;i<fil_dur1.length;i++) {
			if(dur[x]>=fil_dur2[i] && dur[x]<=fil_dur1[i])
				flag=true;
		};

		if(!flag)
			return flag;
	}

	if(fil_departure1.length!=0){
		var flag=false;
		for (var i=0;i<fil_departure1.length;i++) {
			if(Date.parse('01/01/2011 '+dep[x]) > fil_departure1[i] && Date.parse('01/01/2011 '+dep[x]) < fil_departure2[i])
				flag=true;
		};
		
		if(!flag)
			return flag;
	}

	if(fil_arrival1.length!=0){
		var flag=false;
		for (var i=0;i<fil_arrival1.length;i++) {
			if(Date.parse('01/01/2011 '+arr[x]) > fil_arrival1[i] && Date.parse('01/01/2011 '+arr[x]) < fil_arrival2[i])
				flag=true;
		};
		
		if(!flag)
			return flag;
	}

	if(fil_airline.length!=0){
		var flag=false;
		for (var i=0;i<fil_airline.length;i++) {
			// console.log(fil_airline[i]+" "+airline[x]);
			if(fil_airline[i]==airline[x]){

				flag=true;
			}
		};
		
		if(!flag)
			return flag;
	}

	if(price[x]<lower_limit || price[x]>upper_limit)
		return false;

	return true;
}



var filter_table= function filter_table(){
	var jo = $("#flightTableBody").find("tr");
    if (this.value == "") {
        jo.show();
        return;
    }
    var count=0;
    jo.hide();
    jo.filter(function (i, v) {
        var item= fil_reduce($(this).find(".indexing").html());
        if(item)
        	count++;
        return item;
    }).show();

    
    console.log(count);
    if(count==0){
    	$("#notfound").css('visibility', 'visible');;
    }else{
    	$("#notfound").css('visibility', 'hidden');;
    }
}


var change_airline=function change_airline(x){
	var flag=false;

	for(var i=0;i<fil_airline.length;i++){
		if(fil_airline[i]==x){
			fil_airline.splice(i,1);
			flag=true;
		}

	}

	if(!flag){
		fil_airline.push(x);
	}

	// console.log(fil_airline);
	filter_table();
}



var change_duration=function change_duration(x){
	var flag=false;

	for(var i=0;i<fil_dur1.length;i++){
		if(fil_dur1[i]==x){
			fil_dur1.splice(i,1);
			fil_dur2.splice(i,1);
			flag=true;
		}

	}

	if(!flag){
		fil_dur1.push(x);
		fil_dur2.push(x-60);
	}

	// console.log(fil_dur1);
	// console.log(fil_dur2);
	filter_table();
}


var change_arrival=function change_arrival(x){
	var flag=false;
	x=Date.parse('01/01/2011 '+x);
	// console.log(x);
	for(var i=0;i<fil_arrival1.length;i++){
		if(fil_arrival1[i]==x){
			fil_arrival1.splice(i,1);
			fil_arrival2.splice(i,1);
			flag=true;
		}

	}

	if(!flag){
		fil_arrival1.push(x);
		fil_arrival2.push(x+10800000);
	}

	// console.log(fil_arrival1);
	// console.log(fil_arrival2);
	filter_table();	
}


var change_departure=function change_departure(x){
	var flag=false;
	x=Date.parse('01/01/2011 '+x);
	// console.log(x);
	for(var i=0;i<fil_departure1.length;i++){
		if(fil_departure1[i]==x){
			fil_departure1.splice(i,1);
			fil_departure2.splice(i,1);
			flag=true;
		}

	}

	if(!flag){
		fil_departure1.push(x);
		fil_departure2.push(x+10800000);
	}

	// console.log(fil_departure1);
	// console.log(fil_departure2);
	filter_table();	
}

$(function(ready){
    $('#ex2').change(function() {
    	var x=$(this).val().split(',');
    	$("#money_start").html(x[0]);
    	$("#money_end").html(x[1]);
    	lower_limit=parseInt(x[0]);
    	upper_limit=parseInt(x[1]);
    	// console.log(upper_limit+"  "+lower_limit);
    	filter_table();
    });
});