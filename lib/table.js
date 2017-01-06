//Replacing Base64 input with an Oct number
function tab_in(a)
{
	pos = 0;
	e = 1; //Output can't start with the zero
	while (pos != a.length)
	{
		var c = a.charCodeAt(pos);

		if (c == 43) //The plus sign
		{
			d = 76;
		}

		if (c == 47) //The slash
		{
			d = 77;
		}

		if (countiny_rang(c, 65, 90)) //True means an uppercase letter
		{
			d = c - 39;
			//d = transfer(d,10,8); //Converting to the Oct number
		}

		if (countiny_rang(c, 97, 122)) //True means a lowercase letter
		{
			d = c - 97;
			//d = transfer(d,10,8); //Converting to the Oct number
		}

		if (countiny_rang(c, 48, 57)) //True means a number
		{
			d = c + 4;
			//d = transfer(d,10,8); //Converting to the Oct number
		}

		if (d.toString().length == 1)
		{
			d = '0' + d;
		}
		
		e = e.toString() + d.toString();
		pos++;
	}
	return e;
}
