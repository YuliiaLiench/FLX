function formatTime(a) {
    var day = 0;
    var hour = 0;
    var minute = a;

    if (minute > 1439) {
        day = minute / 1440 >> 0; 
        minute = minute - (day * 1440);       
    }
    if (minute > 59) {
        hour = minute / 60 >> 0;
        minute = minute - (hour * 60);
    }
    return day + " day(s) " + hour + " hour(s) " + minute + " minute(s).";
}

formatTime(120);
formatTime(59); 
formatTime(3601); 