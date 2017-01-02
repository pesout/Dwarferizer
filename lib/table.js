var table_ok = 1;
var in_check = 0;

function IsInRange(c, min, max)
{
	return c <= max && c >= min;
}

//Replacing Base64 input with an Oct number
function tab_in(a)
{
	pos = 0;
	e = 1; //Output can't start with the zero
