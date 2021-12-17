#!/bin/bash
X=0
Y=1
Z=`expr $X + $Y`
echo $Z
Z=`expr $X \* $Y`
echo $Z
Z=`expr $X / $Y`
echo $Z

Z=`expr $X \& $Y`
echo $Z

Z=`expr $X \| $Y`
echo $Z
