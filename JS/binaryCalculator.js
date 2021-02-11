
	let x="";
	function fun0()
	{
	    x += "0";
    	document.getElementById("res").innerHTML=x;
	}

	function fun1()
	{
	    x += "1";
    	document.getElementById("res").innerHTML=x;
	}
	
	function func()
	{
		x = "";
    	document.getElementById("res").innerHTML=x;
	}
	function fune()
	{
			
		var len = x.length;
		var first="",sec="";
		var test = 0,sign;
		for(var i = 0; i<len; i++)
		{
			if((x[i]=='*' || x[i]=='/' || x[i]=='+' || x[i]=='-') && test == 0 )
			{
				sign = x[i];
				test = 1;
			}
			else
			{
				if(test==0)
				{
					first+=x[i];
				}
				else
					sec += x[i];
			}
		}

			//window.alert(first);
			var a = parseInt(first);
			var b = parseInt(sec);

			var ab =a,ba = b;
			var aa = parseInt(a, 2).toString(10);
			var bb = parseInt(b, 2).toString(10);
			
			a = parseInt(aa);
			b = parseInt(bb);

			//
			var ans;
			if(sign=='+')
			{
				function addBinar(a,b) {
				  let sum = a + b;
				  return (sum >>> 0).toString(2);
				}

				ans = addBinar(a,b) 
			}
			else if(sign =='-')
			{
				function addBinary(a,b) {
				  let sum = a + b;
				  return (sum >>> 0).toString(2);
				}

				ans = addBinary(a,b) 
			}
			else if(sign=='*')
			{
				var temp = a*b;
				ans = (temp >>> 0).toString(2);

			}
			else
			{
				ans = parseInt(ab/ba);	
			}
			//x = "";
			x = ans; 	

		
    	document.getElementById("res").innerHTML=ans;
	}


	function funplus()
	{
		x += "+";
    	document.getElementById("res").innerHTML=x;
	}
	function funmin()
	{
		x += "-";
    	document.getElementById("res").innerHTML=x;
	}
	function fundiv()
	{
		x += "/";
    	document.getElementById("res").innerHTML=x;
	}
	function funmul()
	{
		x += "*";
    	document.getElementById("res").innerHTML=x;
	}
