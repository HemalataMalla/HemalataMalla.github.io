function fun(){
	var x=document.getElementById("Home1");
	x.style.display="block";
	var y=document.getElementById("About1");
	y.style.display="none";
	var z=document.getElementById("Edu1");
	z.style.display="none";
	var a=document.getElementById("Works1");
	a.style.display="none";
	var b=document.getElementById("Cont1");
	b.style.display="none";
}

setInterval(function(){
      var dt=new Date();
      var dd=String(dt.getDate()).padStart(2,'0');
      var mm=String(dt.getMonth()+1).padStart(2,'0');
      var yyyy=dt.getFullYear();
      document.getElementById('date').innerHTML=dd+"-"+mm+"-"+yyyy;
      document.getElementById('time').innerHTML=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
 },1000)



function HomeFun(){
	var x=document.getElementById("Home1");
	x.style.display="block";
	var y=document.getElementById("About1");
	y.style.display="none";
	var z=document.getElementById("Edu1");
	z.style.display="none";
	var a=document.getElementById("Works1");
	a.style.display="none";
	var b=document.getElementById("Cont1");
	b.style.display="none";
	/*if(x.style.display==="none"){
		x.style.display="block";
	}
	else{
		x.style.display="none";
	}*/
}

function AboutFun(){
	var x=document.getElementById("About1");
	x.style.display="block";
	var y=document.getElementById("Home1");
	y.style.display="none";
	var z=document.getElementById("Edu1");
	z.style.display="none";
	var a=document.getElementById("Works1");
	a.style.display="none";
	var b=document.getElementById("Cont1");
	b.style.display="none";
}

function EduFun(){
	var x=document.getElementById("Edu1");
	x.style.display="block";
	var y=document.getElementById("Home1");
	y.style.display="none";
	var z=document.getElementById("About1");
	z.style.display="none";
	var a=document.getElementById("Works1");
	a.style.display="none";
	var b=document.getElementById("Cont1");
	b.style.display="none";
}

function WorksFun(){
	var x=document.getElementById("Works1");
	x.style.display="block";
	var y=document.getElementById("Home1");
	y.style.display="none";
	var z=document.getElementById("About1");
	z.style.display="none";
	var a=document.getElementById("Edu1");
	a.style.display="none";
	var b=document.getElementById("Cont1");
	b.style.display="none";
}

function ContFun(){
	var x=document.getElementById("Cont1");
	x.style.display="block";
	var y=document.getElementById("Home1");
	y.style.display="none";
	var z=document.getElementById("About1");
	z.style.display="none";
	var a=document.getElementById("Edu1");
	a.style.display="none";
	var b=document.getElementById("Works1");
	b.style.display="none";
}
