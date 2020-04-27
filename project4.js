var runs;
window.onload = function(){
    runs = 0;
    $("box").observe("click", words);
}

function words(event){
    runs++
    var text1 = $("text1");
    var text2 = $("text2");
    var text3 = $("text3");
    var last = $("everything");

    if (runs ==1){
        text2.innerHTML = "Click here again";
    }

    else if ( runs == 2){
        text3.innerHTML = "Click here once more";
    }

    else if (runs == 3){
        text1.innerHTML = "Thank you";
        text2.innerHTML = " ";
        text3.innerHTML = " "; //clear text 2 and 3
    }

    else if (runs == 4){
        text1.innerHTML = "Goodbye";
    }

    else{
        last.innerHTML = " ";
    }

}