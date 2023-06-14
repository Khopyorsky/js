line = prompt('Введите 6-значное число');
first_half = Number(line[0]) + Number(line[1]) + Number(line[2]);
second_half = Number(line[3]) + Number(line[4]) + Number(line[5]);
if (first_half == second_half) {
    alert('Да');
} else {
    alert('Нет');
}