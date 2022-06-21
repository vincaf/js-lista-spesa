const listaDellaSpesa = [
    'Latte',
    'Burro',
    'Uova',
    'Pomodori',
    'Pasta',
    'Farina',
];

const listItem = document.getElementById('list-item');

let i = 0;

while ( i < listaDellaSpesa.length ){
    console.log(listaDellaSpesa[i]);
    const elementoSpesa = document.createElement('li');
    elementoSpesa.innerText = listaDellaSpesa[i];
    i++;

    listItem.append(elementoSpesa);
}