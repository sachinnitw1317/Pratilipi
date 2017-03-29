var list=[];

list[0]=[0,3,"5:00 PM","7:40 PM","2 Hours 40 mins","Jet Airways",1,6900];
list[1]=[1,2,"9:40 PM","12:10 AM","2 Hours 30 mins","Air India",1,7500];
list[2]=[2,1,"7:00 AM","9:30 AM","2 Hours 30 mins","Jet Airways",2,4000];
list[3]=[3,0,"12:30 PM","3:20 PM","2 Hours 50 Mins","Air India",3,9000];
list[4]=[2,1,"5:00 PM","7:00 PM","2 Hours","Air India",3,10000];
list[5]=[1,2,"9:30 PM","12:10 AM","2 Hours 40 mins","Jet Airways",3,6300];
list[6]=[2,1,"6:00 PM","8:00 PM","2 Hours","Indigo",5,6000];
list[7]=[3,0,"3:00 AM","6:00 AM","3 Hours","Air India",7,8000];
list[8]=[0,3,"2:00 AM","5:00 AM","3 hours","Air India",10,7000];
list[9]=[1,2,"5:50 AM","7:50 AM","2 Hours","Air India",12,5699];
list[10]=[3,0,"12:20 PM","3:20 PM","3 Hours","Air India",12,9000];
list[11]=[2,1,"3:00 AM","5:00 AM","2 Hours","Indigo",21,6500];
list[12]=[1,2,"5:50 AM","8:00 AM","2 Hours 10 mins","Indigo",21,5700];
list[13]=[0,3,"4:50 PM","7:00 PM","2 Hours 10 mins","Air India",24,5750];
list[14]=[3,0,"3:00 AM","6:00 AM","3 Hours","Indigo",25,7999];
list[15]=[0,3,"5:00 AM","8:00 AM","3 Hours","Air India",26,8000];
list[16]=[2,1,"6:00 PM","9:00 PM","3 Hours","Air India",27,5000];
list[17]=[3,0,"3:00 AM","6:05 AM","3 Hours 5 mins","Jet Airways",29,7500];
list[18]=[1,2,"2:30 AM","4:50 AM","2 Hours 20 mins","Air India",36,4500];
list[19]=[0,3,"5:00 PM","7:50 PM","2 Hours 50 mins","Indigo",56,4800];




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
var names=["Chennai","Kolkata","Bangalore","Delhi"];
var param=[];
param=getUrlParameter();
console.log(param);

$('#source').text("  "+names[param[0][1]-1]);
$('#destination').text("  "+names[param[1][1]-1]);
$('#seats').text("  "+param[2][1]);