var tr_in = 0; var transfer_input = 0;        //Transfer input
var tr_in_r = 0; var transfer_input_r = 0;    //Radix of numeral system of input
var tr_out = 0; var transfer_output = '';      //Transfer output
var tr_out_r = 0; var transfer_output_r = 0;  //Radix of numeral system of output
var repeat_length = 0; //Number of repeats considering the length of input
var char_pos = 0;
var char_pos_replace = 0;

transfer_ok = 1;

function transfer(transfer_input, transfer_input_r, transfer_output_r) {
	
	tr_in = transfer_input;
	tr_in_r = transfer_input_r;
	tr_out = transfer_output;
	tr_out_r = transfer_output_r;
	
	repeat_length = tr_in.length - 1; 
	
	
	
	while(repeat_length != -1)
	{
		char_pos_replace = tr_in.charAt(char_pos);
		
		//here will be replacing using char codes
		
		tr_out = bigInt(tr_out).plus(bigInt(char_pos_replace).times(bigInt(tr_in_r).pow(repeat_length))); //Example: 721(8) = 7*8^2 + 2*8^1 + 1*8^0
		char_pos++;
		repeat_length--;
	}
	
	tr_out = bigInt(tr_out).toString(tr_out_r);
	
	char_pos = 0;
	char_pos_replace = 0;
	tr_in = 0;
	tr_in_r = 0;
	tr_out_r = 0;
	transfer_input = 0;
	transfer_input_r = 0;
	transfer_output_r = 0;
	
	return tr_out;
	
}
