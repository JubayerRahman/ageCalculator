


//  var nowDay = new Date();
//  var nowday1 =nowDay.getDate();

//  var nowMonth = new Date();
//  var nowmonth1 =nowMonth.getMonth();
 
//  var nowYear = new Date();
//  var nowyear1 =nowYear.getFullYear();







var day =document.getElementById("day")
var day1 =document.getElementById("day1")
var month =document.getElementById("month")
var month1 =document.getElementById("month1")
var year =document.getElementById("year")
var year1 =document.getElementById("year1")
var ifYear =document.getElementById("ifYear")
var submit =document.getElementById("submit").addEventListener("click", function(){
    day = parseInt(day.value)
    day1 = parseInt(day1.value)
    month = parseInt(month.value)
    month1 = parseInt(month1.value)
    year = parseInt(year.value)
    year1 = parseInt(year1.value)
    var resultday= day1-day;
    var resultmonth= month1-month;
    var resultyear= year1-year;
    if(year>year1 || year==0 || year1==0 || day==0 || day1==0 || month==0 || month1==0){
        document.getElementById("ifYear").innerHTML ="Not possible"
    }
    else{
   document.getElementById("statement").innerHTML = " Your age is:";
   document.getElementById("year350").innerHTML = resultyear +" years";
   document.getElementById("month360").innerHTML = resultmonth +" months,";
   document.getElementById("day360").innerHTML = resultday +" days,";
    }



    // document.write(result);
})
