function stat(){
	
	length_out = document.formular.input.value.length;


	window.document.getElementById("statistics").innerHTML = "<strong>> Statistics and information<br><br></strong>"; //Header


	window.document.getElementById("statistics").innerHTML = window.document.getElementById("statistics").innerHTML + "> Input length: " + length_in + "<br>"; //Input length display


	window.document.getElementById("statistics").innerHTML = window.document.getElementById("statistics").innerHTML + "> Output length: " + length_out + " (" + Math.round(((length_out/length_in)*100)*100)/100 + " % of input length)<br>"; //Output length display (and percentage rounded to 2 places)


	window.document.getElementById("statistics").innerHTML = window.document.getElementById("statistics").innerHTML + "> Compression ratio: " + Math.round(((length_out/length_in)*8)*100)/100 + " bpb (bits per byte) <br>"; //Ratio value count and display (rounded to 2 places)
	

	window.document.getElementById("statistics").innerHTML = window.document.getElementById("statistics").innerHTML + "> First method realized: " + first_times + "&times; <br>"; //First char(s) in first method	


	window.document.getElementById("statistics").innerHTML = window.document.getElementById("statistics").innerHTML + "> Max digit(s) in first method:" + first_max_digit_infochars + "<br>"; //Max digit(s) in first method
	
	compressed = 'true'; //For frontend functions
		 }
			 
