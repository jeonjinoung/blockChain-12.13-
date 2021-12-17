#!/bin/bash

$1="KyunBae"
$2="Park"
$@="KyunBae park"
$*="KyunBae park"






echo "File Name:$0"
echo "First Parameter:$1"
echo "Second Prameter:$2"
echo "Quoted Values:$@"
echo "Quoted Values:$*"
echo "Total Number of Parameters:$#"
