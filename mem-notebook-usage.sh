#!/bin/bash

dirLog="/home/eduardosportello/Área de Trabalho"
notebookFileLog="notebook-usage.log"
threshold=80.00
takePicture=$(ps -eo pid,cmd,user,pmem --sort=-pmem | head -n 16)
memUsage=$(free -mw | awk 'NR==2 {printf "%.2f", (($3/$2)*100)}')
calcFloating=$(bc <<< "$memUsage >= $threshold")
getTime=$(date +'%d/%m/%y %H:%M:%S')

if [[ "$calcFloating" -eq 1 ]]; then
    echo "$getTime [ALERT] - Notebook memory usage is high: $memUsage%" >> "$dirLog/$notebookFileLog"
    echo "########################### ALERT DETAILS ###########################" >> "$dirLog/$notebookFileLog"
    echo "" >> "$dirLog/$notebookFileLog"
    echo "$takePicture" >> "$dirLog/$notebookFileLog"
    echo "" >> "$dirLog/$notebookFileLog"
else
    echo "$getTime [INFO]  - Notebook memory usage is normal: $memUsage%" >> "$dirLog/$notebookFileLog"
fi