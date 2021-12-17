#!/bin/bash

COMMAND=("ls" "pwd" "ps" "clear")
echo ${COMMAND[*]}
ELEMENT="123 456"

COMMAND+=($ELEMENT)
echo ${COMMAND[*]}

