    //default data
    //let arr=[95, 180, 34, 119, 11, 123, 62, 64];
    let arr=[];
    let start;
    let maxtrk;    
    let slope = 1/9;
    let direction=1;
    let algo;
    let enterStart=1;
    //let x1=1,x2=4,x3=7;
    let align;
    let Sfcfs=[];
    let tfcfs,tsstf,tlrscan,tlrcscan,tlrlook,tlrclook,trlscan,trlcscan,trllook,trlclook;
    
    
document.getElementById('direction').onclick = () => {
    let currDirec=document.getElementById('direction').innerText;
    if(currDirec=="LEFT-to-RIGHT")
        document.getElementById('direction').innerText="RIGHT-to-LEFT";
    else
        document.getElementById('direction').innerText="LEFT-to-RIGHT";
    direction*=-1;    
}

var canvas = document.getElementById('chart');
var ctx = canvas.getContext("2d");

const getStart =(ev)=>{
    if(enterStart){
        
    ev.preventDefault();
    let input=document.getElementById('start').value;
    if(input!=""&&input<maxtrk)
    {
        enterStart=0;
        input=parseInt(input);
            start=input;
            document.getElementById('strt-no').innerText = start;
            document.getElementById('output-q').innerText="The Order of Request is : ";
            document.getElementById('output-q').innerText+=" "+input;
            document.getElementById('output-q2').innerText=input;
            //document.getElementById('start').value="";
            document.getElementById('start').disabled=true;
    }
    else{
        alert("Enter a valid Track Number or resize the range");
        document.getElementById('input-q').value="";
    }
    
    document.forms[0].reset();
    }
   
    clrcanvas(0);
    setCanvas();
}
document.getElementById('addStart').addEventListener('click',location.reload);
document.getElementById('addStart').addEventListener('click',getStart);

const getInput =(ev)=>{
    ev.preventDefault();
    let input=document.getElementById('input-q').value;
    if(input!="")
    {
        input=parseInt(input);
        if(input<maxtrk)
        {
            arr.push(input);
            document.getElementById('output-q').innerText+=","+input;
            document.getElementById('output-q2').innerText+=","+input;
            document.getElementById('input-q').value="";
        }    
        else
        {
            document.getElementById('input-q').value="";
            alert("Enter a valid Track Number or resize the range");
            
        }
    }
    document.forms[0].reset();
    
    clrcanvas(0);
    setCanvas();
}
document.getElementById('add').addEventListener('click',location.reload);
document.getElementById('add').addEventListener('click',getInput);

function checkInput(valu) {
    return valu == document.getElementById("input-q").value;
}

const delInput =(ev)=>{
    ev.preventDefault();
    let input=document.getElementById('input-q').value;
    if(input!="")
    {
        input=parseInt(input);
        if(arr.includes(input))
        {
            clrcanvas();
            let idx=arr.findIndex(checkInput);
            if(idx!=-1&&input!=start)
            {
            arr.splice(idx,1);
            document.getElementById('output-q').innerText="The Order of Request is : "+start;
            for(let i=0;i<arr.length;i++)
            document.getElementById('output-q').innerText+=","+arr[i];
            document.getElementById('input-q').value="";
            setCanvas();
            }
            
        }    
        else
        {
            document.getElementById('input-q').value="";
            alert("Enter a valid Track Number to delete");
            
        }
    }
    
    clrcanvas(0);
    setCanvas();
}
document.getElementById('delete').addEventListener('click',location.reload);
document.getElementById('delete').addEventListener('click',delInput);

function setCanvas() {
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(50,50);
ctx.lineTo(850-align,50);
ctx.strokeStyle = 'white';
ctx.moveTo(100,50);

ctx.font = "13px Arial";
ctx.fillStyle = "magenta";
ctx.fillText("0",50-2,40);
ctx.fillStyle = "white";
ctx.fillText("|",50-1,52);

ctx.fillStyle = "magenta";
ctx.fillText(start,(50 + align*start)-4,40);
ctx.fillStyle = "white";
ctx.fillText("|",(50 + align*start),52);

if(maxtrk-1<10)
        talign=1;
    else if(maxtrk-1<100)
        talign=4;
    else
        talign=7;

ctx.fillStyle = "magenta";
ctx.fillText(maxtrk-1,850-align-talign,40);
ctx.fillStyle = "white";
ctx.fillText("|",850-align,52);
ctx.stroke();

arr.forEach(element => {
    ctx.fillStyle = "magenta";
    if(element<10)
        ctx.fillText(element + " ",(50 + align*element)-1,40);
    else if(element<100)
        ctx.fillText(element + " ",(50 + align*element)-4,40);
    else
        ctx.fillText(element + " ",(50 + align*element)-7,40);
    ctx.fillStyle = "white";
    ctx.fillText("|",(50 + align*element),52);
});
}

function clrcanvas(y) {
    ctx.clearRect(0,y,canvas.clientWidth,(canvas.height));
}

document.getElementById('clear').addEventListener('click',()=>{
    ctx.clearRect(0,60,canvas.clientWidth,(canvas.height));
}) 

document.getElementById('maxts').onclick =()=>{
    document.getElementById('maxts').disabled=true;
    maxtrk=document.getElementById('maxts').value;
    maxtrk=parseInt(maxtrk);
    align = 800/maxtrk;
    setCanvas();
}

document.getElementById('reset-range').onclick =()=>{
    arr=[];
    start=NaN;
    document.getElementById('output-q').innerText="The Order of Request is NULL";
    document.getElementById('maxts').disabled=false;
    enterStart=1;
    document.getElementById('start').disabled=false;
    clrcanvas(0);
}

function closest(valu,sstf){
    for(let i=1;i<maxtrk;i++)
    {
        if(direction==-1)
        {
            if(arr.includes(valu+i)&&!sstf.includes(valu+i))
                return valu+i;
            if(arr.includes(valu-i)&&!sstf.includes(valu-i))
                return valu-i;
        }
        else 
        {
            if(arr.includes(valu-i)&&!sstf.includes(valu-i))
                return valu-i;
            if(arr.includes(valu+i)&&!sstf.includes(valu+i))
                return valu+i;
        
        }
        
    }
}

function printOP(prntans,colour,algo) {
    let ypos=70;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle=colour;
    ctx.moveTo((50+align*prntans[0]),70);
    ctx.arc(50+align*prntans[0],70,3,0,2*Math.PI);

    var highest=Number.NEGATIVE_INFINITY;
    var lowest=Number.POSITIVE_INFINITY;

    for(var i=0; i< prntans.length ; i++){
        if(prntans[i]>highest)
            highest=prntans[i];
        if(prntans[i]<lowest)
            lowest=prntans[i];
    }

    for(let i=0;i<prntans.length-1;i++){
        
        if(((prntans[i]==lowest && prntans[i+1]==highest)||(prntans[i]==highest&&prntans[i+1]==lowest))&&(algo==4||algo==6))
        {
            ypos+=0;
            ctx.lineTo(50+align*prntans[i+1],ypos);    
            ctx.arc(50+align*prntans[i+1],ypos,4,0,2*Math.PI);
            ctx.stroke();
            
        }
        else
        {
            ypos+=slope*align*Math.abs(prntans[i]-prntans[i+1]);
            ctx.lineTo(50+align*prntans[i+1],ypos);    
            ctx.arc(50+align*prntans[i+1],ypos,4,0,2*Math.PI);
            ctx.stroke(); 
        }
        
        
    }       
}

document.getElementById('fcfs').onclick = function fcfs() {
    
    document.getElementById('algo-type').innerText = "FCFS";
    let fcfs = [];
    fcfs[0]=start;
    for(i=0;i<arr.length;i++)
        {
            fcfs.push(arr[i]);
        }  
    algo=1;
    printOP(fcfs,'violet',algo);
}

document.getElementById('sstf').onclick = function sstf() {
    
    document.getElementById('algo-type').innerText = "SSTF";
    let sstf = [] ;
    sstf[0]=start;
    for(let i=0;i<arr.length;i++){
        
        sstf.push(closest(sstf[i],sstf));    
    }
    algo=2;
    printOP(sstf,'indigo',algo);
}

document.getElementById('scan').onclick = function scan(){
    
    document.getElementById('algo-type').innerText = "SCAN";
    let scan = [] ;
    scan[0]=start;
    if(direction==1){
        for(let j=scan[scan.length-1]; j>=0 ; j--){
        if(arr.includes(j) && !scan.includes(j)){
            scan.push(j);   
        }  
        else if(j==0)
            scan.push(j);       
        }     
        for(let j=scan[scan.length-1]; j<maxtrk ; j++){
        if(arr.includes(j) && !scan.includes(j)){
            scan.push(j);
        }            
        }
    }
    else
    {
        for(let j=scan[scan.length-1]; j<maxtrk ; j++){
            if(arr.includes(j) && !scan.includes(j)){
                scan.push(j);
            }            
            if(j==maxtrk-1)
                scan.push(j);
        }
        for(let j=scan[scan.length-1]; j>=0 ; j--){
            if(arr.includes(j) && !scan.includes(j)){
                scan.push(j);   
            }  
                      
        }     
    }
    algo=3;

    if((scan[scan.length-1]==0)&&!(arr.includes(0)))
        scan.pop();
    if((scan[scan.length-1-1]==maxtrk-1)&&!(arr.includes(maxtrk-1)))
        scan.pop();
    if((scan[scan.length-1]==maxtrk-1)&&!(arr.includes(maxtrk-1)))
            scan.pop();
    if((scan[scan.length-1-1]==0)&&!(arr.includes(0)))
            scan.pop();   
    
    printOP(scan,'blue',algo);
}

document.getElementById('cscan').onclick = function cscan(){
    
    document.getElementById('algo-type').innerText = "C-SCAN";
    let cscan = [] ;
    cscan[0]=start;
    if(direction==1){
        for(let j=cscan[cscan.length-1]; j>=0 ; j--){
            if(arr.includes(j) && !cscan.includes(j)){
                cscan.push(j);   
            }        
            if(j==0)
                cscan.push(j); 
        }     
        for(let j=maxtrk-1 ; j>cscan[0] ; j--){
            if(j==maxtrk-1)
                cscan.push(j);
            if(arr.includes(j) && !cscan.includes(j)){
                cscan.push(j);
            }            
        }
    } 
    else{
        for(let j=cscan[cscan.length-1]; j<maxtrk ; j++){
            if(arr.includes(j) && !cscan.includes(j)){
                cscan.push(j);   
            }        
            if(j==maxtrk-1)
                cscan.push(j); 
        }
        for(let j=0 ; j<cscan[0] ; j++){
            if(j==0)
                cscan.push(j);
            if(arr.includes(j) && !cscan.includes(j))
                cscan.push(j);
        }
    }
    algo=4;
    console.log(cscan);
    if((cscan[cscan.length-1]==0)&&!(arr.includes(0)))
        cscan.pop();
    if((cscan[cscan.length-1-1]==maxtrk-1)&&!(arr.includes(maxtrk-1)))
        cscan.pop();
    if((cscan[cscan.length-1]==maxtrk-1)&&!(arr.includes(maxtrk-1)))
            cscan.pop();
    if((cscan[cscan.length-1-1]==0)&&!(arr.includes(0)))
            cscan.pop();    
        if((cscan[cscan.length]==0)&&!(arr.includes(0)))
            cscan.pop();
        if((cscan[cscan.length-1]==maxtrk-1)&&!(arr.includes(maxtrk-1)))
            cscan.pop();
        if((cscan[cscan.length]==maxtrk-1)&&!(arr.includes(maxtrk-1)))
                cscan.pop();
        if((cscan[cscan.length-1]==0)&&!(arr.includes(0)))
                cscan.pop();        
    console.log(cscan);    
    printOP(cscan,'green',algo);
}

document.getElementById('look').onclick = function look(){ 
    
    document.getElementById('algo-type').innerText = "LOOK";
    let look = [] ;
    look[0]=start;
    if(direction==1){
        for(let j=look[look.length-1]; j>=0 ; j--){
            if(arr.includes(j) && !look.includes(j)){
                look.push(j);   
            }         
        }     
        for(let j=look[0]; j<maxtrk ; j++){
            if(arr.includes(j) && !look.includes(j)){
                look.push(j);
            }            
        }
    } 
    else{
        for(let j=look[0]; j<maxtrk ; j++){
            if(arr.includes(j) && !look.includes(j)){
                look.push(j);
            }            
        }
        for(let j=look[0]; j>=0 ; j--){
            if(arr.includes(j) && !look.includes(j)){
                look.push(j);   
            }         
        }

    }
    algo=5;
    printOP(look,'brown',algo);
}

document.getElementById('clook').onclick = function clook(){ 
    
    document.getElementById('algo-type').innerText = "C-LOOK";
    let clook = [] ;
    clook[0]=start;
    if(direction==1){
        for(let j=clook[clook.length-1]; j>=0 ; j--){
            if(arr.includes(j) && !clook.includes(j)){
                clook.push(j);   
            }         
        }     
        for(let j=199; j>clook[0] ; j--){
            if(arr.includes(j) && !clook.includes(j)){
                clook.push(j);
            }            
        }
    }
    else{
        for(let j=clook[0]; j<maxtrk ; j++){
            if(arr.includes(j) && !clook.includes(j)){
                clook.push(j);
            }            
        }
        for(let j=0; j<=clook[0] ; j++){
            if(arr.includes(j) && !clook.includes(j)){
                clook.push(j);   
            }         
        }
    }
    algo=6;
    printOP(clook,'orange',algo);
}

