4 layers of 1-1 char swapping, with 2 layers of char reducing
tracked by the EnSeal key provided

A represents ae - that means we need 95\*95 (9025) letter representations - can have a01a02a03a04 to represent the correspoding numbers

char swapping is a simple 95 char long code in the EnSeal ending with a .

char reducing will take a string of random numbers between 01 and 95, this number shifts the secondary char that many places on the object

aa with code 2 will mean a represents ac
the second reducing path will swap the letters so aa with 2 will be ca

OOO

INPUT STRING -> SWAP -> REDUCE -> SWAP -> SWAP -> REDUCE -> SWAP

EnSeal will be 95 . 190 . 95 . 95 . 190 . 95 . 123456-> 772 characters long but will be reusable

EnSeal format -> 123456.[red].[]
