#include <stdio.h>
#include <iostream>
using namespace std;

int main()
{
    cout << "구구단 출력" <<endl;

    for ( int a = 2; a < 3; a++){
        for (int b = 1; b < 10; b++)
            cout <<a << "x" << b << "=" << a*b << endl;
    }

    return 0;
}
