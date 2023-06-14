week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
current_day = 'Среда';
for (i in week) {
    if (week[i] == current_day) {
        document.write('<i>' + week[i] + '</i><br>');
    } else {
        document.write(week[i] + '<br>');
    }
}