#!/bin/bash
count=1
for img in *.jpeg; do
  mv -- "$img" "image_${count}.jpeg"
  ((count++))
done

