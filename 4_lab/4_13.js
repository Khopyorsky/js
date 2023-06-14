arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0, line = '-'; i < arr.length; i++) {
    line += String(arr[i]) + '-'
}
alert(line)