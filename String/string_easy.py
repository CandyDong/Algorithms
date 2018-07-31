#############################################reverse string###################################
def reverseString(s):
	result = ""
	length = len(s)
	i = length-1

	while (i >= 0):
		result += s[i]
		i -= 1
	return result
#############################################reverse string###################################

#############################################reverse integer###################################
def reverse(x):
	minNum = -1 << 31;
    maxNum = (1 << 31) - 1;
    
    sign = (-1) if (x < 0) else 1;

    result = ''

    digit_list = list(str(abs(x)))
    

    for digit in list(reversed(digit_list)):
        result += digit

    resultInt = sign*int(result);
    
    if ((resultInt < minNum) or (resultInt > maxNum)): return 0;
    return resultInt;

#############################################reverse integer###################################