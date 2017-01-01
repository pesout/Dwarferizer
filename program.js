/*------------- AUTHOR -------------*/

/*
   STEPAN PESOUT
   www.pesout.eu
   stepan@pesout.eu
*/


/*-------- LIBRARIES LINKING --------*/ 

var bigint_ok = 0; document.write('<script src="lib/bigint.js"></script>');  //BigInt by Peter Olson [bigInt]
var transfer_ok = 0; document.write('<script src="lib/transfer.js"></script>');  //Numeral system transfer tool [transfer(tr_in, tr_in_r, tr_out_r)]
var first_method_ok = 0; document.write('<script src="lib/first_method.js"></script>'); //First method [first]
var table_ok = 0; document.write('<script src="lib/table.js"></script>'); //Replacing functions [tab_in/tab_out]
document.write('<script src="lib/statistics.js"></script>');  //Statistics displayer [stat]


/*------------- PROGRAM -------------*/

//Variables
var a = 0;
var b = 0;
var length_in = 0;
var length_out = 0;
var compressed = 0;

//Main function		
function compression() {
	length_in = document.formular.input.value.length; //For statistics
	a = document.formular.input.value;  //Replacing Base64 input with Oct number
	a = tab_in(a); // [lib/table.js]
	
	//Compression
	a = first(a); //First method		

	//Statistics displaying and ending
	document.formular.input.value = tab_out(a);	//Replacing Oct number with Base64 code 
	stat();	//Statistics displaying
}


