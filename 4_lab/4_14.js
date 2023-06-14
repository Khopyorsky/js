week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
for (i in week) {
    if (i < 5) {
        document.write(week[i] + '<br>');
    } else {
        document.write('<b>' + week[i] + '</b><br>');
    }
}