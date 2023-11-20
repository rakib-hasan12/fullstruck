//step-1
document.getElementById('btn-widraw').addEventListener('click', function(){
    //step-2
    const widrawField=document.getElementById('widraw-field');
    const newwidrowAmountstring=widrawField.value;
    const newwidrowAmoun=parseFloat(newwidrowAmountstring);
    //step-7
    widrawField.value='';
    if(isNaN(newwidrowAmoun)){
        alert('provid valid number');
        return;
    }

    //step-3

    const widrawTotalElement=document.getElementById('widraw-total');
    const previouswidrawTotalstring=widrawTotalElement.innerText;
    const previouswidrawTotal=parseFloat(previouswidrawTotalstring);
    //step-4

 

    //step-5
    const ballenceTotalElement=document.getElementById('ballence-total');
    const previousBallanceTotalString=ballenceTotalElement.innerText;
    const previousBallanceTotal=parseFloat(previousBallanceTotalString);
    
    


    //step-6
    const newBallenceTotal=previousBallanceTotal-newwidrowAmoun;
    ballenceTotalElement.innerText=newBallenceTotal;

    if(newwidrowAmoun>previousBallanceTotal){
        alert('Taka nai');
        return;
    }
    //-------------------------------
    const currentWidrawTotal=previouswidrawTotal+newwidrowAmoun;
    widrawTotalElement.innerText=currentWidrawTotal;




})