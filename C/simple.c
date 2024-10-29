#include <stdio.h>
#include <stdlib.h>
//entry point function
void main(){

    // a variable whose value is stored on stack
    int count=50;
    char ch='M';
    printf("Welcome");
    printf("\n"); // to display the sectences on different lines
    printf("Welcome to my code \n");
    printf("%d \n", count);
    printf("%c \n", ch);

    //pointer always stores address of memory location
    int *ptrNumbers=malloc(10 * sizeof(int));
    for(int i=0;i<=9;i++)
    {
        ptrNumbers[i]=i*10; //store value into allocated memory at heap
    }

    for(int i=0;i<=9;i++)
    {
        printf("%d\n", ptrNumbers[i]);
    }
    free(ptrNumbers);
    printf("\nCode executed");

}