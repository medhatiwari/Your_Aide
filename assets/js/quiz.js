function check(){
    var ques1=document.quiz.ques1.value;
    var ques2=document.quiz.ques2.value;
    var ques3=document.quiz.ques3.value;
    var ques4=document.quiz.ques4.value;
    var ques5=document.quiz.ques5.value;
    var correct=0;
    if(ques1=="k"){
        correct++;
    }
    if(ques2=="1"){
        correct++;
    }
    if(ques3=="1"){
        correct++;
    }
    if(ques4=="1"){
        correct++;
    }
    if(ques5=="1"){
        correct++;
    }
    var messages=["Great Job!","That's just okay","You really need to do better"];
    var range;
    if(correct<2)
    {
        range=2;
    }
    if(correct>0 && correct <5)
    {
        range=1;
    }
    if(correct>2)
    {
        range=0;
    }

    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("message").innerHTML=messages[range];
    document.getElementById("number_correct").innerHTML="You got " + correct + " correct.";
}