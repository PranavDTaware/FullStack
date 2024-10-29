#include <stdio.h>
#include <stdbool.h>
#include "../include/declare.h"
#include "../include/point.h"
#include "../include/line.h"
#include "../include/circle.h"

//Entry point function 

void main()
{   
    //Primitive Data types
    short marks=12;     // 2 bytes(16 bits)
    int count=62;       // 4 bytes(32 bits)
    long result=26666;  // 8 bytes(64 bits)

    char ch='A';
    float pi=3.14f;
    double price=12.615466;
    long double number=3.1484446648;

    bool status=false;

   
    // user defined types : structure defined by stuct keyword
    struct Person person1={"Pranav", 23,5.9};

    struct Point pt1={32,56};
    struct Point pt2={132,156};

    struct Line l1={pt1,pt2};
    struct Circle c1={pt2, 12};

    printf("PI : %.3f\n", pi);
    printf("Character : %c\n", ch);

    printf("Name %s \n", person1.name);
    printf("Age %d \n", person1.age);
    printf("Height %.1f \n", person1.height);
}