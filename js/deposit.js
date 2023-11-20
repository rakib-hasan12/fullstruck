//============================= step-1=============================//
document.getElementById('btn-deposit').addEventListener('click',function(){
    console.log('clicked')
    const depositField=document.getElementById('deposit-field');
    const newdepositAmountstring=depositField.value;

    const newDepositAmount=parseFloat(newdepositAmountstring);
    //---------------------------------------------------------------------//
    const depositTotalElement=document.getElementById('deposit-total');
    



    const previousdepositTotalstring=depositTotalElement.innerText;

    const previousdepositTotal=parseFloat(previousdepositTotalstring);
    console.log(typeof previousdepositTotal)
    
    const currentdepositTotal=previousdepositTotal+newDepositAmount;




    depositTotalElement.innerText=currentdepositTotal;

    const ballenceTotalElement=document.getElementById('ballence-total');
    const previousBallanceTotalString=ballenceTotalElement.innerText;
    const previousBallanceTotal=parseFloat(previousBallanceTotalString);
    const currentBallencetotal=previousBallanceTotal+newDepositAmount;

    ballenceTotalElement.innerText=currentBallencetotal;


    depositField.value='';





})