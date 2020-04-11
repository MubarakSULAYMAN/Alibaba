function formatDate() {
    let p =  new Date().getHours()+":"+new Date().getMinutes();
    let c = "4:30";
    if (p <= c){
        console.log("WE ARE OPEN")
    }
    if (p >= c){
        console.log("WE ARE CLOSED")
    }
}
formatDate()


//   alert(formatDate("February 04, 2011 24:00:00"));

//   let presentDate;
//   presentDate = new Date().getHours()+":"+new Date().getMinutes();
//   let closeTime;
//   closeTime = "4:30"
//   console.log(closeTime)
//   console.log(presentDate)

//   var d = new Date(date);
//   var hh = d.getHours();
//   var m = d.getMinutes();
//   var s = d.getSeconds();
//   var dd = "AM";
//   var h = hh;
//   if (h >= 12) {
//     h = hh - 12;
//     dd = "PM";
//   }
//   if (h == 0) {
//     h = 12;
//   }
//   m = m < 10 ? "0" + m : m;

//   s = s < 10 ? "0" + s : s;

//   /* if you want 2 digit hours:
//   h = h<10?"0"+h:h; */

//   var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);

//   var replacement = h + ":" + m;
//   /* if you want to add seconds
//   replacement += ":"+s;  */
//   replacement += " " + dd;

//   return date.replace(pattern, replacement);