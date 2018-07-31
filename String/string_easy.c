#include <string.h>
#include <stdio.h>
#include <stdlib.h>

////////////////////////////////////////REVERSE STRING////////////////////////////////////////////////
char* reverseString(char* s) {
	int length = 0;
	while (s[length] != '\0') {
		length++;
	}

	char* result =  calloc(length+1, sizeof(char));
	for (int i = 0; i < length; i++){
		result[i]= s[length-1-i];
	}
	result[length] = '\0'; //important!!!
	return result;
}

////////////////////////////////////////REVERSE STRING////////////////////////////////////////////////