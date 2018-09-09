



var characters = ["akuma","dhalsim","guile","sagat","zangief","ken","ryu","honda"];

var i=0;
var a=0;
var r=0;
var x=15;
var characterguess = [];
var characterguess2=[];
var ran=  Math.floor(Math.random() * 5); 
var send = " ";
var i2 = 0;
var checkifwrong="";
var ran2=ran;
var char2= characters[ran2];
var mytext2=" ";
var mytext3="";
var s=0;
var att=10;
var winner = 0;
var send2 ="";
var char1= characters[ran];
var send3="";
var send4="";
var send5="";
var lost1=0;
var audio = new Audio("assets/images/sf.mp3");

var startover = function(){
    i=0;
    a=0;
    r=0;
    x=15;
    characterguess = [];
    characterguess2=[];
    ran=  Math.floor(Math.random() * 5); 
    
    i2 = 0;
    checkifwrong="";
    ran2=ran;
    char2= characters[ran2];
    mytext2=" ";
    mytext3="";
    s=0;
    att=10;
    console.log("random char is "+characters[ran]);
    send2="";
    char1=characters[ran];
}


var checkgif= function(){



}


//create spaces between random word letters
   

document.onkeyup = function(event) {


    
    
var userGuess = event.key;



console.log("random char is "+characters[ran]);
var mytext =" _";


        var myfunction= function(){
            for (i=0; i<char1.length; i++){
                characterguess.push(mytext);
                console.log(characterguess);
            }
            send=characterguess;
           var send2 = send.join(" ");
            letters.textContent=send2;
            a=1;
        }


        var checking = function (){
                i2=0;
                characterguess2=[];
                mytext3="";
               
                for(i2=0; i2<char2.length;i2++){
                    characterguess2.push(mytext2);

                    mytext3=char2.charAt(i2);
                    characterguess2.push(mytext3);
                
                }
                send3= characterguess2;
                var send4 = send3.join("");
                send5= letters.textContent;
                console.log("checking is:"+ send4);
                console.log("checking is:"+ send5);
                if(send5===send4){
                    alert("You won!");
                    winner++;
                    audio.play();
                    winning.textContent=("You have won: "+winner + " times")
                    ran=  Math.floor(Math.random() * 5); 
                    startover();
                    myfunction();
                    lose.textContent = ("You still have 10 attemps");
                    checkgif();
                    
                }

        }


        var loosing =function(){
            if(att<0){
                alert("You lost!");
                lost1++;
                lost.textContent=("You have lost " + lost1  + " times");
                startover();
                myfunction();
                console.log("att value is "+ att);
                lose.textContent = ("You have 10 attemps");
        
        
            }
        
        }



    if (a===0){          
    myfunction();
    
    }

    else{
    
        r=0;
        s=0;
        for (i=0;i<char1.length; i++){
            
            if(userGuess===char1.charAt(r) ){

                        a=2;
                        console.log("correct iteration # "+r);
                        characterguess[r]=(" "+userGuess);
                        console.log(characterguess);
                        r++;
                        var send2=send.join("");
                        letters.textContent=send2;
                        checking();

                        
            }
                 
                      
            else if(userGuess!=char1.charAt(r)){

                        var send2=send.join("");
                        letters.textContent=send2;
                        r++;
                        s++;       
                        console.log("is it wrong? "+ s)
                            if(s>=char1.length){
                                    att--;
                                    s=0;
                                    loosing();
                                    lose.textContent = ("You still have "+ att+" attemps");
                                   
                            }             
            }

                  
        }
        
    }  



}




