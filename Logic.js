
function Logic(){
    C1.mousePressed(()=>{
       if(Q1.value()==="mercury"){
       gameState="Q2";
       Q1.hide();
       C1.hide();
       Yay.play();
       correct+=1;
       }else{
           wrong.play();
       }
    })

    C2.mousePressed(()=>{
        if(Q2.value()==="venus"){
        gameState="Q3";
        Q2.hide();
        C2.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }
     })

     C3.mousePressed(()=>{
        if(Q3.value()==="earth"){
        gameState="Q4";
        Q3.hide();
        C3.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }
     })

     C4.mousePressed(()=>{
        if(Q4.value()==="mars"){
        gameState="Q5";
        Q4.hide();
        C4.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }
     })

     C5.mousePressed(()=>{
        if(Q5.value()==="jupiter"){
        gameState="Q6";
        Q5.hide();
        C5.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }

     })

     C6.mousePressed(()=>{
        if(Q6.value()==="saturn"){
        gameState="Q7";
        Q6.hide();
        C6.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }
     })
     
     C7.mousePressed(()=>{
        if(Q7.value()==="uranus"){
        gameState="Q8";
        Q7.hide();
        C7.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }
     })

     C8.mousePressed(()=>{
        if(Q8.value()==="neptune"){
        gameState="Note7";
        Q8.hide();
        C8.hide();
        Yay.play();
        correct+=1;
        }else{
            wrong.play();
        }
     })
}