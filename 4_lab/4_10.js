arr = [2, 5, 9, 15, 0, -4, 1];
for (i = 0, result = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}
alert(result);