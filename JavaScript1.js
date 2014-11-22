var theball = document.getElementById("ball");
var theButton = document.getElementById("buttonStart");

var startDribble = function () {
    theball.style.webkitAnimation = "toDribble 5s";
    theball.style.webkitAnimationTimingFunction = "linear";
    theball.style.webkitAnimationDirection = "alternate";
    theball.style.webkitAnimationIterationCount = "infinite";

};

/*מה שעשיתי כאן זה שאת האנימציה יצרתי בסי אס אס אבל 
רק כאשר לוחצים על הכפתור אז דרך הג'אוהסקריפט אני נותן את
התכונות של האנימציה לאלמנט עצמו כדי שיכיר בה.
הדגש כאן זה שגם פה צריך לכתוב את הוובקיט.*/
