arr = [10, 5, 30, 600, 235, 3000]
for (i = 0; i < arr.length; i++) {
    if (String(arr[i])[0] == '1' || String(arr[i])[0] == '2' || String(arr[i])[0] == '5') {
        alert(arr[i]);
    }
}